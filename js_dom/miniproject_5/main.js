

// vars 
let current_tasks = document.getElementById('current-task');
let main_container = document.querySelector('.main-container');
const submit_button = document.querySelector('.submit');
let task_list = document.createElement('div');
task_list.className = 'task-list';
main_container.appendChild(task_list);

function making_task(task_name){
    
    let main_div = document.createElement('div');
    main_div.className = 'task';
    let p = document.createElement('p');
    p.className = 'task-name';
    let Done = document.createElement('button');
    let Delete = document.createElement('button');
    Done.className = 'fa-solid fa-check';
    Delete.classList = 'fa-solid fa-trash';
    Done.setAttribute('id',  'done');
    Delete.setAttribute('id' , 'delete');

    p.textContent = task_name;

    Done.addEventListener('click' , function(e){
        let parent = e.target.parentElement;
        parent.style.backgroundColor = 'lightgreen';
        parent.children[0].style.textDecoration = 'line-through';
        
    });


    Delete.addEventListener('click' , function(e){
        let parent = e.target.parentElement;
        parent.remove();
    });

    
    main_div.appendChild(p);
    main_div.appendChild(Done);
    main_div.appendChild(Delete);


    return main_div;
    
}


submit_button.addEventListener('click' , function(){

    console.log('User Task is : ' , current_tasks.value);    
    
    if (current_tasks.value !== ''){
        div = making_task(current_tasks.value);
        current_tasks.value = '';
        task_list.appendChild(div);
    }
    else {
        alert('please enter a task');
    }

})

