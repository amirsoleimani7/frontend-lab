
let share_button = document.querySelectorAll('.share-button');
let share_info_main = document.querySelector('.share-info');
let share_info = document.querySelector('.share-details');
let inner_user = document.querySelector('.inner-user');
let profile_image = document.querySelector('.profile-image');



var current_screen_width = window.screen.width;
const BREAKPOINT = 620;
let wasMobile = window.innerWidth < BREAKPOINT;

window.addEventListener("resize", function(event) {
    current_screen_width = window.screen.width;
    console.log("current screen width : ", current_screen_width);
    current_screen_width = window.innerWidth;
    const isMobile = current_screen_width < BREAKPOINT;

    if (isMobile !== wasMobile) {
        wasMobile = isMobile;

        share_info.style.display = '';
        inner_user.style.display = '';
        profile_image.style.display = '';
        share_info_main.classList.remove('active');

        console.log('🔄 Layout reset due to breakpoint change:', isMobile ? 'mobile' : 'desktop');
    }
})

function toggle_dispaly(curernt_style){
    return curernt_style =='none' ? 'flex' : 'none';
}

function toggle_dispaly_1(curernt_style){
    return curernt_style == 'none' ? 'block' : 'none';
}

for (let i = 0 ; i < share_button.length ; ++i){
    share_button[i].addEventListener('click' , function(e){
        console.log('current screen size is : ' ,current_screen_width);
        
        if (current_screen_width > 620){
            let computed_style = window.getComputedStyle(share_info).display;
            share_info.style.display = toggle_dispaly(computed_style);
        }else {

            let computed_style_share_info = window.getComputedStyle(share_info).display;
            let computed_style_inner_user = window.getComputedStyle(inner_user).display;
            let computed_style_profile_pic = window.getComputedStyle(profile_image).display;
            
            console.log("share_info is : " , window.getComputedStyle(share_info).display);
            console.log("inner_user is : " , window.getComputedStyle(inner_user).display);
            console.log("profile_image is : " , window.getComputedStyle(profile_image).display);

            share_info.style.display = toggle_dispaly(computed_style_share_info);
            
            inner_user.style.display = toggle_dispaly_1(computed_style_inner_user);
            profile_image.style.display = toggle_dispaly_1(computed_style_profile_pic);
            share_info_main.classList.toggle('active');
                        
            console.log("share_info is : " , window.getComputedStyle(share_info).display);
            console.log("inner_user is : " , window.getComputedStyle(inner_user).display);
            console.log("profile_image is : " , window.getComputedStyle(profile_image).display);
        }
    });
}

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
