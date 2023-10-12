var scroll = function scroll(){
    
    const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



}
scroll()



var clutter1=""
var first = document.querySelector("#first-heading h1").textContent.split("").forEach(function(e){
    clutter1+= `<span>${e}</span>`
})
document.querySelector("#first-heading h1").innerHTML = clutter1


var clutter2=""

var mid1 = document.querySelector("#mid-heading h1").textContent.split("").forEach(function(e){
    clutter2+= `<span>${e}</span>`
})
document.querySelector("#mid-heading h1").innerHTML = clutter2

var clutter3=""
var mid2 = document.querySelector("#mid-heading h1:nth-child(3)").textContent.split("").forEach(function(e){
    clutter3+= `<span>${e}</span>`
})
 document.querySelector("#mid-heading h1:nth-child(3)").innerHTML = clutter3


var clutter4=""
var last= document.querySelector("#last-heading h1").textContent.split("").forEach(function(e){
    clutter4+= `<span>${e}</span>`
})
 document.querySelector("#last-heading h1").innerHTML = clutter4

 
 

 
 
var tl = gsap.timeline()


tl.from("#first-heading h1 span ",{
    duration:1,
    delay:1,
    y:"200%",
    opacity:0,
    ease:"back.out",
    stagger:{
        each:.02,
        from:"center"
    }
},"h1")

tl.from("#mid-heading h1 span ",{
    duration:1,
    y:"200%",
    delay:1,

    opacity:0,
    ease:"back.out",
    stagger:{
        each:.02,
        from:"edges"
    }
},"h1")
tl.from("#last-heading h1 span ",{
    duration:1,
    y:"200%",
    delay:1,
    
    opacity:0,
    ease:"back.out",
    stagger:{
        each:.02,
        from:"edges"
    }
},"h1")
tl.from("#line",{
    scale:0,
    delay:1.5,
    
    duration:1,
    
},"h1")
tl.to("#first-heading h1 span ",{
    color:"white",
    stagger:{
        each:.06,
        from:"start"
    }
},"whiteh1")
tl.to("#mid-heading h1 span ",{
    color:"white",
    stagger:{
        each:.06,
        from:"start"
    }
},"whiteh1")
tl.to("#last-heading h1 span ",{
    color:"white",
    stagger:{
        each:.06,
        from:"start"
    }
},"whiteh1")
tl.from("#page1>h6",{
    y:"100px",
    
    color:"transparent",
    duration:.5,
})
// <------- scrolltrigger on page2------------->
// tl.from("#page2-video",{
//     y:"100px",
//     duration:2,
//     delay:1
// },"h1")
tl.to("#page2-video",{
    y:"-150%",
    
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        
        start:"top 60%",
        end:"0% -102%",
        scrub:1,
        pin:true,
        
        
        
    }
})


// <-------play/pause page2 video------->
var playbutton =document.querySelector("#playbutton")

document.querySelector("#page2-video").addEventListener("mousemove",function(dets){
    playbutton.style.left= dets.clientX  +"px"
   playbutton.style.top= dets.clientY  +"px"
   
})

document.querySelector("#page2-video").addEventListener("mouseenter",function(dets){
    playbutton.style.scale= 1
    
})
document.querySelector("#page2-video").addEventListener("mouseleave",function(dets){
    playbutton.style.scale= 0
    
})

 var flag=0
 document.querySelector("#page2-video").addEventListener("click",function(){
     if(flag==0){
         playbutton.innerHTML=`<i class="ri-close-line"></i>`
         document.querySelector("#page2-video #video1").style.display="none"
        document.querySelector("#page2-video #video2").play()
        flag=1
        
    }
    else if(flag==1){
        playbutton.innerHTML=`<h6>PLAY</h6>`
        document.querySelector("#page2-video #video1").style.display="initial"
        document.querySelector("#page2-video #video2").pause()
        flag=0
    }
 
    
})
 

// <-------hover video play page4 ------->

document.querySelector("#page4 .box:nth-child(1)").addEventListener("mouseenter",function(){
    document.querySelector("#front").style.display="none"
    document.querySelector("#page4 #v1").play()
  document.querySelector("#page4 #v1").style.zIndex="100"
  document.querySelector(".box:nth-child(1) i").style.fontSize="50px"
})

document.querySelector("#page4 .box:nth-child(1)").addEventListener("mouseleave",function(){
    document.querySelector("#front").style.display="initial"
    document.querySelector("#page4 #v1").pause()
    document.querySelector("#page4 #v1").style.zIndex="initial"
    document.querySelector(".box:nth-child(1) i").style.fontSize="initial"

})
  
document.querySelector("#page4 .box:nth-child(2)").addEventListener("mouseenter",function(){
    document.querySelector("#front").style.display="none"
    document.querySelector("#page4 #v2").play()
    document.querySelector("#page4 #v2").style.zIndex="100"
    document.querySelector(".box:nth-child(2) i").style.fontSize="50px"

})

document.querySelector("#page4 .box:nth-child(2)").addEventListener("mouseleave",function(){
    document.querySelector("#front").style.display="initial"
    document.querySelector("#page4 #v2").pause()
      document.querySelector("#page4 #v2").style.zIndex="initial"
      document.querySelector(".box:nth-child(2) i").style.fontSize="initial"
      
    })
    
    document.querySelector("#page4 .box:nth-child(3)").addEventListener("mouseenter",function(){
        document.querySelector("#front").style.display="none"
        document.querySelector("#page4 #v3").play()
        document.querySelector("#page4 #v3").style.zIndex="100"
        document.querySelector(".box:nth-child(3) i").style.fontSize="50px"
        
    })
    
    document.querySelector("#page4 .box:nth-child(3)").addEventListener("mouseleave",function(){
          document.querySelector("#front").style.display="initial"
          document.querySelector("#page4 #v3").pause()
          document.querySelector("#page4 #v3").style.zIndex="initial"
          document.querySelector(".box:nth-child(3) i").style.fontSize="initial"

        })
        
    
        
        // <----------------page5 headings------------->
        
        var clutterpage51=""
        var page5firsth1 = document.querySelector("#page5 .h1:nth-child(1) h1").textContent.split("").forEach(function(e){
            clutterpage51+= `<span>${e}</span>`
})
var sj = document.querySelector("#page5 .h1:nth-child(1) h1").innerHTML = clutterpage51

 var clutterpage52=""
 var page5secondh1 = document.querySelector("#page5 .h1:nth-child(2) h1").textContent.split("").forEach(function(e){
     clutterpage52+= `<span>${e}</span>`
 })
  var sj = document.querySelector("#page5 .h1:nth-child(2) h1").innerHTML = clutterpage52
 
  var clutterpage53=""
  var page5thirdh1 = document.querySelector("#page5 .h1:nth-child(3) h1").textContent.split("").forEach(function(e){
      clutterpage53+= `<span>${e}</span>`
    })
   var sj = document.querySelector("#page5 .h1:nth-child(3) h1").innerHTML = clutterpage53
   
   

   
   tl.from("#page5 .h1:nth-child(1) h1 span,#page5 .h1:nth-child(2) h1 span,#page5 .h1:nth-child(3) h1 span   ",{
        y:"200px",
        opacity:0,
        color:"blue",
          color:"blue",
          duration:1,
          ease:"back.out",
          stagger:{
        each:.02,
        from:"start"
    },
    scrollTrigger:{
      trigger:" .h1",
      scroller:"#main",
      //  markers:true,
      start:"top 70%",
      end:"top 0%",
     scrub:5
    }
   })


  //  <------------page6 images--------------->


   tl.from("#page6 .page6-img:nth-child(2)",{
     y:"200px",
  opacity:0,
duration:1,
    scrollTrigger:{
      trigger:"#page6 .page6-img:nth-child(2)",
      scroller:"#main",
      // markers:true,
      start:"top 60%",
      end:"top 0%",
      // scrub:2
    }
    
   })
   tl.from("#page6 .page6-img:nth-child(3)",{
    y:"200px",
 opacity:0,
 duration:1,
 scrollTrigger:{
     trigger:"#page6 .page6-img:nth-child(3)",
     scroller:"#main",
    //  markers:true,
     start:"top 60%",
     end:"top 0%",
     //  scrub:2
    }
    
  })
  tl.from("#page6 .page6-img:nth-child(4)",{
    y:"200px",
    opacity:0,
    duration:1,
   scrollTrigger:{
     trigger:"#page6 .page6-img:nth-child(4)",
     scroller:"#main",
    //  markers:true,
     start:"top 60%",
     end:"top 0%",
     //  scrub:2
    }
    
  })
  
  // <------------page6 h1--------->
  
  

  var clutter=""
   document.querySelector("#page6-h1 h1").textContent.split("").forEach(function(e){
      clutter+= `<span>${e}</span>`
  })
  var j = document.querySelector("#page6-h1 h1").innerHTML = clutter
  tl.from(" #page6-h1 h1 span",{
  opacity:0,
  x:-100,
  color:"blue",
  // duration:1,
  stagger:.2,
  ease:"Bounce.easeIn",
  scrollTrigger:{
    trigger:"#page6-h1",
    scroller:"#main",
    // markers:true,
    start:"top 60%",
    end:"top 0%",
    scrub:2
  }
  })
  // <------------page5 swiper---------------->
  
   var swiper = new Swiper(".mySwiper", {
     slidesPerView: 3,
     centeredSlides: true,
     spaceBetween: 100,
     pagination: {
       el: ".swiper-pagination",
        type: "fraction",
        
      },
      
      navigation: {
        
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    
    var appendNumber = 4;
    var prependNumber = 1;
    document
    .querySelector(".prepend-2-slides")
    .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.prependSlide([
          '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
          '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
        ]);
      });
    document
    .querySelector(".prepend-slide")
      .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.prependSlide(
          '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
          );
      });
      document
      .querySelector(".append-slide")
      .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.appendSlide(
          '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
        );
      });
    document
      .querySelector(".append-2-slides")
      .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.appendSlide([
          '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
          '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
        ]);
      });

      