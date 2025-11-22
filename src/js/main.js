let succ_msg = document.querySelector('.success-message');
let submit_button = document.querySelector('.submit-button');

submit_button.addEventListener('click' , (e)=> {
    e.preventDefault();
    succ_msg.style.display = getComputedStyle(succ_msg).display == 'none' ? 'block' : 'none';
})


 