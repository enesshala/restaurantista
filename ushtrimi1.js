console.log("Fillimi i ekzekutimit");

function myAsyncFunc() {
  setTimeout(() => {
    console.log("Perfundoi funksioni asinkron");
  }, 2000);
}

myAsyncFunc();

console.log("Mbarimi i ekzekutimit");
