let rating_card = document.querySelector('.rating-container');
let is_cheacked = false;

let submit_button = document.querySelector('.submit');
let radio_buttons = document.querySelectorAll('input[name=rating]');

// tnq card
let tnq_card = document.querySelector('.tnq-card');
let tnq_span_ = document.getElementById('user-rating');


submit_button.addEventListener('click' ,(e)=>{
    console.log(`we are in the event`);    
    for ( let i = 0 ; i < radio_buttons.length ;++i ){
        if(radio_buttons[i].checked){
            tnq_span_.innerText = radio_buttons[i].value;
            is_cheacked = true;            
        }
    }
    
    if (is_cheacked){
        rating_card.style.display = 'none';
        tnq_card.style.display = 'flex';
    }
    else{
        submit_button.style.backgroundColor = 'red';   
    }    
});


let elements = document.querySelectorAll('body *:not(.submit)');
console.log(`elemts is : ${elements.length}`);

document.addEventListener('click', function (e) {
  if (!document.querySelector('.submit').contains(e.target) && tnq_card.style.display == 'flex') {
        tnq_card.style.display = 'none';
        rating_card.style.display = 'flex';    
        is_cheacked = false;
        submit_button.style.backgroundColor  = '';
  }
});

// for (let i = 0;  elements.length ; ++i){
//     try{
//         elements[i].addEventListener('click',(e)=> {    
//             if (tnq_card.style.display == 'flex'){
//                 tnq_card.style.display = 'none';
//                 rating_card.style.display = 'flex';    
//                 is_cheacked = false;
//                 submit_button.style.backgroundColor  = '';
//             }
//         } , false);
//     }
//     catch (e){
//         console.log(e);
//     }
// }
