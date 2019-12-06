//Roll a random die
const rollDie = () => {
    return Math.ceil(Math.random() * 6) 
}

//Gets player tokens
const player = () => {
    if (isPlayerOneTurn) {
        return blueTokens
    }
    if (isPlayerTwoTurn) {
        return redTokens
    }
    if (isPlayerThreeTurn) {
        return greenTokens
    }
    if (isPlayerFourTurn) {
        return yellowTokens
    }

}

//Add event listener to objects
const addTokenListener = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i].piece.addEventListener('click', moveToken)
    }
}

//Remove event listeners from objects
const removeTokenListener = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i].piece.removeEventListener('click', moveToken)
    }
}

//Lets the player visually see the tokens in play
const addTokenHighlight = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        flashInterval.push(setInterval( () => {
            $('#'+arr[i].piece.id).toggleClass('piecesInPlay')
        }, 500))
    }
}

//Removes flashing effect from tokens in play
const removeTokenHighlight = () => {
    for (let i = 0; i < flashInterval.length; i++) {
        clearInterval(flashInterval[i])
    }

    let htmlCollection = document.getElementsByClassName('piecesInPlay')
    let highlightedTokens = Array.from(htmlCollection)

    if (highlightedTokens.length > 0) {
        for (let i = 0; i < highlightedTokens.length; i++) {
            highlightedTokens[i].classList.remove('piecesInPlay')
        }
    }
}

//Determine which pieces player can move
const currentTokens = () => {

    document.getElementById('updateRoll').textContent = moves

    if (moves == 6 || moves == 1) {
        tokensInPlay = tokens.filter ( (token) => token.totalMoves <= COMPLETE_ROUND_TILE_COUNT)
        tokens.forEach ( (token) => {
            if ((((token.endTile + 1) - (token.currentTile + moves)) >= 0) && (token.currentTile >= token.zoneTile)) {
                tokensInPlay.push(token)
            }
        })
        addTokenHighlight(tokensInPlay)
        addTokenListener(tokensInPlay)
    } else {
        tokensInPlay = tokens.filter( (token) => (token.inPlay && (((token.endTile + 1) - (token.currentTile + moves)) >= 0)))
        addTokenHighlight(tokensInPlay)
        addTokenListener(tokensInPlay)

        if (tokensInPlay.length == 0) {
            endPlayerTurn()
        }
    }
}

//Plays selected token for current player
const moveToken = (e) => {
    document.getElementById('updateRoll').textContent = '?'

    removeTokenHighlight()
    removeTokenListener(tokensInPlay)

    let currentTokenInPlay = tokensInPlay.filter( (token) => token.piece == e.target)
    currentTokenInPlay[0].move(moves)

    killToken(currentTokenInPlay[0])

    endPlayerTurn()
}

// Kills token
const killToken = (killerToken) => {
    let endBox = $('.box[data-tile-number="'+ testEnd +'"]')
    let children = endBox[0].children

    //If the end tile is not a safe zone, then check if there is a token to kill and kill it
    if (testEnd != SAFE_TILE_1 && testEnd != SAFE_TILE_2 && testEnd != SAFE_TILE_3 && testEnd != SAFE_TILE_4) {
        if (children && children.length == 1 && (killerToken.piece.classList[0] != children[0].classList[0])) {

            //Get the token already in the box and it's properties, send it back home
            let childId = children[0].id
            let deadToken = allTokens[childId]
            let home = deadToken.home
            $('#'+childId).detach().appendTo($(home))
    
            //Reset the variables for the dead token
            deadToken.inPlay = false
            deadToken.currentTile = deadToken.startTile
            deadToken.totalMoves = 0
            deadToken.testMovesTotal = 0
        }
    }
}

//Check if a player won
const checkWin = () => {

    //Load all winning boxes
    let winningBoxes = document.getElementsByClassName('score')
    for (let i = 0; i < winningBoxes.length; i++) {
        if (winningBoxes[i].children.length == 1) {
            message.textContent = document.getElementsByTagName('td')[i].innerText + ' wins!'
            // endGame()
        }
    }
}

//End the player's turn and go to the next player
const endPlayerTurn = () => {

    if (moves != 6) {
        changeTurn()
    } else {
        message.textContent = currentPlayer + ', you rolled a 6, roll again!'
    }

    flashInterval = []
    document.getElementById('roll').addEventListener('click', playGame)
}

//Change player turn
const changeTurn = () => {
    if (isPlayerOneTurn) {
        message.textContent = 'Player 2 (red), it\'s your turn!'
        currentPlayer = 'Player 2 (red)'
        isPlayerOneTurn = false
        isPlayerTwoTurn = true
    }else if (isPlayerTwoTurn) {
        message.textContent = 'Player 3 (green), it\'s your turn!'
        currentPlayer = 'Player 3 (green)'
        isPlayerTwoTurn = false
        isPlayerThreeTurn = true
    }else if (isPlayerThreeTurn) {
        message.textContent = 'Player 4 (yellow), it\'s your turn!'
        currentPlayer = 'Player 4 (yellow)'
        isPlayerThreeTurn = false
        isPlayerFourTurn = true
    }else if (isPlayerFourTurn) {
        message.textContent = 'Player 1 (blue), it\'s your turn!'
        currentPlayer = 'Player 1 (blue)'
        isPlayerFourTurn = false
        isPlayerOneTurn = true
    }
}

//Function to execute the game
const playGame = () => {

    message = document.getElementById('message')

    message.textContent = currentPlayer + ', select a token to move.'

    document.getElementById('roll').removeEventListener('click', playGame) //Stop from rolling while playing turn

    moves = rollDie() //Roll die and get a value to move

    tokens = player() //Get the colored tokens for the player's turn

    currentTokens() //Activate eligible tokens for player's turn
}