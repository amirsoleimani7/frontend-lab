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


// updating current image
function update_image(image_number) {

    let current_image_class = `.image-${image_number}`;
    let image_to_show = document.querySelector(current_image_class);
    image_to_show.style.display = 'block';
    
    for (let i = 1; i <= 4;++i){
        if (i != image_number){
            let this_one = `.image-${i}`;
            document.querySelector(this_one).style.display = 'none';;
        }
    }
}

// adding event listeners 
for (let i = 0 ; i < radio_pics.length ; ++i){
    radio_pics[i].addEventListener('click' , () => {
        console.log(`this is : ${radio_pics[i].value}`)
        update_image(radio_pics[i].value);
    })
}



// see which image is clicked on 
let images = document.querySelectorAll('.image');


// making the lightbox element ... 
var lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

lightbox.addEventListener('click' , e => {
    lightbox.removeChild(e.target);
    lightbox.classList.remove('active');
})


for (let i = 0; i < images.length ; ++i){
    images[i].addEventListener('click' , (e) => {
        // what is the current iamge that is clicked on (first one is diffrent)
        console.log(`the ttarget is : ${e.target.classList[0]}`);
        const image = document.createElement('img');
        image.src = e.target.src;
        image.style.width  = "400px";
        image.style.height  = "400px";
        image.style.aspectRatio  = "1 / 1";
        image.style.borderRadius  = "1rem";        
        lightbox.appendChild(image);
        lightbox.classList.add('active');
    })
}












