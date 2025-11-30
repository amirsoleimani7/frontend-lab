// vars
const startstopbtn = document.querySelector('#startstopbtn');
const resetbtn = document.querySelector('#resetbtn');

// variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// varibales for leading zero 
let leading_second = 0;
let leading_minutes = 0;
let leading_hours = 0;


// var for setinterval and timer status 

let timerinterval = null;
let timerstatus = 'stopped';

//stop watch function 


function stopwatch(){
    seconds ++;
    if(seconds / 60 == 1){
        seconds = 0;
        minutes++;
    }
    if(minutes / 60 == 1){
        minutes = 0;
        hours ++;
    }

    if(seconds < 10){
        leading_second = "0" + seconds.toString();
    }else{
        leading_second = seconds;
    }

    if(minutes < 10){
        leading_minutes = "0" + minutes.toString();
    }else{
        leading_minutes = minutes;
    }

    if(hours < 10){
        leading_hours= "0" + hours.toString();
    }else{
        leading_hours = hours;
    }

    let displattimer = document.getElementById('timer').innerText = leading_hours + ":" + leading_minutes + ":" + leading_second;
}



startstopbtn.addEventListener('click' , function(){
    
    if(timerstatus === 'stopped'){
        timerinterval = window.setInterval(stopwatch , 1000);
        document.getElementById('startstopbtn').innerHTML = '<i class="fa fa-pause" id="pause"></i>';
        timerstatus = 'started';
    }
    else{
        window.clearInterval(timerinterval);
        document.getElementById('startstopbtn').innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
        timerstatus = 'stopped';
    }
})

resetbtn.addEventListener('click' , function(){
    window.clearInterval(timerinterval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById('timer').innerText = "00:00:00";
})