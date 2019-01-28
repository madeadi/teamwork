

var slides = $(".slide");
currentSlide = 0;
var inAnimation;
var outAnimation;


function init() {


TweenLite.set(slides.filter(":gt(0)"), { xPercent: 100 });
TweenLite.delayedCall(2, nextSlide);

function nextSlide() {
  outAnimation = TweenLite.to(slides.eq(currentSlide), 1, { xPercent: -100 });

  if (currentSlide < slides.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }

  inAnimation = TweenLite.fromTo(
    slides.eq(currentSlide),
    1,
    { xPercent: 100 },
    { xPercent: 0 }
  );
  TweenLite.delayedCall(2, nextSlide);
}

function previousSlide() {
  outAnimation = TweenLite.to(slides.eq(currentSlide), 1, { xPercent: 100 });

  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }

  inAnimation = TweenLite.fromTo(
    slides.eq(currentSlide),
    1,
    { xPercent: -100 },
    { xPercent: 0 }
  );
  TweenLite.delayedCall(2, nextSlide);
}


	
}

