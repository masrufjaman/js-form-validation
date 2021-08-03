function validateForm() {
    var user = document.getElementById("username").value.trim();
    var pass = document.getElementById("password").value.trim();

    var must = "nsu";

    if (user == "") {
        alert("Username must be filled out");
        return false;
    }

    if (!user.toLowerCase().includes(must)){
        alert("Username must contain 'nsu'");
        return false;
    }

    if (pass == "") {
        alert("Password must be filled out");
        return false;
    }
    else {
        return CheckPassword();
    }
}


function CheckPassword() {

    var password = document.getElementById("password").value.trim();
    var strings = password.toString();
    var numeric = 0;
    var upper = 0;
    var lower = 0;
    var character = '';
    var checkpass = /[!@#$%^&*()_+=-~`]/;

    if (strings.length < 7 || strings.length > 20) {
        alert("Password length must be from 7 to 20");
            return false;
    }

    for (var i = 0; i < strings.length; i++) {
        character = strings.charAt(i);
        if (!isNaN(character * 1)) {
            numeric = 1;
        }
        if (character == character.toUpperCase()) {
            upper = 1;
        }
        if (character == character.toLowerCase()) {
            lower = 1;
        }
    }
    if (numeric == 0 || upper == 0 || lower == 0) {
        alert('Password must contain atleast one uppercase one lowercase and one numeric value');
        return false;
    }

    if(!password.trim().match(checkpass)){
            alert("Invalid. Password can not contain special characters");
            return false;
    }

    else{
        return otherValidation();
    }

}

function otherValidation() {
    var mail = document.getElementById("email").value.trim();
    var phn = document.getElementById("contact").value.trim();

    if (mail == "") {
        alert("Email must be filled out");
        return false;
    }

    if(mail.indexOf('@')<=0 ){
            alert("Email invalid @ position");
            return false;
    }
    
    if(mail.charAt(mail.length-4)!= '.' && mail.charAt(mail.length-3) != '.' ){
        alert("Email invalid '.' position");
        return false;
    }

    if(phn == ""){
        alert("Contact no must be filled out");
        return false;
    }

    if(phn.length != 11){
        alert("Contact no must be 11 digit");
        return false;
    }

    if(phn.toString().charAt(0) != 0 || phn.toString().charAt(1) != 1){
        alert("Contact must starts with 01xxxxxxxxx");
        return false;
    }   
     
}

// Modal Section
document.getElementById('button').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'flex';    
})

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none';
})