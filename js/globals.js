let BLUE_START_TILE = 1
let RED_START_TILE = 14
let GREEN_START_TILE = 27
let YELLOW_START_TILE = 40

let BLUE_ZONE_TILE = 53
let RED_ZONE_TILE = 58
let GREEN_ZONE_TILE = 63
let YELLOW_ZONE_TILE = 68

let BLUE_END_TILE = 57
let RED_END_TILE = 62
let GREEN_END_TILE = 67
let YELLOW_END_TILE = 72

let SAFE_TILE_1 = 9
let SAFE_TILE_2 = 22
let SAFE_TILE_3 = 35
let SAFE_TILE_4 = 48

let COMPLETE_ROUND_TILE_COUNT = 51
let TILE_BEFORE_ROLLEROVER = 52

let moves = 0
let testEnd = 0
let tokens = [], tokensInPlay = [], currentToken = []
let winningBoxes = []
let flashInterval = []

let redTokens = [], blueTokens = [], greenTokens = [], yellowTokens = [], allTokens = {}

let blueToken_1, blueToken_2, blueToken_3, blueToken_4
let redToken_1, redToken_2, redToken_3, redToken_4
let greenToken_1, greenToken_2, greenToken_3, greenToken_4
let yellowToken_1, yellowToken_2, yellowToken_3, yellowToken_4

let isPlayerOneTurn = false
let isPlayerTwoTurn = false
let isPlayerThreeTurn = false
let isPlayerFourTurn = false

let message = ''
let currentPlayer = 'Player 1 (blue)'