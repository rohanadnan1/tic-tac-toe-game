let audioTurn = new Audio("./assets/ting.mp3")
let isGameOver = false;

let turn = "X"

function changeTurn(){
    return turn === "X" ? "O" : "X";
}

function  checkWin(){
    let boxText = document.getElementsByClassName("box-text")
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e => {
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")){
            document.querySelector(".turn").innerHTML = `<h2 class="turn">GAME WON BY <span class="special">${boxText[e[0]].innerText}</span></h2>`
            turn = ""
            isGameOver = true  
            audioTurn.pause()
        }
    })
}




let box = document.getElementsByClassName("box");
Array.from(box).forEach(element => {
    let boxText = element.querySelector(".box-text");
    element.addEventListener("click", function(){
        if(boxText.innerText === ""){
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play()
            checkWin();
            if(!isGameOver){
                document.querySelector(".turn").innerHTML = `<h2 class="turn">TURN FOR <span class="special">${turn}</span></h2>`
            }
        }
    })
})

let reset = document.getElementById("btn");
reset.addEventListener("click", function(){
    let boxText = document.querySelectorAll(".box-text");
    Array.from(boxText).forEach(elem => {
        elem.innerText = ""
    })
    turn = "X"
    isGameOver = false
    document.querySelector(".turn").innerHTML = `<h2 class="turn">TURN FOR <span class="special">${turn}</span></h2>`
})