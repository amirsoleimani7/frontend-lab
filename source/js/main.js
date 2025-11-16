let rating_card = document.querySelector('.rating-container');



let submit_button = document.querySelector('.submit');
let radio_buttons = document.querySelectorAll('input[name=rating]');
console.log(`the radio is : ${radio_buttons.length}`);


// tnq card
let tnq_card = document.querySelector('.tnq-card');
let tnq_span_ = document.getElementById('user-rating');

submit_button.addEventListener('click' ,(e)=>{
    console.log(`we are in the event`);    
    for ( let i = 0 ; i < radio_buttons.length ;++i ){
        if(radio_buttons[i].checked){
            tnq_span_.innerText = radio_buttons[i].value;
        }
    }

    rating_card.style.display = 'none';
    tnq_card.style.display = 'flex';
})