

// vars 
let current_tasks = document.getElementById('current-task');
const submit_button = document.querySelector('.submit')


submit_button.addEventListener('click' , function(){
    console.log('User Task is : ' , current_tasks.value);
    
    // clearing the value .. 
    current_tasks.value = ' ';
})


