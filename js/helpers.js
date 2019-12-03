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
        arr[i].piece.style.border = '0.25em solid green)'
    }
}

const removeTokenHighlight = () => {
    for (let i = 0; i < arr.length; i++) {
        arr[i].piece.style.border = '0.2em solid rgb(119, 115, 115)'
    }
}

//Determine which pieces player can move
const currentTokens = () => {
    if (moves == 6 || moves == 1) {
        tokensInPlay = tokens
        addTokenListener(tokensInPlay)
    } else {
        tokensInPlay = tokens.filter( (token) => token.inPlay)
        addTokenListener(tokensInPlay)

        if (tokensInPlay.length == 0) {
            endPlayerTurn()
        }
    }

    addTokenHighlight(tokensInPlay)
}

//Plays selected token for current player
const moveToken = (e) => {
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

    // removeTokenHighlight(tokensInPlay)
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