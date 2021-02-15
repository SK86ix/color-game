//variables
var numSquares = 6;
var colors = [];
var pickedColor;
var squares= document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var selected = document.querySelector(".selected");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");
var modeButtons = document.querySelectorAll(".mode");
//varuables

//action
init();

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function(){
  reset();
});
//action

//function definition
function init(){
  setUpModeButtons();
  setUpSquares();
  reset();
}

function reset(){
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  resetStyles();
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  }
}

function resetStyles(){
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "NEW COLORS";
  message.textContent = "";
  message.style.color = "steelblue";
  message.style.backgroundColor ="#fff";
  modeButtonsReset();
}

function modeButtonsReset(){
  if(numSquares === 6){
    hardBtn.style.backgroundColor = "steelblue";
    hardBtn.style.color = "#fff";
    easyBtn.style.backgroundColor = "#fff";
    easyBtn.style.color = "steelblue";
    resetButton.style.color = "steelblue";
  }else{
    easyBtn.style.backgroundColor = "steelblue";
    easyBtn.style.color = "#fff";
    hardBtn.style.backgroundColor = "#fff";
    hardBtn.style.color = "steelblue";
    resetButton.style.color = "steelblue";
  }
}

function pickColor(color){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandomColors(num){
  var arr = [];
  for(var i = 0; i < num; i++){
    arr.push(randomColor());
  }
  return arr;
}

function changeColors(){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = pickedColor;
  }
}

function setUpModeButtons(){
  //modeButtons event listeners
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "EASY" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}

function setUpSquares(){
  //square listeners
  for(var i = 0; i < squares.length; i++){
    //add click listener to numSquares
    squares[i].addEventListener("click", function(){
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      //compare the color to pickedColor
      if(clickedColor === pickedColor){
        correct();
      }else{
        this.style.backgroundColor = "#232323";
        message.textContent =  "Try Again";
      }
    });
  }
}

function correct(){
  changeColors();
  h1.style.backgroundColor = pickedColor;
  message.textContent = "Correct!";
  message.style.backgroundColor = pickedColor;
  message.style.color = "#fff";
  reset.textContent = "PLAY AGAIN?";
  // correctHover();
  correctModeButtons();
}

function correctModeButtons(){
  if(numSquares === 6){
    hardBtn.style.backgroundColor = pickedColor;
    easyBtn.style.color = pickedColor;
    resetButton.style.color = pickedColor;
  }else{
    easyBtn.style.backgroundColor = pickedColor;
    hardBtn.style.color = pickedColor;
    resetButton.style.color = pickedColor;
  }
}
//
// function correctHover(){
//   $(function() {
//     //マウスを乗せたら発動
//     if(numSquares === 6){}
//     $('button').hover(function() {
//       //マウスを乗せたら色が変わる
//       $(this).css('background', pickedColor);
//       $(this).css('color', '#fff');
//       //ここにはマウスを離したときの動作を記述
//     }, function() {
//       //色指定を空欄にすれば元の色に戻る
//       $(this).css('background', '');
//       $(this).css('color', '');
//     });
//   });
// }
