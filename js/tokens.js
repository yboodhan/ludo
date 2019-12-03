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
    constructor(name, currentTile, piece, inPlay, stepSound) {
        this.name = name
        this.currentTile = currentTile
        this.piece = piece
        this.inPlay = inPlay
        this.stepSound = stepSound
    }

    //Move token one tile at a time (total moves)
    moving() {
        let divId = this.piece.id
        $('#'+divId).detach().appendTo($('.box[data-tile-number="'+ this.currentTile +'"]'))
        this.currentTile++
    }
    move(steps) {
        this.inPlay = true
        for (let i = 1; i <= steps; i++) {
            setTimeout(() => {
                this.moving()
            }, 200 * i)
        }
    }
}

//Create token objects
blueTokens.push(new Token('blue1', BLUE_START_TILE, blueToken_1, false, 'sound'))
blueTokens.push(new Token('blue2', BLUE_START_TILE, blueToken_2, false, 'sound'))
blueTokens.push(new Token('blue3', BLUE_START_TILE, blueToken_3, false, 'sound'))
blueTokens.push(new Token('blue4', BLUE_START_TILE, blueToken_4, false, 'sound'))

redTokens.push(new Token('red1', RED_START_TILE, redToken_1, false, 'sound'))
redTokens.push(new Token('red2', RED_START_TILE, redToken_2, false, 'sound'))
redTokens.push(new Token('red3', RED_START_TILE, redToken_3, false, 'sound'))
redTokens.push(new Token('red4', RED_START_TILE, redToken_4, false, 'sound'))


greenTokens.push(new Token('green1', GREEN_START_TILE, greenToken_1, false, 'sound'))
greenTokens.push(new Token('green2', GREEN_START_TILE, greenToken_2, false, 'sound'))
greenTokens.push(new Token('green3', GREEN_START_TILE, greenToken_3, false, 'sound'))
greenTokens.push(new Token('green4', GREEN_START_TILE, greenToken_4, false, 'sound'))

yellowTokens.push(new Token('yellow1', YELLOW_START_TILE, yellowToken_1, false, 'sound'))
yellowTokens.push(new Token('yellow2', YELLOW_START_TILE, yellowToken_2, false, 'sound'))
yellowTokens.push(new Token('yellow3', YELLOW_START_TILE, yellowToken_3, false, 'sound'))
yellowTokens.push(new Token('yellow4', YELLOW_START_TILE, yellowToken_4, false, 'sound'))

