let left_button = document.querySelector('#left');
let right_button = document.querySelector('#right');


let current_pic_index = 1;

left_button.addEventListener('click' , ()=> {
    current_pic_index = ( current_pic_index == 1) ? 3 : current_pic_index -1;        
    

})

right_button.addEventListener('click' , ()=> {
    current_pic_index = ( current_pic_index == 3) ? 1 : current_pic_index +1;        
    console.log(`current index is : ${current_pic_index}`);
    
})


