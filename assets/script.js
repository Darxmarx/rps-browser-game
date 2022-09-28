// we want a prompt window to tell the user to enter R, P, or S. 
// If R, P, or S enter, then we should store that data. If none of the characters are enter, undefined should show.
// We would want an alert the computer result (randomly) R, P, S. 
// alert to user if they win, lose, or tie comparing the user and the computer two values. 
// Let user confirm if they want to play again after seeing the results. 
// If user win, document in data. If user lose, note in data. If tie, document data. Increase all by one if the character match. 


var userinput 

function game(){
    var uu = userinput();
    var data = document.querySelector("#RPS");
}

function userinput(){
    var user = window.prompt ("PICK R, P, or S");
    var uresult = Array ("r", "p", "s");
    if (this.user == uresult){
        alert ("You pick " + this.uresult);
    }
    else {
        alert ("Not a valid choice.");
    }
    }
   
    userinput();