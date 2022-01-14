//To demonstrate destructuring in nested object
const person = {
    name: "John",
    age: 40,
    address: {
        street: "123 Main St.",
        city: "Someplace"
    }
}

console.log(person);

//A way to get street value is a single destructuring statement
const { address: { street } } = person;
console.log(street);
