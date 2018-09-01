'use strict'

$(document).ready(function(){
    var questionNumber = 1;
    var chosenQuestionSet ="";
    var questionSets = {
        firstQset:[
            "Title of first question set",
            {
                question:"What does the fox say?",
                a1:"Wonk",
                a2:"Flibbth",
                a3:"Moo",
                a4:"Fight Milk"
            },
            {
                question:"Who killed Roger Rabbit?",
                a1:"Col. Mustard",
                a2:"Scarlet",
                a3:"Bugs Bunny",
                a4:"Quantum entanglement"
            },
            {
                question:"What is the average velocity of an unladen swallow?",
                a1:"African or European",
                a2:"Blue",
                a3:"I don't know that",
                a4:"42" 
            },
        ],
        secondQset: [
            "Title of second question set",
            {
                question:"What does the fox say?",
                a1:"Wonk",
                a2:"Flibbth",
                a3:"Moo",
                a4:"Fight Milk"
            },
            {
                question:"Who killed Roger Rabbit?",
                a1:"Col. Mustard",
                a2:"Scarlet",
                a3:"Bugs Bunny",
                a4:"Quantum entanglement"
            },
            {
                question:"What is the average velocity of an unladen swallow?",
                a1:"African or European",
                a2:"Blue",
                a3:"I don't know that",
                a4:"42" 
            },
        ],
        thirdQset:[
            "Title of third question set",
            {
                question:"What does the fox say?",
                a1:"Wonk",
                a2:"Flibbth",
                a3:"Moo",
                a4:"Fight Milk"
            },
            {
                question:"Who killed Roger Rabbit?",
                a1:"Col. Mustard",
                a2:"Scarlet",
                a3:"Bugs Bunny",
                a4:"Quantum entanglement"
            },
            {
                question:"What is the average velocity of an unladen swallow?",
                a1:"African or European",
                a2:"Blue",
                a3:"I don't know that",
                a4:"42" 
            },
        ],    
    }

    $(".QsetButton").click(function(){
        $("#openingPage").hide();
        $("#questionWorkingArea").show();
        $("#questionTitle").html(questionSets[this.id][0]);
        chosenQuestionSet = this.id;
        fillInQuestion(this.id);
    })

    function fillInQuestion() {
        $("#question").html(questionSets[chosenQuestionSet][questionNumber].question);
        $("#answerText0").html(questionSets[chosenQuestionSet][questionNumber].a1);
        $("#answerText1").html(questionSets[chosenQuestionSet][questionNumber].a2);
        $("#answerText2").html(questionSets[chosenQuestionSet][questionNumber].a3);
        $("#answerText3").html(questionSets[chosenQuestionSet][questionNumber].a4);
        questionNumber++;
    }

    $("#submitButton").click(function(){
        var working = $('input[name="answerbox0"]:checked').val();
        console.log(working);
    })
})