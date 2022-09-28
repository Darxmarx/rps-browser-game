// we want a prompt window to tell the user to enter R, P, or S. 
// If R, P, or S enter, then we should store that data. If none of the characters are enter, undefined should show.
// We would want an alert the computer result (randomly) R, P, S. 
// alert to user if they win, lose, or tie comparing the user and the computer two values. 
// Let user confirm if they want to play again after seeing the results. 
// If user win, document in data. If user lose, note in data. If tie, document data. Increase all by one if the character match. 

//global variables reset the win, loss, and tie counts for a single session of games
var winCount = 0;
var lossCount = 0;
var tieCount = 0;

//array determines the three options valid for this game
var options = ["R", "P", "S"];

function playGame() {
    var userPick = prompt ("Pick R, P, or S!"); //intruction for user to put in prompt
    userPick = userPick.toUpperCase(); //auto-capitalizes whatever answer user gives
    if ((userPick !== options[0]) && (userPick !== options[1]) && (userPick !== options[2])) { //checks if user did not give a valid answer
        alert ("You didn't pick a valid option!");
        playGame(); //game automatically restarts
    }
    var computerPick = options[Math.floor(Math.random() * options.length)]; //computer randomly picks its answer
    alert ("Your opponent picked " + computerPick + "!"); //alert saying what answer computer picks
    if (userPick === computerPick) { //tie if the answers are the same
        alert ("It's a tie!");
        tieCount = tieCount + 1;
    }
    else if ((userPick === "R" && computerPick === "P") || (userPick === "P" && computerPick === "S") || (userPick === "S" && computerPick === "R")) { //player loses to computer
        alert ("You lose!");
        lossCount = lossCount + 1;
    }
    else if ((userPick === "R" && computerPick === "S") || (userPick === "P" && computerPick === "R") || (userPick === "S" && computerPick === "P")) { //player wins against computer
        alert ("You win!");
        winCount = winCount + 1;
    }
    confirm ("Wins: " + winCount + "\nLosses: " + lossCount + "\nTies: " + tieCount + "\nPlay again?") //score card that persists as long as user doesn't refresh
    playGame(); //automatically plays again until exiting
}

playGame();
   