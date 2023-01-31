
// for image 1
var num1 = Math.floor(Math.random()*6)+1;

var randomImage = "dice" + num1 + ".png";
var imageSource1 = "images/"+randomImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imageSource1);

// for image 2
// var num2 = Math.floor(Math.random()*6)+1;

// var is2 = "images/dice" + num2 + ".png";
// var im2 = dcoument.querySelectorAll("img")[1];
// im2.setAttribute("src",is2);

var num2 = Math.floor(Math.random()*6)+1;

var imageSource2 = "images/dice" + num2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",imageSource2);

if(num1>num2){
     document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
}
else if(num1<num2){
     document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}