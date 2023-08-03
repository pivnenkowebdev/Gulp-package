window.addEventListener('DOMContentLoaded', () => {
     // fancy
     Fancybox.bind("[data-fancybox]", {
      // Your custom options
    });
   
  gsap.registerPlugin(ScrollTrigger);
  
  // reviews slider
  $('.reviews-slider').slick({
    draggable: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
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
   responsive: [
    {
      breakpoint: 1441,
      settings: {
        speed: 2000,
        slidesToShow: 1,
        infinite: true,
        centerMode: false,
        touchThreshold: 100,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        speed: 2000,
        slidesToShow: 1,
        centerMode: false,
        infinite: true,
        arrows: false,
        touchThreshold: 100,
      }
    }
    
  ]
  });

  // cards-slider
  $('.activities-slider').each(function(){
    const $slider = $(this);
    const $prevArrow = $slider.find('.slick-prev');
    const $nextArrow = $slider.find('.slick-next');
    $(this).slick({
      draggable: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade:true,
      // autoplay: true,
      arrows: true,
      prevArrow: $prevArrow,
      nextArrow: $nextArrow,
      dots: true,
      speed: 500,
      infinite: true,
      touchThreshold: 100,
    });
  });
  

// Gsap
(()=>{
  
  
  const tlPreview = gsap.timeline({})
  
  tlPreview.from('.author',{
    x:-400,
    duration:2,
    opacity:0,
    ease:"back.out(1.5)",
    
  })

  tlPreview.call(parallax);

  gsap.from('#values',{
    x:400,
    opacity:0,
    scrollTrigger:{
            // markers:true,
            trigger:'#values',  
            start:'-100% center',
            end:'center 60%',
            opacity:1,
            scrub:1.5, 
            toggleActions:'play reverse play reverse',
            }
  })

  gsap.from('#headTeacher',{
    x:-400,
    opacity:0,
    scrollTrigger:{
            // markers:true,
            trigger:'#headTeacher',  
            start:'-100% center',
            end:'center 60%',
            opacity:1,
            scrub:1.5, 
            toggleActions:'play reverse play reverse',
            }
  })
  if (window.innerWidth >= 1440 && window.innerWidth <= 4000) {
  gsap.from('.card-activities--first',{
    stagger:0.3,
    opacity:0,
    y:200,
    scrollTrigger:{
        // markers:true,
        trigger: '.activities',
        start: 'top 70%',
        end:'20% 50%',
        scrub:1.5,
        toggleActions: 'play none none reverse',
    }
  })

  gsap.from('.card-activities--second',{
    stagger:0.3,
    opacity:0,
    y:200,
    scrollTrigger:{
        // markers:true,
        trigger: '.card-activities--second',
        start: 'top 90%',
        end:'30% 60%',
        scrub:1.5,
        toggleActions: 'play none none reverse',
    }
  })
  }
  

  function parallax(){
    if (window.innerWidth >= 1440 && window.innerWidth <= 4000) {
    const preview = document.querySelector('.preview');
    const initialX = preview.offsetLeft + preview.offsetWidth / 2;
    const initialY = preview.offsetTop + preview.offsetHeight / 2;
    
      document.addEventListener('mousemove', function(event) {
    
      const mouseX = event.clientX - initialX;
      const mouseY = event.clientY - initialY;

    // preview
      gsap.to(
        '.avatar__parallax-img--first', 
        {
        x: mouseX * 0.05, 
        y: mouseY * 0.05, 
        ease: 'power2.out' 
        },);

      gsap.to(
        '.avatar__parallax-img--second', 
        {
        x: mouseX * 0.03, 
        y: mouseY * 0.03, 
        ease: 'power2.out' 
        },'<');

      gsap.to(
        '.avatar__photo--preview', 
        {
        x: mouseX * 0.01, 
        y: mouseY * 0.01, 
        ease: 'power2.out' 
        },'<');

      gsap.to(
        '.author', 
        {
        x: mouseX * 0.01, 
        y: mouseY * 0.01, 
        ease: 'power2.out' 
        },'<');

        // bunner
      gsap.to(
        '.bunner__icon--first', 
        {
        x: mouseX * 0.02, 
        y: mouseY * 0.02, 
        ease: 'power2.out' 
        },'<');

      gsap.to(
        '.bunner__icon--second', 
        {
        x: mouseX * 0.03, 
        y: mouseY * 0.03, 
        ease: 'power2.out' 
        },'<');

      gsap.to(
        '.bunner__icon--last', 
        {
        x: mouseX * 0.02, 
        y: mouseY * 0.02, 
        ease: 'power2.out' 
        },'<');

      gsap.to(
        '.bunner__circles-item--big', 
        {
        x: mouseX * 0.03, 
        y: mouseY * 0.03, 
        ease: 'power2.out' 
        },'<');

      gsap.to(
        '.bunner__circles-item--medium', 
        {
        x: mouseX * 0.02, 
        y: mouseY * 0.02, 
        ease: 'power2.out' 
        },'<');

      gsap.to(
        '.bunner__circles-item--small', 
        {
        x: mouseX * 0.01, 
        y: mouseY * 0.01, 
        ease: 'power2.out' 
        },'<');

      gsap.to(
        '.bunner__shadow-circle', 
        {
        x: mouseX * 0.03, 
        y: mouseY * 0.03, 
        ease: 'power2.out' 
        },'<');

    
      })
    
    }
  
    }})()

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

// drop-menu-list
  const btnOpenDropMenu = document.querySelectorAll('.header__drop-menu');
  const linksDropMenu = document.querySelectorAll('.header__drop-menu a');

  btnOpenDropMenu.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.target.classList.toggle('active');
    });
  });

  linksDropMenu.forEach((item) => {
    item.addEventListener('click', () => {
      btnOpenDropMenu.forEach((menu) => {
        menu.classList.remove('active');
      });
    });
  });

  // mobile
      // mobile-menu
      const burger = document.querySelector('.burger');
      const mobileMenu = document.querySelector('.header__mobile .header__menu');
      const mobileLink = document.querySelectorAll('.header__mobile .header__menu a')
      const overlay = document.querySelectorAll('.overlay-header');

      // open\close mobile menu
      burger.addEventListener('click',function(){

        burger.classList.toggle('active');

        mobileMenu.classList.toggle('active');

        document.body.classList.toggle('active')

        overlay.forEach((item)=>{

          item.classList.toggle('active');

        })

      })

      // close mobile menu when click to link
      mobileLink.forEach((item)=>{

        item.addEventListener('click',()=>{

            burger.classList.remove('active');

            mobileMenu.classList.remove('active');

            document.body.classList.remove('active');

            overlay.forEach((item)=>{

              item.classList.remove('active');
    
            })
        })

      })


      // resize and close mobile menu
      window.addEventListener('resize',function(){

        burger.classList.remove('active');

        mobileMenu.classList.remove('active');

        document.body.classList.remove('active');

        overlay.forEach((item)=>{

          item.classList.remove('active');

        })

      })

      
      
    })
 