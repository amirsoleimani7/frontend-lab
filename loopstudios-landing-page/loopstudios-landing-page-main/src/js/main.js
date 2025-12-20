//  open and close menu button
let show_list = document.querySelector('#show-list');
let close_list = document.querySelector('#close-list');
let links = document.querySelector('.links');


show_list.addEventListener('click' , () => {
    show_list.classList.remove('active');
    close_list.classList.add('active');
    links.classList.add('hidden');
})


close_list.addEventListener('click' , () => {
    show_list.classList.add('active');
    close_list.classList.remove('active');
    links.classList.remove('hidden');
})

