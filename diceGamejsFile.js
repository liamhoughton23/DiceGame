"use strict";
let playerScore = 0;
let playerTwoScore = 0;

function rollDie(numberOfSides){
	return Math.floor(Math.random()*(numberOfSides) + 1);
}

function firstRoll(){
	let roll; 
	roll = rollDie(20);
	let team;
	  if(roll === 1){
	  	 team = console.log("You are playing in Madison Square Garden as the New York Knicks")
	  	 roll = rollDie(4)
	  	 	if(roll === 1){
	  	 		console.log ("Against the Detroit Pistons")
	  	 	}
	  	 	else if (roll === 2){
	  	 		console.log ("Against the Philadephia 76ers")

	  	 	}
	  	 	else if (roll === 3){
	  	 		console.log("Against the Washington Wizards")

	  	 	}
	  	 	else{
	  	 		console.log("Against the Boston Celtics")
	  	 	}

	  }

	  else if(roll === 2){
	  	team = console.log("You are playing in the Staples center as the LA Lakers")
	  	roll = rollDie(4)
	  		 if(roll === 1){
	  	 		console.log ("Against the Boston Celtics")
	  	 	}
	  	 	else if (roll === 2){
	  	 		console.log ("Against the LA Clippers")

	  	 	}
	  	 	else if (roll === 3){
	  	 		console.log("Against the Utah Jazz")

	  	 	}
	  	 	else{
	  	 		console.log("Against the San Antonio Spurs")
	  	 	}


   
	  }
	  else if(roll === 3){
	  	team = console.log("You are playing in the Air Cananda Centre as the Toronto Raptors")
	  	roll = rollDie(4)	  	 	
	  	 if(roll === 1){
	  	 		console.log ("Against the Milwaukee Bucks")
	  	 	}
	  	 	else if (roll === 2){
	  	 	    console.log ("Against the New Orleans Pelicans")

	  	 	}
	  	 	else if (roll === 3){
	  	 		console.log("Against the Minnesota Timberwolves")

	  	 	}
	  	 	else{
	  	 		console.log("Against the Dnever Nuggets")
	  	 	}


	  }
	  else if(roll === 4){
	  	team = console.log("You are playing in the United Center as the Chicago Bulls")
	  	roll = rollDie(4)
	  	  if(roll === 1){
	  	 		console.log ("Against the Sacramento Kings")
	  	 	}
	  	 	else if (roll === 2){
	  	 		console.log ("Against the Cleveland Cavaliers")

	  	 	}
	  	 	else if (roll === 3){
	  	 		console.log("Against the Atlanta Hawks")

	  	 	}
	  	 	else{
	  	 		console.log("Against the Indiana Pacers")
	  	 	}


	  }
	  else if(roll === 5){
	  	team = console.log("You are playing in the Oracle Arena as the Golden State Warriors")
	  	roll = rollDie(4)
	  	  if(roll === 1){
	  	 		console.log ("Against the Celeveland Cavaliers")
	  	 	}
	  	 	else if (roll === 2){
	  	 		console.log ("Against the San Antonio Spurs")

	  	 	}
	  	 	else if (roll === 3){
	  	 		console.log("Against the Houston Rockets")

	  	 	}
	  	 	else{
	  	 		console.log("Against the LA Lakers")
	  	 	}
	

	  }
	  else if(roll === 6){
	  	team = console.log("You are playing in the American Airlines Arena as the Miami Heat")
	  	roll = rollDie(4)
	  	 if(roll === 1){
	  	 		console.log ("Against the New York Knicks")
	  	 	}
	  	 	else if (roll === 2){
	  	 		console.log ("Against the Chicago Bulls")

	  	 	}
	  	 	else if (roll === 3){
	  	 		console.log("Against the Atlanta Hawks")

	  	 	}
	  	 	else{
	  	 		console.log("Against the Orlando Magic")
	  	 	}



	  }
	  else if(roll === 7){
	  	team = console.log("You are playing in the Barclays Center as the Brookklyn Nets")
	  	roll = rollDie(4)
	  	  if(roll === 1){
	  	 		console.log ("Against the New York Knicks")
	  	 	}
	  	 	else if (roll === 2){
	  	 		console.log ("Against the Philadephia 76ers")

	  	 	}
	  	 	else if (roll === 3){
	  	 		console.log("Against the Charlotte Hornets")

	  	 	}
	  	 	else{
	  	 		console.log("Against the Chicago Bulls")
	  	 	}


	  }
	  else if(roll === 8){
	  	team = console.log("You are playing in the TD Bank Garden as the Boston Celtics")
	  	roll = rollDie(4)
	  	 if(roll === 1){
	  	 		console.log ("Against the Oklahoma City Thunder")
	  	 	}
	  	 	else if (roll === 2){
	  	 		console.log ("Against the Cleveland Cavaliers")

	  	 	}
	  	 	else if (roll === 3){
	  	 		console.log("Against the New York Knicks")

	  	 	}
	  	 	else{
	  	 		team = console.log("Against the Orlando Magic")
	  	 	}


	  }
	  else if(roll === 9){
	  	team = console.log("You are playing in the Bradley Center as the Milwaukee Bucks")
	  	roll = rollDie(4)
	  	 if(roll === 1){
	  	 		console.log ("Against the Minnesota Timberwolves")
	  	 	}
	  	 	else if (roll === 2){
	  	 		console.log ("Against the Chicago Bulls")

	  	 	}
	  	 	else if (roll === 3){
	  	 		console.log("Against the Sacramento Kings")

	  	 	}
	  	 	else{
	  	 		console.log("Against the Memphis Grizzlies")
	  	 	}


	  }
	  else if(roll === 10){
	  	team = console.log("You are playing in the Sleep Train Arena as the Sacramento Kings")
	  	roll = rollDie(4)
	     if(roll === 1){
	  	 	 	console.log ("Against the Golden State Warriors")
	  	 	}
	  	 	else if (roll === 2){
	  	 		console.log ("Against the LA Lakers")

	  	 	}
	  	 	else if (roll === 3){
	  	 		console.log("Against the LA Clippers")

	  	 	}
	  	 	else{
	  	 		console.log("Against the Portland Trail Blazers")
	  	 	}

	  
	  }
	  else if(roll === 11){
	  	team = console.log("You are playing in the Phillips Arena as the Atlanta Hawks")
	  	roll = rollDie(4)
	  	 if(roll === 1){
	  	 		console.log ("Against the Boston Celtics")
	  	 	}
	  	 	else if (roll === 2){
	  	 		console.log ("Against the New Orleans Pelicans")

	  	 	}
	  	 	else if (roll === 3){
	  	 		console.log("Against the Phoenix Suns")

	  	 	}
	  	 	else{
	  	 		console.log("Against the Dallas Mavericks")
	  	 	}


	  }
	  else if(roll === 12){
	  	team = console.log("You are playing in the Target Center as the Minnesota Timberwolves")
	  	roll = rollDie(4)
	  	 if(roll === 1){
	  	 		console.log ("Against the Golden State Warriors")
	  	 	}
	  	 	else if (roll === 2){
	  	 		console.log ("Against the Cleveland Cavaliers")

	  	 	}
	  	 	else if (roll === 3){
	  	 		console.log("Against the Portland Trail Blazers")

	  	 	}
	  	 	else{
	  	 		console.log("Against the Milwaukee Bucks")
	  	 	}


	  }
	  else if(roll === 13){
	  	team = console.log("You are playing in the Quicken Loans Arena as the Cleveland Cavaliers")
	  	roll = rollDie(4)
	  	  if(roll === 1){
	  	 		console.log ("Against the Golden State Warriors")
	  	 	}
	  	 	else if (roll === 2){
	  	 		console.log ("Against the Toronto Raptors")

	  	 	}
	  	 	else if (roll === 3){
	  	 		console.log("Against the Milwaukee Bucks")

	  	 	}
	  	 	else{
	  	 		console.log("Against the San Antonio Spurs")
	  	 	}


	  }
	  else if(roll === 14){
	  	team = console.log("You are playing in the Verizon Center as the Washington Wizards")
	  	roll = rollDie(4)
	  	  if(roll === 1){
	  	 		console.log ("Against the New York Knicks")
	  	 	}
	  	 	else if (roll === 2){
	  	 		console.log ("Against the Toronto Raptors")
	  	 	}
	  	 	else if (roll === 3){
	  	 		console.log("Against the Philadelphia 76ers")

	  	 	}
	  	 	else{
	  	 		console.log("Against the Miami Heat")
	  	 	}


	  }
	  else if(roll === 15){
	  	team = console.log("You are playing in the FedEx Forum as the Memphis Grizzlies")
	  	roll = rollDie(4)
	  	  if(roll === 1){
	  	 		console.log ("Against the San Antonio Spurs")
	  	 	}
	  	 	else if (roll === 2){
	  	 		console.log ("Against the Houston Rockets")

	  	 	}
	  	 	else if (roll === 3){
	  	 		console.log("Against the Golden State Warriors")

	  	 	}
	  	 	else{
	  	 		console.log("Against the Milwaukee Bucks")
	  	 	}


	  }
	  else if(roll === 16){
	  	team = console.log("You are playing in the Amway Center as the Orlando Magic")
	  	roll = rollDie(4)
	  	 if(roll === 1){
	  	 		console.log ("Against the Miamai Heat")
	  	 	}
	  	 	else if (roll === 2){
	  	 		console.log ("Against the Charlotee Hornets")

	  	 	}
	  	 	else if (roll === 3){
	  	 		console.log("Against the Brookklyn Nets")

	  	 	}
	  	 	else{
	  	 		console.log("Against the Atlanta Hawks")
	  	 	}


	  }
	  else if(roll === 17){
	  	team = console.log("You are playing in the Pepsi Center as the Dever Nuggets")
	  	roll = rollDie(4)
	  	 if(roll === 1){
	  	 		console.log ("Against the Portland Trail Blazers")
	  	 	}
	  	 	else if (roll === 2){
	  	 		console.log ("Against the Golden State Warriors")

	  	 	}
	  	 	else if (roll === 3){
	  	 		console.log("Against the Chicago Bulls")

	  	 	}
	  	 	else{
	  	 		console.log("Against the New Orleans Pelicans")
	  	 	}


	  }
	  else if(roll === 18){
	  	team = console.log("You are playing in the American Airlines Center as the Dallas Maverics")
	  	roll = rollDie(4)
	  	  if(roll === 1){
	  	 		console.log ("Against the Houston Rockets")
	  	 	}
	  	 	else if (roll === 2){
	  	 		console.log ("Against the Phoenix Suns")

	  	 	}
	  	 	else if (roll === 3){
	  	 		console.log("Against the San Antonio Spurs")

	  	 	}
	  	 	else{
	  	 		console.log("Against the Atlanta Hawks")
	  	 	}


	  }
	  else if(roll === 19){
	  	team = console.log("You are playing in the Rose Garden as the Portland Trail Blazers")
	  	roll = rollDie(4)
	  	 if(roll === 1){
	  	 		console.log ("Against the Minnesota Timberwolves")
	  	 	}
	  	 	else if (roll === 2){
	  	 		console.log ("Against the Sacramento Kings")

	  	 	}
	  	 	else if (roll === 3){
	  	 		console.log("Against the LA Clippers")

	  	 	}
	  	 	else{
	  	 		console.log("Against the LA Lakers")
	  	 	}


	  }
	  else{
	  	team = console.log("You are playing in the Toyota Center as the Houston Rockets")
	  	roll = rollDie(4)
	     if(roll === 1){
	  	 		console.log ("Against the Golden State Warriors")
	  	 	}
	  	 	else if (roll === 2){
	  	 		console.log ("Against the San Antonio Spurs")

	  	 	}
	  	 	else if (roll === 3){
	  	 		console.log("Against the Minnesota Timberwolves")

	  	 	}
	  	 	else{
	  	 		console.log("Against the Oklahoma City Thunder")
	  	 	}


	  }

	return roll;
}


function shoot(){
	//console.clear();
	let roll = rollDie(10);
	let counter = 0;
	let score;
		if(roll === 1){
			score = counter; 
			playerScore = playerScore + score;
			console.log("This play you missed. Total Score: "+ playerScore);
			return playerScore;

			
		}
		else if(roll === 2){
			score = counter;
			playerScore = playerScore + score;
			console.log("This play you missed. Total Score: "+ playerScore);
			return playerScore;

			
		}
		else if(roll === 3){
			score = counter;
			playerScore = playerScore + score; 
			console.log("This play you missed. Total Score: "+ playerScore);
			return playerScore;

			
		}
		else if(roll === 4){
			score = counter; 
			playerScore = playerScore + score;
			console.log("This play you missed. Total Score: "+ playerScore);
			return playerScore;

			
		}
		else if(roll === 5){
			score = counter; 
			playerScore = playerScore + score;
			console.log("This play you missed. Total Score: "+ playerScore);
			return playerScore;

			
				
		}
		else {
			score = counter + 2;
			playerScore = playerScore + score;
			console.log("This play you scored: " + score +" "+ "Total Score: "+ playerScore);
			return playerScore;
		}


}


function driveTheLane(){
	//console.clear();
	let roll = rollDie(8);
	let counter = 0;
	let score;
		if(roll === 1 || roll === 2){
			rollDie(6);
				if(roll === 1){
				score = counter + 1;
				playerScore = playerScore + score;
				console.log("This play you missed, got fouled, and made the free throw " + score + " Total Score: "+ playerScore);
				return playerScore;
			}
				else if (roll === 2 || roll === 3){
					score = counter;
					playerScore = playerScore + score;
					console.log("This play you missed. Total Score: " + playerScore)
				}
		}
		else if(roll === 3) { 
			rollDie(6);
				if(roll === 1 || roll === 2 || roll === 3 || roll === 4){
					score = counter + 2;
					playerScore = playerScore + score;
				    console.log("This play you made it, got fouled, and made the free throw: " + score + " "+ "Total Score: " + playerScore);
				    return playerScore;
				}
				else {
					score = counter + 1;
					playerScore = playerScore + score;
					console.log("This play you made it, got fouled and missed the free throw: " + score + " " + "Total Score: " + playerScore);
					return playerScore;
				}


		}	
		else {
			score = counter + 1;
			playerScore = playerScore + score;
			console.log("This play you scored: " + score +" "+ "Total Score: "+ playerScore);
			return playerScore;
		}

}
function shoot3(){
	//console.clear();
	let roll = rollDie(12);
	let counter = 0;
	let score;
		if(roll === 1 || roll === 2 || roll === 3|| roll === 4){
			score = counter + 3;
			playerScore = playerScore + score;
			console.log("This play you scored: " + score +" "+ "Total Score: "+ playerScore);
			return playerScore;
		}
		else{
			score = counter;
			playerScore = playerScore + score;
			console.log("This play you missed. Total Score:" + playerScore);
			return playerScore;
		}

}
function callingAllFunctions(){
	let die = rollDie();
	let team = firstRoll(rollDie);
	return team;
}


function numberOfPlayers(){
	let numPlayers = prompt("Please enter the number of players.");
	switch(numPlayers){
		case "1":
		 callingAllFunctions();
		 break;

		case "2":
		 callingAllFunctions();
		break;

		default:
		"Please enter in 1 or 2";
	}
}





// function finalScore(){
// 	let score1 = shoot(rollDie);
// 	let score2 = driveTheLane(rollDie);
// 	let score3 = shoot3(rollDie);
// 	let finalS = score1 + score2 + score3;
// 	console.log(finalS);
// 	return finalS;
// }




let trial = firstRoll();
