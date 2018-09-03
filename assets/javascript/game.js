'use strict'

$(document).ready(function(){
    var questionNumber = 1;
    var answerBool = false;
    var score = 0;
    var chosenQuestionSet ="";
    var timeRemaining = 0;
    var questionSets = {
        firstQset:[
            "Title of first question set",
            {
                question:"What does the fox say?",
                a1:"Wonk",
                a2:"Flibbth",
                a3:"Moo",
                a4:"Fight Milk",
                answer: "Wonk",
                time:10
            },
            {
                question:"Who killed Roger Rabbit?",
                a1:"Col. Mustard",
                a2:"Scarlet",
                a3:"Bugs Bunny",
                a4:"Quantum entanglement",
                answer: "Scarlet",
                time:18
            },
            {
                question:"What is the average velocity of an unladen swallow?",
                a1:"African or European",
                a2:"Blue",
                a3:"I don't know that",
                a4:"42",
                answer: "42",
                time:8
            },
        ],
        secondQset: [
            "Title of second question set",
            {
                question:"What does the fox say?",
                a1:"Wonk",
                a2:"Flibbth",
                a3:"Moo",
                a4:"Fight Milk",
                answer: "42",
                time:10 
            },
            {
                question:"Who killed Roger Rabbit?",
                a1:"Col. Mustard",
                a2:"Scarlet",
                a3:"Bugs Bunny",
                a4:"Quantum entanglement",
                answer: "42",
                time:10 
            },
            {
                question:"What is the average velocity of an unladen swallow?",
                a1:"African or European",
                a2:"Blue",
                a3:"I don't know that",
                a4:"42",
                answer: "42",
                time:10  
            },
        ],
        thirdQset:[
            "Title of third question set",
            {
                question:"What does the fox say?",
                a1:"Wonk",
                a2:"Flibbth",
                a3:"Moo",
                a4:"Fight Milk",
                answer: "42",
                time:10 
            },
            {
                question:"Who killed Roger Rabbit?",
                a1:"Col. Mustard",
                a2:"Scarlet",
                a3:"Bugs Bunny",
                a4:"Quantum entanglement",
                answer: "42",
                time:10 
            },
            {
                question:"What is the average velocity of an unladen swallow?",
                a1:"African or European",
                a2:"Blue",
                a3:"I don't know that",
                a4:"42",
                answer: "42",
                time:10  
            },
        ],    
    }

    $(".QsetButton").click(function(){
        $("#openingPage").hide();
        $("#questionWorkingArea").show();
        $("#questionTitle").html(questionSets[this.id][0]);
        chosenQuestionSet = this.id;
        fillInQuestion();
        setInterval(timer(), 1000);
    })

    function fillInQuestion() {
        $("#question").html(questionSets[chosenQuestionSet][questionNumber].question);
        $("#answerText0").html(questionSets[chosenQuestionSet][questionNumber].a1);
        $("#first").attr("value", questionSets[chosenQuestionSet][questionNumber].a1);
        $("#answerText1").html(questionSets[chosenQuestionSet][questionNumber].a2);
        $("#second").attr("value", questionSets[chosenQuestionSet][questionNumber].a2);
        $("#answerText2").html(questionSets[chosenQuestionSet][questionNumber].a3);
        $("#third").attr("value", questionSets[chosenQuestionSet][questionNumber].a3);
        $("#answerText3").html(questionSets[chosenQuestionSet][questionNumber].a4);
        $("#fourth").attr("value", questionSets[chosenQuestionSet][questionNumber].a4);
        timeRemaining = questionSets[chosenQuestionSet][questionNumber].time;
        run();
        questionNumber++;
    }
    
    function updateScore(){
        clearInterval();
        if(answerBool){
            score++;
            $("#score").html(score);
            $("#possible").html(questionNumber-1);
            fillInQuestion();
            answerBool = false;
        }else{
            $("#possible").html(questionNumber-1);
            fillInQuestion();
        }
    }

    function answerTest(input){
        if(input === questionSets[chosenQuestionSet][questionNumber-1].answer){
            answerBool = true;
        }
        updateScore();
    }

    $(function(){
        $(".answerRadio").click(function(){
            var working = this;
            if ($(working).is(':checked')){
                answerTest(working.value);
            }
            $(working).prop("checked", false);
        });
    });
    function run(){
        
    }
    
    function timer(){
        timeRemaining--;
        if (timeRemaining < 10) {
            var seconds = "0" + timeRemaining;
            $("#display").text(seconds);
        }else{
            $("#display").text(timeRemaining);
        }
        if(timeRemaining === 0){
            clearInterval(theClock)
            updateScore();
            
        }
    };

})