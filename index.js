console.log('Welcome to Rock paper and scissor');

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

let score_user = 0;
let score_computer = 0;

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');

rock.addEventListener('click',()=>{
    let result = document.getElementById('result');
    let choice = computerChoice();
    let userScore = document.getElementById('userScore');
    let computerScore = document.getElementById('computerScore');
    console.log('you chose rock');
    console.log(choice);
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
paper.addEventListener('click',()=>{
    let result = document.getElementById('result');
    let choice = computerChoice();
    let userScore = document.getElementById('userScore');
    let computerScore = document.getElementById('computerScore');
    console.log('you chose paper');
    console.log(choice);
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

scissor.addEventListener('click',()=>{
    let result = document.getElementById('result');
    let choice = computerChoice();
    let userScore = document.getElementById('userScore');
    let computerScore = document.getElementById('computerScore');
    console.log('you chose scissor');
    console.log(choice);
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