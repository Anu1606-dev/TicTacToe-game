let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
       if(turn){
        //player 0
        box.innerText = "⭕";
        turn = false;
       } else{
        box.innerText = "❌";
        turn = true;
       }

       box.disabled = true;

       checkWinner();
    });
});

const resetGame = () => {
    turn = true;
    enableButtons();
    msgContainer.classList.add("hide");
}

const enableButtons = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const disableButtons = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableButtons();
};

const checkWinner = () => {
    for(let pattern of winPatterns){
        let position1value = boxes[pattern[0]].innerText;
        let position2value = boxes[pattern[1]].innerText;
        let position3value = boxes[pattern[2]].innerText;

        if(position1value != "" && position2value != "" && position3value != ""){
            if(position1value === position2value && position2value === position3value){
                showWinner(position1value);
            }
        }
    }
}

resetbtn.addEventListener("click", resetGame);
newGamebtn.addEventListener("click", resetGame);