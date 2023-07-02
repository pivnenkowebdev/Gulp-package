// init slider
$('.reviews-slider').slick({
  draggable: true,
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  speed: 2000,
  infinite: true,
  touchThreshold: 100,
  prevArrow: 
  `<div class="slick-prev">
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
  
  </div>`,
  nextArrow: 
  `<div class="slick-next">
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

  </div>`,
});

// Gsap
(()=>{

// ------------------parallax
// preview

const preview = document.querySelector('.preview');
const previewAvatar = document.querySelector('.avatar__photo--preview');
const paralaxImagePreviewFirst = document.querySelector('.avatar__parallax-img--first')
const paralaxImagePreviewSecond =document.querySelector('.avatar__parallax-img--second');
const author = document.querySelector('.author');

const initialX = preview.offsetLeft + preview.offsetWidth / 2;
const initialY = preview.offsetTop + preview.offsetHeight / 2;

// bunner
const bunnerIconFirst = document.querySelector('.bunner__icon--first');
const bunnerIconSecond = document.querySelector('.bunner__icon--second');
const bunnerIconLast = document.querySelector('.bunner__icon--last');

const bunnerCircleBig = document.querySelector('.bunner__circles-item--big');
const bunnerCircleMedium = document.querySelector('.bunner__circles-item--medium');
const bunnerCircleSmall = document.querySelector('.bunner__circles-item--small');



document.addEventListener('mousemove', function(event) {
  
  const mouseX = event.clientX - initialX;
  const mouseY = event.clientY - initialY;

// preview
  gsap.to(
    paralaxImagePreviewFirst, 
    {
    x: mouseX * 0.05, 
    y: mouseY * 0.05, 
    ease: 'power2.out' 
    },);

  gsap.to(
    paralaxImagePreviewSecond, 
    {
    x: mouseX * 0.03, 
    y: mouseY * 0.03, 
    ease: 'power2.out' 
    },'<');

  gsap.to(
    previewAvatar, 
    {
    x: mouseX * 0.01, 
    y: mouseY * 0.01, 
    ease: 'power2.out' 
    },'<');

  gsap.to(
    author, 
    {
    x: mouseX * 0.01, 
    y: mouseY * 0.01, 
    ease: 'power2.out' 
    },'<');

    // bunner
  gsap.to(
    bunnerIconFirst, 
    {
    x: mouseX * 0.02, 
    y: mouseY * 0.02, 
    ease: 'power2.out' 
    },'<');

  gsap.to(
    bunnerIconSecond, 
    {
    x: mouseX * 0.03, 
    y: mouseY * 0.03, 
    ease: 'power2.out' 
    },'<');

  gsap.to(
    bunnerIconLast, 
    {
    x: mouseX * 0.02, 
    y: mouseY * 0.02, 
    ease: 'power2.out' 
    },'<');

  gsap.to(
    bunnerCircleBig, 
    {
    x: mouseX * 0.03, 
    y: mouseY * 0.03, 
    ease: 'power2.out' 
    },'<');

  gsap.to(
    bunnerCircleMedium, 
    {
    x: mouseX * 0.02, 
    y: mouseY * 0.02, 
    ease: 'power2.out' 
    },'<');

  gsap.to(
    bunnerCircleSmall, 
    {
    x: mouseX * 0.01, 
    y: mouseY * 0.01, 
    ease: 'power2.out' 
    },'<');

   
});
})()

// scroll
// smooth scroll to anchor-link
document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = document.querySelector('.header').offsetHeight;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});
 
