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


function test_(value1 , value2){
    
}





