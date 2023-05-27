/*
*JS for rockPaperScissor Exercise
*
*/



//to get a random computer choice
function getComputerChoice()
{
    const randomNum = Math.floor(Math.random() * 3);

    switch (randomNum)
    {
        case 0:
            return "ROCK";
            break;
            
        case 1:
            return "PAPER"
            break;
           
        case 2:
            return "SCISSORS";
            break;
    }

}





function playRound(playerSelection,computerSelection)
{
    const playerChoice = playerSelection
    const computerChoice = computerSelection;

    //tie =0; lose = 1; win = 2;

    let a = 0;

    if (playerChoice === "ROCK")
    {
        if (computerChoice === "PAPER")
        {
            a = 1;;
        
        }
        else if (computerChoice === "SCISSORS")
        {
            a = 2;
   
        }
    }
    else if (playerChoice === "PAPER")
    {
        if (computerChoice === "ROCK")
        {
            a = 2;
  
        }
        else if (computerChoice === "SCISSORS")
        {
            a = 1;

        }
    }
    else if (playerChoice === "SCISSORS")
    {
        if (computerChoice === "ROCK")
        {
            a = 1;
        }
        else if (computerChoice === "PAPER")
        {
            a = 2;
        }
    }

    return a;
}



// const button = document.getElementById('button');
// button.addEventListener('click', game);

let winCounter = 0;
let loseCounter = 0;

let paraWinnerText = "";



const button1 = document.getElementById('ROCK');
button1.value = "ROCK";
button1.addEventListener('click', function()
{
    const computerSelection = getComputerChoice();
    const result = playRound("ROCK",computerSelection);

    if (result === 0)
    {
        paraText = "Tie";
    }
    else if( result === 1)
    {
        loseCounter++;
        paraText = "Lose";
        losses++;
    }
    else if (result === 2)
    {
        winCounter++;
        paraText = "Win"
        wins++;
    }
    updateScore(wins,losses,paraText);
    checkWinner();

});

const button2 = document.getElementById('PAPER');
button2.value = "PAPER";
button2.addEventListener('click', function()
{
    const computerSelection = getComputerChoice();
    const result = playRound("PAPER",computerSelection);

    if (result === 0)
    {
        paraText = "Tie";
    }
    else if( result === 1)
    {
        loseCounter++;
        paraText = "Lose";
        losses++;
    }
    else if (result === 2)
    {
        winCounter++;
        paraText = "Win"
        wins++;
    }
    updateScore(wins,losses,paraText);
    checkWinner();

});

const button3 = document.getElementById('SCISSORS');
button3.value = "SCISSORS";
button3.addEventListener('click', function(e) 
{
    const computerSelection = getComputerChoice();
    const result = playRound("SCISSORS",computerSelection);

    if (result === 0)
    {
        paraText = "Tie";
    }
    else if( result === 1)
    {
        loseCounter++;
        paraText = "Lose";
        losses++;
    }
    else if (result === 2)
    {
        winCounter++;
        paraText = "Win"
        wins++;
    }
    updateScore(wins,losses,paraText);
    checkWinner();

});

function checkWinner()
{
    if (wins === 5)
    {
        alert("Player Wins!")
        location.reload();

    }
    
    if (losses === 5)
    {
        alert("Computer Wins!")
        location.reload();
    }

}

var wins = 0;
var numberOfWins = document.createElement('p');
var winScore = document.getElementById("wins");

var losses = 0;
var numberOfLosses = document.createElement('p');
var loseScore = document.getElementById('losses');

let paraText = "";
var resultOfMatch = document.createElement('p');
var resultLabel = document.getElementById("resultLabel");


function updateScore(wins,losses,paraText)
{
    resultOfMatch.innerText = paraText;
    resultLabel.append(resultOfMatch);
    
    numberOfWins.innerText = wins;
    winScore.append(numberOfWins);

    numberOfLosses.innerText = losses;
    loseScore.append(numberOfLosses)




    
}

