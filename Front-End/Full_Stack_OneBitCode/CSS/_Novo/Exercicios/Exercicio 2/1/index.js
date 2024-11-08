const liFinanceiro = document.getElementById('liFinanceiro')
const liRh = document.getElementById('liRh')
const liGestao = document.getElementById('liGestao')
const liMark = document.getElementById('liMark')
const liPatrimonio = document.getElementById('liPatrimonio')
const liAjuda = document.getElementById('liAjuda')
const button = document.getElementById('button')

// Eventos nos li's
liFinanceiro.addEventListener('mouseenter', function() {
  liFinanceiro.classList = 'selected'
})
liFinanceiro.addEventListener('mouseleave', function() {
  liFinanceiro.classList = ''
})
liFinanceiro.addEventListener('click', function() {
  liFinanceiro.style.visibility = 'hidden'
})

liRh.addEventListener('mouseenter', function() {
  liRh.classList = 'selected'
})
liRh.addEventListener('mouseleave', function() {
  liRh.classList = ''
})
liRh.addEventListener('click', function() {
  liRh.style.visibility = 'hidden'
})

liGestao.addEventListener('mouseenter', function() {
  liGestao.classList = 'selected'
})
liGestao.addEventListener('mouseleave', function() {
  liGestao.classList = ''
})
liGestao.addEventListener('click', function() {
  liGestao.style.visibility = 'hidden'
})

liMark.addEventListener('mouseenter', function() {
  liMark.classList = 'selected'
})
liMark.addEventListener('mouseleave', function() {
  liMark.classList = ''
})
liMark.addEventListener('click', function() {
  liMark.style.visibility = 'hidden'
})

liPatrimonio.addEventListener('mouseenter', function() {
  liPatrimonio.classList = 'selected'
})
liPatrimonio.addEventListener('mouseleave', function() {
  liPatrimonio.classList = ''
})
liPatrimonio.addEventListener('click', function() {
  liPatrimonio.style.visibility = 'hidden'
})

liAjuda.addEventListener('mouseenter', function() {
  liAjuda.classList = 'selected'
})
liAjuda.addEventListener('mouseleave', function() {
  liAjuda.classList = ''
})
liAjuda.addEventListener('click', function() {
  liAjuda.style.visibility = 'hidden'
})

// Evento no button
button.addEventListener('click', function(){
  liFinanceiro.style.visibility = 'initial'
  liRh.style.visibility = 'initial'
  liGestao.style.visibility = 'initial'
  liMark.style.visibility = 'initial'
  liPatrimonio.style.visibility = 'initial'
  liAjuda.style.visibility = 'initial'
})

// display: none => semelhante ao visiability, porém o elem oculto não ocupa um espaço na página