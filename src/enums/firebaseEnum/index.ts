/**
 * DBColumnKeysShortFormEnum contains short form of DB column keys to reduce the size of the item in firestore and realtime database
 *
 * * Rules:
 * - for plural names, make sure to add "s" in the end and for singular names, it should not end with "s"
 * */

import { checkForDuplicateEnumValues } from '@app-utils/index';

/**
 * Enum representing short form of DB column keys in firestore and realtime database
 */
export enum DBColumnKeysShortFormEnum {
  // Keys defined in "Generic Form Fields Enum"
  id = 'id',
  userId = 'uid',
  sortOrderNo = 'so',
  createdAt = 'cat',
  updatedAt = 'uat',
  deletedAt = 'dat',
  blockedAt = 'bat',
  amount = 'am',
  userData = 'ud',
  playerId = 'pid',
  otherPlayerId = 'opid', // this is mainly to use for transfer coins request, when it's between two players, i'm using userId, to identify main player (who created the request), and otherPlayerId to identify the receiver player, and if for any future collection we needed a request between current player and multiple other players then we will create and use "otherPlayerIds"
  extraData = 'ed',
  playerData = 'pdt',

  // Keys used for "user"
  name = 'n',
  email = 'e',
  phoneNumber = 'pn',
  password = 'pw',
  withdrawOptions = 'wos',
  cnic = 'cn',
  city = 'ci',
  country = 'cu',
  address = 'ad',
  referredBy = 'rfb',
  referralCode = 'rfc',
  permissions = 'pms',
  emailVerifiedAt = 'eva',
  balance = 'blc',
  role = 'r',
  firstName = 'fn',
  lastName = 'lne',
  age = 'a',
  gender = 'g',
  constellation = 'const',
  hometown = 'ht',
  language = 'lang',
  profileCompletePercentageNumber = 'pcpn',
  birthdayDate = 'bdt',
  aboutMe = 'abm',
  hobbies = 'hs',
  lifeStyle = 'ls',
  music = 'mc',
  movies = 'mos',
  travel = 'tl',
  books = 'bks',
  gym = 'gm',
  food = 'f',
  cleanliness = 'cln',
  smoke = 'sk',
  pets = 'ps',
  guests = 'gts',
  occupation = 'o',
  foodPreference = 'fp',
  workSchedule = 'ws',
  overnightGuests = 'ogs',
  getUpTime = 'gut',
  goToBedTime = 'gtt',
  roomPreference = 'rp',
  roommatePreference = 'rmp',
  whereWantToLive = 'wwtl',
  moveInDate = 'mid',
  budget = 'b',
  placePreference = 'pp',
  buildingType = 'bt',
  other = 'ot',
  min = 'mi',
  max = 'ma',
  verificationCode = 'vc',

  // Keys defined in "Game related Form Fields"
  title = 't',
  description = 'd',
  maxPlayersAllowed = 'mxpa',
  feePerPlayer = 'fpp',
  serviceCharges = 'scs',
  image = 'i',
  minPlayersToStartGame = 'mipa',

  // Keys defined in "Game Room related Form Fields"
  isPrivate = 'ipt',
  roomCode = 'rcd',
  status = 'st',
  gameId = 'gid',
  gameRoomPlayerIds = 'grpsd', // basically there are two ways to do this, if we store the data of players (id, email, phoneNumber, the bare minimum), using this will keep that data for completed game rooms in DB (increasing the DB size, i think uselessly, as a gameRoom will get finished after 1h or max few days if you must :), but after that it's just read only data, staying there in DB, so storing just the IDs i think is a better way and we fetch and return users data using another API request, both ways have their ups and downs and i'm going with the second one), and i'm also removing the "gameRoomPlayersCount" field, just sticking with "gameRoomPlayerIds" for now, also removing "gameRoomPlayersData", but keeping that in "FormFieldsEnum" as will use that to send back users data in frontend.
  gameRoomWillStartAt = 'grwsat',
  // gameRoomStartedAt = "grsat",
  firstPlayerGameRoomJoinedAt = 'fpgrja',
  engagerStartedTheActualGameAt = 'estaga',
  gameRoomWinnerPlayerId = 'grwpid',
  gameRoomResultScreenShot = 'grrss',
  timerForEngagerToStartActualGameInMinutes = 'tfetsag',
  timerForPlayersToJoinActualGameInMinutes = 'tfptjag',
  actualGameInfo = 'agi',
  gameData = 'gd',
  engagerReleasedGameRoomAt = 'ergrat',
  engagerDeclaredGameRoomWinnerAt = 'edgrat',

  // Topups
  agentRemarks = 'ars',
  transferMethod = 'tm',
  receptScreenshot = 'rs',
  transactionId = 'tid',

  // Transaction Fields
  itemId = 'itid',
  balanceBefore = 'bb',
  balanceAfter = 'ba',
  type = 'ty',
  adminUserId = 'auid',

  // Logs
  logType = 'lt',

  // Transfer Coins
  userRemarks = 'urs',
  otherPlayerPhoneNumber = 'oppn',
  otherPlayerName = 'opn',

  // AppUserLog
  totalTopupCoins = 'ttcs',
  totalWithdrawCoins = 'twcs',
  totalWonCoins = 'twncs',
  totalTransferredCoins = 'ttdcs',
  totalReceivedCoins = 'trcs',
  totalLostCoins = 'tlcs',
  totalGamesPlayed = 'tgp',
  totalGamesLeft = 'tglt',
  totalGamesWon = 'tgw',
  totalGamesLost = 'tgl',
  gameWinStreak = 'gwst',
  gameLostStreak = 'glst',
  lastGamePlayedAt = 'lgpat',
  lastGameLeftAt = 'lglfat',
  lastGameWonAt = 'lgqat',
  lastGameLostAt = 'lglat',
  totalGameRoomReleasedForThisPlayer = 'tgrrftp',
  lastGameRoomReleasedForThisPlayerAt = 'tgrrftpat',
  totalGameRoomReleasedByThisAdminUser = 'tgrrbtau',
  lastGameRoomReleasedByThisAdminUserAt = 'tgrrbtauat',
  totalCoinsEarnedAsGameRoomEngager = 'tcseagre', // what this user gets as "earnedGameRoomEngagerFee"
  totalGameRoomsCompletedAsEngager = 'tgrcae',
  lastGameRoomsCompletedAsEngagerAt = 'lgrcaeat',

  // InApp Notifications
  icon = 'ic',
  sendAt = 'sat',
  sendTo = 'sto',
  specificUsersPhoneNumbers = 'supns',

  // AppUserRoles & Permissions
  roleIdentifier = 'ri',
  isDefault = 'idf',

  // AppLogs Collection Columns
  // For Users Type Log Item
  totalCount = 'tc', // keep it simple, mean all these total counts, make them including softDeleted, and when showing in frontend, just remove, softDeleted from these total count to get Excluding Trashed items count
  totalSoftDeletedCount = 'tsdc',
  totalPlayersCount = 'tpsc',
  totalEngagersCount = 'tesc',
  totalAdminsCount = 'tasc',
  totalActiveCount = 'tac',
  totalBlockedCount = 'tbc',
  totalCompletedCount = 'tcc',
  totalReleasedCount = 'trc',
  // For Coins AppLog Item
  totalServiceCharges = 'tsc', // coins system earned from service charges

  // ----------- RoomMate Project Keys Starts Below -------------------------
  // Mainly Added for RoomMate App
  period = 'ped',
  currency = 'cuy',
  place = 'pl',
  rent = 're',
  generalInfo = 'gi',
  location = 'loc',
  images = 'ims',
  details = 'dts',
  latitude = 'lat',
  longitude = 'lng',
  placeId = 'pi',
  streetAddress = 'sa',
  apartmentSuit = 'as',
  province = 'pvn',
  postCode = 'psc',
  bedroomImages = 'bris',
  washroomImages = 'wris',
  kitchenImages = 'kis',
  otherImages = 'ois',
  availabilityTerm = 'abt',
  moveOutDate = 'mud',
  minimumLease = 'mil',
  houseInfo = 'hif',
  otherRequirements = 'ors',
  placeSharingDetail = 'psd',
  placeBenefits = 'pbs',
  leaseTime = 'lti',
  leaseTimeUnit = 'ltu',
  bedrooms = 'bds',
  washrooms = 'wrs',
  parking = 'pr',
  units = 'us',
  detail = 'dl',
  bedroom = 'br',
  livingRoom = 'lr',
  kitchen = 'kc',
  washroom = 'wr',
  livingWithLandlord = 'lwld',
  livingWithPersonDetails = 'lwpd',
  furnished = 'fh',
  benefits = 'bs',
  otherBenefits = 'obs',
  // ----------- RoomMate Project Keys Ends Above -------------------------

  body = 'bd',
  content = 'ct',
  fcmDeviceToken = 'fcmt',
  fcmDeviceTokens = 'fcmts',
  apnsDeviceToken = 'apnt',
  apnsDeviceTokens = 'apnts',
  subtitle = 'ste',
  tag = 'tg',
  tags = 'tgs',
  badge = 'bge',
  notification = 'ncn',
  notifications = 'ncns',
  data = 'dt',
  clickAction = 'ca',
  link = 'ln',
  group = 'gp',
  groupSummary = 'gs',
  sound = 'sd',
  importance = 'ipe',
  visibility = 'vsb',
  light = 'lh',
  lights = 'lhs',
  lightColor = 'lcr',
  vibration = 'vbr',
  channel = 'cl',
  channels = 'cls',
  receive = 'rce',
  value = 'vle',
  actionId = 'aid',
  inputValue = 'ipv',

  // Ahsan - on 5-12-24
  gameType = 'gt',
  thirdPartyAppsData = 'tpasd',
  thirdPartyAppData = 'tpad',
  pubgAppId = 'pgai',
  uniqueId = 'uqid',
  userUniqueId = 'uuqid',
  photoURL = 'pul',
  displayName = 'dn',
  ludoStarAppId = 'lsaid',
  freeFireAppId = 'ffaid',
  callOfDutyAppId = 'codaid',
  robloxAppId = 'rxaid',
  eightBallPoolAppId = 'ebpaid',
  amongUsAppId = 'auaid',
  unoAppId = 'uoaid',
  miniMilitiaAppId = 'mmaid',
  carromAppId = 'cmaid',
  tennisClashAppId = 'tcaid',
  chessAppId = 'chaid',
  asphalt9AppId = 'a9aid',
  golfBattleAppId = 'gbaid',
  arenaBreakoutAppId = 'abaid',
}

/**
 * Enum representing different order by directions in firestore and realtime database
 */
export enum FrbOrderbyDirectionEnum {
  asc = 'asc',
  desc = 'desc',
}

/**
 * Enum representing different where conditions in firestore and realtime database
 */
export enum FrbWhereConditionEnum {
  lessThan = '<',
  lessThanOrEqualTo = '<=',
  equalTo = '==',
  notEqual = '!=',
  greaterThanOrEqualTo = '>=',
  greaterThan = '>',
  arrayContains = 'array-contains',
  inArray = 'in',
  notInArray = 'not-in',
  arrayContainsAny = 'array-contains-any',
}

/**
 * Check for duplicate values in the DBColumnKeysShortFormEnum.
 */
checkForDuplicateEnumValues(
  DBColumnKeysShortFormEnum,
  'Duplicate DBColumnKeysShortFormEnum value found:'
);
checkForDuplicateEnumValues(
  FrbOrderbyDirectionEnum,
  'Duplicate FrbOrderbyDirectionEnum value found:'
);

/**
 * Check for duplicate values in the FrbWhereConditionEnum.
 */
checkForDuplicateEnumValues(
  FrbWhereConditionEnum,
  'Duplicate FrbWhereConditionEnum value found:'
);
