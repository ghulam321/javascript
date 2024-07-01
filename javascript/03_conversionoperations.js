/*conversion operation is very important because mostly we get values from our frontend
forms to the backend and from frontend forms we dont know which type of values are coming
they can be number boolean string or mix values like abc123 in this case we have to be carefull*/

let score = "ghulam"

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => Nan => not a number
// true => 1; false => 0

let isLoggedIn = "ghulam"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
//"" => false
// "ghulam" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ************************** Operations**************************

let value = 3
let negValue = -value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
//console.log(2**3);// 2 raise to the power 3
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = " ghulam"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log(1 + 2 + "2");

// console.log(3 + 4 * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2+2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);





