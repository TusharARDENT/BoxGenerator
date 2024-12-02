// Functionality of the page should appear here
console.log("Hello JavaScript");
const input = document.querySelector(".inputNum");
const output = document.querySelector(".output");
const square = document.querySelector(".primeSquare");
const button = document.querySelector(".checkButton")
input.addEventListener("keydown", keyDown);
button.addEventListener("click", check);


function keyDown(event){
  if (!isValid2(input.value)) {
    event.target.value = null;
    return;
  }
}
function check(event) {
  const a = input.value;
  console.log(a);
  const valid = isValid(a);

    if (valid) {
      output.innerHTML = "";
      for (let m = 1; m <= a; m++) {
        const prime = isPrime(m);
        const even = isEven(m);
        let html;
        if (prime) {
          html = ` <span class="colorInfo prime"><span class="square primeSquare">${m}</span>`;
          square.classList.add("primeBox")
        } else if (even) {
          html = ` <span class="colorInfo even"><span class="square evenSquare">${m}</span>`;
        } else {
          html = ` <span class="colorInfo odd"><span class="square oddSquare">${m}</span>`;
        }
        square.innerHTML = `${m}`
        square.classList.add("show")
        output.insertAdjacentHTML("beforeend", html);      
      }    
    } else {
      output.textContent = `You have entered a wrong value`;
    }
    
  }



function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
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

function isvalid2(val){
  const myRegEx2 = /[!@#$%^&*()_]/;
  const isValid = myRegEx2.test(val);
  return isValid;
}