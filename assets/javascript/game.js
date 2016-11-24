/* Array of Gems */
gems = ['assets/images/redcrystal.jpeg', 'assets/images/bluecrystal.jpg', 'assets/images/orangecrystal.jpeg', 'assets/images/greencrystal.png'];

/*Declaration of Variables */

var wins = 0;
var losses = 0;
var userInput = 0;
var winAudio = new Audio('assets/images/finishHim.mp3');
var winAudioLoss = new Audio('assets/images/MkLose.mp3')
// var randomNumber = ;
var redCrystal = 0;
var blueCrystal = 0;
var greenCrystal = 0;
var orangeCrystal = 0;


/* Functions that will be used */
// newGems();
var totalScore = minMaxRandom(19, 120);
createGems();

$("#totalScore").text(totalScore);
// newGame();

function winLoss(totalScore, userInput) {
    if (totalScore === userInput) {
        $('#status').text('You won!!!!');
        wins++;
        $('#wins').text(wins);
        console.log(wins)
        $('#crystals').empty();
        $('#winOrLoseNotification').html("FINISH HIM!");
        winAudio.play();
        reset();


    } else if (userInput > totalScore) {
        $('#status').text('You lost!')
        losses++;
        $('#loss').text(losses);
        $('#crystals').empty();
        $("#losses").text(losses);
        $('#winOrLoseNotification').html("You are not Worthy!");
        winAudioLoss.play();
        reset();
    } else {
        $('#winOrLoseNotification').html("");
    }
}

//this funtion closes on line 51.  This will return a random number between the max and the min number.
function minMaxRandom(min, max) {
    var randomNumber = Math.floor((Math.random() * (max - min) + min));
    return randomNumber;

};

//This section is for creating click listeners on each of the crystals.
$("#redCrystal").on("click", function() {
    userInput += redCrystal;
    //userInput = userInput+redCystal
    $("#currentScore").text(userInput);
    winLoss(totalScore, userInput);

});
$("#blueCrystal").on("click", function() {
    userInput += blueCrystal;
    $("#currentScore").text(userInput);
    winLoss(totalScore, userInput);
});
$("#greenCrystal").on("click", function() {
    userInput += greenCrystal;
    $("#currentScore").text(userInput);
    winLoss(totalScore, userInput);
});



$("#orangeCrystal").on("click", function() {
    userInput += orangeCrystal;
    $("#currentScore").text(userInput);
    winLoss(totalScore, userInput);

});

function reset() {
    userInput = 0;
    totalScore = minMaxRandom(19, 120);
    $("#totalScore").text(totalScore);
    createGems();
    var newGame = true;

}

function createGems() {
    redCrystal = minMaxRandom(1, 12);
    blueCrystal = minMaxRandom(1, 12);
    greenCrystal = minMaxRandom(1, 12);
    orangeCrystal = minMaxRandom(1, 12);
}