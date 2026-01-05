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


