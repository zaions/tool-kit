import { checkForDuplicateEnumValues } from '@utils/helpers/generic';

export enum FormFieldsEnum {
  // Generic/Common Form Fields
  id = 'id',
  userId = 'userId',
  itemId = 'itemId',
  playerId = 'playerId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  deletedAt = 'deletedAt',
  blockedAt = 'blockedAt', // instead we will get "block | unblock" from frontend and based on that we will set or reset this blockedAt time for respective DB/Auth item/User
  sortOrderNo = 'sortOrderNo',
  userData = 'userData', // logged in user data return key
  playerData = 'playerData', // player user data return key (used in topup requests)
  otherPlayerId = 'otherPlayerId',
  otherPlayerData = 'otherPlayerData',
  isActive = 'isActive',
  extraData = 'extraData',
  title = 'title',
  description = 'description',
  isBlocked = 'isBlocked',
  actions = 'actions',
  imageFile = 'imageFile',
  searchText = 'searchText',
  iconFile = 'iconFile',
  gameTitle = 'gameTitle',
  receptScreenshotFile = 'receptScreenshotFile',

  // User related Forms Fields Enum
  firstName = 'firstName',
  lastName = 'lastName',
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
  age = 'age',
  gender = 'gender',
  constellation = 'constellation',
  hometown = 'hometown',
  language = 'language',
  profileCompletePercentageNumber = 'profileCompletePercentageNumber',
  birthdayDate = 'birthdayDate',
  aboutMe = 'aboutMe',
  hobbies = 'hobbies',
  lifeStyle = 'lifeStyle',
  music = 'music',
  movies = 'movies',
  travel = 'travel',
  books = 'books',
  gym = 'gym',
  food = 'food',
  cleanliness = 'cleanliness',
  smoke = 'smoke',
  pets = 'pets',
  guests = 'guests',
  occupation = 'occupation',
  foodPreference = 'foodPreference',
  workSchedule = 'workSchedule',
  overnightGuests = 'overnightGuests',
  getUpTime = 'getUpTime',
  goToBedTime = 'goToBedTime',
  roomPreference = 'roomPreference',
  roommatePreference = 'roommatePreference',
  whereWantToLive = 'whereWantToLive',
  moveInDate = 'moveInDate',
  budget = 'budget',
  placePreference = 'placePreference',
  buildingType = 'buildingType',
  other = 'other',
  min = 'min',
  max = 'max',
  verificationCode = 'verificationCode',

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
  playerJoinCutoffTime = 'playerJoinCutoffTime',

  // this is store the time when first player join the game, in this store time we will add the time (in minutes) that store in 'timerForEngagerToStartActualGameInMinutes' to show the first timer, the timer for engager to start or release game if this timer is expired then engager can not start (start button will get disable) the game release option will be enable.
  firstPlayerGameRoomJoinedAt = 'firstPlayerGameRoomJoinedAt',

  // when engager started the game this will store the time in which the game started and in this store time we will add the time (in minutes) that store in 'timerForPlayersToJoinActualGameInMinutes' to show the second timer, the timer for players to oin game room for last time after this timer got expire no player can join the game
  engagerStartedTheActualGameAt = 'engagerStartedTheActualGameAt',

  gameRoomWinnerPlayerId = 'gameRoomWinnerPlayerId',
  gameRoomResultScreenShot = 'gameRoomResultScreenShot',
  timerForEngagerToStartActualGameInMinutes = 'timerForEngagerToStartActualGameInMinutes',
  timerForPlayersToJoinActualGameInMinutes = 'timerForPlayersToJoinActualGameInMinutes',
  actualGameInfo = 'actualGameInfo',
  engagerReleasedGameRoomAt = 'engagerReleasedGameRoomAt',
  engagerDeclaredGameRoomWinnerAt = 'engagerDeclaredGameRoomWinnerAt',

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
  otherPlayerPhoneNumber = 'otherPlayerPhoneNumber',
  userRemarks = 'userRemarks',

  // generic
  queryKeyValue = 'queryKeyValue',
  queryKeyType = 'queryKeyType',
  nextPageToken = 'nextPageToken',

  // testing
  apiKey1 = 'v89h249v2--c--3-3-3-f-ff-fff-f-f-f-f-ff-f-igh872gv23g97293', // it's okay to leave it here, as the value we are checking against it is stored in our project.

  // AppUserLog
  totalTopupCoins = 'totalTopupCoins',
  totalWithdrawCoins = 'totalWithdrawCoins',
  totalWonCoins = 'totalWonCoins',
  totalTransferredCoins = 'totalTransferredCoins',
  totalReceivedCoins = 'totalReceivedCoins',
  totalLostCoins = 'totalLostCoins',
  totalGamesPlayed = 'totalGamesPlayed',
  totalGamesLeft = 'totalGamesLeft',
  totalGamesWon = 'totalGamesWon',
  totalGamesLost = 'totalGamesLost',
  gameWinStreak = 'gameWinStreak',
  gameLostStreak = 'gameLostStreak',
  lastGamePlayedAt = 'lastGamePlayedAt',
  lastGameLeftAt = 'lastGameLeftAt',
  lastGameWonAt = 'lastGameWonAt',
  lastGameLostAt = 'lastGameLostAt',
  totalGameRoomReleasedForThisPlayer = 'totalGameRoomReleasedForThisPlayer',
  lastGameRoomReleasedForThisPlayerAt = 'lastGameRoomReleasedForThisPlayerAt',
  totalGameRoomReleasedByThisAdminUser = 'totalGameRoomReleasedByThisAdminUser',
  lastGameRoomReleasedByThisAdminUserAt = 'lastGameRoomReleasedByThisAdminUserAt',

  // InApp Notifications
  icon = 'icon',
  sendAt = 'sendAt',
  sendTo = 'sendTo',
  specificUsersPhoneNumbers = 'specificUsersPhoneNumbers', // used to find users (specific) users we need to send the InApp Notification created by adminUser.
  saveAsDraft = 'saveAsDraft', // there will be no alternative value for this in DB Column short keys, as we will set the notification status to draft when user requests this

  // AppUserRoles & Permissions
  roleIdentifier = 'roleIdentifier',
  isDefault = 'isDefault',

  // AppLogs Collection Columns
  // For Users Type Log Item
  totalCount = 'totalCount',
  totalSoftDeletedCount = 'totalSoftDeletedCount',
  totalPlayersCount = 'totalPlayersCount',
  totalEngagersCount = 'totalEngagersCount',
  totalAdminsCount = 'totalAdminsCount',
  totalActiveCount = 'totalActiveCount',
  totalBlockedCount = 'totalBlockedCount',
  totalCompletedCount = 'totalCompletedCount',
  totalReleasedCount = 'totalReleasedCount',
  // For Coins AppLog Item
  totalServiceCharges = 'totalServiceCharges', // coins system earned from service charges

  //
  period = 'period',
  currency = 'currency',
  place = 'place',
  rent = 'rent',
  generalInfo = 'generalInfo',
  location = 'location',
  images = 'images',
  details = 'details',
  latitude = 'latitude',
  longitude = 'longitude',
  placeId = 'placeId',
  streetAddress = 'streetAddress',
  appartmentSuit = 'appartmentSuit',
  province = 'province',
  postCode = 'postCode',
  bedroomImages = 'bedroomImages',
  washroomImages = 'washroomImages',
  kitchenImages = 'kitchenImages',
  otherImages = 'otherImages',
  availabilityTerm = 'availabilityTerm',
  moveOutDate = 'moveOutDate',
  minimumLease = 'minimumLease',
  houseInfo = 'houseInfo',
  otherRequirements = 'otherRequirements',
  placeSharingDetail = 'placeSharingDetail',
  placeBenefits = 'placeBenefits',
  leaseTime = 'leaseTime',
  leaseTimeUnit = 'leaseTimeUnit',
  bedrooms = 'bedrooms',
  washrooms = 'washrooms',
  parking = 'parking',
  units = 'units',
  detail = 'detail',
  bedroom = 'bedroom',
  livingRoom = 'livingRoom',
  kitchen = 'kitchen',
  washroom = 'washroom',
  livingWithLandlord = 'livingWithLandlord',
  livingWithPersonDetails = 'livingWithPersonDetails',
  furnished = 'furnished',
  benefits = 'benefits',
  otherBenefits = 'otherBenefits',
}

checkForDuplicateEnumValues(
  FormFieldsEnum,
  'Duplicate FormFieldsEnum value found:'
);
