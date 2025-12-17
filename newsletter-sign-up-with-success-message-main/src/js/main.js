// vars 
// import submit_sound from '../../assets/audio/submit.wav'
// import close_sound from '../../assets/audio/close.mp3'

let user_email_ = document.getElementById('user-email');
let form = document.querySelector('.subscription-form');

let sign_up_page = document.querySelector('.sign-up');
let success_page = document.querySelector('.sucesss-card');
let error_text = document.querySelector('.input-error')

let submit_text = document.getElementById('form-input');

let submit_button = document.querySelector('.submit');
let dismiss_button = document.querySelector('.dismiss') 


// sounds
let submit_sound = new Audio('../../assets/audio/submit.wav');
let close_sound = new Audio('../../assets/audio/close.mp3');


// More efficient email validation using regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit" , function(e){
    e.preventDefault();
    let user_query_email = submit_text.value.trim();
    submit_sound.play();
    
    if (emailRegex.test(user_query_email)){
        sign_up_page.style.display = 'none';
        user_email_.innerText = user_query_email;
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
    close_sound.play();
    sign_up_page.style.display = 'flex';
    success_page.style.display = 'none';
})
