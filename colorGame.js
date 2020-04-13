var colors =[
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]
let squares= document.querySelectorAll(".square");
let pickedColor= colors[3];
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector('#message');


colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
    //add initial colors to square
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener('click', function(){
    //grab color of picked square
        let clickedColor =this.style.backgroundColor;
    //compare color to picked color
    if(clickedColor===pickedColor){
        messageDisplay.textContent= 'Correct!';
        changeColors(clickedColor);
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