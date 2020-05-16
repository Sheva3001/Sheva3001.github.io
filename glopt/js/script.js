$(document).ready(function(){
    $('.carousel').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev.png" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next.png" alt="next"></button>',
    });
  });

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__menu_active');
        })
    })
})

 //Smooth scroll and pageup

 $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  $("a[href='#up']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
