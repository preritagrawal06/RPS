
//function to generate computer's choice
function computerChoice() {
    let choice = Math.random();
    if (choice<0.33) {
        return "rock"
    }
    else if (choice<0.67) {
        return "paper"
    }
    else{
        return "scissor"
    }
}

//initialising score tally
let score_user = 0;
let score_computer = 0;

//getting the user choice
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');

//result if user chooses rock
rock.addEventListener('click',()=>{
    let result = document.getElementById('result');
    let choice = computerChoice();
    let userScore = document.getElementById('userScore');
    let computerScore = document.getElementById('computerScore');
    //updating DOM showing the result
    if (choice === 'rock') {
        result.innerHTML = 'Game Drawn';
    }
    else if (choice === 'scissor') {
        result.innerHTML = 'YOU WON';
        score_user++;
        userScore.innerHTML=`YOUR SCORE: ${score_user}`;            
    }
    else{
        result.innerHTML = 'YOU LOST';
        score_computer++;
        computerScore.innerHTML=`COMPUTER SCORE: ${score_computer}`;
    }

})

//result if user chooses paper
paper.addEventListener('click',()=>{
    let result = document.getElementById('result');
    let choice = computerChoice();
    let userScore = document.getElementById('userScore');
    let computerScore = document.getElementById('computerScore');
    if (choice === 'rock') {
        result.innerHTML = 'YOU WON';
        score_user++;
        userScore.innerHTML=`YOUR SCORE: ${score_user}`;
    }
    else if (choice === 'scissor') {
        result.innerHTML = 'YOU LOST';
        score_computer++;
        computerScore.innerHTML=`COMPUTER SCORE: ${score_computer}`;
    }
    else{
        result.innerHTML = 'GAME DRAWN';
    }

})

//result if user chooses scissor
scissor.addEventListener('click',()=>{
    let result = document.getElementById('result');
    let choice = computerChoice();
    let userScore = document.getElementById('userScore');
    let computerScore = document.getElementById('computerScore');
    if (choice === 'rock') {
        result.innerHTML = 'YOU LOST';
        score_computer++;
        computerScore.innerHTML=`COMPUTER SCORE: ${score_computer}`;
    }
    else if (choice === 'scissor') {
        result.innerHTML = 'GAME DRAWN';
    }
    else{
        result.innerHTML = 'YOU WON';
        score_user++;
        userScore.innerHTML=`YOUR SCORE: ${score_user}`;
    }

})
