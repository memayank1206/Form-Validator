const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'formcontrol error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show success
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'formcontrol success';
}

function checkemail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(input.value.trim()).toLowerCase())){
        showSuccess(input);
    }
    else{
        showError(input, `Email is not valid`);
    }
}

//Check required fields
function checkRequired(inputArray){
    inputArray.forEach(function(input){
        if (input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        }
        else{
            showSuccess(input);
        }

    });
}

//Check input length
function checklength(input, min, max){
    if (input.value.length<min){
        showError(input, `${getFieldName(input)} must be atleast ${min}`);
    }
    else if (input.value.length>max){
        showError(input, `${getFieldName(input)} must be less than ${max}`);
    }
}
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkpasswordsmatch(input1, input2){
    if (input1.value !== input2.value){
        showError(input2, "Passwords do not match");
    }
}
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checklength(username, 3, 20);
    checklength(password, 6, 15);
    checkemail(email);
    checkpasswordsmatch(password, password2);



    //Manually Checking each field (not optimal)
    // if (username.value === ''){
    //     showError(username, 'Username is required');
    // }
    // else{
    //     showSuccess(username);
    // }

    // if (email.value === ''){
    //     showError(email, 'Email is required');
    // }
    // else if (!isvalidemail(email.value)){
    //     showError(email, 'Invalid Email');
    // }
    // else{
    //     showSuccess(email);
    // }

    // if (password.value === ''){
    //     showError(password, 'Password is required');
    // }
    // else{
    //     showSuccess(password);
    // }

    // if (password2.value === ''){
    //     showError(password2, 'Password did not match');
    // }
    // else{
    //     showSuccess(password2);
    // }
});
