import { FormFieldsEnum } from "@enums/formFieldsEnum"
import { QueryKeyTypeEnum } from "@enums/generic"
import { GameRoomStatusEnum } from "src/play-and-win/enums"
import { IDefaultDBColumns } from "src/types/genericTypes"
import { IGameFormData } from "../formInputDataTypes"
import { IGame } from "../game"
import { IUser } from "../user"

// Interface
export interface IGameRoom extends IGameFormData, Partial<IDefaultDBColumns> {
    [FormFieldsEnum.roomCode]?: string
    [FormFieldsEnum.status]?: GameRoomStatusEnum
    [FormFieldsEnum.gameRoomStartedAt]: string | number;
    [FormFieldsEnum.gameRoomWillStartAt]: string | number;
    [FormFieldsEnum.gameRoomPlayerIds]?: Array<string>
    [FormFieldsEnum.gameRoomWinnerPlayerId]?: string;
    [FormFieldsEnum.gameRoomResultScreenShot]?: string;
    [FormFieldsEnum.gameRoomPlayersData]?: Array<Partial<IUser>>
    [FormFieldsEnum.isActive]?: boolean
    [FormFieldsEnum.gameData]?: Partial<
        Pick<
            IGame,
            | FormFieldsEnum.id
            | FormFieldsEnum.title
            | FormFieldsEnum.feePerPlayer
            | FormFieldsEnum.serviceCharges
            | FormFieldsEnum.maxPlayersAllowed
        >
    >; // we will store the required field when we create the room directly in room object for later reference

    // Frontend only
    gameTitle?: string
}

export interface IGameRoomSearchReqInputData {
    [FormFieldsEnum.queryKeyValue]: string;
    [FormFieldsEnum.queryKeyType]: QueryKeyTypeEnum;
}
