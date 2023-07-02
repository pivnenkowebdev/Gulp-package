window.addEventListener("DOMContentLoaded",()=>{var e;gsap.registerPlugin(ScrollTrigger),$(".reviews-slider").slick({draggable:!0,centerMode:!0,slidesToShow:3,slidesToScroll:1,autoplay:!0,dots:!0,speed:2e3,infinite:!0,touchThreshold:100,prevArrow:`<div class="slick-prev">
    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_156_12)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.70998 9.87998L2.82998 5.99998L6.70998 2.11998C7.09998 1.72998 7.09998 1.09998 6.70998 0.70998C6.31998 0.31998 5.68998 0.31998 5.29998 0.70998L0.70998 5.29998C0.31998 5.68998 0.31998 6.31998 0.70998 6.70998L5.29998 11.3C5.68998 11.69 6.31998 11.69 6.70998 11.3C7.08998 10.91 7.09998 10.27 6.70998 9.87998Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_156_12">
    <rect width="7" height="12" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    
    </div>`,nextArrow:`<div class="slick-next">
    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_156_4)">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.290059 9.87998L4.17006 5.99998L0.290059 2.11998C-0.0999414 1.72998 -0.0999414 1.09998 0.290059 0.70998C0.680059 0.31998 1.31006 0.31998 1.70006 0.70998L6.29006 5.29998C6.68006 5.68998 6.68006 6.31998 6.29006 6.70998L1.70006 11.3C1.31006 11.69 0.680059 11.69 0.290059 11.3C-0.0899414 10.91 -0.0999414 10.27 0.290059 9.87998Z" fill="white"/>
  </g>
  <defs>
  <clipPath id="clip0_156_4">
  <rect width="7" height="12" fill="white"/>
  </clipPath>
  </defs>
  </svg>
  
  </div>`}),(e=gsap.timeline({})).from(".author",{x:-400,duration:2,opacity:0,ease:"back.out(1.5)"}),e.call(function(){const e=document.querySelector(".preview"),r=e.offsetLeft+e.offsetWidth/2,o=e.offsetTop+e.offsetHeight/2;document.addEventListener("mousemove",function(e){var t=e.clientX-r,e=e.clientY-o;gsap.to(".avatar__parallax-img--first",{x:.05*t,y:.05*e,ease:"power2.out"}),gsap.to(".avatar__parallax-img--second",{x:.03*t,y:.03*e,ease:"power2.out"},"<"),gsap.to(".avatar__photo--preview",{x:.01*t,y:.01*e,ease:"power2.out"},"<"),gsap.to(".author",{x:.01*t,y:.01*e,ease:"power2.out"},"<"),gsap.to(".bunner__icon--first",{x:.02*t,y:.02*e,ease:"power2.out"},"<"),gsap.to(".bunner__icon--second",{x:.03*t,y:.03*e,ease:"power2.out"},"<"),gsap.to(".bunner__icon--last",{x:.02*t,y:.02*e,ease:"power2.out"},"<"),gsap.to(".bunner__circles-item--big",{x:.03*t,y:.03*e,ease:"power2.out"},"<"),gsap.to(".bunner__circles-item--medium",{x:.02*t,y:.02*e,ease:"power2.out"},"<"),gsap.to(".bunner__circles-item--small",{x:.01*t,y:.01*e,ease:"power2.out"},"<")})}),gsap.from("#values",{x:400,opacity:0,scrollTrigger:{trigger:"#values",start:"-100% center",end:"center 60%",opacity:1,scrub:1.5,toggleActions:"play reverse play reverse"}}),gsap.from("#headTeacher",{x:-400,opacity:0,scrollTrigger:{trigger:"#headTeacher",start:"-100% center",end:"center 60%",opacity:1,scrub:1.5,toggleActions:"play reverse play reverse"}}),gsap.from(".card-activities--first",{stagger:.3,opacity:0,y:200,scrollTrigger:{trigger:".activities",start:"top 70%",end:"20% 50%",scrub:1.5,toggleActions:"play none none reverse"}}),gsap.from(".card-activities--second",{stagger:.3,opacity:0,y:200,scrollTrigger:{trigger:".card-activities--second",start:"top 90%",end:"30% 60%",scrub:1.5,toggleActions:"play none none reverse"}}),document.querySelectorAll('a[href^="#"').forEach(e=>{e.addEventListener("click",function(e){e.preventDefault();var e=this.getAttribute("href").substring(1),e=document.getElementById(e),t=document.querySelector(".header").offsetHeight,e=e.getBoundingClientRect().top;window.scrollBy({top:e-t,behavior:"smooth"})})})});