// Functionality of the page should appear here
console.log("Hello JavaScript");
const input = document.querySelector(".inputNum");
const output = document.querySelector(".output");
const square = document.querySelector(".square");
const button = document.querySelector(".checkButton");
const inputError = document.querySelector(".inputError")
const inputInfo = document.querySelector(".inputInfo");
const primeLegend = document.querySelector(".prime");
const evenLegend = document.querySelector(".even");
const oddLegend = document.querySelector(".odd");
const primeSquare = document.querySelector(".primeSquare");

input.addEventListener("keydown", keyDown);
button.addEventListener("click", check);

function keyDown(event) {
  const key = event.key;
  if (isValid2(key) &&  key !== "Backspace") {
    event.preventDefault();
  }
}
function check(event) {
  inputError.classList.remove("error");
  input.classList.remove("errorInput");
  input.classList.remove("adjust2");
  inputInfo.classList.remove("adjust")
  output.innerHTML = "Please Enter a Number";
  const a = input.value;
  const valid = isValid(a);
  if (valid) {
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
      square.innerHTML = `${m}`;
      output.insertAdjacentHTML("beforeend", html);

      function removePrime(){
        primeLegend.addEventListener("click", vanishPrime)
      }
      function removeEven(){
        evenLegend.addEventListener("click", vanishEven)
      }
      function removeOdd(){
        oddLegend.addEventListener("click", vanishOdd)
      }
      removePrime();
      removeEven();
      removeOdd();
    }
  } else {
    event.target.value = null;
    inputError.innerHTML = "Please Enter a numeric Value*";
    inputError.classList.add("error");
    inputInfo.classList.add(".adjust");
    input.classList.add("errorInput");
    input.classList.add("adjust2");
    return;
  }
}
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

function isValid(val) {
  const myRegEx = /\d/;
  const isValid = myRegEx.test(val);
  return isValid;
}

function isValid2(val) {
  const myRegEx2 = /[!@#$%^&*()~`_=+{};:'".<,>A-z]/;
  return myRegEx2.test(val);
}

function vanishPrime(){
  const square = document.querySelectorAll(".primeSquare")
  primeLegend.classList.toggle("strikeThrough")
  square.forEach(element => {
    element.classList.toggle("vanishPrime");
  });
}

function vanishOdd(){
  const square = document.querySelectorAll(".oddSquare")
  oddLegend.classList.toggle("strikeThrough")
  square.forEach(element => {
    element.classList.toggle("vanishPrime");
  });
}

function vanishEven(){
  const square = document.querySelectorAll(".evenSquare")
  evenLegend.classList.toggle("strikeThrough")
  square.forEach(element => {
    element.classList.toggle("vanishPrime");
  });
}