let bill_amount = document.getElementById('input-bill-amount');
let people_amount = document.getElementById('input-number-of-people');
let reset_button = document.getElementById('reset-button')



let tip_amount_info = document.getElementById('calc-tip')
let people_amount_info = document.getElementById('calc-total')

people_amount_info.textContent = "$0"
tip_amount_info.textContent = "$0";

const MAX_LEN = 5;

let current_bill_amount;
let current_people_amount;


const len_of_number = function(number){
    return number.toString().length;
}


// make persiction function 
function prec(number , to_fix , digits){
    let x = Math.floor(number / (digits * 10));
    return number.toFixed(to_fix);
}

// calc tip/p total/p
function calc_tip_total(bill , people , tip=10) {
    
    let tip_per_person = (bill * (tip / 100)) / people;
    let total_per_person = ((bill * (tip / 100)) + bill) / people;
    
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


let current_selected = 'custom';

for (let i = 0; i <= radios.length ; ++i){
    try { 
        radios[i].addEventListener('click' , (e) => {
            
            e.target.parentElement.style.backgroundColor = "hsl(172, 67%, 45%)";
            e.target.parentElement.style.color = "hsl(183, 100%, 15%)";
            current_selected = e.target.value;
            console.log(`this radio is clicked : ${e.target.value}`);
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
        tip_amount_info.textContent = `$${prec(res["tip_per_person"],2 ,5)}`
        people_amount_info.textContent = `$${prec(res["total_per_person"],2 ,5)}`
    }

    
    // handling the len of more than 8
    else  {
                
        e.target.value = current_bill_amount.toString().slice(0,MAX_LEN);
    }
    
    console.log(`bill amount is : ${current_bill_amount}`)

})


people_amount.addEventListener("input",(e) => {
    current_people_amount = e.target.value;

    if(len_of_number(e.target.value) == ""){
        //Todo:  we should throw an error here for being negetive number
        people_amount_info.textContent = "$0"
    }

    else if(len_of_number(current_people_amount) <= 5){
        res = calc_tip_total(current_bill_amount , current_people_amount);
        tip_amount_info.textContent = `$1${prec(res["tip_per_person"] ,2 ,5)}`
        people_amount_info.textContent = `$${prec(res["total_per_person"],2 ,5)}`
    }

    else {
        e.target.value = current_people_amount.toString().slice(0 , MAX_LEN);
    }

})

