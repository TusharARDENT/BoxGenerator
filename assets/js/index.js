console.log("Hello JavaScript");
const input = document.querySelector(".inputNum");
const output = document.querySelector(".output");
const square = document.querySelector(".square");
const button = document.querySelector(".checkButton");
const inputError = document.querySelector(".inputError");
const inputInfo = document.querySelector(".inputInfo");
const primeLegend = document.querySelector(".prime");
const evenLegend = document.querySelector(".even");
const oddLegend = document.querySelector(".odd");
const legendInfo = document.querySelectorAll(".colorInfo");
const legends = [oddLegend, primeLegend, evenLegend];
 
let count = 0; 
let localInput;
input.addEventListener("keydown", keyDown);
button.addEventListener("click", check);
 
function keyDown(event) {
  const key = event.key;
  if (!isValid(key) && key !== "Backspace") {
    event.preventDefault();
  }
}
let num = localStorage.getItem("validInput");
let num2 = JSON.parse(num);
input.value = num2;

window.addEventListener("load",check)

function check() {
  reset();
  const a = input.value;
  if (isValid(a)) {
    legendInfo.forEach(element => {
      element.classList.add("show");
    });
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

      localStorage.setItem("validInput", JSON.stringify(a))
      console.log(localStorage.getItem("validInput"))
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
  }else{
    count --;
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
function hideBox(){
  primeLegend.addEventListener("click", vanishPrime)  
  evenLegend.addEventListener("click", vanishEven)
  oddLegend.addEventListener("click", vanishOdd)
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

function showError(){
  input.value = null;
  inputError.textContent = "Please Enter A numeric Value*";
  inputError.classList.add("error");
  input.classList.add("errorInput");
  button.classList.add("adjustButton");
  input.classList.add("adjustInput");
}

function reset(){
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

console.log(localStorage.getItem("validInput"))
