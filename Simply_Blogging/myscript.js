function printError(element, msg){
    document.getElementById(element).innerHTML = msg;
}

function validateForm(){
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var inquiry = document.contactForm.inquiry.value;


    var nameErr=emailErr=mobileErr=inquiryErr = true;
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
    if(inquiry==""){
        printError("inquiryErr", "Please enter your inquiry");
    }else{
        printError("inquiryErr","");
        inquiryErr = false;
    }
    if(nameErr||emailErr||mobileErr||inquiryErr==true){
        return false;
    }else{
        alert("you have submitted the form")
    }
}

function printError(element, msg){
    document.getElementById(element).innerHTML = msg;
}

function validateBlog(){
    var title = document.blogForm.title.value;
    var tag = document.blogForm.tag.value;
    var body = document.blogForm.body.value;
    var img = document.blogForm.blogimg.value;


    var titleErr=tagErr=bodyErr=imgErr = true;
    if(title==""){
        printError("titleErr", "Please enter a title");
    }else{
        printError("titleErr","");
        titleErr = false;
    }

    if(tag==""){
        printError("tagErr", "Please enter a tag");
    }else{
        printError("tagErr","");
        emailErr = false;
    }
    if(body==""){
        printError("bodyErr", "Please enter blog content");
    }else{
        printError("bodyErr","");
        emailErr = false;
    }

    if(img==""){
        printError("imgErr", "Please enter your inquiry");
    }else {
        var regex =/^\S+\.[jpg,png]+$/i;
        if (regex.test(img)===false){
        printError("imgErr","Please attach a jpg or png file");
        }else{
            printError("imgErr","");
            imgErr = false;
        }
    }
    
    if(titleErr||tagErr||bodyErr||imgErr==true){
        return false;
    }else{
        alert("you have submitted the form")
    }
}