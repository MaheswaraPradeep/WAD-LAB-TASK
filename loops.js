//for loops
console.log("The first 10 natural numbers are:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//pattern
let chr = "";
for (i = 1; i <= 6; i++) {
  for (let j = 1; j < i; j++) {
    chr = chr + "*";
  }
  console.log(chr);
  chr = "";
}

//while loop
console.log("\nWhile Loop:");
j = 1;
while (j <= 5) {
  console.log("Iteration " + j);
  j++;
}

//do while loop
console.log("\nDo-While Loop:");
let k = 1;
do {
  console.log("Iteration " + k);
  k++;
} while (k <= 5);
