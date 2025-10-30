let radio_button_form = document.querySelectorAll('input[type="radio"][name="time"]');
let grid_container = document.querySelector('.grid-container');


let current_category_type = 'Daily';





for (let i = 0; i < radio_button_form.length ; ++i){
    radio_button_form[i].addEventListener('click' , function(e){
        // setting the current category ... 
        current_category_type = e.target.value; 
        console.log(`current category value is : ${current_category_type}`);
        update_html_category();
    })
}



function update_card(info_json){
    // making the html .card and adding to the grid
    for (let i = 0 ; i < info_json.length ;++i){
        let title = info_json[i].title;
        let current_time = info_json[i].current_time;
        let prev_time = info_json[i].previous_time;

        

    }
}


async function update_html_category(){
    const url = "../../data.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
            }
                    
        const result = await response.json();
        console.log(`json before filtering is : ${result}`);
        
        let selection_cat = current_category_type.toLowerCase();
        let current_json =  [];
        
        for(let i = 0; i < result.length; ++i) {    
            
            let current_item  = {
                "title" : result[i].title,
                "current_time" : result[i].timeframes[selection_cat].current ,
                "previous_time" : result[i].timeframes[selection_cat].previous,
            }
            current_json.push(current_item);
        }
        update_card(current_json);
    } 
    
    
    catch (error) {
        console.error(error.message);
    }

}

