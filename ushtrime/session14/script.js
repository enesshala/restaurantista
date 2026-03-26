let emri = "Enes";

document.getElementById("message").textContent = "Pershendetje nga Javascript";
document.getElementById("box").innerHTML =
    `<h1>Hello...${emri}</h1><h2>Hellooo h2 </h2>`;
document.getElementsByClassName("box");
document.getElementsByTagName("h1");

document.querySelector("#box").style.color = "red";
document.querySelectorAll(".card");

let butoni = document.getElementById("kliko");
let mesazhi = document.getElementById("mesazhi");

butoni.addEventListener("click", () => {
    mesazhi.innerHTML =
        "<h1 style='color:green;font-size=50px;'>Teksti u ndryshua</h1>";
});

let lista = document.getElementById("lista");
let newItem = document.createElement("li");
newItem.textContent = "Elemeti i ri - new";
lista.appendChild(newItem);

const inputBox = document.getElementById("input");
const output = document.getElementById("output");

inputBox.addEventListener("input", (event) => {
  output.textContent = event.target.value;
})
