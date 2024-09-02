import { FormFieldsEnum } from "@enums/formFieldsEnum"
import { GameRoomStatusEnum } from "src/play-and-win/enums"
import { IGame } from "../game"
import { IUser } from "../user"

// Interface
export interface IGameRoom {
    [FormFieldsEnum.id]?: string
    [FormFieldsEnum.gameId]?: string
    [FormFieldsEnum.userId]?: string
    [FormFieldsEnum.gameData]?: IGame
    [FormFieldsEnum.title]?: string
    [FormFieldsEnum.description]?: string
    [FormFieldsEnum.roomCode]?: string
    [FormFieldsEnum.status]?: GameRoomStatusEnum
    [FormFieldsEnum.isPrivate]?: boolean
    [FormFieldsEnum.isActive]?: boolean
    [FormFieldsEnum.createdAt]?: string
    [FormFieldsEnum.updatedAt]?: string
    [FormFieldsEnum.deletedAt]?: string
    [FormFieldsEnum.gameRoomPlayerIds]?: Array<string>
    [FormFieldsEnum.gameRoomPlayersData]?: Array<IUser>
    [FormFieldsEnum.gameRoomWillStartAt]?: string

    // Frontend only
    gameTitle?: string
}
