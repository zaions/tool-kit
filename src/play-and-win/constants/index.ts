import { BalanceUpdateTypeEnum } from "../enums"

export const appServiceFee = (envs: any) => {
    return {
        gameRoom: {
            leaveFee: {
                amount: 0, // right now not subtracting anything when user leaves a room
                type: BalanceUpdateTypeEnum.exact,
            },
        },
        topup: {
            minTopupAmountAllowed: envs.isDevelopment ? 1 : 100, // this affects the requestTopup api request validation
        },
        withdraw: {
            minWithdrawAmountAllowed: envs.isDevelopment ? 1 : 1000, // this affects the createWithdrawRequest api request validation
        },
        transfer: {
            minTransferAmountAllowed: envs.isDevelopment ? 1 : 100, // this affects the createWithdrawRequest api request validation
        }
    }
}

export const fieldsLength = {
    gameRoom: {
        code: 8
    },
    transfer: {
        maxPlayerPhoneNumber: 100,
        minPlayerPhoneNumber: 13,
    }
} 
