const lis = document.querySelectorAll('li')
const button = document.getElementById('button')

lis.forEach((li)=>{
  li.addEventListener('click', ()=> {
    li.style.visibility = 'hidden'})
}) 

// Como renderizar novamente os li's atraves de um evento DOM??
// colocando uma classe e fazendo um evento???


button.addEventListener('click', function(){
  lis.forEach((li)=>{
  li.style.visibility = 'initial'})
})

