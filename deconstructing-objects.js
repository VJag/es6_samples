// When you are interested in a piece of information of a large object, Deconstruction comes handy.
function Person() {
    return {
        firstName : "Steven",
        lastName : "Spielberg",
        profession : "Director",
        country : "USA"
    }
}

// Here we interested in only firstName and lastname of the object resturned by the Person
var {firstName, country} = Person();
console.log(firstName + "-" + country);


var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// Assuming we are inrested only in "Aug" and "Sep"
var [,,,,,,,EighthMonth,NinthMonth,,,] = months;
console.log(EighthMonth + "-" + NinthMonth);