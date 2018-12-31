// variables
var wins = 0;
var losses = 0;
var currentScore = 0;
var barca = Math.floor(Math.random() * 12 + 1);
var bayern = Math.floor(Math.random() * 12 + 1);
var manu = Math.floor(Math.random() * 12 + 1);
var psg = Math.floor(Math.random() * 12 + 1);
var randomNumber = Math.floor(Math.random() * 102 + 19);
$("#answer").html(randomNumber);

//click on a button to bring the score up
$("#barca").click(function () {
	currentScore += barca
	$("#currentScore").html(currentScore);
	checkWinOrLoss()
});
$("#bayern").click(function () {
	currentScore += bayern
	$("#currentScore").html(currentScore);
	checkWinOrLoss()
});
$("#manu").click(function () {
	currentScore += manu
	$("#currentScore").html(currentScore);
	checkWinOrLoss()
});
$("#psg").click(function () {
	currentScore += psg
	$("#currentScore").html(currentScore);
	checkWinOrLoss()
});

function checkWinOrLoss() {
	if (currentScore === randomNumber){
		win()
	}
	else if (currentScore > randomNumber){
		loss()
	}
}


//scoring
function win() {
	alert("You know your teams");
	wins++;
	$('#wins').text(wins);
	reset();
	console.log

};
function loss() {
	alert("You aren't a champion this time");
	losses++;
	$('#losses').text(losses);
	reset();
};

function reset() {
	randomNumber = Math.floor(Math.random() * 102 + 19);
	currentScore = 0;
	barca = Math.floor(Math.random() * 12 + 1);
	bayern = Math.floor(Math.random() * 12 + 1);
	manu = Math.floor(Math.random() * 12 + 1);
	psg = Math.floor(Math.random() * 12 + 1);
	$("#currentScore").html(currentScore);
	$("#answer").html(randomNumber);
}