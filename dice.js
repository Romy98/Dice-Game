
let randomNumer1 = Math.floor((Math.random()) * 6) + 1;

let diceImages = "dice" + randomNumer1 + ".png"  //concactinating the name of the image file to get the image from the source
let randomImageSource = "/images/" + diceImages;

document.querySelector(".img1").setAttribute("src", randomImageSource);


let randomNumer2 = Math.floor((Math.random()) * 6) + 1;

diceImages = "dice" + randomNumer2 + ".png"  //concactinating the name of the image file to get the image from the source
randomImageSource = "/images/" + diceImages;

document.querySelector(".img2").setAttribute("src", randomImageSource);



if (randomNumer1 > randomNumer2){
    document.querySelector("h1").textContent="Player 1 Wins! 🚩";
}

if (randomNumer2 > randomNumer1){
    document.querySelector("h1").textContent="Player 2 Wins! 🚩";
}

if (randomNumer1 == randomNumer2){
    document.querySelector("h1").textContent="Draw!"
}