

// vars 
let current_tasks = document.getElementById('current-task');
const submit_button = document.querySelector('.submit')


submit_button.addEventListener('click' , function(){
    console.log(current_tasks.value);
    current_tasks.value = '';
})