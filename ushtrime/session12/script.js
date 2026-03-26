console.log(20 + 500);

// Variables : var, let, const

let name = "Enes"; // declaration and asigned var
const pi = 3.14;

console.log(name);

name = "Filan"; // reasign

console.log(name);

let mbiemri; // declaration of variable
mbiemri = "Shala";

console.log(mbiemri);

// Data types: 1. Primitive data-types, 2.Non-primitive data types;
let mosha = "20000";

let isRaining = false; // boolean

console.log(typeof mosha);

let a = 5;
let b = 10;

console.log(a + b);

// String concatination
console.log("Emri: " + name + " " + mbiemri);

// Operatoret aritmetik(matematik) +, -, *, /, ++, --, %
let x = 10;
let y = 3;

// increment(postfix) = x++;
// increment(prefix) = ++x;
// Moduli(modulus) = mbetja;
console.log(x % y);

// Operatoret e krahasimit - comparison operators: <, <=, >, >=, ==, ===, !=, !==
if (5 !== 5) {
    console.log("e vertete");
} else {
    console.log("e pavertete");
}

// Operatoret logjik : and(dhe) &&, or(ose) ||, not(negacioni) !

// If else statements - Kushtet
let age = 40;
if (age < 18) {
    console.log("You cannot apply for this job befor turning 18.");
} else if (age > 40) {
    console.log(
        "You cannot apply for this job befor if you're older than 40yo.",
    );
} else {
    console.log("You're welcome to apply");
}