function getComputerChoice() {
    const SHAPES = ["rock", "paper", "scissors"];
    const randomShapeIndex = Math.floor(Math.random() * SHAPES.length);
    const computerChoice = SHAPES[randomShapeIndex];
    return computerChoice;
}
