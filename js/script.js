//On loading of page, activate play and roll button
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('roll').addEventListener('click', () => {
        rollDie()
    })
})

