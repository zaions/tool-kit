import { FormFieldsEnum } from '@app-enums/formFieldsEnum';
import { BooleanEnum, QueryKeyTypeEnum } from '@app-enums/generic';
import { GameRoomStatusEnum } from 'src/play-and-win/enums';
import { IDefaultDBColumns } from 'src/types/genericTypes';
import { IGameRoomFormData } from '../formInputDataTypes';
import { IGame } from '../game';
import { IUser } from '../user';

// Interface
export interface IGameRoom
  extends IGameRoomFormData,
    Partial<IDefaultDBColumns> {
  [FormFieldsEnum.status]?: GameRoomStatusEnum;
  [FormFieldsEnum.firstPlayerGameRoomJoinedAt]: string | number;
  [FormFieldsEnum.gameRoomWillStartAt]?: string | number;
  [FormFieldsEnum.playerJoinCutoffTime]?: string | number;
  [FormFieldsEnum.engagerStartedTheActualGameAt]?: string | number;
  [FormFieldsEnum.gameRoomPlayerIds]?: Array<string>;
  [FormFieldsEnum.gameRoomWinnerPlayerId]?: string;
  [FormFieldsEnum.gameRoomResultScreenShot]?: string;
  [FormFieldsEnum.gameRoomPlayersData]?: Array<Partial<IUser>>;
  [FormFieldsEnum.isActive]?: BooleanEnum;
  [FormFieldsEnum.gameData]?: Partial<IGame>; // we will store the required field when we create the room directly in room object for later reference
  [FormFieldsEnum.engagerReleasedGameRoomAt]?: string | number;
  [FormFieldsEnum.engagerDeclaredGameRoomWinnerAt]?: string | number;

  // Frontend only
  [FormFieldsEnum.gameTitle]?: string;
}

export interface IGameRoomSearchReqInputData {
  [FormFieldsEnum.queryKeyValue]: string;
  [FormFieldsEnum.queryKeyType]: QueryKeyTypeEnum;
}
