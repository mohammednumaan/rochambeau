const playerText = document.querySelector(".player")
const computerText = document.querySelector(".computer")
const choiceBtn = Array.from(document.querySelectorAll(".choiceButton"))
const playerscore = document.querySelector(".playerRecord")
const computerscore = document.querySelector(".computerRecord")
const userResult = document.querySelector(".userResult img")
const computerResult = document.querySelector(".computerResult img")



let playerChoice;
let computerChoice;

let playerScore = 0;
let computerScore = 0;



choiceBtn.forEach(button => button.addEventListener ('click', (e) => {

    let playersrc = e.target.src
    userResult.src = playersrc
    playGame(button.id,getComputerChoice())
    

}));




function getComputerChoice(){
    let randNumber = Math.floor(Math.random()*3)
    let computerImages = ["assets/rock.png" , "assets/paper.png", "assets/scissors.png" ]
    computerResult.src = computerImages[randNumber]
    let computer_choice = ['rock','paper','scissors'][randNumber]
    return computer_choice;
}



function playGame(playerChoice,computerChoice){
    

    if (playerChoice === 'rock' && computerChoice === 'scissors' || playerChoice === 'paper' && computerChoice === 'rock' || playerChoice === 'scissors' && computerChoice === 'paper'){

        
        playerScore += 1;
        recordScore()
    }
    else if (playerChoice === computerChoice){
        
        playerScore += 0;
        computerScore += 0;
        recordScore()
    }
    else{
        console.log("comp wins")
        computerScore += 1;
        recordScore()
    }
}

function recordScore(){
    document.querySelector(".playerRecord").innerHTML = playerScore;
    document.querySelector(".computerRecord").innerHTML = computerScore;

}

function roundGame(){
    for (let i = 1; i<=5;i++){
        recordScore()
        playGame(button.id, getComputerChoice())

    }
}

