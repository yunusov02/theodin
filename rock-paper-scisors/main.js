class Player {
    constructor(name, score=0) {
        this.name = name;
        this.score = score;
    }

    getchoice(index) {
        const shapes = [
            "rock",
            "paper",
            "scissor"
        ];

        return shapes[index];
    }

}


const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const gameResult = document.getElementById('game-result');


let player = new Player("Player");
let computer = new Player("Computer");


document.querySelectorAll('button').forEach(btn =>{
    btn.addEventListener("click", ()=> {
        const playerChoice = player.getchoice(Number(btn.value));

        const computerChoice = computer.getchoice(Math.floor(Math.random() * 3));

        if (playerChoice === computerChoice) {
            gameResult.textContent = "It's a draw";
        }  else if (
            (playerChoice === "rock" && computerChoice === "scissor") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissor" && computerChoice === "paper")
        ) {
            gameResult.textContent = "Player wins!";
            player.score++;
        } else {
            gameResult.textContent = "Computer wins!";
            computer.score++;
        };

        playerScore.textContent = player.score;
        computerScore.textContent = computer.score;
    });
});


