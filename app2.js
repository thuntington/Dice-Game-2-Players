let startBtn = document.getElementById('startAgain-btn').style.display = 'none';
let player1;
let totalScore = 0;
let roll = document.querySelector('#roll-btn');
let btnHold = document.querySelector('#hold-btn');

// let diceArray = [dice1, dice2, dice3, dice4, dice5, dice6];
// 		for(let i = 0; i < 6; i++){
// 			diceArray[i] 
// 		}

let currentScore = document.getElementById('currentScore');

function rollDice() {
		
		let dice = Math.floor(Math.random() * 6) + 1;
		
		document.getElementById('currentScore').innerHTML = dice;
	
		if(dice > 1) {
			totalScore += dice;
			document.getElementById('totalScore').innerHTML ='Total:'+ totalScore;
            document.getElementById('dice1').style.display = 'block';
            document.getElementById('dice1').src = 'dice'+dice+'.png';
		
		} else if (totalScore > 20) {
			
			document.getElementById('status-win').innerHTML = 'You are a WINNER!!! Click Start Again to play!';
			document.getElementById('roll-btn').style.display = 'none';
			document.getElementById('startAgain-btn').style.display = 'block';
			document.getElementById('dice1').src = 'dice'+dice+'.png';
		
		} else {
			
			document.getElementById('status').innerHTML = 'You have rolled a 1! You have lost please try again';
			document.getElementById('totalScore').innerHTML = 'Total:'+ totalScore;
			document.getElementById('currentScore').innerHTML = 1;
			document.getElementById('roll-btn').style.display = 'none';
			document.getElementById('startAgain-btn').style.display = 'block';
			document.getElementById('dice1').src = 'dice'+dice+'.png';
					
		} 
};

function newGame(){
	
	document.getElementById('startAgain-btn').style.display = 'none';
	document.querySelector('#roll-btn').style.display = 'block';
	document.getElementById('totalScore').innerHTML = totalScore;
	document.getElementById('currentScore').innerHTML = 0;
	document.getElementById('status').style.display = 'none';
	document.getElementById('status-win').style.display = 'none';
};














