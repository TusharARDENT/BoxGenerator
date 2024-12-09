console.log("Hello JavaScript");
const input = document.querySelector(".inputNum");
const output = document.querySelector(".output");
const square = document.querySelector(".square");
const button = document.querySelector(".checkButton");
const button2 = document.querySelector(".checkButton2");
const inputError = document.querySelector(".inputError");
const inputErrorR1 = document.querySelector(".inputErrorR1");
const inputErrorR2 = document.querySelector(".inputErrorR2");
const inputErrorR = document.querySelector(".inputErrorR");
const inputInfo = document.querySelector(".inputInfo");
const primeLegend = document.querySelector(".prime");
const evenLegend = document.querySelector(".even");
const oddLegend = document.querySelector(".odd");
const legendInfo = document.querySelectorAll(".colorInfo");
const legends = [oddLegend, primeLegend, evenLegend];
const inputToggle = document.querySelector(".rangeInputBtn");
const rangeInput = document.querySelector(".inputRange");
const singleInput = document.querySelector(".input1");
const clearButton = document.querySelector(".clearButton");
const input1Range = document.querySelector(".inputNum2");
const input2Range = document.querySelector(".inputNum3");
const displayBox = document.querySelector(".display");
const outputInfo = document.querySelector(".outputInfo");

console.log(outputInfo);

let count = 0;
let count2 = 0;
let localInput;
input.addEventListener("keydown", keyDown);
input1Range.addEventListener("keydown", keyDown);
input2Range.addEventListener("keydown", keyDown);
button.addEventListener("click", check);
button2.addEventListener("click", check2);
inputToggle.addEventListener("click", toggleInput);

function keyDown(event) {
  const key = event.key;
  if (!isValid(key) && key !== "Backspace") {
    event.preventDefault();
  }
}
let num = JSON.parse(localStorage.getItem("validInput"));
input.value = num;
let num2 = JSON.parse(localStorage.getItem("validInputR1"));
input1Range.value = num2;
let num3 = JSON.parse(localStorage.getItem("validInputR2"));
input2Range.value = num3;
// window.addEventListener("load", check);

function check() {
  reset();
  const a = input.value;
  if (isValid(a)) {
    addLegends();
    output.innerHTML = "";
    for (let m = 1; m <= a; m++) {
      addBox(m);
      localStorage.setItem("validInput", JSON.stringify(a));
    }
    hideBox();
  } else {
    showError();
  }
}
//functions to check type of numbers
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}

function isEven(num) {
  if (num % 2 == 0) return true;
  return false;
}

//functions to validate the input
function isValid(val) {
  const myRegEx = /\d/;
  const isValid = myRegEx.test(val);
  return isValid;
}

// Functions to toggle visibility of number boxes
function vanish(square, legend) {
  legend.classList.toggle("strikeThrough");

  if (legend.classList.contains("strikeThrough")) {
    count++;
  } else {
    count--;
  }
  square.forEach((element) => {
    element.classList.toggle("vanishPrime");
  });
  toggleLegends();
}

function vanishPrime() {
  vanish(document.querySelectorAll(".primeSquare"), primeLegend);
}

function vanishOdd() {
  vanish(document.querySelectorAll(".oddSquare"), oddLegend);
}

function vanishEven() {
  vanish(document.querySelectorAll(".evenSquare"), evenLegend);
}

// Attach event listeners
function hideBox() {
  primeLegend.addEventListener("click", vanishPrime);
  evenLegend.addEventListener("click", vanishEven);
  oddLegend.addEventListener("click", vanishOdd);
}

// Legend Limit function
function toggleLegends() {
  if (count >= 2) {
    legends.forEach((legend) => {
      if (!legend.classList.contains("strikeThrough")) {
        legend.style.pointerEvents = "none";
      }
    });
  } else {
    legends.forEach((legend) => {
      legend.style.pointerEvents = "auto";
    });
  }
}

function showError() {
  input.value = null;
  inputError.textContent = "Please Enter A numeric Value*";
  inputError.classList.add("error");
  input.classList.add("errorInput", "adjustInput");
  button.classList.add("adjustButton");
}

function showRangeError(a, b) {
  a.textContent = "Empty*";
  a.classList.add("error");
  b.classList.add("errorInput", "adjustInput");
}

function removeRangeError(a, b) {
  a.textContent = "Empty*";
  a.classList.remove("error");
  b.classList.add("errorInput", "adjustInput");
}
function reset() {
  inputError.classList.remove("error");
  input.classList.remove("errorInput", "adjust2");
  inputInfo.classList.remove("adjust");
  legends.forEach((legend) => {
    legend.classList.remove("strikeThrough");
    legend.style.pointerEvents = "auto";
  });
  count = 0;
}

function resetRangeError() {
  removeRangeError(inputErrorR1, input1Range);
  removeRangeError(inputErrorR2, input2Range);
}
function toggleInput() {
  rangeInput.classList.toggle("show");
  singleInput.classList.toggle("hide");
  button2.classList.toggle("show2");
  button.classList.toggle("hide");
  clear();
}

function check2() {
  reset();
  let a = input1Range.value;
  let b = input2Range.value;
  let p = parseInt(a);
  let q = parseInt(b);
  console.log(p, q, typeof p, typeof q);

  if (a == "" && b == "") {
    showRangeError(inputErrorR1, input1Range);
    showRangeError(inputErrorR2, input2Range);
  } else if (a == "" && b != "") {
    showRangeError(inputErrorR1, input1Range);
    removeRangeError(inputErrorR2, input2Range);
  } else if (b == "" && a != "") {
    showRangeError(inputErrorR2, input2Range);
    removeRangeError(inputErrorR1, input1Range);
  } else if (p <= q) {
    removeRangeError(inputErrorR1, input1Range);
    removeRangeError(inputErrorR2, input2Range);
    input1Range.classList.remove("errorInput", "adjustInput");
    input2Range.classList.remove("errorInput", "adjustInput");

    console.log(true);
    if (isValid(a) && isValid(b)) {
      addLegends();
      console.log("both valid");
      output.innerHTML = "";
      for (let m = p; m <= q; m++) {
        addBox(m);
        localStorage.setItem("validInputR1", JSON.stringify(p));
        localStorage.setItem("validInputR2", JSON.stringify(q));
      }
    }
    hideBox();
  } else if (p > q) {
    showRangeError(inputErrorR1, input1Range);
    showRangeError(inputErrorR2, input2Range);
    inputErrorR1.textContent = "invalid";
    inputErrorR2.textContent = "invalid";
  }
}
function clear() {
  removeLegends();
  input.value = null;
  input1Range.value = null;
  input2Range.value = null;
  output.innerHTML = `<div class="output">
              <span class="outputDesc">Get numbers printed according to their types.</span>
              <span class="outputDesc">You just need to enter a number inside the input box.</span>
            </div>`;
}

function addBox(m) {
  const prime = isPrime(m);
  const even = isEven(m);
  let html;
  if (prime) {
    html = `<span class="square primeSquare">${m}</span>`;
  } else if (even) {
    html = `<span class="square evenSquare">${m}</span>`;
  } else {
    html = `<span class="square oddSquare">${m}</span>`;
  }
  console.log(html);

  // document.querySelector('.output-numbers').appendChild(html)
  output.insertAdjacentHTML("beforeend", html);
}

clearButton.addEventListener("click", clear);

function addLegends() {
  legendInfo.forEach((element) => {
    element.classList.add("show");
  });
  clearButton.classList.add("show");
}

function removeLegends() {
  legendInfo.forEach((element) => {
    element.classList.remove("show");
  });
  clearButton.classList.remove("show");
}

//for adding and removing legends
function legendsToggle() {
  legendInfo.forEach((element) => {
    element.classList.toggle("show");
  });
}
