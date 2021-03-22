// блок 4
var link_1 = document.querySelector('#link-1')
var link_2 = document.querySelector('#link-2')
var img = document.querySelector('img')
var button_attr = document.querySelector('.button-attr')
var button_link = document.querySelector('.button-link')
// блок 5
var box_1 = document.querySelector('#box-1')
var box_2 = document.querySelector('#box-2')
var button_text = document.querySelector('.button-text')
var input = document.querySelector('.btn__input')
var sixTitle = document.querySelector('.six-title')
// блок 7
var btn_box = document.querySelector('.button-box')
var box_inner_3 = document.querySelector('.box-inner-3')

// блок 4
function changeImg(){
  if(img.getAttribute('src') === 'fire_active.jpg'){
  img.setAttribute('src','fire.jpg')
  button_attr.textContent = 'Зажечь лампочку'
  } else {
  img.setAttribute('src','fire_active.jpg')
  button_attr.textContent = 'Потушить лампочку'
}
}

button_attr.addEventListener('click', changeImg)

button_link.addEventListener('click',function(){
  link_1.setAttribute('href','https://www.youtube.com/')
  link_1.textContent = 'Youtube'
  link_1.classList.add('a-js')
})

// блок 5
/* 1-й вариант записи */
box_1.addEventListener('mouseenter',function(){
  box_1.classList.add('green')
  box_1.style.outline = '1px solid #666'

})
box_1.addEventListener('mouseleave',function(){
  box_1.classList.remove('green')
  box_1.style.outline = 'none'
})


/* 1-й вариант записи */
box_2.addEventListener('mouseenter',function(){
  box_2.classList.add('blue')
  box_2.style.outline = '1px solid #ccc'

})
box_2.addEventListener('mouseleave',function(){
  box_2.classList.remove('blue')
  box_2.style.outline = 'none'
})


// блок 6
button_text.addEventListener('click',function(){
  // input.value = sixTitle.textContent    /* сделает наоборот */
  sixTitle.textContent = input.value
})

// блок 7 проверка на наличие класса
btn_box.addEventListener('click',green)

function green(){
 var hasClass = box_inner_3.classList.contains('green')
  if (hasClass){
      box_inner_3.classList.remove('green')
  } else {
     box_inner_3.classList.add('green')
  }
}
 
// блок 7 всплытие и погружение
var boxes = document.querySelectorAll('.inner')
console.log(boxes)

for (var x = 0; x < boxes.length; x++){
  boxes[x].addEventListener('click',function(){
    console.log(this.getAttribute('id'))
  },true)
}

// блок 8 объект события
var boxes2 = document.querySelectorAll('.inner2')
var linkTheme = document.querySelector('#linkTheme8')
console.log(linkTheme8)
linkTheme.style.padding = "10px"

for (var x = 0; x < boxes2.length; x++){
  boxes2[x].addEventListener('click',function(event){
    console.log(event)
    event.stopPropagation() //останавливает погружение и всплытие клика
    console.log(this.getAttribute('id'))
    
  })
}

/* феункция заставляет ссылку скрывать квадраты inners */
linkTheme.addEventListener('click',clickLink)

function clickLink(event){
 event.preventDefault() //блокирует работу ссылки по умолчанию

 var moves = boxes2[0]

//  1 вариант записи
//  if(moves.style.display === 'none'){
//     moves.style.display = 'flex'
//  } else {
//    moves.style.display = 'none'
//  }

//  2 вариант записи
 moves.style.display = moves.style.display === 'none' ? 'flex' : 'none'
}

// блок 9 Делегирование событий
/* 1 способ:через цикл добавить прослушку всем элементам,
очень затратно в плане оптимизации,приложение будет тормозить,если параграфов будет 10000штук */
var p = document.querySelectorAll('p')
console.log(p)

// for(i = 0; i < p.length; i++){
//   p[i].addEventListener('click',function(event){
//     //2 способа обратиться к 1 элемент через this или event
//     event.target.style.color = "green"
//     this.style.fontSize = "20px" 
//   })
// }

/*  2 способ:Добавить прослушку обертке wrapper,которая над параграфом */
document.getElementById('wrapper').addEventListener('click',function(event){
  // console.log('event:',event.target) //вывести в консоль тег и содержание при клике
  var tagName = event.target.tagName.toLowerCase() //tagName: вывести в консоль тег при клике

  if(tagName === 'p'){
    event.target.style.color = "blue"
    this.style.fontSize = "20px" 
  }

  if(event.target.classList.contains('COLOR')){
    event.target.style.outline = "3px solid black"
  }
})

/* 10 генератор смены цвета фона */

var colorArray = ["#5A9C6E", "#A8BF5A", "#FAC46E", "#fff","#FAD5BB", "#F2FEFF",'#21d4fd','#09203f','#f9f047','#0fd850'] // создаем массив с цветами фона
var btnChangeColor = document.querySelector('#button-colors')
var a = 0


btnChangeColor.addEventListener('click',changeColor)
function changeColor(){
    document.body.style.background = colorArray[a]
    a++
    if( a > colorArray.length - 1){
        a = 0
    }
}