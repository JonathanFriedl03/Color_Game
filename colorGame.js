let numSquares =6; 
var colors =generateRandomColors(numSquares); 
let squares= document.querySelectorAll(".square");
let pickedColor= pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let easyBtn = document.querySelector('#easyBtn');
let hardBtn = document.querySelector('#hardBtn');


//get selected buttons to be highlighted
easyBtn.addEventListener("click", function(){  
      hardBtn.classList.remove('selected');
      easyBtn.classList.add('selected');
      numSquares = 3;
      colors = generateRandomColors(numSquares);
      pickedColor = pickColor();
      colorDisplay.textContent = pickedColor;
      for (let i = 0; i < squares.length; i++) {
          if(colors[i]){
          squares[i].style.backgroundColor = colors[i];
          }else{
              squares[i].style.display = "none";     
          }
      }
})

    hardBtn.addEventListener("click", function(){  
        hardBtn.classList.add('selected');
        easyBtn.classList.remove('selected');
        numSquares = 6;
        colors = generateRandomColors(numSquares);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        for (let i = 0; i < squares.length; i++) {
            if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";     
            }
        }    
})

resetButton.addEventListener('click', function(){
    //generate new colors 
    colors = generateRandomColors(numSquares);
    //pick new random color from array
    pickedColor = pickColor();
    //change color display to match random picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        
    }
    h1.style.backgroundColor = 'steelblue';
})


colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
    //add initial colors to square
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener('click', function(){
    //grab color of picked square
        let clickedColor =this.style.backgroundColor;
    //compare color to picked color
    console.log(clickedColor, pickedColor);
    
    if(clickedColor===pickedColor){
        messageDisplay.textContent= 'Correct!';
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
    }else{
        //fade out the wrong color picked 
        this.style.backgroundColor ='#232323';
        messageDisplay.textContent= 'Try Again!';
    }
    });
}
function changeColors (color){
    //loop through all squares
    for (let i = 0; i < squares.length; i++) {
        //change each color to match paramater color
        squares[i].style.backgroundColor = color;
        
    }
}
function pickColor(){
    let random =Math.floor(Math.random()* colors.length);
    //access element from array at given index
    return colors[random];
}

function generateRandomColors (number){
    //make an array
    let arr = [];
    //add number of random colors to array
    for (let i = 0; i < number; i++) {
    //get random color and push into array
    arr.push(randomColor()); 
    }        
    //return that array
        return arr;
    
}
function randomColor(){
    //pick a red from 0 - 255 same for greeen and blue
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}