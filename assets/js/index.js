// Functionality of the page should appear here
console.log("Hello JavaScript");
const input = document.querySelector(".inputNum");
const output = document.querySelector(".output");
input.addEventListener("keypress", check);

function check(event) {
  const a = event.key;
  while (event.key === " ") {
    // event.target.value = "";
    return;
  }
  console.log(a);
  const valid = isValid(a);

  for (let m = 1; m <= a; m++) {
    console.log(m);
    console.log(isPrime(m), "Prime");
    console.log(isEven(m), "Even");
    console.log(isValid(m), "Odd");
    const prime = isPrime(m);
    const even = isEven(m);
    if (valid) {
      if (prime) {
        let html = ` <span class="colorInfo prime">Prime Number ${m} <span class="square primeSquare">square ${m}</span>`;
        output.insertAdjacentHTML("afterend", html);
      } else if (even) {
        let html = ` <span class="colorInfo even">Even Number ${m} <span class="square evenSquare">square ${m}</span>`;
        output.insertAdjacentHTML("afterend", html);
      } else {
        let html = ` <span class="colorInfo odd">Odd Number ${m} <span class="square oddSquare">square ${m}</span>`;
        output.insertAdjacentHTML("afterend", html);
      }
    } else {
      output.textContent = `You have entered a wrong value`;
    }
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
  const myRegEx = /^[0-9]/;
  const isValid = myRegEx.test(val);
  return isValid;
}
