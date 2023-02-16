"user strict";

$(document).ready(function () {
	//Owl carousel
    // ����ģ�壺HttP://www.bootstrapmb.com
	$(".process-slider").owlCarousel({
		loop: true,
		items: 1,
		margin: 10,
		dots: false,
		smartSpeed: 600,
		autoplayTimeout: 2000,
		autoplay: true,
		nav: true,
		responsiveClass: true,
		navText: [
			'<i class="fas fa-arrow-left"></i>',
			'<i class="fas fa-arrow-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 1,
			},
			767: {
				items: 2,
			},
			991: {
				items: 2,
			},
			1199: {
				items: 2,
			},
			1399: {
				items: 2,
			},
		},
	});
	
	$(".team-slider").owlCarousel({
		loop: true,
		items: 1,
		margin: 20,
		dots: true,
		smartSpeed: 600,
		autoplayTimeout: 2000,
		autoplay: true,
		nav: true,
		responsiveClass: true,
		navText: [
			'<i class="fas fa-arrow-left"></i>',
			'<i class="fas fa-arrow-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 1,
			},
			767: {
				items: 2,
			},
			991: {
				items: 3,
			},
			1199: {
				items: 3,
			},
			1399: {
				items: 4,
			},
		},
	});
	$(".sponsor-slider").owlCarousel({
		loop: true,
		items: 1,
		margin: 20,
		dots: false,
		smartSpeed: 600,
		autoplayTimeout: 2000,
		autoplay: true,
		nav: false,
		responsiveClass: true,
		navText: [
			'<i class="fas fa-arrow-left"></i>',
			'<i class="fas fa-arrow-right"></i>',
		],
		responsive: {
			0: {
				items: 2,
				margin: 10,
			},
			500: {
				items: 2,
			},
			767: {
				items: 3,
			},
			991: {
				items: 4,
			},
			1199: {
				items: 5,
			},
			1399: {
				items: 6,
			},
		},
	});
	$(".opening-slider").owlCarousel({
		loop: true,
		items: 1,
		margin: 20,
		dots: false,
		smartSpeed: 600,
		autoplayTimeout: 2000,
		autoplay: true,
		nav: false,
		center: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				margin: 10,
			},
			500: {
				items: 2,
			},
			767: {
				items: 3,
			},
			991: {
				items: 3,
			},
			1199: {
				items: 3,
			},
			1399: {
				items: 3,
			},
		},
	});
	$(".letest-post").owlCarousel({
		loop: true,
		items: 1,
		margin: 20,
		dots: false,
		smartSpeed: 600,
		autoplayTimeout: 2000,
		autoplay: true,
		nav: true,
		responsiveClass: true,
		navText: [
			'<i class="fas fa-arrow-left"></i>',
			'<i class="fas fa-arrow-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
				margin: 10,
			},
			500: {
				items: 1,
			},
			767: {
				items: 1,
			},
			991: {
				items: 1,
			},
			1199: {
				items: 1,
			},
			1399: {
				items: 1,
			},
		},
	});
	//Owl carousel

	//menu header bar
	$(".header-bar").on("click", function (e) {
		$(".main-menu, .header-bar").toggleClass("active");
	});
	$(".main-menu li a").on("click", function (e) {
		var element = $(this).parent("li");
		if (element.hasClass("open")) {
			element.removeClass("open");
			element.find("li").removeClass("open");
			element.find("ul").slideUp(300, "swing");
		} else {
			element.addClass("open");
			element.children("ul").slideDown(300, "swing");
			element.siblings("li").children("ul").slideUp(300, "swing");
			element.siblings("li").removeClass("open");
			element.siblings("li").find("li").removeClass("open");
			element.siblings("li").find("ul").slideUp(300, "swing");
		}
	});
	//menu header bar
	//menu top fixed bar
	var fixed_top = $(".header-section");
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 220) {
			fixed_top.addClass("menu-fixed animated fadeInDown");
			fixed_top.removeClass("slideInUp");
			$("body").addClass("body-padding");
		} else {
			fixed_top.removeClass("menu-fixed fadeInDown");
			fixed_top.addClass("slideInUp");
			$("body").removeClass("body-padding");
		}
	});
	//menu top fixed bar
	// click even scroll bar
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 300) {
			$(".scrollToTop").fadeIn();
		} else {
			$(".scrollToTop").fadeOut();
		}
	});
	// click even scroll bar
	// scroll top bottom bar
	$(".scrollToTop").on("click", function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			700
		);
		return false;
	});
	// scroll top bottom bar
	/*-- Odometer Counting Start--*/
	$(".odometer-item").each(function () {
		$(this).isInViewport(function (status) {
			if (status === "entered") {
				for (
					var i = 0;
					i < document.querySelectorAll(".odometer").length;
					i++
				) {
					var el = document.querySelectorAll(".odometer")[i];
					el.innerHTML = el.getAttribute("data-odometer-final");
				}
			}
		});
	});
	/*-- Odometer Counting End--*/
	// wow animation
		new WOW().init();
	// wow animation

	//Magnifiq pupup
	// $('.video-btn').magnificPopup({
	// 	type: 'iframe',
	// 	callbacks: {
			
	//   	}
	// });
	//Magnifiq pupup
	
	// scroll top bottom
	let calcScrollValue = () => {
		let scrollProgress = document.getElementById("progress");
		let progressValue = document.getElementById("valu");
		let pos = document.documentElement.scrollTop;
		let calcHeight =
		document.documentElement.scrollHeight - 
		document.documentElement.clientHeight;
		let scrollValue = Math.round((pos * 250) / calcHeight);
		
		if (pos > 250){
			scrollProgress.style.display = "grid";
		} else{
			scrollProgress.style.display = "none";
		}
		scrollProgress.addEventListener("click", () => {
			document.documentElement.scrollTop = 0;
		}); 
	};
	window.onscroll = calcScrollValue;
	window.onload = calcScrollValue;
	// scroll top bottom
	//preloader
	setTimeout(function(){
		$('.bg-load').fadeToggle();
	}, 1000);
	//preloader
	
	//Tabbing tab
		const tabs = document.querySelectorAll(".tab");
		const tabContent = document.querySelectorAll(".tab-content");
		let tabNo = 0;
		let contentNo = 0;
		tabs.forEach((tab) => {
			tab.dataset.id = tabNo;
			tabNo++;
			tab.addEventListener("click", function () {
				tabs.forEach((tab) => {
				tab.classList.remove("active");
				tab.classList.add("non-active");
				});
				this.classList.remove("non-active");
				this.classList.add("active");
				tabContent.forEach((content) => {
				content.classList.add("hidden");
				if (content.dataset.id === tab.dataset.id) {
					content.classList.remove("hidden");
				}
				});
			});
		});
		tabContent.forEach((content) => {
		content.dataset.id = contentNo;
		contentNo++;
	});

	//Filtering
	var navbtn = document.querySelectorAll('.button'), i; // select all items to become filter

	[].forEach.call(navbtn, function(al) {
		al.addEventListener('click', function(){ 

			document.querySelector('.is-checked').classList.remove('is-checked') //remove the active class
			this.classList.add('is-checked') //add the active class to this, the clicked element
			
			var match = this.dataset.filter // store the data-filter of the clicked element in a variable
			
			var project = document.querySelectorAll('.item'); // create a variable for element to filter
			[].forEach.call(project, function(el) {
				el.classList.add('fade')
				  setTimeout(function(){
					  el.classList.add('none')
				  },300) //fade and hide all items
				  if( el.classList.contains(match)){ //if one or several items contains the variable of this.datafilter in ther class, show it and fade it in.
					  setTimeout(function(){
						  el.classList.remove('none')
					  },300)
					  setTimeout(function(){
						  el.classList.remove('fade')
					  },400)
				  }
				  if ( match === "*") { // if * show all
					  setTimeout(function(){
						  el.classList.remove('none')
					  },300)
					  setTimeout(function(){
						  el.classList.remove('fade')
					  },400)
				  }
			})
		})
	})
	//Filtering

	//Isotope
	// external js: isotope.pkgd.js


// init Isotope
	var $grid = $('.grid').isotope({
	itemSelector: '.element-item',
	layoutMode: 'fitRows',
	getSortData: {
	  name: '.name',
	  symbol: '.symbol',
	  number: '.number parseInt',
	  category: '[data-category]',
	  weight: function( itemElem ) {
		var weight = $( itemElem ).find('.weight').text();
		return parseFloat( weight.replace( /[\(\)]/g, '') );
	  }
	}
  });
  
  // filter functions
  var filterFns = {
	// show if number is greater than 50
	numberGreaterThan50: function() {
	  var number = $(this).find('.number').text();
	  return parseInt( number, 10 ) > 50;
	},
	// show if name ends with -ium
	ium: function() {
	  var name = $(this).find('.name').text();
	  return name.match( /ium$/ );
	}
  };
  
  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
	var filterValue = $( this ).attr('data-filter');
	// use filterFn if matches value
	filterValue = filterFns[ filterValue ] || filterValue;
	$grid.isotope({ filter: filterValue });
  });
  
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
	var $buttonGroup = $( buttonGroup );
	$buttonGroup.on( 'click', 'button', function() {
	  $buttonGroup.find('.is-checked').removeClass('is-checked');
	  $( this ).addClass('is-checked');
	});
  });
	
  
	//Isotope

	//Nice select
	$('select').niceSelect();
	
});



