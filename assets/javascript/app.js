/*-- Kit Chan
Coding Bootcamp UT-Austin
Oct 2016
Assignment week-5-trivia game
source from: http://www.partycurrent.com/support-files/chinese-etiquette-dining-trivia-quiz.pdf */

//questions
var question0 = {
    question: "When you point chopsticks at someone, it means?",
    answer: "You are insulting that person",
    choices: ["You are wishing luck on that person", "You are insulting that person", "You are respecting that person", "You are forgiving that person"],
    rightAnswer: 1,
    rightImage: "assets/images/iu-16.jpeg"
};

var question1 = {
    question: "Why never bang your chopsticks like drumsticks?",
    answer: "Tells others at the table you are a beggar",
    choices: ["Tells other at that table you are incompetent", "Tells others at the table you disrespect their Children", "Tells others at the same table you are impotent", "Tells others at the same table you are a begger"],
    rightAnswer: 3,
    rightImage: "assets/images/drum.jpeg"
};

var question2 = {
    question: "Where do you put the bones from meat you've eaten?",
    answer: "On the serving plate provided",
    choices: ["On the table napkin provided", "On the table cloth provided", "On the serving plate provided", "In your own bowl only"],
    rightAnswer: 2,
    rightImage: "assets/images/bone.jpg"
};

var question3 = {
    question: "What does slurping your soup means?",
    answer: "You are enjoying the food",
    choices: ["You are enjoying the company", "The conversation is boaring", "You are enjoying the food", "You are hungry"],
    rightAnswer: 2,
    rightImage: "assets/images/soup.jpeg"
};

var question4 = {
    question: "If you can't reach a dish, what's the best thing to do?",
    answer: "Ask politely for the dish to be passed to you",
    choices: ["Move the dish to your side of the table", "Ask politely for the dish to be passed to you", "Wait until an elder or host offers you the dish", "Ask the waiter to bring the dish to you"],
    rightAnswer: 1,
    rightImage: "assets/images/dining.jpeg"
};

var question5 = {
    question: "When everyone's seated, when can you start eating?",
    answer: "Only when the dinner host indicates you can",
    choices: ["Only when the dinner host indicates you can", "Only when the eldest boy indicates you can", "Only when the venue host indicates you can", "You are hungry"],
    rightAnswer: 0,
    rightImage: "assets/images/canwestarteating.gif"
};

var question6 = {
    question: "Why would a waiter combine two half-finished dishes onto one plate, if the meal isn't yet over?",
    answer: "To make room for new dishes at the table",
    choices: ["To nudge you into ordering more dishes", "To let you know the dessert courses are arriving", "To make room for new dishes at the table", "To indicate they need your table for new customers"],
    rightAnswer: 2,
    rightImage: "assets/images/makeroom.jpg"
};

var question7 = {
    question: "How do you eat rice with chopsticks?",
    answer: "Scoop rice into your mouth, by bringing the rice bowl up to your chin",
    choices: ["Pick up clumps of rice and bring them to your mouth", "Eat a grain at a time, by bringing the rice bowl up to your chin", "Scoop rice into your mouth, by bringing the rice bowl up to your chin", "Bring your mouth to the table and use chopsticks as a scoop"],
    rightAnswer: 2,
    rightImage: "assets/images/Japanese-Rice-Bowl.jpg"
};

var question8 = {
    question: "Why is'fighting to pay the bill' considered good Chinese dining customs, even if the host intends to pay(or, the winner of the 'fight'?",
    answer: "Shows appreciation and gratitude",
    choices: ["Shows off that you are Rich", "Shows appreciation and gratitude", "Informs the host you respect his/her family", "Lets everyone know you're not rude or self-centered"],
    rightAnswer: 2,
    rightImage: "assets/images/paythebill.jpg"
};

var question9 = {
    question: "What is the best way to turn down the drinking of alcohol at the table without offending the host?",
    answer: "Refuse offers to drink with as much politeness as possible",
    choices: ["Tell the host you are pregnant", "Accept the offers, but use them to buy the host a bottle of wine", "Refuse offers to drink with as much politeness as possible", "Tell the host you are paying for the meal before the meal has started"],
    rightAnswer: 2,
    rightImage: "assets/images/drunk.jpeg"
};


var questionToAsk = [question0, question1, question2, question3, question4, question5, question6, question7, question8, question9];

var questionIdx = 0;

//Game scores
var gameScores = {
    answeredRight: 0,
    answeredNoRight: 0,
    missed: 0
};

function resetVariables() {
    gameScores.answeredRight = 0;
    gameScores.answeredNoRight = 0;
    gameScores.missed = 0;
    questionIdx = 0;

    $("#score").html("");
    $("#reset").hide();
}

function nextQuestion() {
    questionIdx++;

    if (questionIdx < questionToAsk.length) {
        displayQuestion();
        $("#messageBox").hide();
        $("#timerShow").show();
        $(".btn").show();
        timer.stop();
        timer.reset();
        timer.start();
    }

    //Shows score at the end of the game
    else {
        $("#messageBox").hide();
        $('#question').hide();
        $("#score").html("<div>" + "Game Over! <br> Look at your score here:" + "</div>" +
            "<div>" + "Corrects: " + gameScores.answeredRight + "</div>" +
            "<div>" + "Wrongs: " + gameScores.answeredNoRight + "</div>" +
            "<div>" + "Missed: " + gameScores.missed + "</div>"
        );

        timer.stop();
        $('#timerShow').html('00:00');

        $("#reset").show();

        $(".resetMe").click(function() {
            $("#messageBox").hide();
            resetVariables();
            displayQuestion();
            $("#question").show();
            $(".btn").show();
            $("#timerShow").show();
            timer.stop();
            timer.reset();
            timer.start();

        });

    }

}
//Timer Countdown 

var timer = {
    time: 10,

    reset: function() {
        timer.time = 10;

        //change the "display" div to "05"
        $("#timerShow").html("Sec left: " + "10");

    },

    start: function() {
        //Use setInterval to start the count here
        counter = setInterval(timer.count, 1000);
    },

    stop: function() {
        //Use clearInterval to stop the count here
        clearInterval(counter);
    },

    count: function() { //increment time by 1, remember we can't use "this" here
        timer.time--;
        //Get the current time, pass that into the stopwatch.timeConverter function, and save the result in a variable
        var converted = timer.timeConverter(timer.time);
        //Use the variable you just created to show the converted time in the "display" div
        $("#timerShow").html("Sec left: " + converted);

        if (timer.time == 0) {
            //Display correct answer if timer runs out and question is missed
            $("#messageBox").show(); //show the correct gif div
            $("#timerShow").hide();
            $(".btn").hide();
            $("#messageBox").html("<h2>Out of Time!!! <br> The correct answer is: <br>" + questionToAsk[questionIdx].answer + "</h2>");
            gameScores.missed++;

            setTimeout(nextQuestion, 3000);
        }
    },

    timeConverter: function(t) { //This function takes the current time in seconds and converts it to minutes and seconds but I want it only shows the seconds.
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes === 0) {
            minutes = "00";
        } else if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return seconds;
    }
};

//Display Question

function displayQuestion() {
    $("#question").html("<h3>" + questionToAsk[questionIdx].question + "</h3>");
    $("#button0").text(questionToAsk[questionIdx].choices[0]);
    $("#button1").text(questionToAsk[questionIdx].choices[1]);
    $("#button2").text(questionToAsk[questionIdx].choices[2]);
    $("#button3").text(questionToAsk[questionIdx].choices[3]);
}
//Start game on button press


$(document).ready(function()


    { //hide all until start button is pressed
        $('#timerShow').hide();
        $('.btn').hide();
        $("#reset").hide();

        $('#startMe').on("click", function()

            {
                displayQuestion();
                timer.reset();
                timer.start();
                //show timer and buttons
                $("#timerShow").show();
                $(".btn").show();
                $("#reset").hide();
                $("#starte").hide();
            });

        //player input check answer
        $(".btn").click(function() {


            if (questionIdx < questionToAsk.length) {
                var playerBtnValue = ($(this).attr("data-value"));
                //Check for wins
                if (playerBtnValue == questionToAsk[questionIdx].rightAnswer) {

                    $("#messageBox").html("<h2><p>Correct!</p></h2><img src='" + questionToAsk[questionIdx].rightImage + "' height = 200 width = 350 alt='correct'>");
                    gameScores.answeredRight++; //increment score
                    //reset timer
                    timer.stop();
                    timer.reset();
                } else {

                    $("#messageBox").html("<h2><p>Wrong! <br> The correct answer was: <br>" + questionToAsk[questionIdx].answer + "</p></h2>");
                    gameScores.answeredNoRight++;
                    //reset timer
                    timer.stop();
                    timer.reset();
                }

                $("#messageBox").show(); //show the correct img div
                $("#timerShow").hide();
                $(".btn").hide();

                setTimeout(nextQuestion, 3000);

            }
        });
    });
