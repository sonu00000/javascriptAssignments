//With rest parameter, we can pack multiple values into an Array or Object

//sample using function arguments as rest parameter
function printNums(...args) {
    console.log(args); // [1, 2, 3]
}

printNums(1, 2, 3);

//sample for arrays
let [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(rest) // [3, 4, 5]

//sample for objects
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
}

const { firstName, ...rest2 } = person;
console.log(rest2); // Object {lastName: "Doe", age: 50}
