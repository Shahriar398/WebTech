const seatPrice = 1000;
const discountLimit = 5000;

const seatQty = document.getElementById("seatQty");
const courseTotal = document.getElementById("courseTotal");
const finalAmount = document.getElementById("finalAmount");
const classType = document.getElementById("classType");

const errorMsg = document.getElementById("errorMsg");
const discountMsg = document.getElementById("discountMsg");

const checkbox = document.getElementById("confirm");
const submitBtn = document.getElementById("submitBtn");

function calculateTotal() {

    let qty = parseInt(seatQty.value);

    if(qty <= 0 || isNaN(qty))
    {
        errorMsg.innerHTML = "Quantity cannot be zero or negative.";
        qty = 1;
        seatQty.value = 1;
    }
    else
    {
        errorMsg.innerHTML = "";
    }

    let total = qty * seatPrice;

    courseTotal.innerHTML = total + " Tk";

    if(total > discountLimit)
    {
        discountMsg.innerHTML =
        "You are eligible for a special discount.";
    }
    else
    {
        discountMsg.innerHTML = "";
    }

    let extraFee = parseInt(classType.value);

    let payable = total + extraFee;

    finalAmount.innerHTML = payable + " Tk";
}

seatQty.addEventListener("input", calculateTotal);

classType.addEventListener("change", calculateTotal);

checkbox.addEventListener("change", function(){

    if(checkbox.checked)
    {
        submitBtn.style.display="inline-block";
    }
    else
    {
        submitBtn.style.display="none";
    }

});

calculateTotal();