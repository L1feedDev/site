$('.header__button').click(function(){
    $('.header__nav--mobile .header__nav').toggleClass('header__nav--open');
})

function popupClose(){
    $('.popup-phone').fadeOut();
    $('.popups').fadeOut();
}

function popupPhone(){
    $('.popups').fadeIn();
    $('.popup-phone').fadeIn();
    $('.popup-phone').submit(function(){
        alert('Thank`s for your request!');
        popupClose();
    });
}



$('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */

    dn -= 70;
    
    $('html, body').animate({scrollTop: dn}, 1000);
    
    /*
    * 1000 скорость перехода в миллисекундах
    */
  });