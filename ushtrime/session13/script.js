// switch

let dita = "E Merkure";

switch (dita) {
    case "E Hene":
        console.log("Dite pune");
        break;
    case "E Marte":
        console.log("Dite e marte");
        break;
    case "E Shtune":
    case "E Diele":
        console.log("Dite vikendi");
        break;
    default:
        console.log("Dita eshte dhene gabim");
        break;
}

let lista = [true, -100, "Pershendetje", null, undefined];

let frutat = ["Molla", "Dardha", "Portokalli", "Banane"]; //length  = 4
// index   =     0         1          2            3

console.log(frutat[0]);
console.log(frutat[frutat.length - 1]);

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(matrix[0][2]);

// Objects - {key: value}
let person = {
    emri: "Enes",
    mbiemri: "Shala",
    mosha: 26,
    iPunesuar: true,
    njohurite: ["HTML", "CSS", "JS", "React"],
    laptop: {
        marka: "ALIENWARE",
        modeli: "2026",
    },
};

console.log(person.emri, person.mbiemri);

let make = ["Mercedes", "BMW", "AUDI", "SKODA"];
console.log(make);

make.pop();
console.log(make);

make.push("Volvo", "PEUGEOT");
console.log(make);

make.shift();
console.log(make);

make.unshift("MERCEDES AMG");
console.log(make);

make[1] = "RENAULT";
console.log(make);

console.clear();

// Loops
// for, foreach, while, do-while
for (let i = 0; i <= 10; i++) {
    console.log("Hapi i ", i);
}

// Nested loop
for (let i = 1; i <= 100; i++) {
    for (let j = 1; j <= 100; j++) {
      console.log(i + " * " + j + " = " + i*j);
    }
}

let list = document.getElementById("lista");

for (let i = 0; i < make.length; i++) {
  let item = document.createElement("li");
  item.textContent = make[i];
  list.appendChild(item);
}

