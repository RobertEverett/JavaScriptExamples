var nameinput = document.getElementById('Name')
var passwordinput = document.getElementById('Pass')
var confirminput = document.getElementById('Confirm')


function validate()  {
    
    if (nameinput.value === '' || nameinput.value == null){
        document.querySelector("#error1").style.backgroundColor="#ff4747";
        document.querySelector("#error1").style.border="1px solid white";
        document.querySelector("#errortext1").textContent = 'Name is required';
    
    }else if (nameinput.value !== ''){
        document.querySelector("#error1").style.backgroundColor='';
        document.querySelector("#error1").style.border="";
        document.querySelector("#errortext1").textContent = '';
    
    }  if (passwordinput.value === '') {
        document.querySelector("#error2").style.backgroundColor="#ff4747";
        document.querySelector("#error2").style.border="1px solid white";
        document.querySelector("#errortext2").textContent = 'Please enter a password';

    } else if (passwordinput.value.length >= 1 && passwordinput.value.length < 8 || passwordinput.value.length > 20) {
        document.querySelector("#error2").style.backgroundColor="#ff4747";
        document.querySelector("#error2").style.border="1px solid white";
        document.querySelector("#errortext2").textContent ='Password must be at least 8 characters in length but no more than 20 characters in length';
        event.preventDefault();
    } else if (passwordinput.value.length >= 8 && passwordinput.value.length <= 20) {
        document.querySelector("#error2").style.backgroundColor="";
        document.querySelector("#error2").style.border="";
        document.querySelector("#errortext2").textContent ='';
        
    } if(confirminput.value === '' || confirminput.value !== passwordinput.value) {
        document.querySelector("#error3").style.backgroundColor="#ff4747";
        document.querySelector("#error3").style.border="1px solid white";
        document.querySelector("#errortext3").textContent = 'Passwords must match'
       event.preventDefault();
    }else if(confirminput.value === passwordinput.value) {
        document.querySelector("#error3").style.backgroundColor="";
        document.querySelector("#error3").style.border="";
        document.querySelector("#errortext3").textContent = "";

    }else if(confirminput.value !== passwordinput.value) {
    event.preventDefault();
    }   
};

function init() {
    document.querySelector('#form').onsubmit = validate();
};


    
