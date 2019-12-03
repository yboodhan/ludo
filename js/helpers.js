//Add event listener to objects
const addTokenListener = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i].piece.addEventListener('click', ()=> {
        console.log('clicked')})
    }
}

//Roll a random die
const rollDie = () => {
    return Math.ceil(Math.random() * 6)
}

//Change player turn
const changeTurn = () => {
    if (isPlayerOneTurn) {
        isPlayerOneTurn = false
        isPlayerTwoTurn = true
    }
    if (isPlayerTwoTurn) {
        isPlayerTwoTurn = false
        isPlayerThreeTurn = true
    }
    if (isPlayerThreeTurn) {
        isPlayerThreeTurn = false
        isPlayerFourTurn = true
    }
    if (isPlayerFourTurn) {
        isPlayerFourTurn = false
        isPlayerOneTurn = true
    }
}

//Die conditions
//if moves==6, add event listeners to all
//if not, add event listeners to ones on board, boolean attribute
//on click, move

const 


//Gets player tokens
const player = () => {
    if (isPlayerOneTurn) {
        //die conditionals
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
    
    changeTurn()
}

//Plays selected token for current player
const moveToken = (tokens, moves) => {
    console.log('playing')
    tokens[0].move(moves)
}