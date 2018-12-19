	var wins = 0;
	var losses = 0;
	var currentScore = 0;
  
	var getRandomNumber = function (min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	var randomNumber = getRandomNumber(10, 20);
	$("#randomNumber").html(randomNumber);
  
	var barca = getRandomNumber(1, 12);
	var bayern = getRandomNumber(1, 12);
	var manu = getRandomNumber(1, 12);
	var psg = getRandomNumber(1, 12);
  
	var newValues = function() {
	  barca = getRandomNumber(1, 12);
	  bayern = getRandomNumber(1, 12);
	  manu = getRandomNumber(1, 12);
	  psg = getRandomNumber(1, 12);
	};
  
	$("#currentScore").html(currentScore);
  
	$("#barca").on("click", function() {
	  currentScore += barca;
	  $("#currentScore").html(currentScore);
	  updateScore();
	});
  
	$("#bayern").on("click", function() {
	  currentScore += bayern;
	  $("#currentScore").html(currentScore);
	  updateScore();
	});
  
	$("#manu").on("click", function() {
	  currentScore += manu;
	  $("#currentScore").html(currentScore);
	  updateScore();
	});
  
	$("#psg").on("click", function() {
	  currentScore += psg;
	  $("#currentScore").html(currentScore);
	  updateScore();
	});
  
	var updateScore = function() {
	  if (randomNumber === currentScore) {
		wins++;
		$("#wins").html(wins);
		$("#randomNumber").empty();
		randomNumber = getRandomNumber(19,120);
		$("#randomNumber").html(randomNumber);
		currentScore = 0;
		$("#currentScore").html(currentScore)
		newValues();
	  }
	  if (randomNumber < currentScore) {
		losses++;
		$("#losses").html(losses);
		$("#randomNumber").empty();
		randomNumber = getRandomNumber(19,120);
		$("#randomNumber").html(randomNumber);
		currentScore = 0;
		$("#currentScore").html(currentScore)
		newValues();
	  }
	};