// Demo's new ES6 short hand notation to reference the variables.
var firstName = "Steven";
var lastName = "Spielberg";

var Person = {};
// Old way
Person.firstName = firstName;
Person.lastName = lastName;

console.log(Person);

// ES6 way
var NewES6Person = {firstName, lastName};
console.log(NewES6Person);

var AnotherES6Person = {NewES6Person, middleName : "X"};
console.log(AnotherES6Person);