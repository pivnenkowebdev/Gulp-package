window.addEventListener("DOMContentLoaded",()=>{gsap.registerPlugin(ScrollTrigger),$(".reviews-slider").slick({draggable:!0,centerMode:!0,slidesToShow:3,slidesToScroll:1,dots:!0,speed:2e3,infinite:!0,touchThreshold:100,prevArrow:`<div class="slick-prev">
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
  
  </div>`,responsive:[{breakpoint:1441,settings:{speed:2e3,slidesToShow:1,infinite:!0,centerMode:!1,touchThreshold:100}},{breakpoint:1024,settings:{speed:2e3,slidesToShow:1,centerMode:!1,infinite:!0,arrows:!1,touchThreshold:100}}]}),$(".activities-slider-first").slick({draggable:!0,slidesToShow:1,slidesToScroll:1,fade:!0,arrows:!0,prevArrow:$(".slick-prev"),nextArrow:$(".slick-next"),dots:!0,speed:2e3,infinite:!0,touchThreshold:100}),$(".activities-slider-second").slick({draggable:!0,slidesToShow:1,slidesToScroll:1,fade:!0,arrows:!0,prevArrow:$(".slick-prev"),nextArrow:$(".slick-next"),dots:!0,speed:2e3,infinite:!0,touchThreshold:100}),document.querySelectorAll('a[href^="#"').forEach(e=>{e.addEventListener("click",function(e){e.preventDefault();var e=this.getAttribute("href").substring(1),e=document.getElementById(e),t=document.querySelector(".header").offsetHeight,e=e.getBoundingClientRect().top;window.scrollBy({top:e-t,behavior:"smooth"})})});const t=document.querySelectorAll(".header__drop-menu");var e=document.querySelectorAll(".header__drop-menu a");t.forEach(e=>{e.addEventListener("click",e=>{e.target.classList.toggle("active")})}),e.forEach(e=>{e.addEventListener("click",()=>{t.forEach(e=>{e.classList.remove("active")})})});const i=document.querySelector(".burger"),s=document.querySelector(".header__mobile .header__menu");e=document.querySelectorAll(".header__mobile .header__menu a");const l=document.querySelectorAll(".overlay-header");i.addEventListener("click",function(){i.classList.toggle("active"),s.classList.toggle("active"),document.body.classList.toggle("active"),l.forEach(e=>{e.classList.toggle("active")})}),e.forEach(e=>{e.addEventListener("click",()=>{i.classList.remove("active"),s.classList.remove("active"),document.body.classList.remove("active"),l.forEach(e=>{e.classList.remove("active")})})}),window.addEventListener("resize",function(){i.classList.remove("active"),s.classList.remove("active"),document.body.classList.remove("active"),l.forEach(e=>{e.classList.remove("active")})})});