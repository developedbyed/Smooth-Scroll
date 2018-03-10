function smoothScroll(target, duration) {
  var target = document.querySelector(".last");
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset || window.scrollY;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function loop(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(loop);
  }
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(loop);
}
