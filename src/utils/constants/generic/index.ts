/**
 * Constant object defining configurations related to API requests.
 */
export const apiConstants = {
	authorizationTokenType: {
		bearer: 'Bearer',
	},
} as const;

export const defaultValue = {
	fallbackValue: '---'
}

export const dayjs = {
	formate: 'DD-MM-YYYY HH:mm A'
}

export const dateFormat = {
	ISODateTimeFormate: "YYYY-MM-DDTHH:mm",
	fullDateWithTime12Hour: 'MMMM D, h:mm a',
	compactDateTimeWithAMPM: 'DD-MM-YYYY HH:mm A',
	compactDateWithMonthAbbr: 'DD-MMM-YYYY'
}

export const urlParams = {
	googleMapsApiKey: '{{googleMapsApiKey}}',
} as const;

export const timeUnitType = {
	MINUTES: 'minutes'
} as const

export const urlTarget = {
	blank: '_blank'
} as const