let radio_button_form = document.querySelectorAll('input[type="radio"][name="time"]');
let current_category_type = 'Daily';





for (let i = 0; i < radio_button_form.length ; ++i){
    radio_button_form[i].addEventListener('click' , function(e){
        // setting the current category ... 
        current_category_type = e.target.value; 
        console.log(`current category value is : ${current_category_type}`);
        update_html_category();
    })
}

function make_card(){
    // making the html .card and adding to the grid
}



async function update_html_category(){
    const url = "../../data.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
            }
        
        const result = await response.json();
        // console.log(`json before filtering is : ${result}`);
        let selection_cat = current_category_type.toLowerCase();
        for(let i = 0; i < result.length; ++i) {
            console.log(`title is : ${result[i].title}`)
        }        
    } 
    
    catch (error) {
        console.error(error.message);
    }

}

