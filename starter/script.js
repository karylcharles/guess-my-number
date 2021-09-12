'use strict';
let secretNumber = Math.floor(Math.random() * 20) + 1;
let message = document.querySelector('.message').textContent;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function(){
    let guess = Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent = 'No number! ⛔';
    }
    else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'You got it correct!🎉';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '20rem';
        if(score > highScore){
            document.querySelector('.highscore').textContent = score;
            highScore = score;
        }          
        else{
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else{
        if(guess > secretNumber){
            if(score > 1){
                document.querySelector('.message').textContent = 'Number to high📉';
                score--;
                document.querySelector('.score').textContent = score;
            }
            else{
                document.querySelector('.message').textContent = 'You lost the game☹';
                document.querySelector('.score').textContent = 0; 
                document.querySelector('body').style.backgroundColor = 'red';
                document.querySelector('.number').textContent = secretNumber;   
            }
        }
        else{
            if(score > 1){
                document.querySelector('.message').textContent = 'Number to low📈';
                score--;
                document.querySelector('.score').textContent = score;
            }
            else{
                document.querySelector('.message').textContent = 'You lost the game☹';
                document.querySelector('.score').textContent = 0; 
                document.querySelector('body').style.backgroundColor = 'red';
                document.querySelector('.number').textContent = secretNumber; 
            }
        }
    }
    
});

document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});