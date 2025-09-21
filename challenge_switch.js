let a = 7;
let b = 94;

console.log("Before swap: a =", a, "b =", b);

// Swap a and b
// let temp = a;
// a = b;
// b = temp;

[a, b] = [b, a];

console.log("After swap: a =", a, "b =", b);