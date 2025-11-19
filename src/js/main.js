let questions = document.querySelectorAll('.faq-item');
// let minus_icons = document.querySelectorAll('.minus');
// let plus_icons = document.querySelectorAll('.plus');

for (let i = 0 ;i < questions.length ;++i){
    questions[i].addEventListener('click' , (e)=>{
        let description = e.target.nextElementSibling;
        if (e.target.className == "faq-header"){
            e.target.children[0].style.display = getComputedStyle(e.target.children[0]).display == 'block' ? 'none' : 'block';
            e.target.children[1].style.display = getComputedStyle(e.target.children[1]).display == 'none' ? 'block' : 'none';
            e.target.nextElementSibling.classList.toggle('open');
        }       
    })
}
