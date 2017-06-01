
$(document).ready(function(){
var audio = new Audio("assets/javascript/audio.mp3");

if(typeof audio.loop == 'boolean'){
	audio.loop=true;
}
else{
audio.addEventListener('ended', function(){
	this.currentTime=0;
	this.play
}, false);
}
audio.play();

// create timer
var timedNumber = 11;
var intervalId;
var showPossibleAnswers = false;
var numWrong=0;
var numRight=0;
var numTimeOut=0;

//create questions
var questions = [{
	question: "What is the smallets planet in our solar system?",
	choices: ["neptune","sun", "earth","mercury"],
	correctAnswer: "mercury"
}, {
	question: "The beaver is the national emblem of which country?",
	choices: ["Mexico", "Japan", "Canada", "Anartica"],
	correctAnswer: "Canada"
}, {
	question: "How many players are there in a baseball team?",
	choices: ["nine", "ten", "eleven", "eight"],
	correctAnswer: "nine"

}, {
	question: "Which chess piece can only move diagonally?",
	choices: ["Bishop", "Rook", "King", "Pawn"],
	correctAnswer: "Bishop"
}, {
	question: "The average human body contains how many pints of blood?",
	choices:["four", "nine","six", "ten"],
	correctAnswer: "nine"
}, {
	question: "Which animal has the fastest metabolism?",
	choices:["Cheetah","Hummingbird","Squirrel","Ant"],
	correctAnswer:"Hummingbird"
}, {
	question: "When referring to computer memory, what does RAM stand for?",
	choices:["Randomly Assigned Metrics", "Random Access Memory", "Really Annoying Mammals", "Random Aspect Machine "],
	correctAnswer:"Random Access Memory"
}, {
	question:"The Statue of Liberty was given to the US by which country?",
	choices:["france", "china", "europe", "indonesia"],
	correctAnswer: "france"
}

];

var questionCounter = 0;
var correctAnswer;


function run() {
	decrement();
	intervalId = setInterval(decrement, 1000);

}
function decrement() {
	timedNumber--;
	$("#showNumber").html("<h2> Time Remaining: " + timedNumber + "</h2>");
	// createQuestion();
	


	if( timedNumber ===0){
		stop();
		TimesUp();
	}
}
function stop() {
	clearInterval(intervalId);
}
// timer ends
createQuestion();

function createQuestion(){

	console.log(questionCounter);
	if(questionCounter === 8)
			{
				endGame();
				return;
			}

	timedNumber = 11;
	run();
	$("#showA").empty();
	$("#showQ").empty();
	var loggedQuestion = questions[questionCounter].question;
	correctAnswer = questions[questionCounter].correctAnswer;
	

	$("#showQ").html("<h2>" + loggedQuestion + " </h2>");


		for(var i =0; i< questions[0].choices.length; i++){
			var loggedAnswers = questions[questionCounter].choices[i];

			
		
			if(correctAnswer === questions[questionCounter].choices[i]){
				$("#showA").append("<div id = 'c'>" + loggedAnswers + "</div>")
			}
			else{
				$("#showA").append("<div class ='w'>" +  loggedAnswers + "</div>");
			}

		

		}
	//onclick functions
			$("#c").on("click",function(){
				
				$("#showA").empty();
				$("#showQ").empty();
				stop();
				WinScreen();

			});

			$(".w").on("click",function(){
				
				$("#showA").empty();
				$("#showQ").empty();
				stop();
				LossScreen();
			});

	// Interlude Screens
			function WinScreen(){
			questionCounter ++;
			numRight++;
			$("#showQ").html("<div class = 'interludeText'> That was the correct Answer!!! </div>");
		
			setTimeout(createQuestion, 3000);
			};

			function LossScreen(){
			$("#showQ").html("<div class = 'interludeText'> That correct answer was: " + questions[questionCounter].correctAnswer +"</div>");
			questionCounter ++;
			numWrong++;
			
			setTimeout(createQuestion, 3000)
			};

			
}

			function TimesUp(){
			$("#showA").html("<div class = 'interludeText'> That correct answer was: " + questions[questionCounter].correctAnswer +"</div>");
			questionCounter ++;
			numTimeOut++;
		    $("#showQ").html("Times Up!");
		    
		    setTimeout(createQuestion, 3000);
			};

			function endGame(){
				console.log("end happened")
				$("#showA").empty();
				$("#showQ").empty();
				$("#showNymber").empty();
				$("#showQ").html("Game Over!!! Thanks for Playing");
				$("#showA").append("<div> Number of Correct Answers: " + numRight + "</div>");
				$("#showA").append("<div> Number of Wrong Answers: " + numWrong + "</div>");
				$("#showA").append("<div> Number of Skips: " + numTimeOut + "</div>");
				$("#showA").append("<button id = 'reset'>Play Again? </button>");
				stop();

				$("#reset").on("click", function(){
				questionCounter=0;
				createQuestion();
				numRight = 0;
				numWrong = 0;
				numTimeOut = 0;

			});

			};

			




})