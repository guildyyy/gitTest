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
            console.log("Computer chooses Rock");
            break;
            
        case 1:
            console.log("Paper");
            break;
           
        case 2:
            console.log("Scissors");
            break;
           
    }

}

//to determine winner
function play(input, computerSelection)
{
 //const pChoice = input.toUpperCase; 
 console.log(input);
}

const button = document.getElementById('button');

button.addEventListener('click', play(document.getElementById("playerChoice").value, getComputerChoice));
