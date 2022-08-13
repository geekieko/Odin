const playOneName = 'tim'
const playTwoName = 'jenn'
const playOneMarker = 'X'
const playTwoMarker = 'O'

const playerOne = {
    name:'tim',
    marker:'X'
}

const playerTwo = {
    name:'jenn',
    marker:'O'
}

function printName(player){
    console.log(player.name)
}

console.log(playOneName)
console.log(playTwoName)

function gameOver(winningPlayer){
    console.log('Congratulations!')
    console.log(winningPlayer.name + 'is the winner!')
}