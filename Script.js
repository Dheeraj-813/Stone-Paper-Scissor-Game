// Take 2 variable to show score of game...
let userScore = 0;
let compScore = 0;

// Accessing all element of game from html file......

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

// create Play game function to generate two choice from both user as well as comp......

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    // Actual working scenario of game......

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "Stone"){
            // If compChoice is Paper or Scissor...
            userWin = compChoice === "Paper" ? false : true;
        }else if(userChoice === "Paper"){
            // If compChoice is Scissor or Stone....
            userWin = compChoice === "Scissor" ? false : true;
        }else{
            // If compChoice is Stone or paper....
            userWin = compChoice === "Stone" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
}
};

// First generate random computer choice....

const genCompChoice = () => {
    const options = ["Stone", "Paper", "Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was draw...!");
    msg.innerHTML = "Your game is Draw...!, Play again...!";
    msg.style.backgroundColor = "Aqua";
}

// function for user selected choice....
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

// Game win Message.....
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore ++;
        userScorePara.innerHTML = userScore;
        console.log("You win the game...!");
        msg.innerHTML = `You win the game...!${userChoice} beats the ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore ++;
        compScorePara.innerHTML = compScore;
        console.log("You loose the game...!");
        msg.innerHTML = `You loose the game...! ${compChoice} beats the ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
