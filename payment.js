let paymentForm = document.getElementById("payment-form");
let payButton = document.getElementById("pay-button");

paymentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let cardNumber = document.getElementById("card-number").value;
  let cvc = document.getElementById("cvc").value;
  let expirationDate = document.getElementById("expiration-date").value;

  if (name.trim() === "" || cardNumber.trim() === "" ||cvc.trim() === "" ||expirationDate.trim() === ""){
    alert("Please fill all required Fields!");
    return;
  }

  if (!cardNumber.match(/^\d{13,16}$/)) {
    alert("Please enter a valid card number!");
    return;
  }

  if (!cvc.match(/^\d{3,4}$/)) {
    alert("Please ender a valid  CVC!");
    return;
  }

  document.getElementById("success-message").style.display = "block";

  paymentForm.style.filter = "blur(4px)";

  paymentForm.reset();
});