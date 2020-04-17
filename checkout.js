var product;
var method;

function isDigit(event) {
    var key = event.keyCode;
    if(key > 47 && key < 58) {
        return true;
    }
    return false;
}

function enableAddress() {
    method = document.getElementById("method").value;
    var address = document.getElementById("address");
    if(method === "pickup") {
        address.disabled = true;
    } else {
        address.disabled = false;
    }
}

function submitCheckout() {
    product = document.getElementById("product").innerText;
    var checkoutForm = document.getElementById("checkoutForm");
    var firstname = checkoutForm.firstname.value;
    var lastname = checkoutForm.lastname.value;
    var phone = checkoutForm.phone.value;
    var email = checkoutForm.email.value;
    var address = checkoutForm.address.value;
    method = checkoutForm.method.value;
    var card = checkoutForm.card.value;
    console.log("Hi, " + firstname + " " + lastname + "!");
    var composeEmail = "mailto:" + email
        + "?subject=Vending Cars Order Confirmation"
        + "&body=Hi, " + firstname + " " + lastname + "! Your order for " + product + " has been placed ";
    if(method === "pickup") {
        composeEmail = composeEmail + "and will be ready for pickup. ";
    } else if(method === "standard") {
        composeEmail = composeEmail + "and will be delivered to " + address + " in 7 days. ";
    } else {
        composeEmail = composeEmail + "and will be delivered to " + address + " in 4 days. ";
    }
    composeEmail = composeEmail + "%0A%0AIf there is any delay, we will call your number at " + phone + ". "
        + "%0A%0AThank you for shopping from Vending Cars!%0A%0A";
    window.location.href = composeEmail;
}
