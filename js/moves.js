


//Determine current tile number(start number+moves)

//On roll of a 6, release a token to start

const moving = (move) => {
    blueToken = $('#blue-1').detach()
    blueToken.prependTo($('.box[data-tile-number="'+move+'"]'))
    console.log(move)
}

for (let i = 1; i <= moves; i++) {
    setTimeout(() => {
        console.log('hello')
        moving(i)
    }, 1000 * i)
}

