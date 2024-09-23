import { allowedImageTypes, svgIconTypes, TRUNCATE_TEXT_LENGTH_SMALL } from "../constants"
import { INTEGRATION_STATE, USER_TYPE } from "../enums"
import { IInvite } from "../types/queryMutationTypes/invites"
import { Loc } from "../types/queryMutationTypes/profile"
import { IUser } from "../types/queryMutationTypes/user"

export const imageTypeAllowed = (file: any) => {
    return allowedImageTypes.includes(file?.type?.toLowerCase())
}

// check if given object contains key/value pairs or empty
export const isObject = (obj: unknown, checkKeys = true) => {
    const typeIsObject =
        typeof obj === 'object' && obj != null && typeof obj !== 'undefined'
    if (!checkKeys) return typeIsObject
    else return typeIsObject && !!Object.keys(obj).length
}

export const isArray = (arr: unknown, checkLength = false) => {
    const typeIsArray = isObject(arr, false) && Array.isArray(arr)
    if (!checkLength) return typeIsArray
    else return typeIsArray && !!arr.length
}

export const customRequest = ({
    file,
    onSuccess
}: {
    file?: any
    onSuccess?: (body: any, xhr?: XMLHttpRequest) => void
}) => {
    setTimeout(() => {
        onSuccess && onSuccess('ok')
    }, 0)
}

export const getSortOrderByField = (field: string, obj: any) => {
    return isObject(obj) && obj.field === field && obj.order
}

export const setFilters = (filter: Record<string, unknown>) => {
    if (!isObject(filter)) return {}

    const result: Record<string, unknown> = {}

    for (const key in filter) {
        result.field = key
        result.values = filter[key]
    }

    return isArray(result.values) ? result : {}
}

export const getActiveFilters = (field: string, filter: Record<string, unknown>) => {
    if (isObject(filter) && filter.field === field) {
        return filter.values
    }

    return []
}

export const isValidUrl = (url: string) => {
    const re = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+#]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+#=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
        'i'
    ) // fragment locator
    return re.test(url)
}

export const containSpecialCharacters = (text: string) => {
    const re = /[^A-Za-z0-9&,'"”“’‘\-(){} ]+/
    return re.test(text)
}

export const generateSlug = (text: String) => {
    const result =
        text &&
        text
            .toLowerCase()
            .replace(/&+/g, 'and')
            .replace(/(){}/g, '')
            .replace(/,/g, '')
            .replace(/'/g, '')
            .replace(/"/g, '')
            .replace(/”/g, '')
            .replace(/“/g, '')
            .replace(/’/g, '')
            .replace(/‘/g, '')
            .replace(/[^\w ]+/g, ' ')
            .replace(/\s{2,}/g, ' ')
            .trim()
            .replace(/ +/g, '-')
    return result
}

export const getImageBase64Url = (file: any) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
    })
}

export const showPause = (invite?: IInvite, user?: IUser) => {
    if (!isObject(invite) || !isObject(user)) return

    if (user?.type === USER_TYPE.employee) {
        if (
            (invite?.toPaused &&
                user?.employerId?._id ===
                invite?.to?._id) ||
            (invite?.fromPaused &&
                invite?.from?._id ===
                user?.employerId?._id)
        ) {
            return false
        }
    }

    // if receiver paused it
    if (invite?.toPaused) {
        // and current user is the receiver
        if (invite?.to?._id === user?._id) {
            // do not show pause action
            return false
        }
    }

    // if sender paused it
    if (invite?.fromPaused) {
        // and current user is the sender
        if (invite?.from?._id === user?._id) {
            // do not show pause action
            return false
        }
    }

    // show pause action
    return true
}

export const showResume = (invite?: IInvite, user?: IUser) => {
    if (!isObject(invite) || !isObject(user)) return

    if (user?.type === USER_TYPE.employee) {
        if (
            (invite?.toPaused &&
                user?.employerId?._id ===
                invite?.to?._id) ||
            (invite?.fromPaused &&
                invite?.from?._id ===
                user?.employerId?._id)
        ) {
            return true
        }
    } else {
        if (
            (invite?.toPaused && user?._id === invite?.to?._id) ||
            (invite?.fromPaused && user?._id === invite?.from?._id)
        ) {
            return true
        }
    }

    return false
}

export const containQueryParams = (url: string) => {
    const queryParams = ['?', '&', '#']
    return url && queryParams.some(param => url.includes(param))
}

export const getCompanyText = (userData: IUser) => {
    if (userData?.type === USER_TYPE.merchant)
        return 'Business'
    if (userData?.type === USER_TYPE.student_body)
        return 'College'
    if (userData?.type === USER_TYPE.employer)
        return 'Company'

    if (
        userData?.type === USER_TYPE.employee &&
        isObject(userData?.employerId, true)
    ) {
        if (
            userData?.employerId?.type === USER_TYPE.employer ||
            userData?.employerId?.type === USER_TYPE.merchant ||
            (userData?.employerId?.type === USER_TYPE.student_body &&
                userData?.isSuperUser)
        )
            return 'Member of staff'
        return 'Student'
    } else {
        return 'Company'
    }
}

export const isEqual = (x: any, y: any) => {
    if (x === y) return true
    // if both x and y are null or undefined and exactly the same

    if (!(x instanceof Object) || !(y instanceof Object)) return false
    // if they are not strictly equal, they both need to be Objects

    if (x.constructor !== y.constructor) return false
    // they must have the exact same prototype chain, the closest we can do is
    // test there constructor.

    for (const p in x) {
        if (!Object.hasOwnProperty.call(x, p)) continue
        // other properties were tested using x.constructor === y.constructor

        if (!Object.hasOwnProperty.call(y, p)) return false
        // allows to compare x[p] and y[p] when set to undefined

        if (x[p] === y[p]) continue
        // if they have the same strict value or identity then they are equal

        if (typeof x[p] !== 'object') return false
        // Numbers, Strings, Functions, Booleans must be strictly equal

        if (!isEqual(x[p], y[p])) return false
        // Objects and Arrays must be tested recursively
    }

    for (const p in y) {
        if (Object.hasOwnProperty.call(y, p) && !Object.hasOwnProperty.call(x, p)) {
            return false
        }
    }
    // allows x[p] to be set to undefined

    return true
}

export const toRad = (Value: number) => {
    return (Value * Math.PI) / 180
}

// calculate distance
export const calcCrow = (
    lat1: number,
    lng1: number,
    lat2: number,
    lng2: number
) => {
    const R = 6371 // km
    const dLat = toRad(lat2 - lat1)
    const dLon = toRad(lng2 - lng1)
    lat1 = toRad(lat1)
    lat2 = toRad(lat2)

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const d = R * c
    return d
}

export const distanceBusiness = (loc?: Array<Loc>, curr?: Loc) => {
    const location: Array<number> = []
    isArray(loc) &&
        loc?.forEach(_loc => {
            const distance = calcCrow(
                curr?.lat ?? 0,
                curr?.lng ?? 0,
                _loc?.lat ? _loc?.lat : 0,
                _loc?.lng ? _loc?.lng : 0
            )
            location.push(distance)
        })
    location.sort((a: number, b: number) => {
        return a - b
    })
    return isArray(location) && location[0]
}

export const truncateString = (
    text: string,
    length = TRUNCATE_TEXT_LENGTH_SMALL
) => {
    if (!text) return ''
    return text && text.length > length ? `${text.slice(0, length - 3)}...` : text
}

export const detectDeviceAndViewMode = () => {
    const match = /WebKit\/([0-9]+)|$/.exec(navigator.appVersion)
    const webkitVer = match ? parseInt(match[1], 10) : 0 // also matches AppleWebKit
    const isGoogle = webkitVer && navigator.vendor.indexOf('Google') === 0 // Also true for Opera Mobile and maybe others
    const isAndroid = isGoogle && navigator.userAgent.indexOf('Android') > 0 // Careful - Firefox and Windows Mobile also have Android in user agent
    const androidDesktopMode =
        !isAndroid &&
        isGoogle &&
        navigator.platform.indexOf('Linux') === 0 &&
        'ontouchstart' in document.documentElement

    return { webkitVer, isGoogle, isAndroid, androidDesktopMode }
}

export const isMerchantEmployee = (user: IUser) => {
    return (
        isObject(user?.employerId) &&
        user?.employerId?.type === USER_TYPE.merchant
    )
}

export const checkEqualityOfTwoArray = (arrOne: Array<unknown>, arrTwo: Array<unknown>) => {
    const result = arrOne.every(element => {
        return arrTwo.includes(element)
    })
    return result
}

export const getObjectKey = (
    obj: any,
    key: string,
    defaultValue: any = null,
    checkNull: boolean = true
) => {
    if (checkIfKeyExists(obj, key, checkNull)) {
        return obj[key]
    } else {
        return defaultValue
    }
}

export const checkIfKeyExists = (
    obj: Record<string, unknown>,
    key: string,
    checkNull = false
) => {
    if (
        isObject(obj, true) &&
        Object.hasOwnProperty.call(obj, key) &&
        obj[key] !== undefined
    ) {
        return checkNull ? obj[key] !== null : true
    }
    return false
}

export const benefitCategoryIconTypeAllowed = (file: any, type = 'svg') => {
    if (type === 'svg') {
        return svgIconTypes.includes(file.type.toLowerCase())
    } else if (type === 'other') {
        return allowedImageTypes.includes(file.type.toLowerCase())
    }
    return false
}

export const getImageAspectRatio = (width: number, height: number) => {
    // return type (aspect ratio with [width, height] [1,1])
    if (width === height) {
        return [1, 1]
    } else if (width > height) {
        return [Math.round(width / height), Math.round(height / height)]
    } else if (width < height) {
        return [Math.round(width / width), Math.round(height / width)]
    } else {
        return null
    }
}

export const checkVariableType = (val: unknown, type = 'string') => {
    switch (type) {
        case 'string':
            return typeof val === 'string' && typeof val !== 'undefined'
        case 'number':
            return typeof val === 'number' && typeof val !== 'undefined'
        case 'boolean':
            return typeof val === 'boolean' && typeof val !== 'undefined'
        case 'object':
            return isObject(val, true)
        case 'array':
            return isArray(val, true)
        case 'function':
            return typeof val === 'function' && typeof val !== 'undefined'
        case 'undefined':
            return typeof val === 'undefined'
        default:
            return false
    }
}

export const isStringVariable = (val?: unknown) => {
    return checkVariableType(val, 'string')
}

export const isFunction = (val: unknown) => {
    return checkVariableType(val, 'function')
}

export const isValidEmail = (email: string) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return email && re.test(String(email).toLowerCase())
}

export const convertToTitleCase = (s: string) => {
    return isStringVariable(s)
        ? s.replace(/^_*(.)|_+(.)/g, (_, a, b) => {
            return a ? a.toUpperCase() : ' ' + b.toUpperCase()
        })
        : s
}

export const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0,
            v = c === 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
    })
}

export const getOpacityForNotificationsHistory = (total: number, i: number) => {
    let opacity

    if (total === 1) opacity = 1

    if (total === 2) {
        if (i === 2) opacity = 0.7
    }

    if (total === 3) {
        if (i === 2) opacity = 0.7
        if (i === 3) opacity = 0.5
    }

    if (total === 4) {
        if (i === 2) opacity = 0.7
        if (i === 3) opacity = 0.5
        if (i === 4) opacity = 0.3
    }

    if (total === 5) {
        if (i === 2) opacity = 0.7
        if (i === 3) opacity = 0.5
        if (i === 4) opacity = 0.3
        if (i === 5) opacity = 0.15
    }

    return opacity
}

export const checkIntegrationIsAllowedAndItsState = (userData: IUser) => {
    const userType = getObjectKey(userData, 'type')
    const isEmployee = userType === USER_TYPE.employee
    const isSuperUserEmployee =
        isEmployee && getObjectKey(userData, 'isSuperUser')
    const isSimpleEmployee = isEmployee && !isSuperUserEmployee

    // Check if integrations are allowed
    let msTeamsIntegrationIsAllowed = getObjectKey(
        userData,
        'allowMSTeamsConnection',
        false
    )
    let slackIntegrationIsAllowed = getObjectKey(userData, 'allowSlackConnection')
    let stripeIntegrationIsAllowed = getObjectKey(
        userData,
        'allowStripeConnection'
    )

    if (isSuperUserEmployee) {
        const orgOwnerUser = getObjectKey(userData, 'employerId')
        msTeamsIntegrationIsAllowed = getObjectKey(
            orgOwnerUser,
            'allowMSTeamsConnection'
        )
        slackIntegrationIsAllowed = getObjectKey(
            orgOwnerUser,
            'allowSlackConnection'
        )
        stripeIntegrationIsAllowed = getObjectKey(
            orgOwnerUser,
            'allowStripeConnection'
        )
    } else if (isSimpleEmployee) {
        msTeamsIntegrationIsAllowed = false
        slackIntegrationIsAllowed = false
        stripeIntegrationIsAllowed = false
    }

    // Check integrations connection status
    const msTeamsIsConnected = getObjectKey(userData, 'msTeamsConDetails') != null
    const slackIsConnected =
        getObjectKey(
            getObjectKey(userData, 'slackConnectionDetails'),
            'app_id',
            null
        ) != null

    const slackIntegrationIsEnabled =
        userData?.slackIntegrationState &&
        userData?.slackIntegrationState === INTEGRATION_STATE.ENABLED
    const microsoftTeamsIntegrationIsEnabled =
        userData?.microsoftTeamsIntegrationState &&
        userData?.microsoftTeamsIntegrationState === INTEGRATION_STATE.ENABLED

    const userCanSendSlackNotifications =
        slackIntegrationIsEnabled && slackIsConnected
    const userCanSendMSTeamsNotifications =
        msTeamsIsConnected && microsoftTeamsIntegrationIsEnabled

    return {
        msTeamsIntegrationIsAllowed,
        msTeamsIsConnected,
        slackIntegrationIsAllowed,
        slackIsConnected,
        stripeIntegrationIsAllowed,
        slackIntegrationIsEnabled,
        microsoftTeamsIntegrationIsEnabled,
        userCanSendSlackNotifications,
        userCanSendMSTeamsNotifications
    }
}
