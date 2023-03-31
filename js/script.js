

$(window).scroll(function(){
     var sticky = $('.sticky'),
         scroll = $(window).scrollTop();
     if (scroll >= 20) sticky.addClass('fixed');
     else sticky.removeClass('fixed');
   });  
       