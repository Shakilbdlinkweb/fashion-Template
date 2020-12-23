
$('.trends-section').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    nav:false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.slider-main').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    nav:true,
    dots: false,
     navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });
;(function($){
	$(document).ready(function(){
		// Write your JQuery code here
  		$(".menu-trigger").on("click", function(){
  			$(".off-canvas-menu,.off-canvas-overlay").addClass("active");
  		})    		

  		$(".fa-times,.off-canvas-overlay").on("click", function(){
  			$(".off-canvas-menu,.off-canvas-overlay").removeClass("active");
  		})

 		
	});
})(jQuery);
