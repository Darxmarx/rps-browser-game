// we want a prompt window to tell the user to enter R, P, or S. 
// If R, P, or S enter, then we should store that data. If none of the characters are enter, undefined should show.
// We would want an alert the computer result (randomly) R, P, S. 
// alert to user if they win, lose, or tie comparing the user and the computer two values. 
// Let user confirm if they want to play again after seeing the results. 
// If user win, document in data. If user lose, note in data. If tie, document data. Increase all by one if the character match. 

/*function game() {
    var uu = userinput();
    var data = document.querySelector("#RPS");
}*/

function userInput() {
    var userPrompt = prompt ("PICK R, P, or S!");
    var userResult = ["R", "P", "S"]
    if (userPrompt == userResult[0]){
        alert ("You picked " + userPrompt + "!");
    }
    else if (userPrompt == userResult[1]){
        alert ("You picked " + userPrompt + "!");
    }
    else if (userPrompt == userResult[2]){
        alert ("You picked " + userPrompt + "!");
    }
    else {
        alert ("You didn't pick a valid choice!")
    }
}

function computerInput() {
    var computerPrompt = 
}

userInput();