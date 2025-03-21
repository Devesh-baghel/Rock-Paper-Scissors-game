let score = JSON.parse(localStorage.getItem('score')) ||
{
    wins: 0, losses: 0, draws: 0
}
updateScoreElement();
let isAutoPlaying = false;
let intervalId;
function autoPlay(){
    let autoPlay= document.querySelector('.js-auto-play');
    if(!isAutoPlaying){
       
          if(autoPlay.innerHTML==='Auto Play'){
            autoPlay.classList.add('is-playing');
            autoPlay.innerHTML='Stop Playing';
           }
             
      
       intervalId= setInterval(function(){
            const playerMove=pickComputerMove();
            playGame(playerMove);
        },1000);
        isAutoPlaying=true;
    }
    else if(isAutoPlaying){
        if(autoPlay.innerHTML==='Stop Playing'){  autoPlay.classList.remove('is-playing');
            autoPlay.innerHTML='Auto Play'
         }
       
     
        clearInterval(intervalId);
        isAutoPlaying=false;
    }
}
   


function playGame(playerMove) {

    const computerMove = pickComputerMove();
    let result = '';
    if (playerMove === 'rock') {


        if (computerMove === 'rock') {
            result = 'Tie'
        }
        else if (computerMove === 'paper') {
            result = 'You lose';
        }
        else if (computerMove === 'scissors') {
            result = 'You win';
        }

    }
    else if (playerMove === 'paper') {


        if (computerMove === 'rock') {
            result = 'You win';
        }
        else if (computerMove === 'paper') {
            result = 'Tie';
        }
        else if (computerMove === 'scissors') {
            result = 'You lose';
        }


    }
    else if (playerMove === 'scissors') {


        if (computerMove === 'rock') {
            result = 'You lose'
        }
        else if (computerMove === 'paper') {
            result = 'You win';
        }
        else if (computerMove === 'scissors') {
            result = 'Tie';
        }

    }
    if (result === 'You win') {
        score.wins += 1;

    }
    else if (result === 'You lose') {
        score.losses += 1;
    }
    else {
        score.draws += 1;
    }
    localStorage.setItem('score', JSON.stringify(score));
   

   document.querySelector('.js-result').innerHTML= result;
   document.querySelector('.js-moves').innerHTML= `You <img class="move-image" src="emogis/${playerMove}-emoji.png" "> 
<img class="move-image" src="emogis/${computerMove}-emoji.png"> Computer `;
   updateScoreElement();

    // alert(`you picked ${playerMove}.Computer picked ${computerMove}. ${result}\n
    // wins: ${score.wins} losses: ${score.losses} draws: ${score.draws}`);

}

 function updateScoreElement(){
    document.querySelector('.js-score')
.innerHTML= ` wins: ${score.wins} losses: ${score.losses} draws: ${score.draws}`; 

 }

function pickComputerMove() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        return 'rock';

    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        return 'paper';

    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      return 'scissors';

    }
   
}