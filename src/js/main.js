
const share_button = document.getElementById('share-button');
let share_info = document.querySelector('.share-details');
var current_screen_width;


window.addEventListener("resize", function(event) {
    current_screen_width = window.screen.width;
    console.log(current_screen_width);
    if(current_screen_width < 620){
        share_info.style.display = 'none';
    }
})


function toggle_dispaly(curernt_style){
    return curernt_style =='none' ? 'flex' : 'none';
}

share_button.addEventListener('click' , function(){
    
    if (current_screen_width > 620){
        let computed_style = window.getComputedStyle(share_info).display;
        share_info.style.display = toggle_dispaly(computed_style);
    }

});


window.addEventListener('click' , function(e){
    
    
    if (current_screen_width > 620){
        if (e.target.id == 'share-button'){
            return;
        }
        else {
            let computed_style = window.getComputedStyle(share_info).display;
            share_info.style.display = computed_style == 'flex' ? 'none' : 'none';
        }
    }    
})
