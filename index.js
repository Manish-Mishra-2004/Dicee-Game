var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;
const h1 = document.querySelector("h1");
var leftImage = document.querySelector(".img1");

leftImage.src = "images/dice"+randomNumber1+".png";


var rightImage = document.querySelector(".img2");

rightImage.src = "images/dice"+randomNumber2+".png";

if(randomNumber1 > randomNumber2){
    h1.innerHTML = "🚩 Player 1 Wins!"
} else if(randomNumber1 < randomNumber2){
    h1.innerHTML = "Player 2 Wins! 🚩"
} else {
    h1.innerHTML = "Draw!"
}