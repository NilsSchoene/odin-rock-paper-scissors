function getComputerChoice() {
    // pseudo code:
    // INIT a random number between 1 and 3 and save it in randNum
    let randNum = Math.floor(Math.random() * 3) + 1;
    // IF randNum is 1 THEN
    if (randNum === 1) {
        // return the string "ROCK"
        return "ROCK";
    }
    // ELSE IF randNum is 2 THEN
    else if (randNum === 2) {
        // return the string "PAPER"
        return "PAPER";
    }
    // ELSE
    else {
        // return the string "SCISSORS"
        return "SCISSORS";
    }
}