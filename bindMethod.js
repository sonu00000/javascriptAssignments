let name1 = {
    firstName: "Soumajit",
    lastName: "Banik",
};

let name2 = {
    firstName: "Rohit",
    lastName: "Sharma",
}

let printFullName = function(homeTown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + homeTown + ", " + state);
}

printFullName.call(name1, "Agartala", "Tripura");

//Call method(available with every method in JS) - function borrowing
//printFullName.call(name2, "Mumbai", "Maharashtra");

/*Diff between call and apply is the way in which we pass arguments, Instead 
of comma separated arguments as in call, wee use list of arguments in apply*/
//printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

/*Bind method - doesn't directly call the method like 'call' and 'apply', Instead 
returns a copy of the method, which can be invoked later
here we are binding it to name2 object, so 'this' will refer to name2 object properties*/
let printMyName = printFullName.bind(name2, "Nagpur", "Maharashtra");
printMyName();
