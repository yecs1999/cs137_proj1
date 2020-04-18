var product;
var method;

function isDigit(event, fieldName) {
    var key = event.keyCode;
    
    if(key > 47 && key < 58) {
        return true;
    }
    alert("Only digits are allowed in the " + fieldName + " field.");
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

//returns true and creates an alert message if there is an empty field, false otherwise
function fieldsEmpty(listOfFields, listOfFieldsNames){
    for (i = 0; i<listOfFields.length; ++i)
    {
        let clearedElement = listOfFields[i].trim();
        if(clearedElement == "")
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
    var phone = checkoutForm.phone.value;
    var email = checkoutForm.email.value;
    var address = checkoutForm.address.value;
    method = checkoutForm.method.value;
    var card = checkoutForm.card.value;

    let allFields = [firstname, lastname, phone, email, address, card];
    let allFieldsName = ["First Name", "Last Name", "Phone Number", "Email-Address", "Shipping Address", "Payment Info"];
    if (!fieldsEmpty(allFields,allFieldsName)){
        
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
        + "%0A%0AThank you for shopping with Vending Cars!%0A%0A";
    window.location.href = composeEmail;
    }
}
