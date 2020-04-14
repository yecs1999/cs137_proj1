
function submitInfo() {
    var infoForm = document.getElementById("infoForm");
    var firstname = infoForm.firstname.value;
    var lastname = infoForm.lastname.value;
    var phone = infoForm.phone.value;
    var email = infoForm.email.value;
    var address = infoForm.address.value;
    var method = infoForm.method.value;
    var card = infoForm.card.value;
    console.log("Hi, " + firstname + " " + lastname + "!");
}
