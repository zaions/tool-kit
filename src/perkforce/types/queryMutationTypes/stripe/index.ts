// Enums
export enum CAPTURE_METHOD {
  AUTOMATIC = 'AUTOMATIC',
  MANUAL = 'MANUAL'
}

// Interface
export interface IStripeError {
  code?: string
  reason?: string
  requirement?: string
}

export interface IUserStripeData {
  accountId?: string
  disabled_reason?: string
  errors?: Array<IStripeError>
  enabled?: boolean
}

export interface ICreateAccountResult {
  url?: string
  success?: boolean
  message?: string
}
