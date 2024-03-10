$(window).on("load", function(){

    $(".preloader").fadeOut(600);

    let slideIndex = $(".slide.active").index();
    const slideLen = $(".slide").length;
    function slideShow(){

        $(".slide").removeClass("active").eq(slideIndex).addClass("active");
        if(slideIndex ==slideLen-1){
            slideIndex=0;
        }else{
            slideIndex++;
        }
        setTimeout(slideShow,5000);
    }
    slideShow();
})

$(document).ready(function(){


    $(".hamburger-btn").click(function(){
        $(".header .nav").slideToggle();
    })
    $(".header .nav .a").click(function(){
        if($(window).width() < 768){
            $(".header .nav").slideToggle();
        }
    });


    $(window).scroll(function(){
        if($(this).scrollTop()  > 100){
            $(".header").addClass("fixed");
        }else{
            $(".header").removeClass("fixed");
        }
    })

        $.scrollIt();

    peopleFilter($(".filter-btn.active").attr("data-target"))
    $(".filter-btn").click(function(){
        if(!$(this).hasClass("active")){
            peopleFilter($(this).attr("data-target"))
        }
    })
    function peopleFilter(target) {
        $(".filter-btn").removeClass("active");
        $(".filter-btn[data-target='"+target+"']").addClass("active");
        $(".people-item").hide();
        $(".people-item[data-category='"+target+"']").fadeIn();
    }
    const wHeight = $(window).height();
    $(".gallery-popup .gp-img").css("max-height",wHeight + "px");

    let itemIndex = 0;
    const totalGalleryItems = $(".gallery-item").length;

    $(".gallery-item").click(function(){
        itemIndex = $(this).index();
        $(".gallery-popup").addClass("open");
        $(".gallery-popup .gp-img").hide();
        gpSlideShow()
    })
    $(".gp-controls .next").click(function(){
        if(itemIndex == totalGalleryItems-1){
            itemIndex=0;
        }else{
            itemIndex++;
        }
        $(".gallery-popup .gp-img").fadeOut(function(){
            gpSlideShow();
        })
    })

    $(".gp-controls .prev").click(function(){
        if(itemIndex === 0){
            itemIndex= totalGalleryItems-1;
        }else{
            itemIndex--;
        }
        $(".gallery-popup .gp-img").fadeOut(function(){
            gpSlideShow();
        })
    })

    function gpSlideShow(){
        const imgSrc = $(".gallery-item").eq(itemIndex).find("img").attr("data-large");
        $(".gallery-popup .gp-img").fadeIn().attr("src",imgSrc);
        $(".gp-counter").text((itemIndex+1) +"/"+ totalGalleryItems);
    }
    $(".gp-close").click(function(){
        $(".gallery-popup").removeClass("open");
    })

    $(".gallery-popup").click(function(event){
        if($(event.target).hasClass("open")){
            $(".gallery-popup").removeClass("open");
        }
    });
})
// (function(e){"use strict";var t="ScrollIt",n="1.0.3";var r={upKey:38,downKey:40,easing:"linear",scrollTime:600,activeClass:"active",onPageChange:null,topOffset:0};e.scrollIt=function(t){var n=e.extend(r,t),i=0,s=e("[data-scroll-index]:last").attr("data-scroll-index");var o=function(t){if(t<0||t>s)return;var r=e("[data-scroll-index="+t+"]").offset().top+n.topOffset+1;e("html,body").animate({scrollTop:r,easing:n.easing},n.scrollTime)};var u=function(t){var n=e(t.target).closest("[data-scroll-nav]").attr("data-scroll-nav")||e(t.target).closest("[data-scroll-goto]").attr("data-scroll-goto");o(parseInt(n))};var a=function(t){var r=t.which;if(e("html,body").is(":animated")&&(r==n.upKey||r==n.downKey)){return false}if(r==n.upKey&&i>0){o(parseInt(i)-1);return false}else if(r==n.downKey&&i<s){o(parseInt(i)+1);return false}return true};var f=function(t){if(n.onPageChange&&t&&i!=t)n.onPageChange(t);i=t;e("[data-scroll-nav]").removeClass(n.activeClass);e("[data-scroll-nav="+t+"]").addClass(n.activeClass)};var l=function(){var t=e(window).scrollTop();var r=e("[data-scroll-index]").filter(function(r,i){return t>=e(i).offset().top+n.topOffset&&t<e(i).offset().top+n.topOffset+e(i).outerHeight()});var i=r.first().attr("data-scroll-index");f(i)};e(window).on("scroll",l).scroll();e(window).on("keydown",a);e("body").on("click","[data-scroll-nav], [data-scroll-goto]",function(e){e.preventDefault();u(e)})}})(jQuery)
