var slides = document.getElementsByClassName('slide')
var currentSlideIndex = 0

function showSlide() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.transform = 'translateX(-100%)'
  }
  slides[currentSlideIndex].style.transform = 'translateX(0)'
}

function nextSlide() {
  currentSlideIndex++
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0
  }
  showSlide()
}

function prevSlide() {
  currentSlideIndex--
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1
  }
  showSlide()
}

showSlide()