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
console.log(stringNumber);
console.log(typeof stringNumber);
