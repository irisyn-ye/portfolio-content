function checkForm() {
    var name_fill = document.getElementById("name_fill");
    var email_fill = document.getElementById("email_fill");

    if (name_fill.value == "") {
        window.alert("Please fill in your name!");
        return false;
    }
    
    else if (name_fill.value != "" && email_fill.value == "") {
        window.alert("Please fill in your email!");
        return false;
    }
    
    return true;
}