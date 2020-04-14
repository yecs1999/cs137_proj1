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

function submitInfo() {
    var infoForm = document.getElementById("infoForm");
    var firstname = infoForm.firstname.value;
    var lastname = infoForm.lastname.value;
    var phone = infoForm.phone.value;
    var email = infoForm.email.value;
    var address = infoForm.address.value;
    method = infoForm.method.value;
    var card = infoForm.card.value;
    console.log("Hi, " + firstname + " " + lastname + "!");
}
