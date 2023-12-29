//Mathematical operators
let x=10;
let y=2;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);

//string concat with +
let s="my"+" pen";
console.log(s);
console.log(2+'1');
console.log('1'+12);
console.log(1+2+'4');
console.log('3'+'4'+"1");
//only + opr works on numbers and strings this way
//remainig all operators convert string to numbers
console.log(6-'3');
console.log('6'/'2');
//numeric conversion using +.
//(+x) this does nothing to x if number but if other dataype then it conversts it to number
let a=2,b=true;
console.log(+a);
console.log(+b);

//asssigment operators
let p,q,r;
p=q=r=2;
console.log(p,q,r)
p++
console.log(p);

//strict eqaulity operator
console.log(""==false);//true
console.log(""===false);//false
console.log("5"===5);
