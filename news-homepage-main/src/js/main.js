let open_nav_btn = document.querySelector('#open-button');
let close_nav_btn = document.querySelector('#close-button');
let hidden_menu = document.querySelector('.hidden-menu');
let main_container = document.querySelector('.main-container');


open_nav_btn.addEventListener('click' , (e)=> {
    open_nav_btn.style.display = 'none';
    close_nav_btn.style.display = 'block';
    hidden_menu.style.maxWidth = '500px';
    hidden_menu.style.position ='fixed';
    main_container.classList.add('x');
    
})


close_nav_btn.addEventListener('click' , (e)=> {
    open_nav_btn.style.display = 'block';
    close_nav_btn.style.display = 'none';
    hidden_menu.style.maxWidth = '0px';
    hidden_menu.style.position = '';
    main_container.classList.remove('x');
})

