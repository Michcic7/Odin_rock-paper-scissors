const computerPlay = () => {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSymbol, computerSymbol) {
    switch (playerSymbol) {
        case "rock":
            if (computerSymbol == "scissors"){
                console.log("You've won!");
            } else if (computerSymbol == "paper") {
                console.log("You've lost!");
            } else {
                console.log("It's a draw!")
            }
            break;
        case "paper":
            if (computerSymbol == "rock"){
                console.log("You've won!");
            } else if (computerSymbol == "scissors") {
                console.log("You've lost!");                
            } else {
                console.log("It's a draw!")
            }
            break;
        case "scissors":
            if (computerSymbol == "paper"){
                console.log("You've won!");
            } else if (computerSymbol == "rock") {
                console.log("You've lost!");
            } else {
                console.log("It's a draw!")
            }
            break;
        default:
            console.log("You've pick the wrong symbol, fool!")
    }
}

const computerSymbol = computerPlay();
let playerSymbol = prompt("Choose rock, paper or scissors: ");

playerSymbol = playerSymbol.toLowerCase();

console.log("computer: " + computerSymbol);
console.log("player: " + playerSymbol);

playRound(playerSymbol, computerSymbol);