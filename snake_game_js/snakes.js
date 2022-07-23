// Game Constant & Variables
let inputDir = { x: 0, y: 0 };
const foodSound = new Audio('food.mp3');
const gameOverSound = new Audio('gameover.mp3');
const moveSound = new Audio('move.mp3');
const musicSound = new Audio('bg_song.mp3');
let speed = 10;
let lastPaintTime = 0;
let s = 0;
let snakeArr = [
    { x: 13, y: 15 }
]
let food = { x: 7, y: 8 }
//musicSound.play();
//Game Functions
function main(ctime) {
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}
function isCOllide(snake) {
    for (let i = 1; i < snakeArr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }
        if (snake[0].x > 18 || snake[0].x < 0 || snake[0].y > 18 || snake[0].y < 0) {
            return true;
        }
}
function gameEngine() {
    // update snake array and food
    if (isCOllide(snakeArr)) {
        gameOverSound.play();
        musicSound.pause();
        inputDir ={x:0 , y:0};
        alert("Game Over , Press any key to play again!!!!");
        snakeArr = [{ x: 13, y: 15 }]
        s = 0;
        scoreBox.innerHTML="Score = "+s;
    }
    // if u have eaten food, increment score and regenerate food
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        foodSound.play();
        s+=1;
        if(s>hiscoreval)
        {
            hiscoreval=s;
            localStorage.setItem('highScore',JSON.stringify(hiscoreval));
            // let h=localStorage.getItem('highScore')
            // if(h>s)
            //     highscoreval=h;
            highScore.innerHTML="High Score = "+hiscoreval;
        }
        scoreBox.innerHTML="Score = "+s;
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        let a = 2;
        let b = 16;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
    }
    // moving the snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    //Display snake and food
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index === 0) {
            snakeElement.classList.add('head');
        }
        else {
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    })
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}







// MAin logic starts here
let hiscore=localStorage.getItem("highScore");
if(hiscore === null)
{
    hiscoreval=0;
    localStorage.setItem("highScore",JSON.stringify(hiscoreval));
}
else{
    hiscoreval=JSON.parse(hiscore)
    highScore.innerHTML="High Score = "+hiscore;
}

window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    musicSound.play();
    inputDir = { x: 0, y: 1 } // game start
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case "ArrowDown":
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case "ArrowLeft":
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case "ArrowRight":
            inputDir.x = 1;
            inputDir.y = 0;
            break;

        default:
            break;
    }
})