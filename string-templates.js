var userName = "Brooks";

// Old way
var welcomeMessage = "Welcome " + userName;
console.log(welcomeMessage);

// ES6 way
var newWelcomeMessage = `Welcome ${userName}`;
console.log(welcomeMessage);

// ES6 tagged template literals
var gender = "Male";
function getFormattedWelcomeMessage(strings, ...values) {
    let salutation = "Ms";
    if(gender === "Male") {
        salutation = "Mr";
    }
    values[0] = salutation;

    return `${strings[0]} ${values[0]}.${values[1]}`;
}

newWelcomeMessage = getFormattedWelcomeMessage`Welcome ${""} ${userName}`;
console.log(newWelcomeMessage);


