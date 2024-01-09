let score = {
    Wins: 0,
    Losses: 0,
    Ties: 0
}

// attach buttons callback to playGame function
const rockButton = document.querySelector(".js-rock-button");
rockButton.addEventListener('click',() => {
    playGame("rock")
});

const paperButton = document.querySelector(".js-paper-button");
paperButton.addEventListener('click',() => {
    playGame("paper")
});

const scissorsButton = document.querySelector(".js-scissors-button");
scissorsButton.addEventListener('click',() => {
    playGame("scissors")
});

// attach reset score button to it's callback
const restScoreButton = document.querySelector(".reset-button");
restScoreButton.addEventListener('click',() => {
    resetScore();
});

// attach auto play button to it's callback
const autoPlayButton = document.querySelector(".autoplay-botton");
autoPlayButton.addEventListener('click',() => {
    autoPlay();
});

function computerMove()
{
    const randNumber = Math.random()
    if(randNumber < 0.3){
        return "rock";
    }else if(randNumber < 0.6){
        return "paper";
    }else {
        return "scissors";
    }
}

function playGame(userMove)
{
    let result;
    const compMove = computerMove();
    console.log(compMove)
    if(userMove === "rock"){
        if(compMove === "rock"){
            score.Ties++;
            result = "Tie";
        }else if(compMove === "paper"){
            score.Losses++;
            result = "Loss"
        }else if(compMove === "scissors"){
            score.Wins++;
            result = "Win"
        }
    }else if(userMove === "paper"){
        if(compMove === "rock"){
            score.Wins++;
            result = "Win"
        }else if(compMove === "paper"){
            score.Ties++;
            result = "Tie";
        }else if(compMove === "scissors"){
            score.Losses++;
            result = "Loss"
        }
    }else if(userMove === "scissors"){
        if(compMove === "rock"){
            score.Losses++;
            result = "Loss"
        }else if(compMove === "paper"){
            score.Wins++;
            result = "Win"
        }else if(compMove === "scissors"){
            score.Ties++;
            result = "Tie";
        }
    }
    diplayMoves(userMove,compMove);
    displayResult(result);
    displayScore();
}

function diplayMoves(userMove,compMove)
{
    const movesPara = document.querySelector(".js-moves");
    movesPara.innerHTML = `you 
                           <img src="images/${userMove}.png" class="display-moves"> 
                           <img src="images/${compMove}.png" class="display-moves"> 
                           computer`; 
}

function displayResult(result){
    const resultPara = document.querySelector(".js-result");
    resultPara.innerHTML = result;
}
function displayScore()
{
    const scorePara = document.querySelector(".js-score");
    scorePara.innerHTML = `Wins: ${score.Wins}, 
                           Losses: ${score.Losses}, Ties: ${score.Ties}`;
}

function resetScore()
{
    score.Wins = 0;
    score.Losses = 0;
    score.Ties = 0;
    displayScore();
}

let autoPlayMode = false;
let autoPlayId;

function autoPlay()
{
    if(!autoPlayMode){
        autoPlayId = setInterval(()=>{
            playGame(computerMove());
            autoPlayMode = true;
        },1000);
    }else{
        clearInterval(autoPlayId);
        autoPlayMode = false;
    }
}
