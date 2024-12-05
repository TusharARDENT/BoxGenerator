console.log("Hello JavaScript");
const input = document.querySelector(".inputNum");
const output = document.querySelector(".output");
const square = document.querySelector(".square");
const button = document.querySelector(".checkButton");
const button2 = document.querySelector(".checkButton2");
const inputError = document.querySelector(".inputError");
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

let count = 0;
let count2 = 0;
let localInput;
input.addEventListener("keydown", keyDown);
input1Range.addEventListener("keydown", keyDown);
input2Range.addEventListener("keydown", keyDown);
button.addEventListener("click", check);
button2.addEventListener("click", check2);

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

window.addEventListener("load", check);

inputToggle.addEventListener("click", toggleInput);

function check() {
  reset();
  const a = input.value;
  if (isValid(a)) {
    addLegends();
    output.innerHTML = "";
    for (let m = 1; m <= a; m++) {
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
      output.insertAdjacentHTML("beforeend", html);

      localStorage.setItem("validInput", JSON.stringify(a));
      console.log(localStorage.getItem("validInput"));
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
  input.classList.add("errorInput");
  button.classList.add("adjustButton");
  input.classList.add("adjustInput");
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
  output.innerHTML = "It's Empty..........<br> Please insert a number!!!";
}

function toggleInput() {
  rangeInput.classList.toggle("show");
  singleInput.classList.toggle("hide");
  button2.classList.toggle("show2");
  button.classList.toggle("hide");
  console.log("Hello");
}

function check2() {
  console.log("Hello Check2");
  let a = input1Range.value;
  let b = input2Range.value;

  console.log(a, b);
  if (a <= b) {
    console.log(true);
    reset();
    output.innerHTML = "";
    if (isValid(a) && isValid(b)) {
      console.log("both valid");
      addLegends();
      output.innerHTML = "";
      for (let m = a; m <= b; m++) {
        console.log(m);
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
        output.insertAdjacentHTML("beforeend", html);
        localStorage.setItem("validInputR1", JSON.stringify(a));
        localStorage.setItem("validInputR2", JSON.stringify(b));
        console.log(localStorage.getItem("validInputR1"));
        console.log(localStorage.getItem("validInputR2"));
      }
    }
    hideBox();
  } else {
    alert("wrong range");
  }
}

function clear() {
  legendsToggle();
  reset();
  input.value = null;
  input1Range.value = null;
  input2Range.value = null;
  output.innerHTML =
    '<span class="outputDesc">Get numbers printed according to their types.</span><br><span class="outputDesc">You just need to enter a number inside the input box.</span>';
}

function addLegends() {
  legendInfo.forEach((element) => {
    element.classList.add("show");
  });
}

function removeLegends() {
  legendInfo.forEach((element) => {
    element.classList.add("hide");
  });
}

//for adding and removing legends
function legendsToggle() {
  legendInfo.forEach((element) => {
    element.classList.toggle("show");
  });
}

clearButton.addEventListener("click", clear);
console.log(input1Range, input2Range);
