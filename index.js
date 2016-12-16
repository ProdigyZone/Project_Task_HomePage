$(function() {
    var topBtn = $('#page-top');    
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
$(document).ready(function() {
$('.left').fadeIn(1800).animate({'left':'755px'}, { duration: 1600,queue: false }
);
});
$(document).ready(function() {
$('.right').fadeIn(1800).animate({'right':'45px'}, { duration: 1600,queue: false }
);
});


$(function () {
   $('.purpose-title').Geometryangle({mesh:{'ambient':'rgba(110,0,150, 1)'}, lights: [{'ambient':'rgba(255,0,180, 1)'}], line: {}, vertex: {}});});

$(function () {
   $('.mechanism-title').Geometryangle({mesh:{'diffuse':'rgba(120,255,0, 1)'}, lights: [{'ambient':'rgba(5,255,0, 1)'}], line: {}, vertex: {}});
});
$(function () {
   $('.member-title').Geometryangle({mesh:{'diffuse':'rgba(0,200,255, 1)'}, lights: [{'ambient':'rgba(40,40,230, 1)'}], line: {}, vertex: {}});
});
$(function () {
   $('.update-title').Geometryangle({mesh:{}, lights: [{}], line: {}, vertex: {}});
});

$(function(){
   var imgfade = $('.img');
    $(window).scroll(function () {
        if ($(this).scrollTop() < 500) {
            imgfade.fadeIn(1000);
        } else {
            imgfade.fadeOut();
        }
    });
 });


$(function(){
   $("[href^='#']").click(function(event){
      var scrollSpeed = 1200;
      var targetId = $(this).attr('href');
      var targetY = $(targetId).offset().top;
      event.preventDefault();
      $('html,body').animate({scrollTop: targetY-65},scrollSpeed, 'easeOutBounce');
   });
});