$(document).ready(function(){

	$('.section-block__item').magnificPopup({
  type: 'image'
  // other options
})

$('input[placeholder*="телефон"]').mask("+7(999) 999-99-99",{autoclear: false})

// modal window
let overlay = $('.modal')
let btn = $('.header__button')
let modal = $('.modal-block')
let close = $('.modal-block__close')
let closeText = $('.close__link')

btn.on('click', function() {
	overlay.css('height','100%')
	modal.toggleClass('modal-block_active')
	$('body').css('overflowY','hidden')
})

close.click(function(){
	overlay.css('height','0')
	modal.toggleClass('modal-block_active')
	$('body').css('overflowY','auto')
})

closeText.click(function(){
	overlay.css('height','0')
	modal.toggleClass('modal-block_active')
	$('body').css('overflowY','auto')
})

overlay.click(function(event){
	if(event.target.className === 'modal'){
	overlay.css('height','0')
	modal.toggleClass('modal-block_active')
	$('body').css('overflowY','auto')
	}
})
// modal window
// для выравнивания иконок
$('.section-6 .section-6-icon__img:last').css('padding','36px 20px')

// неважные скрипты
$('h1').css('cursor','pointer')
$('h1').click(function(){
	$(this).toggleClass('active')
})

/*эффекты для 1-го экрана*/
$('.main-info').mouseenter(function(){
	$(this).css('color','white')
})

$('.main-info').mouseleave(function(){
	$(this).css('color','black')
})

 /*секция вопросы-оживление кнопки*/
 let liLast = $('.block-questions__ol li:last')
 $('.block-questions__btn').click(function(event){
 	event.preventDefault()
 	let list = $('.block-questions__ol li').length
 		if(list >= 11){
 			alert('Последний вопрос-обновите страницу')
 		} else {
 			liLast.after("<li class='tooltip'>Новый вопрос</li>")
 		}
 })

/*секция вопросы-мини слайдер*/
$('.block-photo').css('cursor','pointer')
$('.block-photo img').click(function(){
	$(this).fadeOut(1000, function(){
		$(this).attr('src','img/section-7/lenivez.webp').fadeIn(500)
		$(this).css('width','400px')
	})

if($(this).attr('src') === 'img/section-7/lenivez.webp'){
	$(this).fadeOut(1000, function(){
		$(this).attr('src','img/section-7/section_7_img.webp').fadeIn(500)
		$(this).css('width','auto')
	})
}

	})
/*секция вопросы-мини слайдер*/
// неважные скрипты

// menu-mobile
let menuLink = $('.menu-link')
let menuLink_active = $('.menu-link_active')
let menu = $('.menu')
let menuLi = $('.menu li>a')

menuLi.on('click', function() {
	menuLink.removeClass('menu-link_active')
	menu.removeClass('menu_active')
})

menuLink.on('click',function(){
	$(this).toggleClass('menu-link_active')
	$(this).css('backgroundColor','rgba(255,255,255,1)')
	menu.toggleClass('menu_active')
})

menuLink_active.click('click',function(){
	$(this).removeClass('menu-link_active')
	menu.removeClass('menu_active')
})

})
  
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // changed
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();

 