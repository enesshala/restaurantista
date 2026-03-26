function emriFunksionit() {
    console.log("Pershendetje nga funksioni");
}

emriFunksionit();

function mblidh(a, b) {
    let rez = a + b;
    console.log(rez);
}

mblidh(5, 10);
mblidh(3, 7);

function add(a, b) {
    if (b == undefined) {
        return "Operand b is missing";
    }
    let rez = a + b;
    return rez;
}

let result = add(5, 15);
console.log(result);

console.log(add(3, 2));

function zbrit(x, y, emri) {
    console.log("Rezultati i:", emri);

    let kushti = 0;

    if (x - y < kushti) {
        console.log("Rezultati eshte negativ");
    } else {
        console.log("Rezultati eshte pozitiv");
    }
}

zbrit(20, 10, "Ilir");
zbrit(20, 25, "Enes");

// Arrow functions
const sum = (x, y) => {
    return x + y;
};

console.log(sum(50));

