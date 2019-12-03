//On loading of page, activate play and roll button
window.addEventListener('DOMContentLoaded', () => {

    //On play, make roll button appear
    document.getElementById('play').addEventListener('click', () => {
        isPlayerOneTurn = true
        document.getElementById('play').style.display = 'none'
        document.getElementById('roll').style.display = 'inline-block'
    })

    //On roll, start a player's turn and execute the game
    document.getElementById('roll').addEventListener('click', () => {
        let moves = rollDie()

        let tokens = player()

        moveToken(tokens, moves)

        //roll the dice

        //find player

        //find token


    })
})

