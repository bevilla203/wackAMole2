/* FUTURE IDEAS:
    - implement high score
    - implement bombs; click on them = game over
    - figure out game over screen
*/
const start = document.querySelector("#start");
const moles = document.querySelectorAll('.mole');
const moleHole = document.querySelector(".moleHole");


// making the score change
let scoreHolder = document.querySelector("#score");
let score = 0;

// trying to create end game screen
const gameOver = document.createElement('div');
// END OF DECLARED VARIABLES SECTION

// creating game over screen (still in progress, haven't figured it out but will implement later)
gameOver.style.innerText = "Game Over! Good Job!"
gameOver.style.zIndex = "1";
gameOver.style.backgroundColor = "red";
gameOver.style.height = "500px";
gameOver.style.width = "500px";
gameOver.style.position = "absolute";

// this function will run and go through the whole process of the game
function popUp(){ // works!!
    let currentMole;
    // line below generates number b/t 1 and 9
    let randNumber = Math.floor(Math.random() * 9) + 1; // one at end makes the lowest number possible as 1
    //attached randomNumber to mole to create moleName = to ID
    currentMole = document.body.querySelector(`#mole${randNumber}`)
    // mole pops up!
    currentMole.style.display = "flex";
    // clicking adds score!
    currentMole.addEventListener("click", function(){
            score = score + 200;
            scoreHolder.innerText = score;
            currentMole.style.display = "none";
    })
    // timer so that moles go away on their own and don't persist
    let timer = null;
    timer = setTimeout(function time() {
        currentMole.style.display = "none";
    }, 1500) // 1.5 seconds (1500 milliseconds)
}

// if start is clicked, the game begins
start.addEventListener("click", function (){
    setTimeout(function(){
        start.style.boxShadow = "-2px 4px 5px #707070";
    },100)

    // setInterval creates how long each mole will pop up
    let timer = setInterval(popUp, 1500);
    // setTimeout stops the function
    setTimeout(function(){
        clearInterval(timer);
        // how do i add an element instead? I tried append but didn't seem to work
        alert("GAME OVER"); 
        body.append(gameOver); // this never shows...
    }, 15000) 
})

// colors button to signify the user is over the button
start.addEventListener("mouseover", function(){
    start.style.backgroundColor = "rgb(205, 205, 205)";
})

start.addEventListener("mouseout", function(){
    start.style.backgroundColor = "rgb(255, 255, 255)";
})

// colors the button a darker shade to signify button push
start.addEventListener("mousedown", function(){
    start.style.boxShadow = "inset 5em 1em #707070";
})




