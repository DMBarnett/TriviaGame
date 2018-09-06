'use strict'

$(document).ready(function(){
    var questionNumber = 1;
    var answerBool = false;
    var score = 0;
    var chosenQuestionSet ="";
    var timeRemaining = 0;
    var intervalId;
    var submit = false;
    var firstName = "";
    var lastName = "";
    var questionSets = {
        firstQset:[
            "The world of the Lord of the Rings",
            {
                question:"What is your name?",
                a1:"",
                a2:"Chris Pratt",
                a3:"Rand al'Thor",
                a4:"Kerry Washington",
                answer: "",
                time:10
            },
            {
                question:"What is the name of the story Bilbo wrote about his adventures?",
                a1:"The Hobbit by Bilbo Baggins",
                a2:"The Silmarillion by Bilbo Baggins",
                a3:"A Hobbits Tale by Bilbo Baggins",
                a4:"Into the West by Bilbo Baggins",
                answer: "A Hobbits Tale by Bilbo Baggins",
                time:18
            },
            {
                question:"By what name do the Elves call Gandalf?",
                a1:"The Grey Pilgrim",
                a2:"Incanus",
                a3:"Gandalf the Grey",
                a4:"Mithrandir",
                answer: "Mithrandir",
                time:8
            },
            {
                question:"According to the Movies, in which film does Aragorn recieve Anduil?",
                a1:"The Fellowship of the Ring",
                a2:"The Two Towers",
                a3:"The Return of the King",
                a4:"The Hobbit",
                answer: "The Return of the King",
                time:8
            },
            {
                question:"Who becomes king of Rohan after Theoden dies on Pelennor Fields?",
                a1:"Eowyn",
                a2:"Eaoden",
                a3:"Aragorn",
                a4:"Eomer",
                answer: "Eomer",
                time:8
            },
            {
                question:"What is the name of Aragorn's ring, the Ring of ?",
                a1:"Narya",
                a2:"Barahir",
                a3:"Nenya",
                a4:"Vilya",
                answer: "Barahir",
                time:8
            },
            {
                question:"What three swords were found in the Trolls Cave in The Hobbit?",
                a1:"Orcrist, Sting and Glamdring",
                a2:"Narsil, Glamdring and Hadhafang",
                a3:"Sting, Anduil and The White Knife of Legolas",
                a4:"Aeglos, Orcrist and Sting",
                answer: "Orcrist, Sting and Glamdring",
                time:8
            },
            {
                question:"What gift did Galadriel's gift to Legolas?",
                a1:"The White Knives",
                a2:"The Mirkwood Bow with Mirkwood Arrows",
                a3:"The Bow of the Galadhrim and Lorien Arrows",
                a4:"Elven Rope",
                answer: "The Bow of the Galadhrim and Lorien Arrows",
                time:8
            },
            {
                question:"How many wizards were there in Middle-Earth?",
                a1:"Two",
                a2:"Three",
                a3:"Five",
                a4:"Seven",
                answer: "Five",
                time:8
            },
            {
                question:"From whom did Elrond recieve his ring of power?",
                a1:"Gil Galad",
                a2:"Galadriel",
                a3:"Luthien",
                a4:"Aragorn I",
                answer: "Gil Galad",
                time:8
            },
            {
                question:"Who is the proprietor of the Prancing Pony?",
                a1:"Bill Ferny",
                a2:"Barliman Butterbur",
                a3:"Tom Pickthorn",
                a4:"Forlong the Fat",
                answer: "Barliman Butterbur",
                time:8
            },
        ],
        secondQset: [
            "Star Trek Trivia",
            {
                question:"What is your name?",
                a1:"",
                a2:"Chris Pratt",
                a3:"Rand al'Thor",
                a4:"Kerry Washington",
                answer: "",
                time:10
            },
            {
                question:"In Gene Roddenberry's original treatment for Star Trek, what was the name of the Starship?",
                a1:"Enterprise",
                a2:"Plymouth",
                a3:"Santa Maria",
                a4:"Yorktown",
                answer: "Yorktown",
                time:10 
            },
            {
                question:"Who was the first actor to play a member of all three of the major alien races in Star Trek?",
                a1:"Leonard Nimoy",
                a2:"Christopher Lloyd",
                a3:"Adam West",
                a4:"Mark Lenard",
                answer: "Mark Lenard",
                time:10  
            },
            {
                question:"What is Sulu's primary position on the U.S.S. Enterprise?",
                a1:"Navigator",
                a2:"Helmsman",
                a3:"Gunner",
                a4:"Engineer",
                answer: "Helmsman",
                time:10  
            },
            {
                question:"In the show, which Star Trek captain has an artificial heart?",
                a1:"Jean-Luc Picard",
                a2:"Benjamin Sisko",
                a3:"Kathryn Janeway",
                a4:"Jonathan Archer",
                answer: "Jean-Luc Picard",
                time:10
            },
            {
                question:"Who was the first Vulcan science officer aboard the starship Enterprise?",
                a1:"Sarek",
                a2:"Spock",
                a3:"T'Pol",
                a4:"Tuvok",
                answer: "T'Pol",
                time:10  
            },
            {
                question:"Which alien race did Ronald Reagan say reminded him of Congress?",
                a1:"Borg",
                a2:"Klingons",
                a3:"Vulcans",
                a4:"Ferengi",
                answer: "Klingons",
                time:10  
            },
            {
                question:"Which species was the first to discover warp drive?",
                a1:"Vulcans",
                a2:"Humans",
                a3:"Borg",
                a4:"Klingons",
                answer: "Vulcans",
                time:10  
            },
            {
                question:"What Star Trek character was labeled 'unknown sample' when discovered by Bajoran scientists?",
                a1:"Seven of Nine",
                a2:"Data",
                a3:"Spock",
                a4:"Odo",
                answer: "Odo",
                time:10  
            },
            {
                question:"Which Star Trek actor originally devised the Klingon language?",
                a1:"Leonard Nimoy",
                a2:"James Doohan",
                a3:"Mark Lenard",
                a4:"William Shatner",
                answer: "James Doohan",
                time:10
            },
            {
                question:"What character was adopted by the Vulcan ambassador Sarek?",
                a1:"Spock",
                a2:"T'Pol",
                a3:"Michael Burnham",
                a4:"Montgomery Scott",
                answer: "Michael Burnham",
                time:10  
            },
        ],
        thirdQset:[
            "Title of third question set",
            {
                question:"What is your name?",
                a1:"",
                a2:"Chris Pratt",
                a3:"Rand al'Thor",
                a4:"Kerry Washington",
                answer: "",
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
                question:"",
                a1:"",
                a2:"",
                a3:"",
                a4:"",
                answer: "",
                time:10  
            },
            {
                question:"",
                a1:"",
                a2:"",
                a3:"",
                a4:"",
                answer: "",
                time:10  
            },
            {
                question:"",
                a1:"",
                a2:"",
                a3:"",
                a4:"",
                answer: "",
                time:10  
            },
            {
                question:"",
                a1:"",
                a2:"",
                a3:"",
                a4:"",
                answer: "",
                time:10  
            },
            {
                question:"",
                a1:"",
                a2:"",
                a3:"",
                a4:"",
                answer: "",
                time:10  
            },
            {
                question:"",
                a1:"",
                a2:"",
                a3:"",
                a4:"",
                answer: "",
                time:10  
            },
            {
                question:"",
                a1:"",
                a2:"",
                a3:"",
                a4:"",
                answer: "",
                time:10  
            },
            {
                question:"",
                a1:"",
                a2:"",
                a3:"",
                a4:"",
                answer: "",
                time:10  
            },
            {
                question:"",
                a1:"",
                a2:"",
                a3:"",
                a4:"",
                answer: "",
                time:10  
            },
        ],    
    }

    $("#submit").click(function(){
        if($("#firstName").value == "" || $("#lastName").value == ""){
            alert("Please enter your name.");
            return;
        }
        var working = $("#firstName");
        firstName = working[0].value;
        working = $("#lastName");
        lastName = working[0].value;
        submit = true;
        $("#firstQset").prop("disabled", false);
        $("#secondQset").prop("disabled", false);
        $("#thirdQset").prop("disabled", false);
    })

    $(".QsetButton").click(function(){
        if(submit){
            $("#openingPage").hide();
            $("#questionWorkingArea").show();
            $("#questionTitle").html(questionSets[this.id][0]);
            chosenQuestionSet = this.id;
            questionSets[chosenQuestionSet][questionNumber].a1 = firstName + " " + lastName;
            questionSets[chosenQuestionSet][questionNumber].answer = firstName + " " + lastName;
            fillInQuestion();
        }
    })

    function fillInQuestion() {
        if(questionNumber === 12){
            console.log("finished");
            stop();
            $("#questionWorkingArea").hide();
            $("#finalScreen").show();
            return;
        }
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
    
    function run(){
        intervalId = setInterval(decrement, 1000);
    }
    
    function decrement() {
        timeRemaining--;
        if (timeRemaining < 10) {
            var seconds = "0" + timeRemaining;
            $("#display").text(seconds);
        }else{
            $("#display").text(timeRemaining);
        }
        if(timeRemaining === 0){
            clearInterval(intervalId);
            updateScore();
        }
    }

    function stop() {
        clearInterval(intervalId);
    }


    function updateScore(){
        clearInterval();
        if(answerBool){
            score++;
            if (score < 10) {
                var scoreUpdate = "0" + score;
                $("#score").text(scoreUpdate);
                console.log(scoreUpdate);
            }else{
                $("#score").text(score);
            }
            if (questionNumber-1 < 10) {
                var possibleUpdate = "0" + (questionNumber-1);
                console.log(possibleUpdate);
                $("#possible").text(possibleUpdate);
            }else{
                $("#possible").text(questionNumber-1);
            }
            fillInQuestion();
            answerBool = false;
        }else{
            if (questionNumber-1 < 10) {
                var possibleUpdate = "0" + (questionNumber-1);
                console.log(possibleUpdate);
                $("#possible").text(possibleUpdate);
            }else{
                $("#possible").text(questionNumber-1);
            };
            fillInQuestion();
        }
    }

    function answerTest(input){
        stop();
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
    

})