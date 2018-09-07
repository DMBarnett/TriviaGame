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
    var randomSlot = [2,3,4,5,6,7,8,9,10,11];
    var pickedQuestion = 1;
    var randomSlotPicker = 0;
    function randomObjSlot(){
        randomSlotPicker = Math.floor(Math.random()*randomSlot.length);
        pickedQuestion = randomSlot[randomSlotPicker];
    }
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
                time:12
            },
            {
                question:"According to the Movies, in which film does Aragorn recieve Anduil?",
                a1:"The Fellowship of the Ring",
                a2:"The Two Towers",
                a3:"The Return of the King",
                a4:"The Hobbit",
                answer: "The Return of the King",
                time:15
            },
            {
                question:"Who becomes king of Rohan after Theoden dies on Pelennor Fields?",
                a1:"Eowyn",
                a2:"Eaoden",
                a3:"Aragorn",
                a4:"Eomer",
                answer: "Eomer",
                time:19
            },
            {
                question:"What is the name of Aragorn's ring, the Ring of ?",
                a1:"Narya",
                a2:"Barahir",
                a3:"Nenya",
                a4:"Vilya",
                answer: "Barahir",
                time:13
            },
            {
                question:"What three swords were found in the Trolls Cave in The Hobbit?",
                a1:"Orcrist, Sting and Glamdring",
                a2:"Narsil, Glamdring and Hadhafang",
                a3:"Sting, Anduil and The White Knife of Legolas",
                a4:"Aeglos, Orcrist and Sting",
                answer: "Orcrist, Sting and Glamdring",
                time:10
            },
            {
                question:"What gift did Galadriel's gift to Legolas?",
                a1:"The White Knives",
                a2:"The Mirkwood Bow with Mirkwood Arrows",
                a3:"The Bow of the Galadhrim and Lorien Arrows",
                a4:"Elven Rope",
                answer: "The Bow of the Galadhrim and Lorien Arrows",
                time:11
            },
            {
                question:"How many wizards were there in Middle-Earth?",
                a1:"Two",
                a2:"Three",
                a3:"Five",
                a4:"Seven",
                answer: "Five",
                time:14
            },
            {
                question:"From whom did Elrond recieve his ring of power?",
                a1:"Gil Galad",
                a2:"Galadriel",
                a3:"Luthien",
                a4:"Aragorn I",
                answer: "Gil Galad",
                time:15
            },
            {
                question:"Who is the proprietor of the Prancing Pony?",
                a1:"Bill Ferny",
                a2:"Barliman Butterbur",
                a3:"Tom Pickthorn",
                a4:"Forlong the Fat",
                answer: "Barliman Butterbur",
                time:21
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
                time:18 
            },
            {
                question:"Who was the first actor to play a member of all three of the major alien races in Star Trek?",
                a1:"Leonard Nimoy",
                a2:"Christopher Lloyd",
                a3:"Adam West",
                a4:"Mark Lenard",
                answer: "Mark Lenard",
                time:19  
            },
            {
                question:"What is Sulu's primary position on the U.S.S. Enterprise?",
                a1:"Navigator",
                a2:"Helmsman",
                a3:"Gunner",
                a4:"Engineer",
                answer: "Helmsman",
                time:17
            },
            {
                question:"In the show, which Star Trek captain has an artificial heart?",
                a1:"Jean-Luc Picard",
                a2:"Benjamin Sisko",
                a3:"Kathryn Janeway",
                a4:"Jonathan Archer",
                answer: "Jean-Luc Picard",
                time:16
            },
            {
                question:"Who was the first Vulcan science officer aboard the starship Enterprise?",
                a1:"Sarek",
                a2:"Spock",
                a3:"T'Pol",
                a4:"Tuvok",
                answer: "T'Pol",
                time:15
            },
            {
                question:"Which alien race did Ronald Reagan say reminded him of Congress?",
                a1:"Borg",
                a2:"Klingons",
                a3:"Vulcans",
                a4:"Ferengi",
                answer: "Klingons",
                time:16  
            },
            {
                question:"Which species was the first to discover warp drive?",
                a1:"Vulcans",
                a2:"Humans",
                a3:"Borg",
                a4:"Klingons",
                answer: "Vulcans",
                time:17
            },
            {
                question:"What Star Trek character was labeled 'unknown sample' when discovered by Bajoran scientists?",
                a1:"Seven of Nine",
                a2:"Data",
                a3:"Spock",
                a4:"Odo",
                answer: "Odo",
                time:16 
            },
            {
                question:"Which Star Trek actor originally devised the Klingon language?",
                a1:"Leonard Nimoy",
                a2:"James Doohan",
                a3:"Mark Lenard",
                a4:"William Shatner",
                answer: "James Doohan",
                time:19
            },
            {
                question:"What character was adopted by the Vulcan ambassador Sarek?",
                a1:"Spock",
                a2:"T'Pol",
                a3:"Michael Burnham",
                a4:"Montgomery Scott",
                answer: "Michael Burnham",
                time:20
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
                question:"Which of these is a First Founding Legion?",
                a1:"Violators",
                a2:"Alpha Legion",
                a3:"Sons of Malice",
                a4:"Red Corsairs",
                answer: "Alpha Legion",
                time:12 
            },
            {
                question:"Who resides on the demon world Medrengard?",
                a1:"Abaddon",
                a2:"Fabius Bile",
                a3:"Angron",
                a4:"Perturabo",
                answer: "Perturabo",
                time:13
            },
            {
                question:"Which force travels aboard Terminus Est?",
                a1:"World Eaters",
                a2:"Emperors Children",
                a3:"Death Guard",
                a4:"Black Legion",
                answer: "Death Guard",
                time:14
            },
            {
                question:"Who allegedly began the Gothic War?",
                a1:"The Deceiver",
                a2:"Eldrad Ulthuan",
                a3:"Nightbringer",
                a4:"Abaddon the Despoiler",
                answer: "The Deceiver",
                time:10  
            },
            {
                question:"What is 'The Twisting Path'?",
                a1:"A company of Chaos Marines",
                a2:"A psychic power",
                a3:"A warp route",
                a4:"A prophet of Chaos",
                answer: "A psychic power",
                time:15
            },
            {
                question:"Who was killed at the Siege of the Emperors Palace, only to be resurected to kill forever?",
                a1:"Kharn the Betrayer",
                a2:"Lucius the Eternal",
                a3:"Alpharius",
                a4:"Fabius Bile",
                answer: "Kharn the Betrayer",
                time:18 
            },
            {
                question:"Angron was the first leader to invade which Imperial Planet?",
                a1:"Medusa V",
                a2:"Cadia",
                a3:"Terra",
                a4:"Armageddon",
                answer: "Armageddon",
                time:12
            },
            {
                question:"Who was captured by the Dark Angels and escaped 'The Rock' during the Eye of Terror Campaign?",
                a1:"Colenius",
                a2:"Cypher",
                a3:"Alpharius",
                a4:"Fabius",
                answer: "Cypher",
                time:11
            },
            {
                question:"How many First Founding Legions were there originally?",
                a1:"10",
                a2:"15",
                a3:"20",
                a4:"25",
                answer: "20",
                time:14 
            },
            {
                question:"Who of the following is a famous Inquisitor?",
                a1:"Gregor Eisenhorn",
                a2:"Ibram Gaunt",
                a3:"Horus Lupercal",
                a4:"Rogal Dorn",
                answer: "Gregor Eisenhorn",
                time:16 
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
            endGame();
            return;
        }
        if(questionNumber > 1){
            randomObjSlot();
        }
        $("#question").html(questionSets[chosenQuestionSet][pickedQuestion].question);
        $("#answerText0").html(questionSets[chosenQuestionSet][pickedQuestion].a1);
        $("#first").attr("value", questionSets[chosenQuestionSet][pickedQuestion].a1);
        $("#answerText1").html(questionSets[chosenQuestionSet][pickedQuestion].a2);
        $("#second").attr("value", questionSets[chosenQuestionSet][pickedQuestion].a2);
        $("#answerText2").html(questionSets[chosenQuestionSet][pickedQuestion].a3);
        $("#third").attr("value", questionSets[chosenQuestionSet][pickedQuestion].a3);
        $("#answerText3").html(questionSets[chosenQuestionSet][pickedQuestion].a4);
        $("#fourth").attr("value", questionSets[chosenQuestionSet][pickedQuestion].a4);
        timeRemaining = questionSets[chosenQuestionSet][pickedQuestion].time;
        run();
        if(questionNumber > 1){
            randomSlot.splice(randomSlotPicker, 1);
        };
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
                $(".score").text(scoreUpdate);
            }else{
                $(".score").text(score);
            }
            if (questionNumber-1 < 10) {
                var possibleUpdate = "0" + (questionNumber-1);
                $(".possible").text(possibleUpdate);
            }else{
                $(".possible").text(questionNumber-1);
            }
            fillInQuestion();
            answerBool = false;
        }else{
            if (questionNumber-1 < 10) {
                var possibleUpdate = "0" + (questionNumber-1);
                $(".possible").text(possibleUpdate);
            }else{
                $(".possible").text(questionNumber-1);
            };
            fillInQuestion();
        }
    }

    function answerTest(input){
        stop();
        if(input === questionSets[chosenQuestionSet][pickedQuestion].answer){
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
    
    function endGame(){
        stop();
        $("#questionWorkingArea").hide();
        var working = "";
        if(score === 0){
            working ="Were you even paying attention "+ firstName+ "?" 
        }else if(score < 5){
            working = "Sorry " + firstName+ " better luck next time!"
        }else if(score < 11){
            working =  "So close..........."
        }else{
            working = "Perfect!"
        }
        $("#finalScreenTitle").text(working);
        $("#finalScreen").show();
        return;
    }

})