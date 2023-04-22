document.addEventListener("DOMContentLoaded", (e) => {
    $('#slider').on('touchstart', function(event) {
        const xClick = event.originalEvent.touches[0].pageX;
      
        $(this).on('touchmove', function(event) {
          const xMove = event.originalEvent.touches[0].pageX;
          const sensitivityInPx = 5;
      
          if (Math.floor(xClick - xMove) > sensitivityInPx) {
            plusSlides(1);
            $(this).off('touchmove');
          } 
          else if (Math.floor(xClick - xMove) < -sensitivityInPx) {
            plusSlides(-1);
            $(this).off('touchmove');
          }
        });
      });

      const slides = document.querySelectorAll(".slide");
      const dots = document.querySelectorAll(".dot");

      let slideIndex = 0;
      showSlides(slideIndex);
      
      function plusSlides(n) {
        slideIndex += n
        console.log(slideIndex)
        if (slideIndex > 4) {
          slideIndex = 0
        }
        else if (slideIndex < 0) {
          slideIndex = 4
        }
        console.log(slideIndex)
        showSlides(slideIndex);
      }
      
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }
      
      function showSlides(n) {
        for (let i = 0; i < slides.length; i++) {
          if (i == slideIndex) {
            slides[slideIndex].classList.add("block");
          }
          if (slides[i].classList.contains("block") && i != slideIndex) {
            slides[i].classList.remove("block")
          }
        }

        for (let i = 0; i < dots.length; i++) {
          if (i == slideIndex) {
            dots[slideIndex].classList.add("active");
          }
          if (dots[i].classList.contains("active") && i != slideIndex) {
            dots[i].classList.remove("active")
          }
        }
      }
})