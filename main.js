// COIN FLIP SIMULATOR

// HTML Variables
let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");

// count Variables
let numHeads = 0;
let numTails = 0;
// Button event listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // generate a random Number
  let randNum = Math.random();
  console.log(randNum);

  // simulate the coin flip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src='img/heads.png' />";
    numHeads = numHeads + 1;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src='img/tails.png' />";
    numTails = numTails + 1;
    tailsEl.innerHTML = numTails;
  }
}

//  html variables
let output2El = document.getElementById("output2");
let num1El = document.getElementById("num1-out");
let num2El = document.getElementById("num2-out");
let num3El = document.getElementById("num3-out");
let num4El = document.getElementById("num4-out");
let num5El = document.getElementById("num5-out");
let num6El = document.getElementById("num6-out");
// count Variables
let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;

// event listener
document.getElementById("btn2").addEventListener("click", btnClicked1);

function btnClicked1() {
  //  rundom number
  let randNum = Math.floor(Math.random() * 6 + 1);
  console.log(randNum);

  // simulate throw dice

  if (randNum == 1) {
    output2El.innerHTML = "<img src='img/1.png' />";
    num1 = num1 + 1;
    num1El.innerHTML = num1;
  } else if (randNum == 2) {
    output2El.innerHTML = "<img src='img/2.png' />";
    num2 = num2 + 1;
    num2El.innerHTML = num2;
  } else if (randNum == 3) {
    output2El.innerHTML = "<img src='img/3.png' />";
    num3 = num3 + 1;
    num3El.innerHTML = num3;
  } else if (randNum == 4) {
    output2El.innerHTML = "<img src='img/4.png' />";
    num4 = num4 + 1;
    num4El.innerHTML = num4;
  } else if (randNum == 5) {
    output2El.innerHTML = "<img src='img/5.png' />";
    num5 = num5 + 1;
    num5El.innerHTML = num5;
  } else {
    output2El.innerHTML = "<img src='img/6.png' />";
    num6 = num6 + 1;
    num6El.innerHTML = num6;
  }
}
