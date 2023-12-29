function multiply(a, b) {
  return a * b;
}
let result = multiply(3, 4);
console.log(`The multiplication of 3 and 4 is:`, result);

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

let value = toCelsius(77);
console.log(`The value in celcius is ${value}`);
