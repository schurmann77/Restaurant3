function valid() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var inquiry = document.getElementById("inquiry").value;

    if (name != "" && email != "" && phone != "" && inquiry != "") {
        alert("Thank you for your submission, we will contact you in the next 2-5 business days.")
    }
    
}