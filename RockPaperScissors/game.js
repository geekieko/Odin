function getComputerChoice(){
    var randomChoice = Math.floor(Math.random()*3);
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

function playRound(playerSelection,computerSelection){
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = "Rock".toLowerCase();

    if(computerSelection == "paper" && playerSelection == "rock"){
        console.log("You Lose! Paper beats Rock");
    }
    else if(computerSelection == "sissors" && playerSelection == "paper"){
        console.log("You Lose! Sissors beats Paper");

    }else if(computerSelection == playerSelection){
        console.log("DRAW");
        

    }
    else{
        console.log("YOU WIN!");
    }


}

function game(){
    for(i=0;i<5;i++){
        playRound();
        
    }
}

