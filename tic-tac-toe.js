let playerSym = 'x';
let squareValues = ['', '', '', '', '', '', '', '', '']

window.addEventListener('DOMContentLoaded', event => {


    document.getElementById('tic-tac-toe-board')
    document.addEventListener('click', event => {
        let clicked = event.target.id //get id of thing being clicked on
        if (!clicked.startsWith('square-')) return; //only want to access when it has square attchd for squares in grid
        let sqIndex = Number.parseInt(clicked[clicked.length - 1]); ///gets last char of ID and turns it into number type
        if (sqIndex !== '') return;//if there is something in the array position it doesn't do anything

        let img = document.createElement('img'); //created img ele

        img.src = `https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-${playerSym}.svg`
    })

})
