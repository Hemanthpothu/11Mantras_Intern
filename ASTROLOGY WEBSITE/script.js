//TYPEWRITER
var typeWriterElement=document.getElementById('typewriter');
var textArray=[
  "Your journey to find a gold mine in your fortune has never been so easy..",
  "Know your Fortune and find your gold mine",
  "Invest in yourself to find hidden treasures",
  "Gain wealth, health and relationships",
  "Call now for a free consultation",
  "Get astro remedies and solve all your problems"
];
function delWriter(text,i,cb){
    if(i>=0){
        typeWriterElement.innerHTML=text.substring(0,i--);
        var rndBack=10+Math.random()*100;
        setTimeout(function(){
            delWriter(text,i,cb);
        },rndBack);}
    else if(typeof cb=='function'){
        setTimeout(cb,500);
    }
};
function typeWriter(text,i,cb){
    if(i<text.length+1){
        typeWriterElement.innerHTML=text.substring(0,i++);
        var rndTyping=250-Math.random()*100;
        setTimeout(function(){
            typeWriter(text,i++,cb)
        },rndTyping);
    }
    else if(i===text.length+1){
        setTimeout(function()
        {delWriter(text,i,cb)},500);
    }
};
function StartWriter(i){
    if(typeof textArray[i]=="undefined"){
        setTimeout(function()
        {StartWriter(0)
        },500);
    }else if(i<textArray[i].length+1){
        typeWriter(textArray[i],0,function() {
            StartWriter(i+1);
        });
    }
};
setTimeout(function(){
    StartWriter(0);
},500);
//NAVBAR
(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" activee", "");
	}
	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " activee";
}


let slideIndex1 = 0;
showSlides1();

function showSlides1() {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	slideIndex1++;
	if (slideIndex1 > slides.length) {slideIndex1 = 1}    
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" activee", "");
	}
	slides[slideIndex1-1].style.display = "block";  
	dots[slideIndex1-1].className += " activee";
	setTimeout(showSlides1, 2000); // Change image every 2 seconds
}

// Go to Top
var gotop=document.getElementById('goTop');
gotop.onclick=()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
}
window.onscroll = () =>{
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		gotop.style.display = "block";
	} else {
		gotop.style.display = "none";
	}
}

/*FEEDBACK SLIDER*/
jQuery(document).ready(function ($) {
	var feedbackSlider = $(".feedback-slider");
	feedbackSlider.owlCarousel({
		items: 1,
		nav: true,
		dots: true,
		autoplay: true,
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		navText: [
			"<i class='fa fa-long-arrow-left' style='color:#fff'></i>",
			"<i class='fa fa-long-arrow-right' style='color:#fff'></i>"
		],
		responsive: {
			// breakpoint from 767 up
			767: {
				nav: true,
				dots: false
			}
		}
	});

	feedbackSlider.on("translate.owl.carousel", function () {
		$(".feedback-slider-item h3")
			.removeClass("animated fadeIn")
			.css("opacity", "0");
		$(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating")
			.removeClass("animated zoomIn")
			.css("opacity", "0");
	});

	feedbackSlider.on("translated.owl.carousel", function () {
		$(".feedback-slider-item h3").addClass("animated fadeIn").css("opacity", "1");
		$(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating")
			.addClass("animated zoomIn")
			.css("opacity", "1");
	});
	feedbackSlider.on("changed.owl.carousel", function (property) {
		var current = property.item.index;
		var prevThumb = $(property.target)
			.find(".owl-item")
			.eq(current)
			.prev()
			.find("img")
			.attr("src");
		var nextThumb = $(property.target)
			.find(".owl-item")
			.eq(current)
			.next()
			.find("img")
			.attr("src");
		var prevRating = $(property.target)
			.find(".owl-item")
			.eq(current)
			.prev()
			.find("span")
			.attr("data-rating");
		var nextRating = $(property.target)
			.find(".owl-item")
			.eq(current)
			.next()
			.find("span")
			.attr("data-rating");
		$(".thumb-prev").find("img").attr("src", prevThumb);
		$(".thumb-next").find("img").attr("src", nextThumb);
		$(".thumb-prev")
			.find("span")
			.next()
			.html(prevRating + '<i class="fa fa-star"></i>');
		$(".thumb-next")
			.find("span")
			.next()
			.html(nextRating + '<i class="fa fa-star"></i>');
	});
	$(".thumb-next").on("click", function () {
		feedbackSlider.trigger("next.owl.carousel", [300]);
		return false;
	});
	$(".thumb-prev").on("click", function () {
		feedbackSlider.trigger("prev.owl.carousel", [300]);
		return false;
	});
}); //end ready

function init() {
    let data = [
      {
        pic:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80&h150",
        alt: "https://unsplash.com/photos/iFgRcqHznqg",
        name: "John",
        rating: 3.5,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde similique consequuntur saepe quibusdam ad voluptas cum aut natus tempore impedit?"
      },
      {
        pic:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
        alt: "https://unsplash.com/photos/mEZ3PoFGs_k",
        rating: 4,
        name: "Lilibet",
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cumque delectus nam ipsum minus odit tenetur ab quisquam voluptas? Reprehenderit, nulla unde porro dignissimos asperiores sunt assumenda eveniet ea quibusdam."
      },
      {
        pic:
          "https://images.unsplash.com/photo-1528892952291-009c663ce843?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
        alt: "https://unsplash.com/photos/rriAI0nhcbc",
        rating: 4.5,
        name: "Charles",
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cumque delectus nam ipsum minus odit tenetur ab quisquam voluptas? Reprehenderit, nulla unde porro dignissimos asperiores sunt assumenda eveniet ea quibusdam."
      },
      {
        pic:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
        alt: "https://unsplash.com/photos/QXevDflbl8A",
        rating: 2,
        name: "Jane",
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cumque delectus nam ipsum minus odit tenetur ab quisquam voluptas? Reprehenderit, nulla unde porro dignissimos asperiores sunt assumenda eveniet ea quibusdam."
      }
    ];
    let reviewInd = 0;
  
    const bodyEle = document.querySelector("body");
    const imgEle = document.querySelector("#user-pic");
    const nameEle = document.querySelector("#user-name");
    const ratingEle = document.querySelector(".review");
    const commentEle = document.querySelector(".user-comment");
    const leftBtn = document.querySelector("#left");
    const rightBtn = document.querySelector("#right");
  
    const updateImg = (userData) => {
      imgEle.src = userData.pic;
      imgEle.alt = userData.alt;
    };
  
    const updateName = (userData) => {
      nameEle.textContent = userData.name;
    };
  
    const updateRating = (userData) => {
      for (let ind = 0; ind < ratingEle.children.length; ind++) {
        const ele = ratingEle.children[ind];
        ele.className =
          ind < userData.rating ? "star fas fa-star" : "star far fa-star";
      }
      let ratingInt = Math.floor(userData.rating);
      if (ratingInt !== userData.rating) {
        let halfRatingEle = ratingEle.children[ratingInt];
        halfRatingEle.className = "star fas fa-star-half-alt";
      }
    };
  
    const updateComment = (userData) => {
      commentEle.textContent = userData.review;
    };
  
    const updateContainer = (ind) => {
      if (ind >= data.length) {
        reviewInd = ind % data.length;
      } else if (ind < 0) {
        reviewInd = +(ind % data.length) && data.length + (ind % data.length);
      } else {
        reviewInd = ind;
      }
  
      let updateList = [updateImg, updateName, updateRating, updateComment];
      for (updater of updateList) {
        updater(data[reviewInd]);
      }
    };
  
    leftBtn.onclick = () => {
      updateContainer(reviewInd - 1);
    };
    rightBtn.onclick = () => {
      updateContainer(reviewInd + 1);
    };
  
    bodyEle.onkeydown = (e) => {
      switch (e.key) {
        case "ArrowLeft":
          leftBtn.onclick();
          break;
        case "ArrowRight":
          rightBtn.onclick();
          break;
      }
    };
  
    updateContainer(0);
  }
  
  window.onload = init;
  

  //  BLOG CAROUSEL HOOK
  jQuery(document).ready(function($) {
  "use strict";
  $('#blog').owlCarousel({
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplay: true,
      dots:true,
      autoplayTimeout: 4000,
      smartSpeed: 1500,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 3
        }
      }
  });
});

  //  TESTIMONIALS CAROUSEL HOOK
  jQuery(document).ready(function($) {
  "use strict";
  $('.testimonial_owlCarousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    autoplay:true,   
    smartSpeed: 1500, 
    autoplayTimeout:4000,
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
});
/*GALLERY*/
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = ()=>{ //after window loaded
  filterItem.onclick = (selectedItem)=>{ //if user click on filterItem div
    if(selectedItem.target.classList.contains("item")){ //if user selected item has .item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
      selectedItem.target.classList.add("active"); //add that active class on user selected item
      let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
      filterImg.forEach((image) => {
        let filterImages = image.getAttribute("data-name"); //getting image data-name value
        //if user selected item data-name value is equal to images data-name value
        //or user selected item data-name value is equal to "all"
        if((filterImages == filterName) || (filterName == "all")){
          image.classList.remove("hide"); //first remove the hide class from the image
          image.classList.add("show"); //add show class in image
        }else{
          image.classList.add("hide"); //add hide class in image
          image.classList.remove("show"); //remove show class from the image
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
  }
}

//fullscreen image preview function
//selecting all required elements
const previewBox = document.querySelector(".preview-box"),
categoryName = previewBox.querySelector(".title p"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");

function preview(element){
  //once user click on any image then remove the scroll bar of the body, so user can't scroll up or down
  document.querySelector("body").style.overflow = "hidden";
  let selectedPrevImg = element.querySelector("img").src; //getting user clicked image source link and stored in a variable
  let selectedImgCategory = element.getAttribute("data-name"); //getting user clicked image data-name value
  previewImg.src = selectedPrevImg; //passing the user clicked image source in preview image source
  categoryName.textContent = selectedImgCategory; //passing user clicked data-name value in category name
  previewBox.classList.add("show"); //show the preview image box
  shadow.classList.add("show"); //show the light grey background
  closeIcon.onclick = ()=>{ //if user click on close icon of preview box
    previewBox.classList.remove("show"); //hide the preview box
    shadow.classList.remove("show"); //hide the light grey background
    document.querySelector("body").style.overflow = "auto"; //show the scroll bar on body
  }
}
/*3D SLIDER*/
const leftButton = document.querySelector('.arrow.left');
const rightButton = document.querySelector('.arrow.right');

leftButton.addEventListener('click', () => {
	turnSlider('left');
});

rightButton.addEventListener('click', () => {
	turnSlider('right');
});

function turnSlider(direction) {
	const slides = document.querySelectorAll(`.slide`);
	slides.forEach(slide => {
		let currentSlide = +(slide.classList + '').split('-')[1];
		let slideToBe;
		switch(direction) {
			case 'left': {
				slideToBe = currentSlide - 1;
				if(slideToBe < 1) {
					slideToBe = slides.length;
					slide.style.left = '-500px';
				}
				break;
			}
			case 'right': {
				slideToBe = currentSlide + 1;
				if(slideToBe > slides.length) {
					slideToBe = 1;
					slide.style.left = '2000px';
				}
				break;
			}
		}
		slide.classList.remove(`slide-${currentSlide}`);
		slide.classList.add(`slide-${slideToBe}`);
	});
}
