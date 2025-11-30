// variables

let btn = document.querySelector('#new-quate')
let quate = document.querySelector('.quate')
let person = document.querySelector('.person')

const quates = [
    {
        quate : `"this is the something insigtfull as hell"` ,
        person : `amir`
    },
    {
        quate : `"this is the something insigtfull as hell1"` ,
        person : `mmd`
    },
    {
        quate : `"this is the something insigtfull as hell2"` ,
        person : `reza`
    },
    {
        quate : `"this is the something insigtfull as hell3"` ,
        person : `amir3`
    },
    {
        quate : `"this is the something insigtfull as hell4"` ,
        person : `amir4`
    }
]

btn.addEventListener('click' , function(){
    
    let random = Math.floor(Math.random() * quates.length);
    
    quate.innerHTML = quates[random].quate
    person.innerHTML = quates[random].person
})