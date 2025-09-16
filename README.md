# -tic-tac-toe-game
├── README.md
├── app.js
├── sprojectstyle.css
└── tic toc game.html


/README.md:
--------------------------------------------------------------------------------
1 | # -tic-tac-toe-game


--------------------------------------------------------------------------------
/app.js:
--------------------------------------------------------------------------------
 1 | let boxes = document.querySelectorAll(".box");
 2 | let resetbtn = document.querySelector("#reset-button");
 3 | let newGamebtn = document.querySelector("#new-btn");
 4 | let msgContainer = document.querySelector(".msg-container");
 5 | let msg = document.querySelector("#msg");
 6 | 
 7 | let turn0 = true; // player0 pleyerx
 8 | 
 9 | const winpattern = [
10 |     [0, 1, 2],
11 |     [3, 4, 5],
12 |     [6, 7, 8],
13 |     [0, 3, 6],
14 |     [1, 4, 7],
15 |     [2, 5, 8],
16 |     [0, 4, 8],
17 |     [2, 4, 6]
18 | ];
19 | const resetGame = () => {
20 |     turn0 = true;
21 |     enableBoxes();
22 |     msgContainer.classList.add("hide");
23 | 
24 | };
25 | 
26 | boxes.forEach((box) => {
27 |     box.addEventListener("click", () => {
28 |         if (turn0) {
29 |             box.innerText = "0";
30 |             turn0 = false;
31 | 
32 |         } else { // playx
33 |             box.innerText = "x";
34 |             turn0 = true;
35 | 
36 |         }
37 |         box.disabled = true;
38 | 
39 |         checkWinner();
40 | 
41 |     });
42 | 
43 | });
44 | 
45 | 
46 | const disabledBoxes = () => {
47 |     for (let box of boxes) {
48 |         box.disabled = true;
49 | 
50 |     };
51 | };
52 | const enableBoxes = () => {
53 |     for (box of boxes) {
54 |         box.disabled = false;
55 |         box.innerText = "";
56 |     };
57 | };
58 | 
59 | const showWinner = (winner) => {
60 |     msgContainer.innerText = (`congratulation , winner is ${winner}`);
61 |     msgContainer.classList.remove("hide");
62 |     disabledBoxes();
63 | 
64 | 
65 | };
66 | const checkWinner = () => {
67 |     for (let pattern of winpattern) {
68 |         let pos1Val = boxes[pattern[0]].innerText;
69 |         let pos2Val = boxes[pattern[1]].innerText;
70 |         let pos3Val = boxes[pattern[2]].innerText;
71 |         if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
72 |             if (pos1Val === pos2Val && pos2Val === pos3Val) {
73 |                 console.log("winner", pos1Val);
74 |                 showWinner(pos1Val);
75 | 
76 |             };
77 | 
78 |         };
79 |     };
80 | };
81 | newGamebtn.addEventListener("click", resetGame);
82 | resetbtn.addEventListener("click", resetGame);


--------------------------------------------------------------------------------
/sprojectstyle.css:
--------------------------------------------------------------------------------
 1 | * {
 2 |     margin: 0;
 3 |     padding: 0;
 4 | }
 5 | 
 6 | body {
 7 |     background-color: #568687;
 8 |     text-align: center;
 9 | }
10 | 
11 | .container {
12 |     height: 70vh;
13 |     display: flex;
14 |     align-items: center;
15 |     justify-content: center;
16 | }
17 | 
18 | .game {
19 |     height: 60vmin;
20 |     width: 60vmin;
21 |     display: flex;
22 |     flex-wrap: wrap;
23 |     align-items: center;
24 |     justify-content: center;
25 |     gap: 1.5vmin;
26 | }
27 | 
28 | .box {
29 |     height: 18vmin;
30 |     width: 18vmin;
31 |     border-radius: 1rem;
32 |     box-shadow: 0, 0, 1rem rgb(0, 0, 0.3);
33 |     font-size: 8vmin;
34 |     color: red;
35 | }
36 | 
37 | #reset-button {
38 |     padding: 2rem;
39 |     font-size: 3vmin;
40 |     background-color: black;
41 |     color: white;
42 |     border-radius: 1rem;
43 |     border: none;
44 | }
45 | 
46 | #new-btn {
47 |     padding: 1rem;
48 |     font-size: 1.2rem;
49 |     background-color: black;
50 |     color: white;
51 | }
52 | 
53 | #msg {
54 |     color: white;
55 |     font-size: 4rem;
56 | }
57 | 
58 | .msg-container {
59 |     height: 100vmin;
60 |     display: flex;
61 |     justify-content: center;
62 |     flex-direction: column;
63 |     gap: 2rem;
64 |     font-size: 4rem;
65 | }
66 | 
67 | .hide {
68 |     display: none;
69 | }


--------------------------------------------------------------------------------
/tic toc game.html:
--------------------------------------------------------------------------------
 1 | <!DOCTYPE html>
 2 | <html lang="en">
 3 | 
 4 | <head>
 5 |     <meta charset="UTF-8">
 6 |     <meta name="viewport" content="width=device-width, initial-scale=1.0">
 7 |     <title>tic tac toe </title>
 8 |     <link rel="stylesheet" href="sprojectstyle.css">
 9 | </head>
10 | 
11 | <body>
12 |     <div class="msg-container hide">
13 |         <p id="msg"> winner</p>
14 | 
15 |         <button id="new-btn"> new game</button>
16 | 
17 |     </div>
18 |     <main>
19 |         <h1>tic tac toe </h1>
20 |         <div class="container">
21 |             <div class="game">
22 | 
23 |                 <button class="box "> </button>
24 |                 <button class="box ">  </button>
25 |                 <button class="box ">  </button>
26 |                 <button class="box "> </button>
27 |                 <button class="box ">  </button>
28 |                 <button class="box "> </button>
29 |                 <button class="box ">  </button>
30 |                 <button class="box ">  </button>
31 |                 <button class="box ">  </button>
32 | 
33 |             </div>
34 |         </div>
35 |         <button id="reset-button"> reset button </button>
36 |     </main>
37 |     <script src="app.js"></script>
38 | </body>
39 | 
40 | </html>


--------------------------------------------------------------------------------
