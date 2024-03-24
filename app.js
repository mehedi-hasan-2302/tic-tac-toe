let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnO = true;

const winPatterns = [

// all the possible winning patterns
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8]

];

const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach( (box) =>{

    box.addEventListener("click", () =>{

        if(turnO) {
            box.innerText = "O";  //player O
            turnO = false;
        }
        else{
            box.innerText  = "X"; // player X
            turnO = true;
        }
        box.disabled = true; // after clicling the box, it will be diabled and cannot be clicked again

        checkWinner();
    });

   
});

const disableBoxes = () =>{
    for(let box of boxes) {    
        box.disabled = true;  // if the winner is selected then all other boxes will immediately be disabled.
    }
}
const enableBoxes = () =>{
    for(let box of boxes) {    
        box.disabled = false; 
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = ()=>{

    for(let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2!="" && pos3!="") {
            if(pos1 === pos2 && pos2 === pos3){
               showWinner(pos1);
            }
        }
    }
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);