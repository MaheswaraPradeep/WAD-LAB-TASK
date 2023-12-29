//if else block
let ageNani = 18;
if (ageNani >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote yet");
}

let a = 2,
  b = 3,
  c = 4;
if (a > b && a > c) {
  console.log(`${a} is greater than ${b} and ${c}`);
} else if (b > a && b > c) {
  console.log(`${b} is greater than ${a} and ${c}`);
} else {
  console.log(`${c} is greater than ${a} and ${b}`);
}

//switch case statements
let operation = "addition";
switch (operation) {
  case "addition":
    console.log("Addition:", a + b);
    break;
  case "subtraction":
    console.log("Subtraction:", a - b);
  case "multiplication":
    console.log("multiplication:", a * b);
  case "division":
    console.log("division:", a / b);
}

//ternary operator
let result = a > b && a > c ? a : b > c ? b : c;
console.log(result);
