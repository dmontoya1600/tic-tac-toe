let playerSym = 'x';
let squareValues = [
    '', '', '',
    '', '', '',
    '', '', ''
]

window.addEventListener('DOMContentLoaded', event => {

    let winner = ''


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
        if (playerSym === 'x') {
            playerSym = 'o'
        } else {
            playerSym = 'x'
        }
        if (rows() || columns() || diagnals()) {
            let newArr = [];
            squareValues.forEach(element => {
                if (element.length > 0) {
                    newArr.push(element)
                }
            });
            if (newArr.length === 0) {
                return
            }
            if (newArr.length >= 5) {
                document.getElementById('game-status').innerHTML = `Winner is: ${winner}!`

            }
        } else {
            let arr = []
            squareValues.forEach(ele => {
                if (ele.length > 0) {
                    arr.push(ele)
                }
            })

            if (arr.length === 9) {
                document.getElementById('game-status').innerHTML = "It's a tie!"
            }
        }
    })

    function rows() {
        let newArr = [];

        squareValues.forEach(element => {
            if (element.length > 0) {
                newArr.push(element)
            }
        });
        if (newArr.length === 0) {
            return false
        }

        if (squareValues[0] === squareValues[1] && squareValues[1] === squareValues[2]) {

            if (squareValues[0].length > 0) {
                winner = squareValues[0]
                return true;
            }
        }
        if (squareValues[3] === squareValues[4] && squareValues[4] === squareValues[5]) {
            if (squareValues[3].length > 0) return true;
        }
        if (squareValues[6] === squareValues[7] && squareValues[7] === squareValues[8]) {
            if (squareValues[6].length > 0) return true;
        }

        return false
    }

    function columns() {
        let newArr = [];

        squareValues.forEach(element => {
            if (element.length > 0) {
                newArr.push(element)
            }
        });
        if (newArr.length === 0) {
            return false
        }
        if (squareValues[0] === squareValues[3] && squareValues[3] === squareValues[6]) {
            if (squareValues[0].length > 0) return true;
        }
        if (squareValues[1] === squareValues[4] && squareValues[4] === squareValues[7]) {
            if (squareValues[1].length > 0) return true;
        }
        if (squareValues[2] === squareValues[5] && squareValues[5] === squareValues[8]) {
            if (squareValues[2].length > 0) return true;
        }
        return false
    }
    function diagnals() {
        let newArr = [];

        squareValues.forEach(element => {
            if (element.length > 0) {
                newArr.push(element)
            }
        });
        if (newArr.length === 0) {
            return false
        }
        if (newArr.length === 0) {
            return false
        }
        if (squareValues[0] === squareValues[4] && squareValues[4] === squareValues[8]) {
            if (squareValues[0].length > 0) return true;
        }
        if (squareValues[2] === squareValues[4] && squareValues[4] === squareValues[6]) {
            if (squareValues[2].length > 0) return true;
        }
        return false
    }
})

