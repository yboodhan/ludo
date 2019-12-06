//On loading of page, activate play and roll button
window.addEventListener('DOMContentLoaded', () => {

    //On play, make roll button appear
    document.getElementById('play').addEventListener('click', () => {
        isPlayerOneTurn = true
        document.getElementById('message').textContent = 'Player 1 (blue), click roll to begin.'
        document.getElementById('play').style.display = 'none'
        document.getElementById('roll').style.display = 'inline-block'
    })

    //On roll, remove roll listener, start a player's turn and execute the game
    document.getElementById('roll').addEventListener('click', playGame)
})

