
// defines ...
const MAX_LEN = 5;

let bill_amount = document.getElementById('input-bill-amount');
let people_amount = document.getElementById('input-number-of-people');
let reset_button = document.getElementById('reset-button')

let tip_amount_info = document.getElementById('calc-tip')
let people_amount_info = document.getElementById('calc-total')


people_amount_info.textContent = "$0"
tip_amount_info.textContent = "$0";

let current_bill_amount;
let current_people_amount;
let curent_tip_percent;



const len_of_number = function(number){
    return number.toString().length;
}


// make persiction function 
function prec(number , to_fix , digits){
    // let x = Math.floor(number / (digits * 10));
    return number.toFixed(to_fix);
}

// calc tip/p total/p
function calc_tip_total(bill , people , tip=curent_tip_percent) {
    
    bill = parseFloat(bill);
    people = parseFloat(people);
    tip = parseFloat(tip);

    let tip_per_person = (bill * (tip / 100)) / people;
    let total_per_person = ((bill + (tip * bill / 100)) / people);
        
    return {
        "tip_per_person" : tip_per_person,
        "total_per_person" : total_per_person
    }
}

// reset buttons clears everyfield
reset_button.addEventListener('click' , () =>{
    bill_amount.value = "";
    people_amount.value = "";
    tip_amount_info.textContent = "$0";
    people_amount_info.textContent = "$0";
})

var radios = document.querySelectorAll("input[name='tip']");

// we should set some custom events here for the input fields to update ... 
var event_1 = new CustomEvent('input');




// fixing the custom radio button 
let custom_button = document.querySelector("input[id=input-radio]");
console.log(custom_button);

custom_button.addEventListener('focus' , (e)=>{
    e.target.parentElement.style.backgroundColor = "hsl(172, 67%, 45%)";
    e.target.parentElement.style.color = "hsl(183, 100%, 15%)";    
    e.target.style.backgroundColor = "hsl(172, 67%, 45%)";
    e.target.style.color = "hsl(183, 100%, 15%)";    

    for (let i = 0;i < radios.length ;++i){
        radios[i].parentElement.style.backgroundColor = '';
        radios[i].parentElement.style.color = '';
    }
})

custom_button.addEventListener('input' , (e)=>{
        
    curent_tip_percent = e.target.value;

    e.target.parentElement.style.backgroundColor = "hsl(172, 67%, 45%)";
    e.target.parentElement.style.color = "hsl(183, 100%, 15%)";    
    e.target.style.backgroundColor = "hsl(172, 67%, 45%)";
    e.target.style.color = "hsl(183, 100%, 15%)";    

    bill_amount.dispatchEvent(event_1);
    people_amount.dispatchEvent(event_1);


    if(len_of_number(e.target.value) == "" || e.target.value < 0){
            tip_amount_info.textContent = "$0";
            //Todo:  we should throw an error here for being negetive number
    }

    else if (len_of_number(curent_tip_percent) <= 2) {   
    }

    // handling the len of more than 8
    else  {                
        e.target.value = curent_tip_percent.toString().slice(0,2);
    }
    
})















for (let i = 0; i <= radios.length ; ++i){
    try { 
        radios[i].addEventListener('click' , (e) => {
            
            curent_tip_percent = e.target.value;
            bill_amount.dispatchEvent(event_1);
            people_amount.dispatchEvent(event_1);
            
            // TODO : this is pretty slow ... 
            for (let i = 0;i < radios.length ;++i){
                if (radios[i].checked){
                    radios[i].parentElement.style.backgroundColor = "hsl(172, 67%, 45%)";
                    radios[i].parentElement.style.color = "hsl(183, 100%, 15%)";    
                }
                else{
                    radios[i].parentElement.style.backgroundColor = '';
                    radios[i].parentElement.style.color = '';
                }
            }
            current_selected = e.target.value;
        })
    }

    catch (error){
        console.log(`this error is there ${error}`);
    }
}



bill_amount.addEventListener("input",(e) => {
    current_bill_amount = e.target.value;
    
    if(len_of_number(e.target.value) == "" || e.target.value < 0){
        tip_amount_info.textContent = "$0";
        //Todo:  we should throw an error here for being negetive number
    }

    else if (len_of_number(current_bill_amount) <= 5) {   
        res = calc_tip_total(current_bill_amount , current_people_amount);
        tip_amount_info.textContent = `$${prec(res["tip_per_person"] ,2 ,5)}`;
        people_amount_info.textContent = `$${prec(res["total_per_person"] ,2, 5)}`;
    }

    
    // handling the len of more than 8
    else  {
                
        e.target.value = current_bill_amount.toString().slice(0,MAX_LEN);
    }

})


people_amount.addEventListener("input",(e) => {
    current_people_amount = e.target.value;

    if(len_of_number(e.target.value) == ""){
        //Todo:  we should throw an error here for being negetive number
        people_amount_info.textContent = "$0"
    }

    else if(len_of_number(current_people_amount) <= 5){
        res = calc_tip_total(current_bill_amount , current_people_amount);
        tip_amount_info.textContent = `$${prec(res["tip_per_person"] ,2 , 5)}`;
        people_amount_info.textContent = `$${prec(res["total_per_person"] ,2 , 5)}`;
    }

    else {
        e.target.value = current_people_amount.toString().slice(0 , MAX_LEN);
    }

})

