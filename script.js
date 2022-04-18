function computerPlay(){
    const arrayHand = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    return arrayHand[index];
}



function playRound(computerSelection, playerSelection){

    if(computerSelection == "rock" && playerSelection == "scissors" ||
    computerSelection == "paper" && playerSelection == "rock" || 
    computerSelection == "scissors" && playerSelection == "paper"){
        console.log("You lose: " + computerSelection.toUpperCase() + " beats " + playerSelection.toUpperCase());
        return "computer";
    }

    else if(playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "paper" && computerSelection == "rock" || 
    playerSelection == "scissors" && computerSelection == "paper"){
        console.log("You Win: " + playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase());
        return "user";
    }

    else if(computerSelection == playerSelection){
        console.log("It's a tie");
        return "null";
    }

    else{
        console.log("Error!! Check thou spelling");
        return "null";
    }

}

function game(){
    //point system
    let computerScore = 0;
    let userScore = 0;
    
    for(let i = 0; i < 5; i++){
        let userInput = prompt("Rock-- Paper -- Scissors::");
        userInput = userInput.toLowerCase();
        let computerInput = computerPlay();
        console.log("Computer Input: " + computerInput);
        let thisRound = playRound(computerInput, userInput);

        // incrementation system
        switch(thisRound){
            case "computer": computerScore++;
            break;
            case "null": 
            break;
            case "user": userScore++;
            break;
        }
    }

    console.log("C: " + computerScore);
    console.log("U: " + userScore);

    //This output final data
    if(computerScore > userScore){
        console.log("Computer Wins!!");
    }
    else if(computerScore == userScore){
        console.log("It's a Tie!")
    }
    else{
        console.log("User Wins!!");
    }
}

game();
