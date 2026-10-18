function getComputerChoice() {
    // INIT a random number between 1 and 3 and save it in randNum
    let randNum = Math.floor(Math.random() * 3) + 1;
    // IF randNum is 1 THEN
    if (randNum === 1) {
        // RETURN the string "ROCK"
        return "ROCK";
    }
    // ELSE IF randNum is 2 THEN
    else if (randNum === 2) {
        // RETURN the string "PAPER"
        return "PAPER";
    }
    // ELSE
    else {
        // RETURN the string "SCISSORS"
        return "SCISSORS";
    }
}

function getHumanChoice() {
    // GET a string from the user via prompt and save it in the humanChoice variable
    let humanChoice = prompt("ROCK, PAPER or SCISSORS?");
    // SET humanChoice to all caps
    humanChoice = humanChoice.toUpperCase();
    // RETURN humanChoice
    return humanChoice;
}

// INIT humanScore and assign it 0
let humanScore = 0;
// INIT computerScore and assign it 0
let computerScore = 0;