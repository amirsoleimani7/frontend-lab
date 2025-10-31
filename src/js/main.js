let radio_button_form = document.querySelectorAll('input[type="radio"][name="time"]');
let grid_container = document.querySelector('.grid-container');


let current_category_type = 'Daily';


// ```
//     - Orange 300 (work): hsl(15, 100%, 70%)
//     - Blue 300 (play): hsl(195, 74%, 62%)
//     - Pink 400 (study): hsl(348, 100%, 68%)
//     - Green 400 (exercise): hsl(145, 58%, 55%)
//     - Purple 700 (social): hsl(264, 64%, 52%)
//     - Yellow 300 (self care): hsl(43, 84%, 65%)
// ```


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
    console.log(grid_container.children);
    
    // TODO : add animation for removing and adding grid-items ... 
    
    for (let i = grid_container.childElementCount -1 ; i>= 0; i-- ){
        if (grid_container.children[i].className == 'card'){
            grid_container.removeChild(grid_container.children[i]);
        }
    }

    

    console.log(grid_container.children);
    
    for (let i = 0 ; i < info_json.length ;++i){
        
        let title = info_json[i].title;
        
        let current_time = info_json[i].current_time;
        let prev_time = info_json[i].previous_time;

        let img_container = document.createElement('div');
        img_container.classList.add('image-container');
        
        let img = document.createElement('img');
        let excpected_src = title.toLowerCase().replace(' ' ,'-');
        img.src = `../../images/icon-${excpected_src}.svg`
        img_container.appendChild(img);
                
        
        let card_div = document.createElement('div');
        card_div.classList.add('card');
        
        let detail_div = document.createElement('div');
        detail_div.classList.add('detail');
        
        let header = document.createElement('h1');
        header.innerText = title;
        header.classList.add('item-title');

        let first_span = document.createElement('span');
        first_span.innerText = `${current_time}hrs`;
        first_span.classList.add('current');

        let second_span = document.createElement('span');
        
        switch (current_category_type){
            case "Daily": 
                second_span.innerText = `Last Day - ${prev_time}hrs`;
                break;
            case "Weekly":
                second_span.innerText = `Last Week - ${prev_time}hrs`;
                break;
            case "Monthly":
                second_span.innerText = `Last Month - ${prev_time}hrs`;
                break;
        }
        
        second_span.classList.add('prev');
        detail_div.appendChild(header);
        detail_div.appendChild(first_span);
        detail_div.appendChild(second_span);
        
        card_div.appendChild(img_container);
        card_div.appendChild(detail_div);
        grid_container.appendChild(card_div);
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
        console.log(`current category type is : ${current_category_type}`);
        update_card(current_json);
    } 
    
    
    catch (error) {
        console.error(error.message);
    }

}

