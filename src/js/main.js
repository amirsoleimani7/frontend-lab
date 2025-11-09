let bill_amount = document.getElementById('input-bill-amount');
let people_amount = document.getElementById('input-number-of-people');



let tip_amount_info = document.getElementById('calc-tip')
let people_amount_info = document.getElementById('calc-total')


console.log(`tip amount is : ${tip_amount_info}`)
console.log(`people amount is : ${people_amount_info}`)

let current_bill_amount;
let current_people_amount;


const len_of_number = function(number){
    return number.toString().length;
}

bill_amount.addEventListener("input",(e) => {
    
    current_bill_amount = e.target.value;
    if (len_of_number(current_bill_amount) <= 8) {   
        tip_amount_info.textContent = current_bill_amount
        people_amount_info.textContent = current_people_amount
    }

    console.log(`bill amount is : ${current_bill_amount}`)

})


people_amount.addEventListener("input",(e) => {
    if(len_of_number(current_people_amount) <= 8){
        current_people_amount = e.target.value;
        people_amount_info.textContent = current_people_amount;
    }
    console.log(`bill amount is : ${current_people_amount}`)
})


