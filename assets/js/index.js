// Functionality of the page should appear here
console.log("Hello JavaScript");
const input = document.querySelector(".inputNum");
const output = document.querySelector(".output");
const square = document.querySelector(".primeSquare");
const button = document.querySelector(".checkButton");
input.addEventListener("keydown", keyDown);
button.addEventListener("click", check);

function keyDown(event) {
  const key = event.key;
  if (isValid2(key)) {
    event.preventDefault();
  }
}
function check(event) {
  output.classList.remove("error");

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
      square.classList.add("show");
      output.insertAdjacentHTML("beforeend", html);
    }
  } else {
    event.target.value = null;
    output.innerHTML = "Please Enter a numeric Value";
    output.classList.add("error");
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
  if (num % 2 == 0) {
    return true;
  }
  return false;
}

function isValid(val) {
  const myRegEx = /\d/;
  const isValid = myRegEx.test(val);
  return isValid;
}

function isValid2(val) {
  const myRegEx2 = /[!@#$%^&*()~`_=+{};:'".<,>]/;
  return myRegEx2.test(val);
}
