$(function(){
     
      $('.burger-menu').on('click', function(){
            $('.menu__list').toggleClass('active');
      });
      
      $('.slider').slick({
            arrows: false,
            dots: true,
      });

});

$(document).on('click', '.room__item', function() {
      $(this).children('.room__item-text').toggle('room__item--active');
});
