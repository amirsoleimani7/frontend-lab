/*  
    Data Types : 
        undefined , null , string , boolean , symbol , number , object
*/

// var my_data = 'test' ; 
// let outname = "freecodecamp";
// const pi = 3.14;

var b = "strings and stuff like that";
var x = "some other \"test\" other than this";

//  using `` for string that contain both ' and "
var my_str = `<a href=""></a> this asdasd 'some other things' sdasd`;

var stuff = 'some other stuxf';


function wordBlanks(my_noun ,my_Adj ,my_verb , my_adverb){
    var resault = "";
    resault += my_Adj + " " + my_noun + " " + my_verb + " " +  my_adverb;
    return resault;
} 

var our_array = ["amir" ,[2,4]];
our_array.push(["dog" , "3"]);
our_array.shift();
our_array.unshift(["test" , 1]);

var my_list = [["ecreal" ,3]  ,["milk" , 2] , ["bananas" , 1] , ["juice" , 1]];


function test_func(){
    console.log("this is some test !");
}


function reusable_function(a , b)
{
    console.log(a + b)
}

var global_= 10;

function fun1(){
   var off_global = 1;
}

function fun2(){
   
    var out = ""
    
    if(typeof global_  != "undefined"){
        out += "my glaobal is : " + global_ + "\n";  
    }

    if(typeof off_global != "undefined"){
        out += "oops global is : " + off_global; 
    }
    else {
        console.log("this is undefined !");
    }

    console.log(out);
}

function my_local_scope(){
    var my_var = 5;
    console.log(my_var);
}

var out_fir = "something1";

function func_minus_7(num){
    return num  -7 ;
}

var sum = 0;



var changed = 0;

function change(num){
    return (num + 5) / 3;
}

changed = change(10);
console.log("changed is : %d" , changed);

function addThree(){
    sum += 3;
}

function stuff_5(){
    sum = sum + 5;
}

addThree();
stuff_5();

console.log(sum);

var testarr = [1,2,3,4,5];

console.log("before : " , JSON.stringify(testarr))
console.log(next_in_line(testarr, 6))
console.log("after : " , JSON.stringify(testarr))

function next_in_line(arr , item){    
    
    arr.push(item);
    return arr.shift();
}

function is_true_or_false(thing){
    if(thing){
        return "yes it was true";
    }
    else{
        return "no it was false";
    }
}

var  x = is_true_or_false(2);
console.log(x);

function test_equl(val){
    if(val == 12){
        return "equal";
    }
    return "not equal";
}

function test_equl_list(val){
    if(val === 12){
        return "equal";
    }
    return "not equal";
}

console.log(test_equl('12')) // converts to a common type
console.log(test_equl_list('12')) // doesnt convert shit

function test_(val){
    var awnser = "";
    console.log("default type is : %s" ,typeof awnser);
    switch(val){
        case 1:
            awnser = "alpha";
            break;
        case 2:
            awnser = "beta";
            break;
        default: // like else for if's 
            awnser ="something else";    
    }

    return awnser    
}


function ab_test(a ,b){
    if (a < 0 || b < 0){
        return undefined
    }
    
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b) , 2))
}


var count = 0;

function cc(card){

    var test_ = ["K" , "Q" , "J" , "A"]
    switch(card){
        case (2 <= card && card <= 6):
            count ++;
            break;
        case test_.includes(card) && test_.indexOf(card) != -1:
            console("we are here and the card is : %s " , card)
            count --;    
            break;     
    }

    var holdbet = "hold";
    if (count > 0){
        holdbet = "bet";
    }
    
    return count + " " + holdbet;    
}



cc(2); cc(3) ;cc(7);cc('K');cc('A')
console.log(cc(4))


// ------------------------------------ objects

var Dog = {
    "name" : "campe ",
    "legs" : 4,
    "tail" : 1,
    "friends" : ["everything"]
};

var myDog = {
    "first name" : "quincy",
    "legs" : 3,
    "trail" : 2,
}

var mymusic = [
    {
                

    }
]

myDog["first name"] = "happy coder";
delete myDog["bark"]
delete myDog.trail


function update_record(id, prop , value){
    
    if (typeof value == undefined){
        delete collection.id.prop;
    }
    if (prop == "tracks" && value != undefined){
        collection.id.prop.push(value);
    }
    else {
        collection.id.prop = value;
    }
    
    return true;

}

console.log(myDog)

var my_array = []

for (var i = 9; i > 0; i -= 2){
    my_array.push(i)
}

var i = 0;
while(i < 5){
    var x = "this is the test : " + i;
    my_array.push(x);
    i ++;
}

var our_array = [9 , 10, 11, 12];
var tot = 0;

for (var i = 0; i < our_array.length; ++i){
    tot += our_array[i];
}

console.log("myarr : %d" , tot)
console.log("%d , %s" , 12, "amir")

function multipy_(arr){
    var prodcut = 1;
    for (var i = 0; i < arr.length ; ++i){
        for (var j = 0 ; j < arr[i].length ; ++j){
            prodcut *= arr[i][j]
        }
    }

    return prodcut
}

var product = multipy_([[1,2] , [3 ,4] , [5 ,6,7 ]])
console.log(product)

