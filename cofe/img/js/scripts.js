//preloader
	$('body').css('overflow','hidden')
	$(window).load(function() { 
	$('#status').delay(1000).fadeOut();
	$('#preloader').delay(2000).fadeOut('slow');

//custom scrollbar	
	 $(".sb-left").mCustomScrollbar();
	});
			
//slidebars
			(function($) {
				$(document).ready(function() {
					// Initiate Slidebars
					$.slidebars();
					// Slidebars Submenus
					$('.sb-toggle-submenu').off('click').on('click', function() {
						$submenu = $(this).parent().children('.sb-submenu');
						$(this).add($submenu).toggleClass('sb-submenu-active'); 
						if ($submenu.hasClass('sb-submenu-active')) {
							$submenu.slideDown(200);
						} else {
							$submenu.slideUp(200);
						}
						
					});
				});
			}) (jQuery);
			
//page scroll	
		$(document).ready(function ($) {
			$(".scroll").click(function(event){		
				event.preventDefault();
					$('html,body').animate({scrollTop:$(this.hash).offset().top -50}, 1000, 'easeInSine');
					});
					jQuery.extend( jQuery.easing,
					{easeInSine: function (x, t, b, c, d) { return -c * Math.cos(t/d * (Math.PI/2)) + c + b; }
				});
				
/***************************************************
	ADD MOBILE SWIPE TO CAROUSELS
***************************************************/ 
		$("#myCarousel, #myCarousel1, #myCarousel2, #myCarousel3").swiperight(function() {
			$(this).carousel('prev');
		});
		$("#myCarousel, #myCarousel1, #myCarousel2, #myCarousel3").swipeleft(function() {
			$(this).carousel('next');
			});

/*****************************************************************************
	CONTACT FORM - you can change your notification message here
*****************************************************************************/

   	$("#ajax-contact-form").submit(function() {
				var str = $(this).serialize();		
				$.ajax({
					type: "POST",
					url: "contact_form/contact_process.php",
					data: str,
					success: function(msg) {
						// Message Sent - Show the 'Thank You' message and hide the form
						if(msg == 'OK') {
							result = '<div class="notification_ok">Your message has been sent. Thank you!</div>';
							$("#fields").hide();
						} else {
							result = msg;
						}
						$('#note').html(result);
					}
				});
				return false;
			});	
			
/***************************************************
	TOP SECTION
***************************************************/
$(function(){
  $('#home').css({ height: $(window).innerHeight() });
  $(window).resize(function(){
    $('#home').css({ height: $(window).innerHeight() });
  });

    $(window).on('resize', function resize()  {
        $(window).off('resize', resize);
        setTimeout(function () {
            var content = $('#content');
            var top = (window.innerHeight - content.height()) / 2;
            content.css('top', Math.max(0, top) + 'px');
            $(window).on('resize', resize);
        }, 50);
    }).resize();
});
		
//text rotate	
	$(".rotate").show();
		$(".rotate").textrotator({
	     animation: "dissolve",
	     separator: "*",
		speed: 3200
	 });
	
//tooltip 
$("[rel=tooltip]").tooltip();
$("[data-rel=tooltip]").tooltip();
$('#bottom').tooltip();

//back to top
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
			$('.go-top').fadeIn(200);
				} else {
					$('.go-top').fadeOut(200);
				}
			});
			// Animate scroll to top
			$('.go-top').click(function(event) {
				event.preventDefault();
				$('html, body').animate({scrollTop: 0}, 1000);
			})
		});
		
/***************************************************
	APPEAR FOR CHARTS AND MILESTONES
***************************************************/
(function($){$.fn.appear=function(f,o){var s=$.extend({one:true},o);return this.each(function(){var t=$(this);t.appeared=false;if(!f){t.trigger('appear',s.data);return;}var w=$(window);var c=function(){if(!t.is(':visible')){t.appeared=false;return;}var a=w.scrollLeft();var b=w.scrollTop();var o=t.offset();var x=o.left;var y=o.top;if(y+t.height()>=b&&y<=b+w.height()&&x+t.width()>=a&&x<=a+w.width()){if(!t.appeared)t.trigger('appear',s.data);}else{t.appeared=false;}};var m=function(){t.appeared=true;if(s.one){w.unbind('scroll',c);var i=$.inArray(c,$.fn.appear.checks);if(i>=0)$.fn.appear.checks.splice(i,1);}f.apply(this,arguments);};if(s.one)t.one('appear',s.data,m);else t.bind('appear',s.data,m);w.scroll(c);$.fn.appear.checks.push(c);(c)();});};$.extend($.fn.appear,{checks:[],timeout:null,checkAll:function(){var l=$.fn.appear.checks.length;if(l>0)while(l--)($.fn.appear.checks[l])();},run:function(){if($.fn.appear.timeout)clearTimeout($.fn.appear.timeout);$.fn.appear.timeout=setTimeout($.fn.appear.checkAll,20);}});$.each(['append','prepend','after','before','attr','removeAttr','addClass','removeClass','toggleClass','remove','css','show','hide'],function(i,n){var u=$.fn[n];if(u){$.fn[n]=function(){var r=u.apply(this,arguments);$.fn.appear.run();return r;}}});})(jQuery);

/***************************************************
	ROTATING TEXT SCRIPT
***************************************************/	
!function($){var defaults={animation:"dissolve",separator:",",speed:2000};$.fx.step.textShadowBlur=function(fx){$(fx.elem).prop("textShadowBlur",fx.now)
.css({textShadow:"0 0 "+Math.floor(fx.now)+"px black"})};$.fn.textrotator=function(options){var settings=$.extend({},defaults,options);
return this.each(function(){var el=$(this);var array=[];$.each(el.text().split(settings.separator),function(key,value){array.push(value)});el.text(array[0]);
var rotate=function(){switch(settings.animation){case"dissolve":el.animate({textShadowBlur:0,opacity:0},500,function(){index=$.inArray(el.text(),array);
if((index+1)==array.length){index=-1}el.text(array[index+1]).animate({textShadowBlur:0,opacity:1},500)});
;break;case"fade":el.fadeOut(settings.speed,function(){index=$.inArray(el.text(),
array);if((index+1)==array.length){index=-1}el.text(array[index+1]).fadeIn(settings.speed)});break}};setInterval(rotate,settings.speed*2)})}}
(window.jQuery);