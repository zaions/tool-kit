import { GameRoomStatusEnum } from "../../enums/gameRoom/index";

export const gameRoomUpdateStatusEnumVal = [
    GameRoomStatusEnum.released,
    GameRoomStatusEnum.inProgress,
    GameRoomStatusEnum.completed,
] as const;
