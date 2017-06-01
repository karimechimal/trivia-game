
// create timer 

var timedNumber = 11;
var intervalId;

function run() {
	intervalId = setInterval(decrement, 1000);
}
function decrement() {
	timedNumber --;
	$("#showNumber").html("<h2> Time Remaining: " + timedNumber + "</h2>");

	if( timedNumber ===0){
		stop();
		console.log("TIME IS UP!");
	}
}
function stop() {
	clearInterval(intervalId);
}


run();

// timer ends



//create questions


var questions = [{
	question: "What is the smallets planet in our solar system?",
	choices: ["neptune","sun", "earth","mercury"],
	correctAnswer: "mercury"
}];

var questionCounter = 0;




function createQuestion(){
	var loggedQuestion = questions[questionCounter].question;
	var correctAnswer = questions[questionCounter].correctAnswer;
	$("#showQ").empty().append("<h2> TEST"+ loggedQuestion +"</h2>");
	console.log(loggedQuestion);



	for(var i =0; i< questions[questionCounter].choices.length; i++){
		var loggedAnswers = questions[questionCounter].choices[i];
		console.log(loggedAnswers);
		$("#showA").prepend("<div>" + loggedAnswers + "</div>");



	}
}


createQuestion();