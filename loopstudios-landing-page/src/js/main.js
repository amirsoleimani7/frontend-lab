//  open and close menu button
let show_list = document.querySelector('#show-list');
let close_list = document.querySelector('#close-list');
let links = document.querySelector('.links');
let main_navigation = document.querySelector('.main-navigation');

// make hover for see-all 
// make a smooth animation for menu 


show_list.addEventListener('click' , () => {
    show_list.classList.remove('active');
    close_list.classList.add('active');
    links.classList.add('hidden');
    
    main_navigation.style.position = 'fixed';
})


close_list.addEventListener('click' , () => {
    show_list.classList.add('active');
    close_list.classList.remove('active');
    links.classList.remove('hidden');
    
    main_navigation.style.position = '';
})