function getComputerChoice() {
    const SHAPES = ["rock", "paper", "scissors"];
    const randomShapeIndex = Math.floor(Math.random() * SHAPES.length);
    const computerChoice = SHAPES[randomShapeIndex];
    return computerChoice;
}

function createRoundMessage(result, player, computer) {
    const playerCaps = player.charAt(0).toUpperCase().concat(player.slice(1));
    const computerCaps = computer
        .charAt(0)
        .toUpperCase()
        .concat(computer.slice(1));
    let message;
    if (result === "Win") {
        message = `You ${result}! ${playerCaps} beats ${computerCaps}`;
    } else {
        message = `You ${result}! ${computerCaps} beats ${playerCaps}`;
    }
    return message;
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection;
    switch (true) {
        case player === "rock" && computer === "scissors":
        case player === "paper" && computer === "rock":
        case player === "scissors" && computer === "paper":
            return createRoundMessage("Win", player, computer);
        case computer === "rock" && player === "scissors":
        case computer === "paper" && player === "rock":
        case computer === "scissors" && player === "paper":
            return createRoundMessage("Lose", player, computer);
        default:
            return `It was a draw`;
    }
}
