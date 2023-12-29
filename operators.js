//Mathematical operators
let x = 10;
let y = 2;
console.log("Addition:", x + y);
console.log("subtraction:", x - y);
console.log("Multiplication:", x * y);
console.log("Division", x / y);
console.log("Remainder", x % y);
console.log("power:", x ** y);

//string concat with +
let s = "my" + " pen";
console.log(s);
console.log(2 + "1");
console.log("1" + 12);
console.log(1 + 2 + "4");
console.log("3" + "4" + "1");
//only + opr works on numbers and strings this way
//remainig all operators convert string to numbers
console.log(6 - "3");
console.log("6" / "2");

//asssigment operators
let p, q, r;
p = q = r = 2;
console.log(p, q, r);
p++;
console.log(p);

//strict eqaulity operator
console.log("" == false); //true
console.log("" === false); //false
console.log("5" === 5);

//comparision operators
let a = 5;
let b = "5";
console.log("\nComparison Operators:");
console.log("Equal (==):", a == b);
console.log("Strict Equal (===):", a === b);
console.log("Not Equal (!=):", a != b);
console.log("Strict Not Equal (!==):", a !== b);
console.log("Greater Than (>):", a > b);
console.log("Less Than (<):", a < b);
console.log("Greater Than or Equal (>=):", a >= b);
console.log("Less Than or Equal (<=):", a <= b);

//logical operators
let t, f;
t = true;
f = false;
console.log("\nLogical Operators:");
console.log("Logical AND (&&):", t && f);
console.log("Logical OR (||):", t || f);
console.log("Logical NOT (!):", !t);
