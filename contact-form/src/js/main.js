let succ_msg = document.querySelector('.success-message');
let submit_button = document.querySelector('.submit-button');


// input fields for the contactform
let first_name  = document.querySelector('#first-name');
let last_name = document.querySelector('#last-name');
let email = document.querySelector('#email');
let querty_type_radio = document.querySelectorAll('input[name=query-type]');
let messsage = document.querySelector('#message');
let consent = document.querySelector('#consent');


// errors
let radio_error = document.querySelector('#que-type-error');
let consent_error = document.querySelector('#consent-error');
let first_name_error = document.querySelector('#first-name-error');
let last_name_error = document.querySelector('#last-name-error');
let email_empty_error = document.querySelector('#email-error-empty');
let email_validattion_error = document.querySelector('#email-error-validation');
let message_error = document.querySelector('#message-error');



// radio query validation
function radio_validation(radio_in){
    let selected_value = ''
    for (let i = 0; i < radio_in.length ;++i ){
        if (radio_in[i].checked){
            selected_value = radio_in[i].value;
        }
    }     
    return selected_value;
}

// More efficient email validation using regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function email_validation(email){
    return emailRegex.test(email);
}


// Use forEach for cleaner iteration
querty_type_radio.forEach(radio => {
    radio.addEventListener('click' , (e)=>{
        radio_error.style.display = 'none';
        e.target.parentElement.style.backgroundColor = "hsl(186, 15%, 59%)";
        e.target.parentElement.style.outline = "2px solid  hsl(169, 82%, 27%)";
        
        // Clear styles for other radios more efficiently
        querty_type_radio.forEach(r => {
            if (r != e.target){
                r.parentElement.style.backgroundColor = "";
                r.parentElement.style.outline = "";
            }
        });
    });
});



submit_button.addEventListener('click' , (e)=> {
    e.preventDefault();
    var valid_flag = true;
   
    // check first_name and last_name
    if(first_name.value){
        first_name_error.style.display = 'none';
    }
    else{
        first_name_error.style.display = 'block';
        valid_flag = false;
    }
    
    if(last_name.value){
        last_name_error.style.display = 'none';
    }
    else{
        last_name_error.style.display = 'block'
        valid_flag = false;
    }
        
    //emails check 
    if(email.value){
        email_empty_error.style.display = 'none';
        if (!email_validation(email.value)){
            email_validattion_error.style.display = 'block';    
            valid_flag = false;
        }
        else{
            email_validattion_error.style.display = 'none';                
        }
    }
    else{
        email_empty_error.style.display = 'block';
        email_validattion_error.style.display = 'none';    
        valid_flag = false;
    }

    // message_check 
    if(messsage.value == ''){
        message_error.style.display = 'block';
        valid_flag = false;
    }
    else{        
        message_error.style.display = 'none';
    }
    
    // radio check - Store result to avoid calling twice
    const selectedRadio = radio_validation(querty_type_radio);
    if (selectedRadio){
        radio_error.style.display = 'none';   
    }
    else{
        radio_error.style.display = 'block';   
        valid_flag = false;
    }

    // consent check
    if (!consent.checked){
        consent_error.style.display = 'block';
        valid_flag = false;
    }
    else{
        consent_error.style.display = 'none';
    }

    if(valid_flag){ 
        succ_msg.classList.add('forward');
        // More efficient blur application using Array.from
        Array.from(document.body.children).forEach(child => {
            child.style.filter = child.id == succ_msg.id ? 'blur(0px)' : "blur(5px)";
        });
    }
})

succ_msg.addEventListener('click' , () => {
    succ_msg.classList.remove('forward');
    // More efficient blur removal using Array.from
    Array.from(document.body.children).forEach(child => {
        child.style.filter = 'blur(0px)';
    });    
})

