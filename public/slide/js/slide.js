$(window).ready(function(){

    var owl = $('#slideresponsive');

  //Init the carousel

 // tạo đường viền chạy slide
  

 // end tạo đường viền chạy slide

    owl.owlCarousel({
      navigation : true,
      items: 1,
      loop: true,
      nav: true, // cho hiện next với prev
      navText : ['<i class="icon-chevron-left"></i>','<i class="icon-chevron-right"></i>'],
      mouseDrag: false, // kéo trượt slide
      touchDrag: true// kéo trượt

    });



// kích nút trái phải tạo hiệu ứng  


// end kích nút trái phải tạo hiệu ứng
// di chuột trái phải slide tạo hiệu ứng
// end di chuột trái phải slide tạo hiệu ư
// fix lỗi dừng khi nhảy tab  
$('.owl-carousel .owl-item').on('mouseenter',function(e){
    $(this).closest('.owl-carousel').trigger('stop.owl.autoplay');
})
$('.owl-carousel .owl-item').on('mouseleave',function(e){
    $(this).closest('.owl-carousel').trigger('play.owl.autoplay',[5000]);
})

    ifvisible.blur(function(){

        owl.trigger('stop.owl.autoplay',[2000]);

    });

    ifvisible.focus(function(){
7
        owl.trigger('play.owl.autoplay',[5000]);
      });
    
// end fix lỗi dừng khi nhảy tab  


});




  


