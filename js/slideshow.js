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
        const slides = document.querySelectorAll("slide");
        const dots = document.querySelectorAll("dot");
      
        if (n > slides.length) {
          slideIndex = 1
        }
        if (n < 1) {
          slideIndex = slides.length
        }
      
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
      
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
      
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
      }
})