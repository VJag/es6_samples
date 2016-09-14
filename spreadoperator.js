// ES6 spread operator spreads out content of an array

var a = [1,2,3];
console.log(a);

// Using ES6 spread operator
//console.log(...a);

var b = [4,5,6];
a.push(b);
console.log(a);
a.pop();
console.log(a);
a.push(...b);
console.log(a);
a.pop();
console.log(a);

var fn = function(a,b,c) {
    console.log(a,b,c);
}

fn(b);
fn(...b);