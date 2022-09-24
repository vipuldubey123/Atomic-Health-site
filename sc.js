function show(){
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
    
    
    
   
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

show();



 var abc = document.querySelector("#circle");
 abc.addEventListener("click",function(){
    document.querySelector("#page").style.left = '0%';

 })

 var abc = document.querySelector("#circle1");
 abc.addEventListener("click",function(){
    document.querySelector("#page").style.left = '-100%';

 })

 gsap.from("#left>h2",{
  opacity:0,
  duratio:1,
  onstart:function(){
    $("#left>h2").textillate({ in: { effect: 'fadeInUp' } });
  }
})



gsap.from("#page2>h4",{
  opacity:0,
  duratio:1,
  y:40,
  stagger : .1,
    scrollTrigger:{
      trigger:"#page2>h4",
      scroller:"#main",
      scrub:true  
    }, 
 
})
gsap.from("#page3>img",{ 
  opacity:0,
  duration:1,
  rotateX :'180deg', 
  scrollTrigger:{
    trigger:"#page3>img",
    scroller:"#main", 
    scrub:true
   },
})
gsap.from("#page4>img",{ 
  opacity:0,
  duration:1,
  rotateX :'180deg',
  
  scrollTrigger:{
    trigger:"#page4>img",
    scroller:"#main", 
    scrub:true
   },

})

gsap.from("#page6>img",{
  opacity:0,
  duration:1,
  rotateX :'180deg', 
  scrollTrigger:{
    trigger:"#page6>img",
    scroller:"#main", 
    scrub:true
   },
})

gsap.from("#page7>img",{  
  opacity:0,
  duration:1,
  rotateX :'180deg', 
  scrollTrigger:{
    trigger:"#page7>img",
    scroller:"#main", 
    scrub:true
   },
})

gsap.from("#page5>h2",{
  opacity:0,
  duratio:1,
    y:40,
    stagger:.1,
    scrollTrigger:{
      trigger:"#page5>h2",
      scroller:"#main",
      scrub:true,
    },
})

gsap.from("#page8>h2",{
   opacity:0,
   duratio:1,
   y:200,
   scrollTrigger:{
   trigger:"#page8>h2",
   scroller:"#main"
    },
})


