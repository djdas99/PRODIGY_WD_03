let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset_btn");
let newGameBtn = document.querySelector("#new_btn");
let msgContent = document.querySelector(".msg-content");
let msg = document.querySelector("#msg");


let turnO = true; //playerX, playerO

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
box.addEventListener("click",() =>
{
    console.log("box was clicked");
    if(turnO){
        box.innerText = "O";
        turnO = false;}
        else{
            box.innerText ="X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();

  });
});

const winnerfunc = (winner) =>{
    msg.innerText =`Congratulations, Winner is ${winner}`;
    msgContent.classList.remove("hide");
    disableBoxes();
}


const checkWinner = () => {
    for ( let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if ( pos1Val != ""&& pos2Val !="" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner",pos1Val);
                winnerfunc(pos1Val);
            }
        }
    }
}
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const resetGame =() =>{
    turnO = true;
    enableBoxes();
    msgContent.classList.add("hide");}

const enableBoxes =() =>{
    for (let box of boxes){
        box.disabled =false;
        box.innerText ="";
    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click", resetGame);