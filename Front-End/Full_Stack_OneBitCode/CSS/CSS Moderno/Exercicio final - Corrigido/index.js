// Teste

const navBar = document.querySelector('.headerBtnGroup')
// // navBar.classList.add('abc')
// // console.log(navBar.classList)
// navBar.className += ' aaaa'

// // navBar.classList.remove('aaaa')

// // console.log(navBar.attributes)
// // console.log(navBar.attributes['data-some'])


const img = document.querySelector('.img4')
// // console.log(img)

const srcImg = img.getAttribute('src')
// // console.log(srcImg)

const  newId = img.setAttribute('id', 'minhaImg')
// // console.log(img.getAttribute('id'))
// // console.log(img.attributes)



// *****

// // EXercicio

// // add a classe 'novaClasse' a todos os botoes do header

// const newClass = document.querySelectorAll('.headerBtnGroup button')
// // console.log(newClass)

// newClass.forEach((item) =>{
//   item.classList.add('NovaClasse')
// })


// // remover a classe 'novaClasse' a todos os botoes do header, exceto o primeiro


// newClass.forEach((item) =>{
//   item.classList.remove('NovaClasse')
// })

// newClass[0].classList.add('NovaClasse')

// // verificar qts imagens estão contidas em .mainContent e se ela(s) têm o atributo 'alt'

// const imgGrid = document.querySelectorAll('.gridContainer .mainContent div img')
// imgGrid.forEach((item, index)=>{
//   // console.log(index) //9
//   // console.log(item.hasAttribute('alt')) // todas com o atrib 'alt'
// })


// *****


const section = document.querySelector('.img1')
// // console.log(section.offsetLeft)
// // console.log(section.clientHeight)
// // console.log(section.clientWidth)

const rect = section.getBoundingClientRect()
// // console.log(rect)

// console.log(
//   innerWidth,
//   outerWidth,
//   window.scrollX
// )

const small = window.matchMedia("max-widht: 1000px").matches;

if(small){
  console.log("Tela menor que 400px")
} else{
  console.log("Tela maior que 400px")
}







