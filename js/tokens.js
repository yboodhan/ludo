//Get all tokens
blueToken_1 = document.getElementById('blue-1')
blueToken_2 = document.getElementById('blue-2')
blueToken_3 = document.getElementById('blue-3')
blueToken_4 = document.getElementById('blue-4')

redToken_1 = document.getElementById('red-1')
redToken_2 = document.getElementById('red-2')
redToken_3 = document.getElementById('red-3')
redToken_4 = document.getElementById('red-4')

greenToken_1 = document.getElementById('green-1')
greenToken_2 = document.getElementById('green-2')
greenToken_3 = document.getElementById('green-3')
greenToken_4 = document.getElementById('green-4')

yellowToken_1 = document.getElementById('yellow-1')
yellowToken_2 = document.getElementById('yellow-2')
yellowToken_3 = document.getElementById('yellow-3')
yellowToken_4 = document.getElementById('yellow-4')

//Create token class
class Token {
    constructor(name, startingTile, currentTile, piece, steps, stepSound) {
        this.name = name
        this.startingTile = startingTile
        this.currentTile = currentTile
        this.piece = piece
        this.steps = steps
        this.stepSound = stepSound
    }
    start() {
        this.piece.detach().prependTo($('.box[data-tile-number="'+ this.startingTile +'"]'))
        this.currentTile = this.startingTile
        this.move()

        //add event listener to token

        //add highlight on turn
    }
    moving(increment) {
        this.piece.detach().prependTo($('.box[data-tile-number="'+ this.currentTile + increment +'"]'))
        this.currentTile += increment
    }
    move() {
        for (let i = 1; i <= this.steps; i++) {
            setTimeout(() => {
                console.log('stepping')
                this.moving(i)
            }, 1000 * i)
        }
    }
}

//Create token objects
blueTokens.push(new Token('blue1', BLUE_START_TILE, 0, blueToken_1, moves, 'sound'))
blueTokens.push(new Token('blue2', BLUE_START_TILE, 0, blueToken_2, moves, 'sound'))
blueTokens.push(new Token('blue3', BLUE_START_TILE, 0, blueToken_3, moves, 'sound'))
blueTokens.push(new Token('blue4', BLUE_START_TILE, 0, blueToken_4, moves, 'sound'))

redTokens.push(new Token('red1', RED_START_TILE, 0, redToken_1, moves, 'sound'))
redTokens.push(new Token('red2', RED_START_TILE, 0, redToken_2, moves, 'sound'))
redTokens.push(new Token('red3', RED_START_TILE, 0, redToken_3, moves, 'sound'))
redTokens.push(new Token('red4', RED_START_TILE, 0, redToken_4, moves, 'sound'))

greenTokens.push(new Token('green1', GREEN_START_TILE, 0, greenToken_1, moves, 'sound'))
greenTokens.push(new Token('green2', GREEN_START_TILE, 0, greenToken_2, moves, 'sound'))
greenTokens.push(new Token('green3', GREEN_START_TILE, 0, greenToken_3, moves, 'sound'))
greenTokens.push(new Token('green4', GREEN_START_TILE, 0, greenToken_4, moves, 'sound'))

yellowTokens.push(new Token('yellow1', YELLOW_START_TILE, 0, yellowToken_1, moves, 'sound'))
yellowTokens.push(new Token('yellow2', YELLOW_START_TILE, 0, yellowToken_2, moves, 'sound'))
yellowTokens.push(new Token('yellow3', YELLOW_START_TILE, 0, yellowToken_3, moves, 'sound'))
yellowTokens.push(new Token('yellow4', YELLOW_START_TILE, 0, yellowToken_4, moves, 'sound'))
