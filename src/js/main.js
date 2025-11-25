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

// email validation
function email_validation(email){
    let is_valid = true;    
    let index_alpha = email.indexOf('@');

    // checking for the @ 
    if(!email.includes('@')){
        is_valid = false;
    }
    
    // checking for stuff after/before the @ 
    if((email.slice(index_alpha + 1)) == "" || email.slice(0 , index_alpha) == ""){ 
        is_valid = false;
    }
    return is_valid;
}


for (let i = 0 ;i < querty_type_radio.length ;++i){
    querty_type_radio[i].addEventListener('click' , (e)=>{
        radio_error.style.display = 'none';
        e.target.parentElement.style.backgroundColor = "hsl(186, 15%, 59%)";
        e.target.parentElement.style.outline = "2px solid  hsl(169, 82%, 27%)";
        
        for (let i = 0 ;i < querty_type_radio.length ;++i){
            if (querty_type_radio[i] != e.target){
                querty_type_radio[i].parentElement.style.backgroundColor = "";
                querty_type_radio[i].parentElement.style.outline = "";
            }
        }
    })
}



submit_button.addEventListener('click' , (e)=> {
    e.preventDefault();
    var valid_flag = true;
   
   
    // check first_name and last_name
    if(first_name.value){
        console.log(`first name is : ${first_name.value}`);
        first_name_error.style.display = 'none';
    }
    else{
        first_name_error.style.display = 'block';
        valid_flag = false;
    }
    
    if(last_name.value){
        console.log(`last name is : ${last_name.value}`);
        last_name_error.style.display = 'none';
    }
    
    else{
        last_name_error.style.display = 'block'
        valid_flag = false;
    }
        
    //emails check 
    if(email.value){
        console.log(`the email is : ${email.value}`);
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
        console.log(`message is : ${messsage.value}`);
        message_error.style.display = 'block';
        valid_flag = false;
    }
    else{        
        message_error.style.display = 'none';
    }
    
    // radio check
    if (radio_validation(querty_type_radio)){
        console.log(`the selected value is : ${radio_validation(querty_type_radio)}`)
        radio_error.style.display = 'none';   
    }
    else{
        radio_error.style.display = 'block';   
        valid_flag = false;
    }

    // conseent check
    if (!consent.checked){
        consent_error.style.display = 'block';
        valid_flag = false;
    }
    else{        
        console.log(`consent  is : ${consent.checked}`);
        consent_error.style.display = 'none';
    }

    if(valid_flag){ 
        succ_msg.classList.add('forward');
        let x = document.body.children;
        for (let i =0 ;i < x.length; ++i ){
            x[i].style.filter = x[i].id == succ_msg.id ? 'blur(0px)' : "blur(5px)";
        }
    }
})

succ_msg.addEventListener('click' , () => {
    succ_msg.classList.remove('forward');
    let x = document.body.children;
    for (let i =0 ;i < x.length; ++i ){
        x[i].style.filter = 'blur(0px)';
    }    
})

