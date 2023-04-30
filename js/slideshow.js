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
      let previous = slideIndex - 1
      const indexes = [slideIndex, next, previous]
      for (let index of indexes) {
        if (index > maxIndex) {
          index = 0
        }
        else if (index < 0) {
          index = maxIndex
        }
      }
      console.log(previous)
      console.log(slideIndex)
      console.log(next)

      showSlides(slideIndex);
      
      function plusSlides(n) {
        for (let index of indexes) {
          index += n
          if (index > maxIndex) {
            index = 0
          }
          else if (index < 0) {
            index = maxIndex
          }
        }
        showSlides();
      }
      
      function showSlides() {
        for (let i = 0; i < slides.length; i++) {
          if (i == slideIndex) {
            slides[slideIndex].classList.add("block");
            slides[next].classList.add("next")
            slides[previous].classList.add("previous")
          }
          if (slides[i].classList.contains("block") && i != slideIndex) {
            slides[i].classList.remove("block")
          }
          if (slides[i].classList.contains("next") && i != next) {
            slides[i].classList.remove("next")
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