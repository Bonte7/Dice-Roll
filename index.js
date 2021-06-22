document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {

    //generate random numbers 1-6 for the image url
    let randomNumber1 = Math.floor(Math.random() * 6) + 1; 
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    //get the url for dice images 1-6
    let randomDiceImage1 = "images/dice" + randomNumber1 + ".png"; 
    let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

    //grab first dice image tag
    let image1 = document.querySelectorAll("img")[0];
    //grab second dice image tag
    let image2 = document.querySelectorAll("img")[1];

    //set the dice images to the url with random number
    image1.setAttribute("src", randomDiceImage1);
    image2.setAttribute("src", randomDiceImage2);

    //logic for dice roll score
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins";
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins";
    }
    else {
        document.querySelector("h1").innerHTML = "Draw";
    }
}



