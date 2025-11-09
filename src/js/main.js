let bill_amount = document.getElementById('input-bill-amount');
let people_amount = document.getElementById('input-number-of-people');
let reset_button = document.getElementById('reset-button')



let tip_amount_info = document.getElementById('calc-tip')
let people_amount_info = document.getElementById('calc-total')

people_amount_info.textContent = "$0"
tip_amount_info.textContent = "$0";

const MAX_LEN = 9;


let current_bill_amount;
let current_people_amount;


const len_of_number = function(number){
    return number.toString().length;
}


// make persiction function 


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



bill_amount.addEventListener("input",(e) => {
    current_bill_amount = e.target.value;
    
    if(len_of_number(e.target.value) == "" || e.target.value < 0){
        tip_amount_info.textContent = "$0";
        

        //Todo:  we should throw an error here for being negetive number

    }

    else if (len_of_number(current_bill_amount) <= 8) {   
        res = calc_tip_total(current_bill_amount , current_people_amount);
        tip_amount_info.textContent = `$${res["tip_per_person"].toFixed(2)}`
        people_amount_info.textContent = `$${res["total_per_person"].toFixed(5)}`

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

    else if(len_of_number(current_people_amount) <= 8){
        res = calc_tip_total(current_bill_amount , current_people_amount);
        tip_amount_info.textContent = `$${res["tip_per_person"].toFixed(2)}`
        people_amount_info.textContent = `$${res["total_per_person"].toFixed(2)}`
    }

    else {
        e.target.value = current_people_amount.toString().slice(0 , MAX_LEN);
    }

})