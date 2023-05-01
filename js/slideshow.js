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
      const maxIndex = slides.length - 1
      let next = slideIndex + 1
      let previous = maxIndex
      
      console.log(previous)
      console.log(slideIndex)
      console.log(next)

      showSlides(slideIndex);
      
      function plusSlides(n) {
        slideIndex += n
        next += n
        previous += n
        showSlides();
      }
      
      function showSlides() {
        if (slideIndex > maxIndex) {
          slideIndex = 0
        }
        else if (slideIndex < 0) {
          slideIndex = maxIndex
        }
        if (next > maxIndex) {
          next = 0
        }
        else if (next < 0) {
          next = maxIndex
        }
        if (previous > maxIndex) {
          previous = 0
        }
        else if (previous < 0) {
          previous = maxIndex
        }

        for (let i = 0; i < slides.length; i++) {
          if (i == slideIndex) {
            slides[slideIndex].classList.add("current");
            slides[next].classList.add("next")
            slides[previous].classList.add("previous")
          }
          if (slides[i].classList.contains("current") && i != slideIndex) {
            slides[i].classList.remove("current")
          }
          else if (slides[i].classList.contains("next") && i != next) {
            slides[i].classList.remove("next")
          }
          else if (slides[i].classList.contains("previous") && i != previous) {
            slides[i].classList.remove("previous")
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