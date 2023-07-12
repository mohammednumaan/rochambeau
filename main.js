const playerText = document.querySelector(".player")
const computerText = document.querySelector(".computer")
const choiceBtn = Array.from(document.querySelectorAll(".choiceButton"))
const playerscore = document.querySelector(".playerRecord")
const computerscore = document.querySelector(".computerRecord")
const userResult = document.querySelector(".userResult img")
const computerResult = document.querySelector(".computerResult img")
const playerWin = document.querySelector(".playerWin")
const modal = document.querySelector(".modal")
const overlay =document.querySelector(".overlay")
const restart = document.querySelector(".play-again")
const modal_result = document.querySelector(".modal-result")



let playerChoice;
let computerChoice;

let playerScore = 0;
let computerScore = 0;



choiceBtn.forEach(button => button.addEventListener ('click', (e) => {

    let playersrc = e.target.src
    userResult.src = playersrc
    playGame(button.id,getComputerChoice())
    if (isGameOver()){
        openEndgameModal() 
        winnerText()
    }
    restart.addEventListener('click',restartGame)

    

    
}));
isGameOver()


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
        document.querySelector(".playerWin").innerHTML = `${playerChoice} Beats ${computerChoice}, <br>You Win The Round!`
        recordScore()
    }
    else if (playerChoice === computerChoice){
        
        playerScore += 0;
        computerScore += 0;
        document.querySelector(".playerWin").innerHTML = `${playerChoice} Does Not Beat ${computerChoice}, <br>Draw/Tie Round!`
        recordScore()
    }
    else{
        
        computerScore += 1;
        document.querySelector(".playerWin").innerHTML = `${computerChoice} Beats ${playerChoice}, <br>Computer Wins The Round!`
        recordScore()
    }
}

function recordScore(){
    document.querySelector(".playerRecord").innerHTML = playerScore;
    document.querySelector(".computerRecord").innerHTML = computerScore;

}

function isGameOver(){
    return playerScore === 5 || computerScore === 5
}



function openEndgameModal() {
    modal.classList.add('active')
    overlay.classList.add('active')
    
    
  }
  

function restartGame(){
    playerScore=0
    computerScore=0
    recordScore()
    modal.classList.remove('active')
    overlay.classList.remove('active')
    document.querySelector(".playerWin").innerHTML = ""
}

function winnerText(){
    if (playerScore > computerScore){
        document.querySelector(".modal-result").innerHTML = `You Win! The Entire Game!<p>${playerScore} - ${computerScore}</p>`
        s

    }
    else if (playerScore < computerScore){
        document.querySelector(".modal-result").innerHTML = `Computer Wins! The Entire Game!<p>${playerScore} - ${computerScore}</p> `

    }
    else{
        document.querySelector(".modal-result").innerHTML = `Draw/Tie Game!<p>${playerScore} - ${computerScore}</p> `
    }
}
recordScore()



