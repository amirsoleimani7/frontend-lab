// adding and removing item 
let add_item_button = document.querySelector('#add-item');
let remove_item_button = document.querySelector('#remove-item');
let item_number = document.querySelector('#items-no');

// initialization of the thing
item_number.textContent = 0;

// adding an item
add_item_button.addEventListener('click' , () => {
    console.log(`current number is : ${item_number.textContent}`);
    item_number.textContent = parseInt(item_number.textContent) + 1;

})

// removing an item
remove_item_button.addEventListener('click' , () => {
    if (parseInt(item_number.textContent) > 0){
        item_number.textContent = parseInt(item_number.textContent) + -1;
    }
})

// add to cart functionality 
let add_to_cart_button = document.querySelector('#add-to-cart');
let number_of_items_on_cart = document.querySelector('.current-number-of-items');

add_to_cart_button.addEventListener('click' , () =>{
    if (parseInt(item_number.textContent) != 0){
        number_of_items_on_cart.style.display = 'block';
        number_of_items_on_cart.textContent = parseInt(item_number.textContent);
    }
    else{        
        number_of_items_on_cart.style.display = 'none';
    }
})

// reading current photo selected
let radio_pics = document.getElementsByName('photo');


// which pic are we on at the moment
let current_index = 1;

// updating current image
function update_image(image_number) {

    let current_image_class = `.image-${image_number}`;
    let image_to_show = document.querySelectorAll(current_image_class);
    for (let i =0 ;i < image_to_show.length ;++i){
        image_to_show[i].style.display = 'block';
    }
    
    
    for (let i = 1; i <= 4;++i){
        if (i != image_number){
            let this_one = `.image-${i}`;
            let _none_images = document.querySelectorAll(this_one);
            for (let i = 0 ; i < _none_images.length ;++i){
                _none_images[i].style.display = 'none';
            }
        }
    }
}

// adding event listeners 

for (let i = 0 ; i < radio_pics.length ; ++i){
    radio_pics[i].addEventListener('click' , (e) => {
        console.log(`number of photos is : ${radio_pics.length}`);
        console.log(`target is : ${e.target.id}`);
        current_index = parseInt(radio_pics[i].value);
        update_image(parseInt(radio_pics[i].value));
    })
}

// see which image is clicked on 
let images = document.querySelectorAll('.image');

    
var lightbox = document.createElement('div');
var inner_div = document.createElement('div');

// making the lightbox element ... 
function make_close_button(inner_div) {
    var close_button = document.createElement('button');
    close_button.id = 'close-light-box';
    let close_image = document.createElement('img');
    close_image.src = '../../images/icon-close.svg';
    close_button.appendChild(close_image);
    

    // adding closing functionality
    close_button.addEventListener('click' , () => {
        lightbox.classList.remove('active');
    })

    inner_div.appendChild(close_button);
}


function make_plus_and_minus() {
    
    let next_button = document.createElement('button');
    next_button.id = 'next';
    // event for going to the other picture
    next_button.addEventListener('click' , () => {
        
        current_index = (current_index == 4) ? 1 : current_index + 1;

        for (let i = 1; i <= 4;++i){
            if (radio_pics[i].value == current_index){
                radio_pics[i].checked = true;
                update_image(radio_pics[i].value);
            }
       }
    })
    
    let next_image = document.createElement('img');
    next_image.src = '../../images/icon-next.svg';
    next_button.appendChild(next_image);
    
    let prev_button = document.createElement('button');
    prev_button.id = 'prev';

    
    // event for going to the prevv picture
    prev_button.addEventListener('click' , () => {

        current_index = (current_index == 1) ? 4 : current_index - 1;
        for (let i = 1; i <= 4;++i){
            if (radio_pics[i].value == current_index){
                radio_pics[i].checked = true;
                update_image(radio_pics[i].value);
            }
       }
    })

    

    let prev_image = document.createElement('img');
    prev_image.src = '../../images/icon-previous.svg';
    prev_button.appendChild(prev_image);

    inner_div.appendChild(prev_button);
    inner_div.appendChild(next_button);
}



function making_light_box(){
    
    lightbox.id = 'lightbox';
    inner_div.id = 'inner_div';
    inner_div.style.position = 'relative';
    

    document.body.appendChild(lightbox);
    inner_div.innerHTML = document.querySelector('.outer-image').innerHTML;
    
    make_close_button(inner_div);
    make_plus_and_minus();
    lightbox.appendChild(inner_div);
    
    console.log(`radio len is : ${radio_pics.length}`);
    
    for (let i = 0 ; i < radio_pics.length ; ++i){
        radio_pics[i].addEventListener('click' , (e) => {
            console.log(`number of photos is : ${radio_pics.length}`);
            console.log(`target is : ${e.target.value}`);
            current_index = parseInt(radio_pics[i].value);
            update_image(parseInt(radio_pics[i].value));
        })
    }

}


for (let i = 0; i < images.length ; ++i){
    images[i].addEventListener('click' , (e) => {
        // what is the current iamge that is clicked on (first one is diffrent)
        making_light_box();
        
        lightbox.classList.add('active');
    })
}
