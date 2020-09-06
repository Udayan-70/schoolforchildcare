function validation() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;
    error_message.style.padding = "10px";
    if (name.length < 5) {
        text = "Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if (subject.length < 10) {
        text = "Please Enter Correct subject";
        error_message.innerHTML = text;
        return false;
    }
    if (isNaN(phone) || phone.length != 11) {
        text = "Please Enter Valid Number";
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter Valid Email";
        error_message.innerHTML = text;
        return false;
    }

    if (message.length <= 20) {
        text = " Please Enter more than 20 characters";
        error_message.innerHTML = text;
        return false;
    }
    alert(" Submitted Successfully")
    return true;
}


function first() {
    document.getElementById("slideimage").src = "images/Sliders/three.jpg";

}
function second() {
    document.getElementById("slideimage").src = "images/Sliders/two.jpg";

}
function third() {
    document.getElementById("slideimage").src = "images/Sliders/one.jpg";

}
function fourth() {
    document.getElementById("slideimage").src = "images/Sliders/four.jpg";

}
setInterval(first, 2500);
setInterval(second, 5000);
setInterval(third, 7500);
setInterval(fourth, 10000);