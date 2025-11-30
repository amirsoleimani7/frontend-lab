let open_button = document.getElementById('open-btn');
let model_container = document.getElementById('model-container');
let close_button = document.getElementById('close-btn');


model_container.addEventListener('click' , function(e){
    model_container.style.display = 'none';
})


open_button.addEventListener('click' , function(e){
    model_container.style.display = 'block';
});

close_button.addEventListener('click' , function(){
    model_container.style.display = 'none';
});



window.addEventListener('click', function(e){

    if(e.target === model_container){
        model_container.style.display = 'none'
    }
})