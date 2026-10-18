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
    // ENDIF
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

function playRound(humanChoice, computerChoice) {
    // PRINT the humanChoice as a string
    console.log("You chose " + humanChoice + "!");
    // PRINT the computerChoice as a string
    console.log("The computer chose " + computerChoice + "!");

    // IF humanChoice is "ROCK" THEN
    if (humanChoice === "ROCK") {
        // IF computerChoice is "ROCK" THEN
        if (computerChoice === "ROCK") {
            // PRINT "Draw! You both chose ROCK."
            console.log("Draw! You both chose " + humanChoice + ".");
        }
        // ELSE IF computerChoice is "PAPER" THEN
        else if (computerChoice === "PAPER") {
            // PRINT "You lose! PAPER beats ROCK."
            console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
            // INCREMENT computerScore by 1
            computerScore += 1;
        }
        // ELSE
        else {
            // PRINT "You win! ROCK beats SCISSORS."
            console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
            // INCREMENT humanScore by 1
            humanScore += 1;
        }
        // ENDIF
    }
    // ELSE IF humanChoice is "PAPER" THEN
    else if (humanChoice === "PAPER") {
        // IF computerChoice is "ROCK" THEN
        if (computerChoice === "ROCK") {
            // PRINT "You win! PAPER beats ROCK."
            console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
            // INCREMENT humanChoice by 1
            humanScore += 1;
        }
        // ELSE IF computerChoice is "PAPER" THEN
        else if (computerChoice === "PAPER") {
            // PRINT "Draw! You both chose PAPER."
            console.log("Draw! You both chose " + humanChoice + ".");
        }
        // ELSE
        else {
            // PRINT "You lose! SCISSORS beat PAPER."
            console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
            // INCREMENT computerScore by 1
            computerScore += 1;
        }
        // ENDIF
    }
    // ELSE
    else {
        // IF computerChoice is "ROCK" THEN
        if (computerChoice === "ROCK") {
            // PRINT "You lose! ROCK beats SCISSORS."
            console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
            // INCREMENT computerScore by 1
            computerScore += 1;
        }
        // ELSE IF computerChoice is "PAPER" THEN
        else if (computerChoice === "PAPER") {
            // PRINT "You win! SCISSORS beat PAPER."
            console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
            // INCREMENT humanChoice by 1
            humanScore += 1;
        }
        // ELSE
        else {
            // PRINT "Draw! You both chose SCISSORS."
            console.log("Draw! You both chose " + humanChoice + ".");
        }
        // ENDIF
    }
    // ENDIF
}

// CALL getHumanChoice and save the return value in a constant humanSelection
const humanSelection = getHumanChoice();
// CALL getComputerChoice and save the return value in a constant computerSelection
const computerSelection = getComputerChoice();
// CALL playRound() with humanSelection and computerSelection as arguments
playRound(humanSelection, computerSelection);