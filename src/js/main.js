
const share_button = document.getElementById('share-button');
let share_info = document.querySelector('.share-details');
console.log('sahre info is ; ' , share_info);
console.log(share_button);

function toggle_dispaly(curernt_style){
    return curernt_style =='none' ? 'flex' : 'none';
}

share_button.addEventListener('click' , function(){
    
    let computed_style = window.getComputedStyle(share_info).display;
    share_info.style.display = toggle_dispaly(computed_style);
});

window.addEventListener('click' , function(e){
    if (e.target.id == 'share-button'){
        return;
    }
    else {
        let computed_style = window.getComputedStyle(share_info).display;
        share_info.style.display = computed_style == 'flex' ? 'none' : 'none';
    }
})
