// For image 1

var randomNumber1 = Math.floor((Math.random() * 6) + 1); // 1-6 generator.

var randomImageSrc = "images/dice" + randomNumber1 + ".png"; // images/dice1.png - images/dice6.png.

document.querySelector(".img1").setAttribute("src", randomImageSrc);

// For image 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSrc2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomImageSrc2);

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
