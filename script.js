const display=document.getElementById("display");

function appendToDisplay(char){
    display.value+=char;
}
function calculate(){
    display.value=eval(display.value);
}
function clearScreen(){
    display.value="";
}