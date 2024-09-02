import { FormFieldsEnum } from "@enums/formFieldsEnum";


// Interfaces
export interface IGame {
    [FormFieldsEnum.id]?: string,
    [FormFieldsEnum.title]?: string,
    [FormFieldsEnum.description]?: string,
    [FormFieldsEnum.maxPlayersAllowed]?: number,
    [FormFieldsEnum.minPlayersToStartGame]?: number,
    [FormFieldsEnum.feePerPlayer]?: number,
    [FormFieldsEnum.serviceCharges]?: number,
    [FormFieldsEnum.image]?: string,

    // frontend only
    imageFile?: File | null
}
