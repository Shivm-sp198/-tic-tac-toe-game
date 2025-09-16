let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-button");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; // player0 pleyerx

const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");

};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "0";
            turn0 = false;

        } else { // playx
            box.innerText = "x";
            turn0 = true;

        }
        box.disabled = true;

        checkWinner();

    });

});


const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;

    };
};
const enableBoxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    };
};

const showWinner = (winner) => {
    msgContainer.innerText = (`congratulation , winner is ${winner}`);
    msgContainer.classList.remove("hide");
    disabledBoxes();


};
const checkWinner = () => {
    for (let pattern of winpattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val);

            };

        };
    };
};
newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);