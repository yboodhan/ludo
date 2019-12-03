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
            console.log('flashing')
        }, 300))
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
    if (moves == 6 || moves == 1) {
        tokensInPlay = tokens
        addTokenHighlight(tokensInPlay)
        addTokenListener(tokensInPlay)
    } else {
        tokensInPlay = tokens.filter( (token) => token.inPlay)
        addTokenHighlight(tokensInPlay)
        addTokenListener(tokensInPlay)

        if (tokensInPlay.length == 0) {
            endPlayerTurn()
        }
    }

}

//Plays selected token for current player
const moveToken = (e) => {

    removeTokenHighlight()

    console.log('move')
    removeTokenListener(tokensInPlay)
    currentTokenInPlay = tokensInPlay.filter( (token) => token.piece == e.target)
    currentTokenInPlay[0].move(moves)

    endPlayerTurn()
}

//End the player's turn and go to the next player
const endPlayerTurn = () => {

    if (moves != 6) {
        changeTurn()
    }

    flashInterval = []
    console.log('ended turn')
    document.getElementById('roll').addEventListener('click', playGame)
}

//Change player turn
const changeTurn = () => {
    if (isPlayerOneTurn) {
        console.log('player 1 turn ended')
        isPlayerOneTurn = false
        isPlayerTwoTurn = true
    }else if (isPlayerTwoTurn) {
        console.log('player 2 turn ended')
        isPlayerTwoTurn = false
        isPlayerThreeTurn = true
    }else if (isPlayerThreeTurn) {
        console.log('player 3 turn ended')
        isPlayerThreeTurn = false
        isPlayerFourTurn = true
    }else if (isPlayerFourTurn) {
        console.log('player 4 turn ended')
        isPlayerFourTurn = false
        isPlayerOneTurn = true
    }
}

//Function to execute the game
const playGame = () => {

    document.getElementById('roll').removeEventListener('click', playGame) //Stop from rolling while playing turn

    moves = rollDie() //Roll die and get a value to move
    console.log(moves)

    tokens = player() //Get the colored tokens for the player's turn

    currentTokens() //Activate eligible tokens for player's turn
}