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
let paraText = "";
let paraWinnerText = "";



const button1 = document.createElement('div');
button1.classList.add('buttons');
button1.innerText = "Rock";
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
    }
    else if (result === 2)
    {
        winCounter++;
        paraText = "Win"
    }
    para.innerText = paraText;
    checkWinner(winCounter,loseCounter);

});

const button2 = document.createElement('div');
button2.classList.add('buttons');
button2.innerText = "Paper";
button2.value = "PAPER";
button2.addEventListener('click', function()
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
    }
    else if (result === 2)
    {
        winCounter++;
        paraText = "Win"
    }
    para.innerText = paraText;
    checkWinner(winCounter,loseCounter);

});

const button3 = document.createElement('div');
button3.classList.add('buttons');
button3.innerText = "Scissors";
button3.value = "SCISSORS";
button3.addEventListener('click', function(e) 
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
    }
    else if (result === 2)
    {
        winCounter++;
        paraText = "Win"
    }
    para.innerText = paraText;
    checkWinner(winCounter,loseCounter);

});

function checkWinner(playerScore, computerScore)
{
    if (playerScore === 5)
    {
        paraWinnerText = "Player Wins";
        paraWinner.innerText = paraWinnerText;

    }
    else if (computerScore === 5)
    {
        paraWinnerText = "Computer Wins";
        paraWinner.innerText = paraWinnerText;
    }

}

