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
const legends = [primeLegend, oddLegend, evenLegend];


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

  for(let i = 0; i<legends.length; i++){
    legends[i].classList.remove("strikeThrough");
  }

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

        primeLegend.addEventListener("click", vanishPrime)  
        evenLegend.addEventListener("click", vanishEven)
        oddLegend.addEventListener("click", vanishOdd)
    }
  } else {
    event.target.value = null;
    inputError.innerHTML = "Please Enter a numeric Value*";
    inputError.classList.add("error");
    inputInfo.classList.add(".adjust");
    input.classList.add("errorInput", "adjust2");
    return;
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

function isValid2(val) {
  const myRegEx2 = /[!@#$%^&*()~`_=+{};:'".<,>A-z]/;
  return myRegEx2.test(val);
}

//functions to make boxes invisible
function vanishPrime(){
  const square = document.querySelectorAll(".primeSquare")
  vanish(square, legends[0]);
}

function vanishOdd(){
  const square = document.querySelectorAll(".oddSquare")
  vanish(square, legends[1]);
}

function vanishEven(){
  const square = document.querySelectorAll(".evenSquare")
  vanish(square, legends[2]);
}

function vanish(square, legends){
  legends.classList.toggle("strikeThrough")
  square.forEach(element => {
    element.classList.toggle("vanishPrime");
  });
}