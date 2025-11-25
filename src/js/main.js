let open_nav_btn = document.querySelector('#open-button');
let close_nav_btn = document.querySelector('#close-button');
let hidden_menu = document.querySelector('.hidden-menu');

console.log(`open button is : ${open_nav_btn}`);
console.log(`close button is : ${close_nav_btn}`);


open_nav_btn.addEventListener('click' , (e)=> {
    open_nav_btn.style.display = 'none';
    close_nav_btn.style.display = 'block';
    hidden_menu.style.maxWidth = '500px';
    


})

close_nav_btn.addEventListener('click' , (e)=> {
    open_nav_btn.style.display = 'block';
    close_nav_btn.style.display = 'none';
    hidden_menu.style.maxWidth = '0px';
})

