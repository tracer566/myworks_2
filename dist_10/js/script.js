 var modal = document.querySelector('#modal')
  			btn_red = document.querySelectorAll('.button_red')
 			 btn_close = document.querySelector('.modal-dialog__close')
 			 body = document.querySelector('body')

for(var x = 0;x < btn_red.length; x++){
	btn_red[x].addEventListener('click', function(){
modal.classList.add('modal_active')
body.style.overflowY = 'hidden' //убирает прокрутку 
	})
}

btn_close.addEventListener('click', removeActive)

function removeActive(){
	modal.classList.remove('modal_active')
	body.style.overflowY = 'visible' //возращает прокрутку 
}


/*-----------------jquery code------------------------------*/
$(document).ready(function(){
	/*hover всем кнопкам*/
$('button*').mouseenter(function() {
	$(this).css('transform','translateY(-1px)')
})

$('button*').mouseleave(function() {
	$(this).css('transform','translateY(0px)')
})

/*---Всплывающее окно на jquery вместо clean java script------*/
// $('.button_red').click(function(){
// 	$('#modal').addClass('modal_active')
// 	$('body').css('overflow-y','hidden')//убирает прокрутку браузера
// })

// $('.modal-dialog__close').click(function(){
// 	$('#modal').removeClass('modal_active')
// 	$('body').css('overflow-y','visible')
// })
/*-----------Всплывающее окно на jquery вместо clean java script------*/

console.log($('.menu'))

$('.header__button').click(function(){
	console.log('Кликнул по кнопке')
})

 /*интеркативность для заголовка формы*/
$('.section-main .title_green').css('cursor','pointer')
$('.title_green').click(function(){
	$(this).toggleClass('blue')
})

$('.section-main .title_green').mouseenter(function() {
	$(this).addClass('red')
})

$('.section-main .title_green').mouseleave(function() {
	$(this).removeClass('red')
})

/* добавляет имя в заголовке формы при вводе резко*/
// $('#first-form input[name*= user_name]').change(function() {
// 	$('#userName').text(', ' + $(this).val().toUpperCase())
// });

/* добавляет имя в заголовке формы при вводе постепенно,
keypress это нажатие,аналог keydown*/

// $('input').keypress(function(){
// 	$('#userName').text(', ' + $(this).val().toUpperCase())
// })

/* добавляет имя в заголовке формы при вводе постепенно,keypress это нажатие*/
$('input[name*="name"]').keyup(function(){
	$('#userName').text(', ' + $(this).val().toUpperCase())
})

/*мобильное меню на jquery*/
var link = $('.menu-link')
var link_active = $('.menu-link_active0')
var m_menu = $('.m-menu')
var nav_link = $('.m-menu__a')
console.log(nav_link)

link.click(function() {
	link.toggleClass('menu-link_active')
	m_menu.toggleClass('m-menu_active')
	$("body").toggleClass("lock")
})

link_active.click(function(){
	link.removeClass('menu-link_active')
	m_menu.removeClass('m-menu_active')
})

nav_link.click(function(){
				link.removeClass('menu-link_active')
				m_menu.removeClass('m-menu_active')
				$("body").removeClass("lock")
})

})


/*слайдеры, маски и валидация*/	
$(document).ready(function(){
  $('.slider').slick({
     slidesToShow: 4,
     slidesToScroll: 2,
     prevArrow: $('.arrows__left'),
     nextArrow: $('.arrows__right'),
     responsive: [
    {
      breakpoint: 1120,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
     
  });

$('.slider-2').slick({
     slidesToShow: 4,
     slidesToScroll: 2,
     prevArrow: $('.arrows-2__left'),
     nextArrow: $('.arrows-2__right'),
     responsive: [
    {
      breakpoint: 1120,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
     
  });

$('.slider-3').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     prevArrow: $('.arrows-3__left'),
     nextArrow: $('.arrows-3__right'),
     responsive: [
    {
      breakpoint: 1120,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
     
  });

$('.slider-4').slick({
  slidesToShow: 4,
  slidesToScroll: 2,
  prevArrow: $('.arrows-4__left'),
  nextArrow: $('.arrows-4__right'),
  responsive: [
    {
      breakpoint: 1120,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
});

$('.slider-our').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: $('.arrows-our__left'),
  nextArrow: $('.arrows-our__right'),
  responsive: [
    {
      breakpoint: 1120,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
});

$('.slider-production').slick({
slidesToShow: 3,
slidesToScroll:1,
prevArrow: $('.arrows-prod__left'),
  nextArrow: $('.arrows-prod__right'),
  responsive: [
    {
      breakpoint: 1120,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
});

/*-------------Validate forms-----------*/
$('#thirty-form').validate({
 rules: {
    // simple rule, converted to {required:true}
    user_name: "required",
    user_phone: "required"
  },
  messages: {
    user_name: "Укажите свое имя",
    user_phone: "Укажите свой телефон"
  }

});

$('#first-form').validate({
 rules: {
    // simple rule, converted to {required:true}
    user_name: "required",
    user_phone: "required"
  },
  messages: {
    user_name: "Укажите свое имя",
    user_phone: "Укажите свой телефон"
  }

});

$('#second-form').validate({
 rules: {
    // simple rule, converted to {required:true}
    user_name: "required",
    user_phone: "required"
  },
  messages: {
    user_name: "Укажите свое имя",
    user_phone: "Укажите свой телефон"
  }

});

/*-----------маска для phone-----------*/

$('.phone').mask("+7(999) 999-9999");

});

