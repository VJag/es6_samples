// The const declaration creates a read-only reference to a value. It does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned.
const HOST = "http://localhost";
const PORT = 9999;

console.log(HOST + ":" + PORT);
// Invalid thing to do. Will result in a runtime error.
//HOST = "www.google.com;


const myVar = {
    name : "Jag"
}

// Variable itself is not immutable. You can change its content, but it should not reference another value.
myVar.country = "India";

console.log(myVar.name);
console.log(myVar.country);



