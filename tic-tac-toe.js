let playerSym = 'x';
let squareValues = ['', '', '','', '', '','', '', '']

window.addEventListener('DOMContentLoaded', event => {


    document.getElementById('tic-tac-toe-board')
    document.addEventListener('click', event => {

        let clicked = event.target.id //get id of thing being clicked on
        if (!clicked.startsWith('square-')) return; //only want to access when it has square attchd for squares in grid
        let sqIndex = Number.parseInt(clicked[clicked.length - 1]); ///gets last char of ID and turns it into number type

        if (squareValues[sqIndex] !== '') return;//if there is something in the array position it doesn't do anything
        let img = document.createElement('img'); //created img ele
        img.src = `https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-${playerSym}.svg`
        event.target.appendChild(img)
        squareValues[sqIndex] = playerSym
        if(playerSym === 'x'){
            playerSym = 'o'
        } else {
            playerSym = 'x'
        }

    })
    // if(columns() || rows() || diagnals()){

    // }
    // else {
    //     let arr = []
    //     squareValues.forEach(ele => {
    //         if (ele.length > 0){
    //             arr.push(ele)
    //         }
    //     })
    //     if (arr.length === 9){
    //         document.getElementById('game-status').innerHTML = "It's a tie!"
    //     }
    // }
    // function rows(){
    //     if (squareValues[0] === squareValues[1] && squareValues[1] === squareValues[2]){
    //         return true
    //     }
    //     if (squareValues[3] === squareValues[4] && squareValues[4] === squareValues[5]){
    //         return true
    //     }
    //     if (squareValues[6] === squareValues[7] && squareValues[7] === squareValues[8]){
    //         return true
    //     }
    //     return false
    // }

    // function columns(){
    //     if (squareValues[0] === squareValues[3] && squareValues[3] === squareValues[6]){
    //         return true
    //     }
    //     if (squareValues[1] === squareValues[4] && squareValues[4] === squareValues[7]){
    //         return true
    //     }
    //     if (squareValues[2] === squareValues[5] && squareValues[5] === squareValues[8]){
    //         return true
    //     }
    //     return false
    // }
    // function diagnals(){
    //     if (squareValues[0] === squareValues[4] && squareValues[4] === squareValues[8]){
    //         return true
    //     }
    //     if (squareValues[2] === squareValues[4] && squareValues[4] === squareValues[6]){
    //         return true
    //     }
    //     return false
    // }
})
