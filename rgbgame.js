var numOfSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var newColor = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons(){
    for(var i = 0; i < modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                numOfSquares = 3;
            }
            else{
                numOfSquares = 6;
            }
            reset();
        });
    } 
}

function setUpSquares(){
    for(var i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                messageDisplay.textContent="Correct";
                newColor.textContent= "Play Again";
                changeColors(clickedColor);
            }
            else{
                this.style.backgroundColor = "#4d4d4d";
                messageDisplay.textContent= "Try Again";
            }
        });
    }  
}

function reset(){
    colors= generateColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    newColor.textContent = "New Colors";
    messageDisplay.textContent="";
    for(var i = 0; i <squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "rgb(179, 119, 144)";
}

newColor.addEventListener("click",reset);

function changeColors(color){
    //loop through all squares change color to correct one
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
        h1.style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() *  numOfSquares);
    return colors[random];
}

function generateColors(num){
    var arr =[]
    for(var i = 0; i < num; i++){
        arr[i] = randomColor();
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}