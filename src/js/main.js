let questions = document.querySelectorAll('.faq-item');
console.log(`items r : ${questions}`)

for (let i = 0 ;i < questions.length ;++i){
    questions[i].addEventListener('click' , (e)=>{
        let description = e.target.nextElementSibling;
        e.target.nextElementSibling.style.display = description.style.display == 'block' ? 'none' : 'block';
    })
}