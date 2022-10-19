let choicePlayer =""
let choiceBot =""
pokemonElem = ["fire","water","earth"]
let Message ="Null"
let playerScore = 0
let botScore = 0
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var replay = document.getElementsByClassName("bouton-replay")[0];

document.querySelector('#result').innerHTML = 'Chose your pokemon to defeat your opponent';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function playerChoice(elem) {
    choicePlayer = elem.value
    console.log("player",choicePlayer);
    return choicePlayer
}

function botChoice(){
    let i= getRandomInt(3)
    choiceBot = pokemonElem[i]
    console.log("BOT",choiceBot);
    return choiceBot
}

function resultat(){
    if(choiceBot == choicePlayer){
        Message = "Tie"
        resultMessage()
        console.log("Egalité")
    }
    if(choiceBot =="earth" && choicePlayer == "fire"){
        Message = "Win"
        resultMessage()
        console.log(Message)
        console.log("Win")
    }
    if(choiceBot =="water" && choicePlayer == "earth"){
        Message = "Win"
        resultMessage()
        console.log("Win")
    }
    if(choiceBot =="fire" && choicePlayer == "water"){
        Message = "Win"
        resultMessage()
        console.log("Win")
    }
    if(choiceBot =="earth" && choicePlayer == "water"){
        Message = "Lose"
        resultMessage()
        console.log("Lose")
    }
    if(choiceBot =="water" && choicePlayer == "fire"){
        Message = "Lose"
        resultMessage()
        console.log("Lose")
    }
    if(choiceBot =="fire" && choicePlayer == "earth"){
        Message = "Lose"
        resultMessage()
        console.log("Lose")
    }
}
function resultMessage(){
    if (Message == "Lose"){
        botScore += 1
        document.querySelector('#score').innerHTML = `${playerScore} - ${botScore}`;
        document.querySelector('#result').innerHTML = 'Ah, you lost !';
    }
    if (Message == "Win"){
        playerScore += 1
        document.querySelector('#score').innerHTML = `${playerScore} - ${botScore}`;
        document.querySelector('#result').innerHTML = 'Nice, you won !';
    }
    if (Message == "Tie"){
        document.querySelector('#score').innerHTML = `${playerScore} - ${botScore}`;
        document.querySelector('#result').innerHTML = 'Tie, chose again !';
    }
    end()
}

function end(){
    if (playerScore == 5){
        document.querySelector('#show-result').innerHTML = 'You won !';
        modal.style.display = "block";
    }
    if (botScore == 5){
        document.querySelector('#show-result').innerHTML = 'You lost !';
        modal.style.display = "block";
    }
}

span.onclick = function() {
    modal.style.display = "none";
  }

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

replay.onclick = function() {
    location.reload()
}
