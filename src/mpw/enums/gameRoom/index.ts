export enum GameRoomStatusEnum {
    waitingForPlayers = 1,
    inProgress = 2,
    waitingForResult = 3,
    completed = 4,
    waitingForEngager = 5, // once required players have entered the room and are waiting for the engager, to start the game
    released = 6, // when the required players were not able to join the game room in time and engager released the game room
}
