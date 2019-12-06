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

//Get all token homes
blueHome_1 = '#blue-home-1'
blueHome_2 = '#blue-home-2'
blueHome_3 = '#blue-home-3'
blueHome_4 = '#blue-home-4'

redHome_1 = '#red-home-1'
redHome_2 = '#red-home-2'
redHome_3 = '#red-home-3'
redHome_4 = '#red-home-4'

greenHome_1 = '#green-home-1'
greenHome_2 = '#green-home-2'
greenHome_3 = '#green-home-3'
greenHome_4 = '#green-home-4'

yellowHome_1 = '#yellow-home-1'
yellowHome_2 = '#yellow-home-2'
yellowHome_3 = '#yellow-home-3'
yellowHome_4 = '#yellow-home-4'

//Create token class
class Token {
    constructor(name, currentTile, piece, inPlay, totalMoves, testMovesTotal, startTile, zoneTile, endTile, home) {
        this.name = name
        this.currentTile = currentTile
        this.piece = piece
        this.inPlay = inPlay
        this.totalMoves = totalMoves
        this.testMovesTotal = testMovesTotal
        this.startTile = startTile
        this.zoneTile = zoneTile
        this.endTile = endTile
        this.home = home
    }

    //Move token one tile at a time (total moves)
    moving() {

        let divId = this.piece.id
        this.totalMoves++

        if (this.totalMoves > 1) {
            this.currentTile++
        }

        //If the token hasn't made a full round, do not allow it into a color zone
        if (this.currentTile > TILE_BEFORE_ROLLEROVER && this.totalMoves <= COMPLETE_ROUND_TILE_COUNT) {
            this.currentTile = 1
        }

        //If token moved 51 places, it can now enter it's colored zone
        if (this.totalMoves == TILE_BEFORE_ROLLEROVER) {
            this.currentTile = this.zoneTile
        }

        //If token reaches winning tile, put it in the center box and set win, if not, play normal
        if (this.currentTile == (this.endTile + 1)) {
            let classOfWin = this.piece.classList[0]
            this.piece.classList.add('win')
            $('#'+divId).detach().appendTo($('#'+classOfWin))
            this.inPlay = false
            message.textContent = 'You got a token to the end!'
            checkWin()
        } else {
            $('#'+divId).detach().appendTo($('.box[data-tile-number="'+ this.currentTile +'"]'))
        }
    }
    move(steps) {
        //This runs faster than setTimeout loop and is able to determine which box the token will land in
        //Needs same conditions that the loop runs, only faster, without 200ms delay per step
        //Need new variables that are not a part of the timed loop
        this.testMovesTotal += steps

        if (this.totalMoves == 0) {
            testEnd = this.currentTile + steps - 1
        } else {

            testEnd = this.currentTile + steps

            if ((this.currentTile + steps) > TILE_BEFORE_ROLLEROVER && this.testMovesTotal <= COMPLETE_ROUND_TILE_COUNT) {
                testEnd = (this.currentTile + steps) - TILE_BEFORE_ROLLEROVER
            }

            if (this.testMovesTotal >= TILE_BEFORE_ROLLEROVER) {
                testEnd = this.zoneTile
            }
        }

        this.inPlay = true
        for (let i = 1; i <= steps; i++) {
            setTimeout(() => {
                this.moving()
            }, 200 * i)
        }
    }
}

//Create token objects
blueTokens.push(new Token('blue1', BLUE_START_TILE, blueToken_1, false, 0, 0, BLUE_START_TILE, BLUE_ZONE_TILE, BLUE_END_TILE, blueHome_1))
blueTokens.push(new Token('blue2', BLUE_START_TILE, blueToken_2, false, 0, 0, BLUE_START_TILE, BLUE_ZONE_TILE, BLUE_END_TILE, blueHome_2))
blueTokens.push(new Token('blue3', BLUE_START_TILE, blueToken_3, false, 0, 0, BLUE_START_TILE, BLUE_ZONE_TILE, BLUE_END_TILE, blueHome_3))
blueTokens.push(new Token('blue4', BLUE_START_TILE, blueToken_4, false, 0, 0, BLUE_START_TILE, BLUE_ZONE_TILE, BLUE_END_TILE, blueHome_4))

redTokens.push(new Token('red1', RED_START_TILE, redToken_1, false, 0, 0, RED_START_TILE, RED_ZONE_TILE, RED_END_TILE, redHome_1))
redTokens.push(new Token('red2', RED_START_TILE, redToken_2, false, 0, 0, RED_START_TILE, RED_ZONE_TILE, RED_END_TILE, redHome_2))
redTokens.push(new Token('red3', RED_START_TILE, redToken_3, false, 0, 0, RED_START_TILE, RED_ZONE_TILE, RED_END_TILE, redHome_3))
redTokens.push(new Token('red4', RED_START_TILE, redToken_4, false, 0, 0, RED_START_TILE, RED_ZONE_TILE, RED_END_TILE, redHome_4))


greenTokens.push(new Token('green1', GREEN_START_TILE, greenToken_1, false, 0, 0, GREEN_START_TILE, GREEN_ZONE_TILE, GREEN_END_TILE, greenHome_1))
greenTokens.push(new Token('green2', GREEN_START_TILE, greenToken_2, false, 0, 0, GREEN_START_TILE, GREEN_ZONE_TILE, GREEN_END_TILE, greenHome_2))
greenTokens.push(new Token('green3', GREEN_START_TILE, greenToken_3, false, 0, 0, GREEN_START_TILE, GREEN_ZONE_TILE, GREEN_END_TILE, greenHome_3))
greenTokens.push(new Token('green4', GREEN_START_TILE, greenToken_4, false, 0, 0, GREEN_START_TILE, GREEN_ZONE_TILE, GREEN_END_TILE, greenHome_4))

yellowTokens.push(new Token('yellow1', YELLOW_START_TILE, yellowToken_1, false, 0, 0, YELLOW_START_TILE, YELLOW_ZONE_TILE, YELLOW_END_TILE, yellowHome_1))
yellowTokens.push(new Token('yellow2', YELLOW_START_TILE, yellowToken_2, false, 0, 0, YELLOW_START_TILE, YELLOW_ZONE_TILE, YELLOW_END_TILE, yellowHome_2))
yellowTokens.push(new Token('yellow3', YELLOW_START_TILE, yellowToken_3, false, 0, 0, YELLOW_START_TILE, YELLOW_ZONE_TILE, YELLOW_END_TILE, yellowHome_3))
yellowTokens.push(new Token('yellow4', YELLOW_START_TILE, yellowToken_4, false, 0, 0, YELLOW_START_TILE, YELLOW_ZONE_TILE, YELLOW_END_TILE, yellowHome_4))

//Object with divs and respective tokens
blueTokens.forEach( (token) => {allTokens[token.piece.id] = token})
redTokens.forEach( (token) => {allTokens[token.piece.id] = token})
greenTokens.forEach( (token) => {allTokens[token.piece.id] = token})
yellowTokens.forEach( (token) => {allTokens[token.piece.id] = token})
