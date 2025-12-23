let rating_card = document.querySelector('.rating-container');
let is_cheacked = false;

let submit_button = document.querySelector('.submit');
let radio_buttons = document.querySelectorAll('input[name=rating]');

// tnq card
let tnq_card = document.querySelector('.tnq-card');
let tnq_span_ = document.getElementById('user-rating');


submit_button.addEventListener('click' ,(e)=>{
    // Use querySelector with :checked pseudo-class for better performance
    const checkedRadio = document.querySelector('input[name=rating]:checked');
    
    if (checkedRadio){
        tnq_span_.innerText = checkedRadio.value;
        rating_card.style.display = 'none';
        tnq_card.style.display = 'flex';
        is_cheacked = true;
    }
    else{
        submit_button.style.backgroundColor = 'red';   
    }    
});


// Removed inefficient querySelectorAll of all body elements

document.addEventListener('click', function (e) {
  // Cache the submit button instead of querying on every click
  if (!submit_button.contains(e.target) && tnq_card.style.display == 'flex') {
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
