

// vars 
let current_tasks = document.getElementById('current-task');
const submit_button = document.querySelector('.submit');
let task_list = document.querySelector('.task-list');

function making_task(task_name){
    
    let main_div = document.createElement('div');
    main_div.className = 'task';
    let p = document.createElement('p');
    p.textContent = task_name;
    main_div.appendChild(p);
    return main_div;
}


submit_button.addEventListener('click' , function(){

    console.log('User Task is : ' , current_tasks.value);    

    if (current_tasks.value !== ""){
        div = making_task(current_tasks.value);
        current_tasks.value = ' ';
        task_list.appendChild(div);
    }
})

