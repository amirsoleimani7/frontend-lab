let left_button = document.querySelector('#left');
let right_button = document.querySelector('#right');
let target_image = document.querySelector('#target-image');


let current_pic_index = 1;

function set_num(index){
    document.querySelector(`#item-${index}`).style.display = 'initial';
    for (let i = 1; i <= 3 ;++i){
        if (i != index){
            document.querySelector(`#item-${i}`).style.display = 'none';    
        }
    }    
}

left_button.addEventListener('click' , ()=> {
    current_pic_index = ( current_pic_index == 1) ? 3 : current_pic_index -1;
    target_image.src = `../../images/desktop-image-hero-${current_pic_index}.jpg`; 
    set_num(current_pic_index);
})

right_button.addEventListener('click' , ()=> {
    current_pic_index = ( current_pic_index == 3) ? 1 : current_pic_index +1;        
    target_image.src = `../../images/desktop-image-hero-${current_pic_index}.jpg`; 
    set_num(current_pic_index);

})

// showing and clsoing menu
let show_menu = document.querySelector('#show-menu');
let close_menu = document.querySelector('#close-menu');

let links = document.querySelector('.links');
let logo = document.querySelector('.logo');

// hidden background 
let hidden_background = document.querySelector('.hidden-background');

// initial showing
show_menu.classList.add('active');
show_menu.addEventListener('click', () => {
    close_menu.classList.add('active');
    show_menu.classList.remove('active');
    links.classList.add('active');
    logo.classList.add('active');
    
    // toggleting hidden-background 
    hidden_background.classList.add('active');

});

close_menu.addEventListener('click', () => {
    show_menu.classList.add('active');
    close_menu.classList.remove('active');
    links.classList.remove('active');
    links.classList.remove('active');
    logo.classList.remove('active');


    hidden_background.classList.remove('active');
});

