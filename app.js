// const dice1 = document.getElementById('dice1').style.visibility = 'hidden';
// const dice2 = document.getElementById('dice2').style.visibility = 'hidden';
// const dice3 = document.getElementById('dice3').style.visibility = 'hidden';
// const dice4 = document.getElementById('dice4').style.visibility = 'hidden';
// const dice5 = document.getElementById('dice5').style.visibility = 'hidden';
// const dice6 = document.getElementById('dice6').style.visibility = 'hidden';
let newGame = document.getElementById('startAgain-btn').style.visibility = 'hidden';
let player1;
let totalScore = 0;
let roll = document.querySelector('#roll-btn');
let btnHold = document.querySelector('#hold-btn');

// let diceArray = [dice1, dice2, dice3, dice4, dice5, dice6];
// 		for(let i = 0; i < 6; i++){
// 			diceArray[i] 
// 		}

let status = document.getElementById('status');

function rollDice() {
		
		let dice = Math.floor(Math.random() * 6) + 1;
		
		document.getElementById('currentScore').innerHTML = dice;
	
		if(dice > 1) {
			totalScore += dice;
			document.getElementById('totalScore').innerHTML = totalScore;
		    // document.getElementById('dice'). innerHTML =  dice;
		} else if (dice > 20) {
			alert('You are are Winner!');
			document.getElementById('roll-btn').style.visibility = 'hidden';
			document.getElementById('startAgain-btn').style.visibility = 'visible';
		
		} else {
			alert('You rolled a 1! You have lost!');
			status.innerHTML = 'You have rolled a 1! You have lost please try again'
			document.getElementById('totalScore').innerHTML = totalScore = Number(false);
			document.getElementById('currentScore').innerHTML = 0;
			document.getElementById('roll-btn').style.visibility = 'hidden';
			document.getElementById('startAgain-btn').style.visibility = 'visible';
			
		} 
};

	
	console.log(dice);
    console.log(totalScore);
	



// function newGame() {
// 	document.getElementById('currentScore').innerHTML = Number(false);
// 	document.getElementById('totalScore').innerHTML = totalScore = Number(false);
// 	document.getElementById('roll-btn').style.visibility = 'hidden';
//     document.getElementById('startAgain-btn').style.visibility = 'hidden';

// }

	

		