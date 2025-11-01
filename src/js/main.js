let radio_button_form = document.querySelectorAll('input[type="radio"][name="time"]');
let grid_container = document.querySelector('.grid-container');
update_html_category();
document.querySelector('.upper-div')
let current_category_type = 'Daily';




// TODO : add animation for removing and adding grid-items ... 


let card_colors = {
    "work"      : "hsl(15, 100%, 70%)"  ,
    "play"      : "hsl(195, 74%, 62%)"  ,
    "study"     : "hsl(348, 100%, 68%)" ,
    "exercise"  : "hsl(145, 58%, 55%)"  ,
    "social"    : "hsl(264, 64%, 52%)"  ,
    "self-care" : "hsl(43, 84%, 65%)"   
}


for (let i = 0; i < radio_button_form.length ; ++i){
    radio_button_form[i].addEventListener('click' , function(e){
        // setting the current category ... 
        current_category_type = e.target.value; 
        console.log(`current category value is : ${current_category_type}`);
        update_html_category();
    })
}

async function read_curr_prev_title(title, cat){
    const url = "../../data.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
            }
                    
        const result = await response.json();
        
        console.log(`cat is : ${cat}`);
        if (cat){
            const item = result.find(obj => obj.title == title);
            if(item){
                return {
                    first : item.timeframes[cat].current ,
                    second : item.timeframes[cat].previous ,
                }
            }
        }
    }
      
    catch (error) {
        console.error(error.message);
    }
}

// making the html .card and adding to the grid
function update_card(info_json){
    
    for (let i = grid_container.childElementCount -1 ; i>= 0; i-- ){
        if (grid_container.children[i].className == 'card'){
            grid_container.removeChild(grid_container.children[i]);                
        }
    }
    
    for (let i = 0 ; i < info_json.length ;++i){
        
        let title = info_json[i].title;
        
        let current_time = info_json[i].current_time;
        let prev_time = info_json[i].previous_time;

        let img_container = document.createElement('div');
        img_container.classList.add('image-container');
        
        let img = document.createElement('img');
        let excpected_src = title.toLowerCase().replace(' ' ,'-');
        img.src = `../../images/icon-${excpected_src}.svg`;
        img_container.appendChild(img);

        
        let card_div = document.createElement('div');
        card_div.classList.add('card');

        let upper_div = document.createElement('div');
        upper_div.classList.add('upper-div');
        
        let button_swicht_cat = document.createElement('button');
        button_swicht_cat.classList.add('switch-cat');
        
        let img_1 = document.createElement('img');
        img_1.src = '../../images/icon-ellipsis.svg';
        button_swicht_cat.appendChild(img_1);
        // add some event listener for this as well


        button_swicht_cat.addEventListener('click' , function(e){
            
            let card_title = e.target.parentElement.parentElement.querySelector('.item-title').innerText            
            console.log(`current attribut of this card is : ${e.target.parentElement.parentElement.parentElement.getAttribute('current_cat')}`);                
            
            let curr = e.target.parentElement.parentElement.parentElement.getAttribute('current_cat').toLowerCase();
            let main_div = e.target.parentElement.parentElement.parentElement;
            
            if (curr == 'daily'){
                e.target.parentElement.parentElement.parentElement.setAttribute('current_cat' , 'weekly');
                read_curr_prev_title(card_title , 'weekly')
                    .then( x => {
                        main_div.querySelector('.current').innerText = `${x.first}hrs`;
                        main_div.querySelector('.prev').innerText = `Last Week : ${x.second}hrs`;
                    });
            }
            
            if (curr == 'weekly'){
                e.target.parentElement.parentElement.parentElement.setAttribute('current_cat' , 'monthly');
                read_curr_prev_title(card_title , 'monthly')
                    .then( x => {
                        main_div.querySelector('.current').innerText = `${x.first}hrs`;
                        main_div.querySelector('.prev').innerText = `Last Month : ${x.second}hrs`;
                    });
            }

            if (curr == 'monthly'){
                e.target.parentElement.parentElement.parentElement.setAttribute('current_cat' , 'daily');
                read_curr_prev_title(card_title , 'weekly')
                    .then( x => {
                        main_div.querySelector('.current').innerText = `${x.first}hrs`;
                        main_div.querySelector('.prev').innerText = `Last Day : ${x.second}hrs`;
                    });
            }
            read_curr_prev_title(title, curr);

        });
        

        let detail_div = document.createElement('div');
        detail_div.classList.add('detail');
        

        let header = document.createElement('h1');
        header.innerText = title;
        header.classList.add('item-title');

        upper_div.appendChild(header);
        upper_div.appendChild(button_swicht_cat);

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
        detail_div.appendChild(upper_div);
        detail_div.appendChild(first_span);
        detail_div.appendChild(second_span);
        detail_div.setAttribute('current_cat' , 'Daily');        
        
        card_div.style.backgroundColor = card_colors[title.toLowerCase().replace(' ' ,'-')];
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

