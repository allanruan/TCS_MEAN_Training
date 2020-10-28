function printError(element, msg){
    document.getElementById(element).innerHTML = msg;
}

function validateForm(){
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var hobbies=[];
    var checkboxes = document.getElementsByName("hobbies[]");
    for(var i = 0;i<checkboxes.length;i++){
        if(checkboxes[i].checked){
            //populate hobbies array with selected values
            hobbies.push(checkboxes[i].value)
        }
    }

    var nameErr=emailErr=mobileErr=genderErr=countryErr = true;
    //Validate name
    if(name==""){
        printError("nameErr", "Please enter your name");
    }else{
        var regex =/^[a-zA-Z\s]+$/;
        if (regex.test(name)===false){
            printError("nameErr","Please enter a valid name");
        }else{
            printError("nameErr","");
            nameErr = false;
        }
    }

    if(email==""){
        printError("emailErr", "Please enter your email address");
    }else{
        var regex =/^\S+@\S+\.\S+$/;
        if (regex.test(email)===false){
            printError("emailErr","Please enter a valid email address");
        }else{
            printError("emailErr","");
            emailErr = false;
        }
    }
    if(mobile==""){
        printError("mobileErr", "Please enter your mobile phone number");
    }else{
        var regex =/^[0-9]+$/;
        if (regex.test(mobile)===false){
            printError("mobileErr","Please enter a valid phone number");
        }else{
            printError("mobileErr","");
            emailErr = false;
        }
    }
    if(country=="Select"){
        printError("countryErr", "Please select your country");
    }else{
        printError("countryErr","");
        countryErr = false;
    }
    if(gender==""){
        printError("genderErr", "Please select your gender");
    }else{
        printError("genderErr","");
        genderErr = false;
    }
    if(nameErr||emailErr||mobileErr||countryErr||genderErr==true){
        return false;
    }else{
        alert("you have submitted the form")
    }
}