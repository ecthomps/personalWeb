var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeSelected = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeTypes();
    setUpSquares();
    reset();    
}

function setUpModeTypes(){
    for (var i = 0; i < modeSelected.length; i++){
        modeSelected[i].addEventListener("click", function(){
            modeSelected[0].classList.remove("active");
            modeSelected[1].classList.remove("active");
            this.classList.add("active");

            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        })
    }
}

function setUpSquares(){
    for (var i = 0; i < squares.length; i++){
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];

        //add clickListeners to aquares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare clickedColor to pickedColor
            if(clickedColor === pickedColor){
                winner(clickedColor);
            } else {
                message.textContent = "Try Again";
                this.style.backgroundColor = "#232323";
            }        
        }) 
    }
}    

function reset(){
    //generate new colors
    colors = generateRandomColors(numSquares);   
    //get a new picked color and display rgb
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;    
    //change square color background
    for (var i = 0; i < squares.length; i++){
        if(colors[i]){
            //shows colors "block"
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        squares[i].style.backgroundColor = colors[i];
    }
    //change h1 background
    h1.style.background = "steelblue";
    //reset message
    message.textContent="";
    //change reset button text
    resetButton.textContent = "New Colors";
}

function winner(color){
     message.textContent = "Correct!"                        
     changedColors(color);
     resetButton.textContent = "Play Again?";
     h1.style.backgroundColor = color;
}

resetButton.addEventListener("click", function(){
    
    reset();
})

function changedColors(rightColor){
    //loop through all squares
    for (var i = 0; i < squares.length; i++){
    //change each color to match given color
        squares[i].style.backgroundColor = rightColor;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //repeat num times
    for (var i = 0; i < num; i++){
        //get random colors and push into array
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor(){
    //pick random number for red btn 0 - 255
    var r = Math.floor(Math.random() * 256)
    //pick random number for green btn 0 - 255
    var g = Math.floor(Math.random() * 256)
    //pick random number for blue btn 0 - 255
    var b = Math.floor(Math.random() * 256)

    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}
