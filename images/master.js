// JavaScript Document
//Author Name: Saptarang
//Author URI: http://www.saptarang.org
//Themeforest: http://themeforest.net/user/saptarang?ref=saptarang
//Creation Date: 10nd April, 2014

(function($) {"use strict";
	
	
      //Preloader
		$(window).load(function() {
			$('#preloader').fadeOut();
			$('.loading').delay(350).fadeOut('slow');  
			$('body').delay(350).css({'overflow':'visible'});
		})
	
	  // smooth page Scroll
	  $('nav a[href^=#], a.top[href^=#], a.read[href^=#], .caption a[href^=#]').click(function(event) {
			  event.preventDefault();
			  $('html,body').animate({
			  scrollTop: $(this.hash).offset().top},
			  1000);	
	  });
	
	  // Top Arrow
	  $(window).scroll(function() {
			  if ($(window).scrollTop() > 1000) { 
				  $('a.top').fadeIn('slow'); 
			  } else { 
				  $('a.top').fadeOut('slow');
			  }
	  });
	  
	  // Collapse menu for small devices
	  var winWidth = $('body').width();
	  if (winWidth <= 767) {
		  
		  // Add attribs to menu
		  $('#menu .navbar-nav li a').attr('data-toggle', 'collapse');
		  $('#menu .navbar-nav li a').attr('data-target', '#menu');
		  
	  } else {
	  }
	
	  // WOW - animated content
	  new WOW().init();
	  
		// Stat
		$('#stat .timer').waypoint(function() {
		  $('.timer').countTo();
			}, { offset: '90%' }); 
			
			$('#home').waypoint(function() {
				$("#home").hide();
				function triggerOpen() {
					
					$("#home").slideDown({ duration: 500, easing:'easeOutCirc'});
					
					 $('.logoBig').removeClass('bounceIn');
					 $('.logoBig').addClass('bounceOut'); 
				 }
				 function triggerClose() {
						
						$("#home").slideUp({ duration: 500, easing:'easeOutCirc'});
						
					   $('.logoBig').removeClass('bounceOut');
					   $('.logoBig').addClass('bounceIn');
				 }
				  $(window).bind('scroll', function() {
				  if ($(window).scrollTop() > 100) {
					  triggerOpen()
				   }
				   else if($(window).scrollTop() < 100) {
					   triggerClose()
				   }
				   
	  			});
			});
	  
	  // Image Lightbox
	   $("a[rel^='prettyPhoto']").prettyPhoto({overlay_gallery: true});
	   $('#portfolio1 .galimg.img a, #portfolio2 .galimg.img a').append('<div class="link"><i class="fa fa-search-plus"></i></div>');
	   $('#portfolio1 .galimg.video a, #portfolio2 .galimg.video a').append('<div class="link"><i class="fa fa-youtube-play"></i></div>');
		
	  // carousel Interval
	  $('#testimonial.carousel').carousel({
		  interval: 7000
		});
	  
	  // carousel Interval
	  $('#slider.carousel').carousel({
		  interval: 8000
		});
		
	  // Carousel fade-in-out
	  $('.carousel-fade').carousel({
		  interval: 8000
		});
		
	  // Contact Form
	  $('.loader').hide();
	  $("input, textarea").focus(function() {
		  $(this).prev("label").hide();
		  $(this).prev().prev("label").hide();	 		 	
	  });
	   
	  $("#contact_form").submit(function() {
				// validate and process form here
				var name = $("#name").val();
					  if (name == "") {
					  $('#name').addClass('reqfld');
					  $('<span class="error" style="display:none; margin-top:0px;">Required!</span>').insertBefore('#name').fadeIn(400);
					  $("#name").focus(function() {  $('#name').removeClass('reqfld');  $(this).prev().fadeOut(400);});
					  return false;
				} 
				  
				var phone = $("#phone").val();
					  if (phone == "") {
					  $('#phone').addClass('reqfld');
					  $('<span class="error" style="display:none;">Required!</span>').insertBefore('#phone').fadeIn(400);
					  $("#phone").focus(function() {  $('#phone').removeClass('reqfld');  $(this).prev().fadeOut(400);});
					  return false;
				}
				
				var email = $("#email").val();
				if (email == "") {
					  $('#email').addClass('reqfld');
					  $('<span class="error" style="display:none;">Required!</span>').insertBefore('#email').fadeIn(400);
					  $("#email").focus(function() {  $('#email').removeClass('reqfld');  $(this).prev().fadeOut(400);});
					  return false;
				 } else if(email.indexOf('@') == -1 || email.indexOf('.') == -1) {
					  $('#email').addClass('reqfld');
					  $('<span class="error" style="display:none;">Invalid Email Address!</span>').insertBefore('#email').fadeIn(400);
					  $("#email").focus(function() {  $('#email').removeClass('reqfld');  $(this).prev().fadeOut(400);});
					  return false;
				}
				
				var comment = $("#comment").val();
					  if (comment == "") {
					  $('#comment').addClass('reqfld');
					  $('<span class="error" style="display:none;">Required!</span>').insertBefore('#comment').fadeIn(400);
					  $("#comment").focus(function() {  $('#comment').removeClass('reqfld');  $(this).prev().fadeOut(400);});
					  return false;
				}
				
						
				$('#contact_form').animate({opacity:'0.3'}, 500);
		  
				var security = $("#security").val();
		  
				var dataString = 'name='+ name + '&email=' + email + '&phone=' + phone + '&comment=' + comment + '&security=' + security;
				
				//alert (dataString);return false;
				$.ajax({
				  type: "POST",
				  url: "form/contact.php",
				  data: dataString,
				  success: function() {
					$("#contact_form").animate({opacity:'1'}, 500);
					$('.loader').hide();
					$("<div id='success' class='alert alert-success' style='border:#"+successBox_Border_Color+" 1px "+successBoxBorderStyle+"; background:#"+successBoxColor+";' ></div>").insertAfter('#contact_form');
					$('#contact_form').slideUp(300);
					$('#success').html("<strong style='color:#"+textColor+";'>"+submitMessage+"</strong><p style='color:#"+textColor+";'>"+successParagraph+"</p>")
					.hide().delay(300)
					.fadeIn(1500);
				  }
				});
				return false;
	  });
})(jQuery);
