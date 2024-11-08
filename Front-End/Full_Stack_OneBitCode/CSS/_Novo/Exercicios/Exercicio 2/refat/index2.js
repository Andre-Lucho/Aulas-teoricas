const lis = document.querySelectorAll('li')
const button = document.getElementById('button')

// // Eventos nos li's

lis.forEach((li)=>{
  li.addEventListener('mouseenter', function() {
    li.classList = 'selected'})
  li.addEventListener('mouseleave', function() {
    li.classList = ''})
  li.addEventListener('click', function() {
    li.style.visibility = 'hidden'})
}) 

// Evento no button
button.addEventListener('click', function(){
  lis.forEach((li)=>{
    li.style.visibility = 'initial'  
  })
})

