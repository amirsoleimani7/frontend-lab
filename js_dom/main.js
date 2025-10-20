/** @type {HTMLElement} */
// ==================== selecting ====================
// // get element by id
// const title = document.getElementById('main-heading');
// console.log(title)

// // get element by class name
// const classes = document.getElementsByClassName('list-item');
// console.log(classes)


// // get element by class name
// const sometoher_thing = document.getElementsByTagName('li');
// console.log(sometoher_thing)


// // queryselector
// const container = document.querySelector('div')
// console.log(container)


// // select all
// const all_ = document.querySelectorAll('div')
// console.log(container)



// ==================== styling ====================

// const title = document.querySelector('#main-heading');
// title.style.backgroundColor = 'red';

// const list_items = document.querySelectorAll('.list-item');

// for (let i = 0; i < list_items.length ; ++i){
//     list_items[i].style.backgroundColor = 'lightblue';
// }

// console.log("the title is ; %s " , list_items
// );


// ==================== creating elements ====================
// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// li.innerText = 'blade runner';

// // adding the ul
// ul.append(li);

// // modifing the content
// const first_list_item = document.querySelector('.list-item');
// console.log(first_list_item.innerText);
// console.log(first_list_item.textContent);
// console.log(first_list_item.innerHTML)


// // modifiing attr and classes ;
// // li.setAttribute('id' , 'main-heading')
// // li.removeAttribute('id')

// // 
// // const title = document.querySelector('#main-heading');
// // console.log("id of thing is : " + title.getAttribute('id'))


// li.classList.add('list-item');
// console.log(li.classList.contains('item-list'));


// // remove an element 
// li.remove();

// ==================== DOM navigation ====================

// parent node treversal
// let ul = document.querySelector('ul')

// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;

// console.log(html.parentNode)
// console.log(html.parentElement)

//child node treversal
// let ul = document.querySelector('ul');

// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// console.log(ul.children)

// siblings
// let ul = document.querySelector('ul');
// const div = document.querySelector('div');
// console.log(div.childNodes)

// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

// ==================== event listener ====================

// add event listner
// const button_2 = document.querySelector('.btn-2')

// function test(){
//     return alert('i love other things')
// }

// button_2.addEventListener('click' ,test )

// // mouse over event
// const box_3 = document.querySelector('.box-3');
// console.log(box_3)

// function change_bg_color(){
//     box_3.style.backgroundColor = 'red';
// }

// box_3.addEventListener('mouseover' ,hover_color)

// ==================== reavel event ====================
// const reavelbtn = document.querySelector('.reavel-btn')
// console.log("reavelbutton is : " , reavelbtn)

// const hiddenconent = document.querySelector('.hidden-content')
// console.log("hidden content is : " , hiddenconent)

// function reveal_content(){

//     if(hiddenconent.classList.contains('reavel-btn'))
//     {
//         hiddenconent.classList.remove('reavel-btn')
//     }
//     else {
//         hiddenconent.classList.add('reavel-btn')
//     }
// }

// reavelbtn.addEventListener('click' , reveal_content)

// ==================== event propagartion  ====================

// window.addEventListener('click', function(){console.log('window');}, false);
// document.addEventListener('click' , function() {console.log('Document');} , false);

// document.querySelector(".div2").addEventListener(
// "click" , function(e) {
//     e.stopPropagation();
//     console.log("div2");
// } ,{once:true}
// );

// document.querySelector(".div1").addEventListener(
// "click" , function() {
//     console.log("div1");
// } , false
// );

// document.querySelector(".button").addEventListener(
// "click" , function(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     if(e.target.innerText == 'clicked') {
//         e.target.innerText = 'uncliked';
//     }
//     else{
//         e.target.innerText ='clicked';
//     }   
//     console.log(e)
// } , false 
// );

// ==================== event delegation  ====================
