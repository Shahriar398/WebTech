const PRICE_PER_SEAT = 1000;
const DISCOUNT_LIMIT = 5000;

const seatInput = document.getElementById("seatQty");
const courseTotal = document.getElementById("courseTotal");
const finalAmount = document.getElementById("finalAmount");

const classType = document.getElementById("classType");

const errorMsg = document.getElementById("errorMsg");
const discountMsg = document.getElementById("discountMsg");

const checkbox = document.getElementById("confirm");
const submitBtn = document.getElementById("submitBtn");

function calculateFee() {

    let seats = Number(seatInput.value);

    if (seats < 1 || isNaN(seats)) {
        errorMsg.textContent = "Seat quantity must be at least 1.";
        seats = 1;
        seatInput.value = 1;
    } else {
        errorMsg.textContent = "";
    }

    const courseFee = seats * PRICE_PER_SEAT;

    courseTotal.textContent = `${courseFee} Tk`;

    if (courseFee > DISCOUNT_LIMIT) {
        discountMsg.textContent = "You are eligible for a special discount.";
    } else {
        discountMsg.textContent = "";
    }

    const extraFee = Number(classType.value);

    finalAmount.textContent = `${courseFee + extraFee} Tk`;
}

seatInput.addEventListener("input", calculateFee);
classType.addEventListener("change", calculateFee);

checkbox.addEventListener("change", () => {
    submitBtn.style.display = checkbox.checked ? "block" : "none";
});

calculateFee();
