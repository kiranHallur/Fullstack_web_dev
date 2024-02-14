var buttonColours = ["red", "blue", "green", "yellow"]

var gamePattern = []  // used to store a random pattern
var userClickedPattern = []  // used to trace user's pattern
var level = 0
var start=false


// function to generate pattern
function nextSequence() {
    userClickedPattern=[] 
    var randomNumber = Math.floor((Math.random()) * 4)
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour);

    // animation for random color
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100)
    playSound(randomChosenColour)

    $("h1").html("Level " + level)
    level++;

}


$("body").on("keydown", function () {
    if(!start){
        nextSequence()
        start=true
    }
})

// callback function after click event
$(".btn").on("click", function () {
    var userChosenColour = $(this).attr('id')
    userClickedPattern.push(userChosenColour)

    playSound(userChosenColour)
    animatePress(userChosenColour)

    checkAnswer(userClickedPattern.length - 1);
})

//checking the user clicked pattern
function checkAnswer(index) {
    // console.log(index)
    if (gamePattern[index] == userClickedPattern[index]) {
        console.log("success")

         //checks complete userPattern with gamePattern
        if (gamePattern.length == userClickedPattern.length) {
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    }
    else {
        console.log("unsuccess")
        playSound("wrong")
        $("body").addClass("game-over")
        setTimeout(() => {
            document.querySelector('body').classList.remove('game-over')
        }, 200);

        $("h1").html("Game Over, Press Any Key to Reset")
        startOver()
    }
}



// play unique sound for assigned color
function playSound(name) {
    var sound = new Audio("sounds/" + name + ".mp3")
    sound.play()
}

// adding animation for each click
function animatePress(currentColour) {
    // $("#"+currentColour).addClass("pressed").fadeOut(100).removeClass("pressed").fadeIn(100)
    document.querySelector('#' + currentColour).classList.add('pressed')
    setTimeout(() => {
        document.querySelector('#' + currentColour).classList.remove('pressed')
    }, 100);
}


function startOver(){
    gamePattern = []
    level = 0
    start=false
}