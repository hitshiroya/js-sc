'use strict';

const newGameButton = document.querySelector(".btn--new");
const player1Score = document.querySelector("#score--0");
console.log(player1Score);
const player1CurrentScore = document.querySelector("#current--0");
const player2Score = document.querySelector("#score--1");
const player2CurrentScore = document.querySelector("#current--1");
const diceImage = document.querySelector(".dice");

const rollDiceButton = document.querySelector(".btn--roll");
const holdDiceButton = document.querySelector(".btn--hold");

let playerOneTotal = 0;
let playerOneHold = 0;
let playerTwoTotal = 0;
let playerTwoHold = 0;

let player1Flag = true;



const generateRandomNumber = () => {
    return Math.trunc(Math.random() * 6 + 1);
} 
const resetGame = () => {
    player1Score.textContent = 0;
    player1CurrentScore.textContent = 0;
    player2Score.textContent = 0;
    player2CurrentScore.textContent = 0;
    playerOneHold,playerOneTotal,playerTwoHold,playerTwoTotal = 0;
    player1Flag = true;


}

const rollDice = () => {
    const diceNumber = generateRandomNumber();
    switch (diceNumber) {
        case 1:
            diceImage.src = "dice-1.png";
            player1Flag = !player1Flag;
            if(player1Flag){
                player2CurrentScore.textContent = 0;
                playerTwoTotal = 0;
                playerTwoHold = 0;
                player2Score.textContent = 0;
            }else{
                player1CurrentScore.textContent = 0;
                playerOneTotal = 0;
                playerOneHold = 0;
                player1Score.textContent = 0;
            }

            break;
        case 2:
            diceImage.src = "dice-3.png";
            break;
        case 3:
            diceImage.src = "dice-3.png";
            break;
        case 4:
            diceImage.src = "dice-4.png";
            break;
        case 5:
            diceImage.src = "dice-5.png";
            break;
        case 6:
            diceImage.src = "dice-6.png";
            break; 
    }
    console.log(player1Flag);
    if(player1Flag == true){
    playerOneTotal+=diceNumber;
    console.log(playerOneTotal);
    player1CurrentScore.textContent = playerOneTotal;
    }else{
    playerTwoTotal+=diceNumber;
    player2CurrentScore.textContent = playerTwoTotal;
    }
    
    

}

const holdScore = () => {
    if(player1Flag == true){
        playerOneHold+=playerOneTotal;
        player1Score.textContent = playerOneHold;
        player1CurrentScore.textContent = 0;
        playerTwoTotal = 0;

        player1Flag = false;
    }else{
        playerTwoHold+=playerTwoTotal;
        player2Score.textContent = playerTwoHold;
        player2CurrentScore.textContent = 0;
        playerOneTotal = 0;
        player1Flag = true;
    }
    

}

newGameButton.addEventListener("click", resetGame);
rollDiceButton.addEventListener("click",rollDice);
holdDiceButton.addEventListener("click",holdScore);




