const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const button = document.querySelector('.carousel-btn');

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

button.addEventListener('click', event => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const amountToMove = nextSlide.style.left;

  track.style.transform = 'translateX(-' + amountToMove + ')';

  currentSlide.classList.remove('current-slide');
  nextSlide.classList.add('current-slide');
})
