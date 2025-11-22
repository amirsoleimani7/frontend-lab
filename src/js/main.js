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




let valid_flag = false;

function radio_check(radio_in){
    let selected_value = ''
    for (let i = 0; i < querty_type_radio.length ;++i ){
        if (querty_type_radio[i].checked){
            selected_value = querty_type_radio[i].value;
            // console.log(`selected value is : ${querty_type_radio[i].value}`);
            // is_checked = true;
        }
    } 
    
    return selected_value;
}



submit_button.addEventListener('click' , (e)=> {
    e.preventDefault();
    
    console.log(`first name is : ${first_name.value}`);
    console.log(`last name is : ${last_name.value}`);
    console.log(`messsage is : ${messsage.value}`);

    
    // radio check :
    if (radio_check(querty_type_radio)){
        console.log(`the selected value is : ${radio_check(querty_type_radio)}`)
        radio_error.style.display = 'none';   
    }
    else{
        radio_error.style.display = 'block';   
    }
    
    

    if (!consent.checked){
        consent_error.style.display = 'block';
    }
    else{        
        console.log(`consent  is : ${consent.checked}`);
        consent_error.style.display = 'none';
    }

    if(valid_flag){
        succ_msg.style.display = getComputedStyle(succ_msg).display == 'none' ? 'block' : 'none';
    }
})


 