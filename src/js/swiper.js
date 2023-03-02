const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
   loop: true,
   centeredSlidesBounds: true,
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
    480: {
      
        spaceBetween: 20
      },
      // when window width is >= 480px
      768: {
        
        spaceBetween: 30
      },
      // when window width is >= 640px
      1280: {
        
        spaceBetween: 40
      }
    }
  });