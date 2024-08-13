export enum FormFieldsEnum {
    // Generic/Common Form Fields
    id = 'id',
    userId = 'userId',
    itemId = 'itemId',
    playerId = 'playerId',
    createdAt = 'createdAt',
    updatedAt = 'updatedAt',
    deletedAt = 'deletedAt',
    blockedAt = 'blockedAt',
    isActive = 'isActive',
    sortOrderNo = 'sortOrderNo',
    userData = 'userData', // logged in user data return key
    playerData = 'playerData', // player user data return key (used in topup requests)

    title = 'title',
    description = 'description',

    // User related Forms Fields Enum
    name = 'name',
    email = 'email',
    phoneNumber = 'phoneNumber',
    password = 'password',
    passwordConfirmation = 'passwordConfirmation',
    withdrawOptions = 'withdrawOptions',
    cnic = 'cnic',
    city = 'city',
    country = 'country',
    address = 'address',
    referredBy = 'referredBy',
    referralCode = 'referralCode',
    disabled = 'disabled',
    photoURL = 'photoURL',
    emailVerified = 'emailVerified',
    emailVerifiedAt = 'emailVerifiedAt',
    balance = 'balance',
    permissions = 'permissions',
    role = 'role',
    customClaims = 'customClaims',

    // Game related Forms Fields Enum
    maxPlayersAllowed = 'maxPlayersAllowed',
    feePerPlayer = 'feePerPlayer',
    serviceCharges = 'serviceCharges',
    image = 'image',
    minPlayersToStartGame = 'minPlayersToStartGame',

    // Game Room Fields
    isPrivate = 'isPrivate',
    roomCode = 'roomCode',
    status = 'status',
    gameId = 'gameId',
    gameData = 'gameData',
    gameRoomPlayerIds = 'gameRoomPlayerIds',
    gameRoomPlayersData = 'gameRoomPlayersData',
    gameRoomWillStartAt = 'gameRoomWillStartAt', // count down timer to show, when the game room with start the game
    gameRoomStartedAt = 'gameRoomStartedAt', // we will use this to show a timer (count down) timer to players to join the actual game, once engager has started the game.
    gameRoomWinnerPlayerId = 'gameRoomWinnerPlayerId',
    gameRoomResultScreenShot = 'gameRoomResultScreenShot',

    // Top ups
    amount = 'amount',
    agentRemarks = 'agentRemarks',
    transferMethod = 'transferMethod',
    receptScreenshot = 'receptScreenshot',
    transactionId = 'transactionId',

    // Transaction Fields
    // use itemId to store topup/withdraw/transfer request ID
    balanceBefore = 'balanceBefore',
    balanceAfter = 'balanceAfter',
    type = 'type',
    adminUserId = 'adminUserId',

    // Transfer Coins
    playerPhoneNumber = 'playerPhoneNumber',

    // generic
    queryKeyValue = 'queryKeyValue',
    queryKeyType = 'queryKeyType',
    nextPageToken = 'nextPageToken',
}