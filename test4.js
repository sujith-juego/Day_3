
// checks for prime

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}
const alert = require('alert');
let res = isPrime(27);
alert(res);