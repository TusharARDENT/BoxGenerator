// Functionality of the page should appear here
console.log("Hello JavaScript");
const input = document.querySelector(".inputNum");
let n = 17;
console.log(n);

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
    return true;
  }
}

function isEven(num) {
  if (num % 2 == 0) {
    return true;
  }
  return false;
}
