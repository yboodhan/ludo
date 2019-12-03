//Add event listener to objects
const addTokenListener = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i].piece.addEventListener('click', ()=> {
        console.log('clicked')})
    }
}

// addClickListener(document.getElementsByClassName('token'))
addTokenListener(blueTokens)

//Roll a random die
const rollDie = () => {
    moves = Math.ceil(Math.random() * 6)
}

//To start, roll a 6 or roll more than 3 times
const initialize = () => {
    initializeTurns++
    turn++
    console.log(turn)
    console.log(initializeTurns)

    rollDie()
    if (moves == 6 || initializeTurns/4 > 3) {
    
        switch (turn) {
            case 1:
                isPlayerOneTurn = true
                play()
                break
            case 2:
                isPlayerTwoTurn = true
                play()
                break
            case 3:
                isPlayerThreeTurn = true
                play()
                break
            case 4:
                isPlayerFourTurn = true
                play()
        }
    }
    if (turn == 4) {
        turn = 0
    }
}

//After initializing, play normally
const play = () => {
    if (isPlayerOneTurn == true) {
        
    }

    if (isPlayerTwoTurn == true) {
        
    }

    if (isPlayerThreeTurn == true) {
        
    }

    if (isPlayerFourTurn == true) {
        
    }
}