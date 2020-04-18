var product;
var method;
var address;

function isDigit(event, fieldName) {
    var key = event.keyCode;

    if(key > 47 && key < 58) {
        return true;
    }
    alert("Only digits are allowed in the " + fieldName + " field.");
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

function fieldsEmpty(listOfFields, listOfFieldsNames){
    for (i = 0; i<listOfFields.length; ++i)
    {
        if(method === "pickup" && i === 5) i = 10;
        let clearedElement = listOfFields[i].trim();
        if(clearedElement === "")
        {
            alert("Your " + listOfFieldsNames[i] + " cannot be blank. Please enter a " + listOfFieldsNames[i] + ".");
            return true;
        }
    }
    return false;
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
    var cvv = checkoutForm.cvv.value;

    let allFields = [firstname, lastname, code, phone, email, address[0].value, address[1].value, address[2].value, address[3].value, address[4].value, card, cvv];
    let allFieldsName = ["First Name", "Last Name", "International Code", "Phone Number", "Email-Address", "Country", "Street Address", "City", "State/Provence", "Postal Code", "Card Number", "CVV"];
    if (!fieldsEmpty(allFields,allFieldsName)){
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
}
