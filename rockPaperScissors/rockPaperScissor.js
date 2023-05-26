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
    const playerChoice = playerSelection.toUpperCase();
    const computerChoice = computerSelection;
    let a = "It's a tie! Play again!"
    if (playerChoice === "ROCK")
    {
        if (computerChoice === "PAPER")
        {
            a = "You have lost. Rock loses to paper everytime!";
        }
        else if (computerChoice === "SCISSORS")
        {
            a = "You win! Scissors cannot cut rocks!";
        }
    }
    else if (playerChoice === "PAPER")
    {
        if (computerChoice === "ROCK")
        {
            a = "You win! Your paper has embraced the rock to submission!";
        }
        else if (computerChoice === "SCISSORS")
        {
            a = "You have lost. Paper does not stand a chance against the sharp edges of a scissor.";
        }
    }
    else if (playerChoice === "SCISSORS")
    {
        if (computerChoice === "ROCK")
        {
            a = "You have lost. Scissors get dull when the try to cut rocks."
        }
        else if (computerChoice === "PAPER")
        {
            a = "You have won! Like a hot knife through butter, your scissor cuts through paper!"
        }
    }

    return a;
}

function game()
{

    for (let i = 0; i< 5; i++)
    {
        const playerSelection = prompt("Choose between rock, paper, and scissors.");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
    }
}

const button = document.getElementById('button');
button.addEventListener('click', game);


