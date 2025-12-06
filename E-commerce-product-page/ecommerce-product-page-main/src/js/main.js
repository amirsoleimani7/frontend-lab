// initialization of the thing

// adding and removing item 
let add_item_button = document.querySelector('#add-item');
let remove_item_button = document.querySelector('#remove-item');
let item_number = document.querySelector('#items-no');

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





