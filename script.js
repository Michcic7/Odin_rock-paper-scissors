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
            if (computerSymbol == "scissors") {
                console.log("You've won!");
                scoreCount++;
            } else if (computerSymbol == "paper") {
                console.log("You've lost!");
                scoreCount--;
            } else {
                console.log("It's a draw!")
            }
            break;
        case "paper":
            if (computerSymbol == "rock") {
                console.log("You've won!");
                scoreCount++;
            } else if (computerSymbol == "scissors") {
                console.log("You've lost!");
                scoreCount--;
            } else {
                console.log("It's a draw!")
            }
            break;
        case "scissors":
            if (computerSymbol == "paper") {
                console.log("You've won!");
                scoreCount++;
            } else if (computerSymbol == "rock") {
                console.log("You've lost!");
                scoreCount--;
            } else {
                console.log("It's a draw!")
            }
            break;
        default:
            console.log("You've pick the wrong symbol, fool!")
    }
}

function play() {
    for (let i = 0; i < 5; i++) {
        let playerSymbol = prompt("Choose rock, paper or scissors: ");
        const computerSymbol = computerPlay();
        playerSymbol = playerSymbol.toLowerCase();
        playRound(playerSymbol, computerSymbol);
    }

    if (scoreCount > 0) {
        console.log("You've won the game!");
    } else if (scoreCount < 0) {
        console.log("You've lost the game!");
    } else {
        console.log("You've drawn the game!");
    }
}

let scoreCount = 0;

play();