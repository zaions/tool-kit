import { Loc } from "../queryMutationTypes/profile"


export interface LocationChangeI {
    location?: Loc
    label?: any
}

export interface LocationAutoCompleteI {
    index?: string
    disabled?: boolean
    placeholder?: string
    onChange?: (props: LocationChangeI) => void
}