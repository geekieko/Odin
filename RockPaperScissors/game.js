function getComputerChoice(computerChoice){
    console.log("Testing 1");
    var randomChoice = Math.floor(Math.random()*3);
    console.log(randomChoice);
    switch (randomChoice){
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Sissors"
            break;
        default:
            computerChoice = "Error";
    }
    return computerChoice;
}
