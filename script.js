var dice;
var score = [0, 0, 0];
var activePlayer = 1;
var roundScore = 0;
var dot = "url(/images/dot.png)";



document.querySelector('.new-game').addEventListener('click', function() {

    clearGame();

});


document.querySelector('.roll-dice').addEventListener('click', function() {

    dice = Math.round(Math.random() * 5) + 1;
    //document.querySelector('.dice-display').style.display = 'block';
    var diceDom = document.querySelector('.dice-display');
    diceDom.style.display = 'block';
    var bigSize = ["url('/images/dice-1.png')",
        "url('/images/dice-2.png')",
        "url('/images/dice-3.png')",
        "url('/images/dice-4.png')",
        "url('/images/dice-5.png')",
        "url('/images/dice-6.png')"
    ];
    document.querySelector('.dice-display').style.backgroundImage = bigSize[dice - 1];

    if (dice != 1) {
        roundScore += dice;
        document.querySelector('.player' + activePlayer + '-current-score').textContent = roundScore;


    } else {
        document.querySelector('.player' + activePlayer + '-current-score').textContent = 0;
        switchPlayers();
        roundScore = 0;
    }

});

document.querySelector('.hold').addEventListener('click', function() {


    document.querySelector('.player' + activePlayer + '-current-score').textContent = 0;
    score[activePlayer] += roundScore;
    if (score[activePlayer] >= 100) {
        document.querySelector('#score' + activePlayer).textContent = 100;
        alert(activePlayer + ' ' + 'is the winner!');
        clearGame();
        roundScore = 0;
    } else {
        document.querySelector('#score' + activePlayer).textContent = score[activePlayer];
        roundScore = 0;


    }
    switchPlayers();


});


function clearGame() {
    document.querySelector("#score1").textContent = 0;
    document.querySelector("#score2").textContent = 0;
    document.querySelector(".player1-current-score").textContent = 0;
    document.querySelector(".player2-current-score").textContent = 0;
    score = [0, 0, 0]

}

function switchPlayers() {
    document.querySelector('#name' + activePlayer).style.backgroundImage = 'none';
    activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
    document.querySelector('#name' + activePlayer).style.backgroundImage = dot;
    var diceDom = document.querySelector('.dice-display');
    diceDom.style.display = 'none';


}