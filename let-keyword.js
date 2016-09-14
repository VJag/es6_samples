// let is used to clear block scoped variables

var x = "hi";

{
    var x = "bye";
    console.log(x);

}

console.log(x);

let y = "hi";

{
    let y = "bye";
    console.log(y);

}

console.log(y);

var a = [];
// Change var to let and run again.
for(var i =1;i<5;i++) {
    a.push(function() {
       console.log(i);
    });
}

a.forEach(function (fn) {
   fn();
});


