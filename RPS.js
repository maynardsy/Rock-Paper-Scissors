let userScore= 0;
let computerScore = 0;
let userScore_span = document.getElementById('user-score');
let computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.scoreBoard');
const result_p =  document.querySelector('.result > p'); 
const rock_div = document.getElementById('rock'); 
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors'); 

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']; 
    const randomNumber = Math.floor(Math.random() * 3); 
    return choices[randomNumber];
}


function convertToWord (letter){
    if (letter === "rock") return "Rock"; 
    if (letter === "paper") return "Paper";
    return "Scissors"
}

function win(userChoice, computerChoice){
    userScore++; 
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore; 
    result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + " You win!"
    document.getElementById(userChoice).classList.add('green-glow'); 
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow') }, 3000)
}

function lose(userChoice, computerChoice){
    computerScore++; 
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore; 
    result_p.innerHTML = convertToWord(userChoice) + " loses " + convertToWord(computerChoice) + " You lose!" 
    document.getElementById(userChoice).classList.add('red-glow'); 
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow') }, 1000)


}
function draw(userChoice, computerChoice){ 
    result_p.innerHTML = convertToWord(userChoice) + " ties " + convertToWord(computerChoice) + " You tie!" 
    document.getElementById(userChoice).classList.add('grey-glow'); 
    setTimeout(function() {document.getElementById(userChoice).classList.remove('grey-glow') }, 1000)

}




function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
       case "rockscissors":
       case "paperrock":
       case 'scissorspaper':
            win(userChoice, computerChoice);
        break; 
        case 'rockpaper': 
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, computerChoice);
        break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(userChoice, computerChoice);
        break; 
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game('rock');
    })
    paper_div.addEventListener('click', function() {
        game('paper');
    })
    scissors_div.addEventListener('click', function() {
        game('scissors');
    })    
}


main(); 





