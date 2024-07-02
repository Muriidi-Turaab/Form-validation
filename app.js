const names= document.querySelector("#name")
const emails= document.querySelector("#email")
const passwords= document.querySelector("#password")
const cpasswords= document.querySelector("#cpassword")
const savebuton=document.querySelector("#saveBtn")
const errors=document.querySelector("#error")
const passwordError=document.querySelector("#passworderror")
const showError = document.querySelector("#showError");
const handleBtn = document.querySelector("#handleBtn");
const handleBtn2 = document.querySelector("#handleBtn2");


savebuton.addEventListener("click", function(e){
    e.preventDefault();
    checkempty();
    //checkpassword();

    
})

function checkempty(){
   
        
    if(names.value == "") {
        names.style.border = "2px solid red"
        errors.innerHTML="Fadlan soo buuxi formka"
        errors.innerHTML.color= "red"

    }else{
        names.style.border = "2px solid green"
    }
    
    if(emails.value == "") {
        emails.style.border = "2px solid red"
    }else {
        emails.style.border = "2px solid green"
    }

    if(passwords.value == "") {
        passwords.style.border = "2px solid red"
    }
    else {
        passwords.style.border = "2px solid green"
    }
    if(cpasswords.value == "") {
        cpasswords.style.border = "2px solid red"
    }
    else {
        cpasswords.style.border = "2px solid green"
    }
    

        
    if(passwords.value.length < 6){
        passwordError.innerHTML="Password must be at least 6"
    }
    else{
        passwordError.innerHTML="Strong Password"
        passwordError.style.color = "green";
    }

    if(cpasswords != passwords) {
        showError.innerHTML = "Passwords are not the same"
        showError.style.color = "red"
    }
    else{
        showError.innerHTML = "Passwords matched"
        showError.style.color = "green"
    }
}


handleBtn.addEventListener("click", ()=> {
    if(passwords.type == "password") {
        passwords.type = "text"
    }
    else{
        passwords.type = "password"
    }

})

handleBtn2.addEventListener("click", ()=> {
    if(cpasswords.type == "password") {
        cpasswords.type = "text";
    }
    else {
        cpasswords.type = "password"
    }
})