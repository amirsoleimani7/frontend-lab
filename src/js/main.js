// vars 

let user_email_ = document.getElementById('user-email');
let form = document.querySelector('.subscription-form');

let sign_up_page = document.querySelector('.sign-up');
let success_page = document.querySelector('.sucesss-card');
let error_text = document.querySelector('.input-error')

let submit_text = document.getElementById('form-input');

let submit_button = document.querySelector('.submit');
let dismiss_button = document.querySelector('.dismiss') 


form.addEventListener("submit" , function(e){
    e.preventDefault();
    let user_query_email = submit_text.value;
    
    if (
        user_query_email.includes('@') && 
        user_query_email.slice(-4) == '.com' && 
        user_query_email.slice(user_query_email.indexOf('@') + 1 , -4) != '' &&
        user_query_email.slice(0 ,user_query_email.indexOf('@')) != ''){

        console.log(`user emails is : ${submit_text.value}`)

        sign_up_page.style.display = 'none';
        user_email_.innerText = submit_text.value;
        success_page.style.display = 'block';
    }
    
    else {
        error_text.style.display = 'block';
        submit_text.style.backgroundColor = '#FFE8E6';
        submit_text.style.color = 'hsl(4, 100%, 67%)';
        submit_text.style.border = '1px solid red';
    }
    
    
})

dismiss_button.addEventListener('click' , function(){
    sign_up_page.style.display = 'flex';
    success_page.style.display = 'none';
})
