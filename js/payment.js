const paymentModal = document.getElementById("payment-modal");
const payButton = document.getElementById("pay-button");
const successModal = document.getElementById("success-modal");

window.onclick = function (event) {
    if (event.target === paymentModal) {
        paymentModal.style.display = "none";
    }
};

const paymentForm = document.getElementById("payment-form");

paymentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const cardNumber = document.getElementById("card-number").value;
    const expirationDate = document.getElementById("expiration-date").value;
    const cvv = document.getElementById("cvv").value;
    const cardNumberError = document.getElementById("card-number-error");

    // Card Number validation  (must have 16 digits);
    const cardNumberRegex = /^[0-9]{16}$/;
    if (!cardNumberRegex.test(cardNumber.replace(/\s+/g, ""))) {
        cardNumberError.textContent =
            "Please enter a valid 16-digits card number.";
        return;
    } else {
        cardNumberError.textContent = "";
    }

    const expirationDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expirationDateRegex.test(expirationDate)) {
        alert("Please enter a valid expiration date (MM/YY)");
        return;
    }

    const cvvRegex = /^[0-9]{3}$/;
    if (!cvvRegex.test(cvv)) {
        alert("Please eneter a valid 3-digit CVV.");
        return;
    }

    showSuccessModal();

    paymentModal.style.display = "none";
});

// Card Number Value Formatting
const cardNumberInput = document.getElementById("card-number");
cardNumberInput.addEventListener("input", (event) => {
    let input = event.target.value.replace(/\D/g, ""); // Remove non-digits characters
    input = input.substring(0, 16);

    const formattedCardNumber = input.match(/.{1,4}/g)?.join(" ") || input;
    event.target.value = formattedCardNumber;
});

const expirationDateInput = document.getElementById("expiration-date");
expirationDateInput.addEventListener("input", (event) => {
    let input = event.target.value.replace(/\D/g, ""); // Remove non-digits characters
    input = input.substring(0, 4); // limit user to write up to 4 digits,

    if (input.length >= 3) {
        event.target.value = `${input.substring(0, 2)}/${input.substring(2)}`;
    } else {
        event.target.value = input;
    }
});

function showSuccessModal() {
    successModal.style.display = "flex";

    clearCartItems();

    setTimeout(function () {
        successModal.style.display = "none";
    }, 5000);
}

function clearCartItems() {
    localStorage.removeItem("cart");

    updateCartBadge();
    renderInvoice();
}
