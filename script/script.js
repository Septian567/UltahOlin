var slides = document.getElementsByClassName('slide')
var currentSlideIndex = 0

function showSlide() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.transform = 'translateX(-100%)'
  }
  slides[currentSlideIndex].style.transform = 'translateX(0)'
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide();
}

function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  showSlide();
}


showSlide()