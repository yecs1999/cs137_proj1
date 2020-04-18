var product;
var method;
var address;

function isDigit(event) {
    var key = event.keyCode;
    if(key > 47 && key < 58) {
        return true;
    }
    return false;
}

function fillAddress() {
  address = new Array(5);
  address[0] = document.getElementById("country");
  address[1] = document.getElementById("address");
  address[2] = document.getElementById("city");
  address[3] = document.getElementById("state");
  address[4] = document.getElementById("zip");
}

function enableAddress() {
    method = document.getElementById("method").value;
    fillAddress();
    if(method === "pickup") {
        address.forEach(field => field.disabled = true);
    } else {
        address.forEach(field => field.disabled = false);
    }
}

function addressToString() {
    var str = address[1].value + ", ";
    str += address[2].value + ", ";
    str += address[3].value + " " + address[4].value;
    return str;
}

function submitCheckout() {
    product = document.getElementById("product").innerText;
    var checkoutForm = document.getElementById("checkoutForm");
    var firstname = checkoutForm.firstname.value;
    var lastname = checkoutForm.lastname.value;
    var code = checkoutForm.code.value;
    var phone = checkoutForm.phone.value;
    var email = checkoutForm.email.value;
    fillAddress();
    method = checkoutForm.method.value;
    var card = checkoutForm.card.value;
    console.log("Hi, " + firstname + " " + lastname + "!");
    var composeEmail = "mailto:" + email
        + "?subject=Vending Cars Order Confirmation"
        + "&body=Hi, " + firstname + " " + lastname + "! Your order for " + product + " has been placed ";
    if(method === "pickup") {
        composeEmail += "and will be ready for pickup. ";
    } else if(method === "standard") {
        composeEmail += "and will be delivered to " + addressToString() + " in 7 days. ";
    } else {
        composeEmail += "and will be delivered to " + addressToString() + " in 4 days. ";
    }
    composeEmail += "%0A%0AIf there is any delay, we will call your number at " + phone + ". "
        + "%0A%0AThank you for shopping from Vending Cars!%0A%0A";
    window.location.href = composeEmail;
}
