// Creating an Array
console.log("Creating an Array:");
let colors = ["Red", "Green", "Blue", "Yellow"];
console.log(colors);

// Accessing Elements
console.log("\nAccessing Elements:");
console.log("First Element:", colors[0]);
console.log("Last Element:", colors[colors.length - 1]);

// Modifying Elements
console.log("\nModifying Elements:");
colors[1] = "Purple";
console.log("Modified Array:", colors);

// Adding Elements
console.log("\nAdding Elements:");
colors.push("Orange");
console.log("After Push:", colors);

colors.unshift("Pink");
console.log("After Unshift:", colors);

// Removing Elements
console.log("\nRemoving Elements:");
colors.pop();
console.log("After Pop:", colors);

colors.shift();
console.log("After Shift:", colors);

// Slicing an Array
console.log("\nSlicing an Array:");

let slicedColors = colors.slice(1, 3);
console.log("Sliced Array:", slicedColors);

// Splicing an Array
console.log("\nSplicing an Array:");

colors.splice(1, 2, "Cyan", "Brown");
console.log("After Splice:", colors);

// Iterating through an Array
console.log("\nIterating through an Array:");

colors.forEach(function (color, index) {
  console.log("Index " + index + ": " + color);
});

// Filtering an Array
console.log("\nFiltering an Array:");

let filteredColors = colors.filter(function (color) {
  return color.length > 4;
});
console.log("Filtered Array:", filteredColors);
