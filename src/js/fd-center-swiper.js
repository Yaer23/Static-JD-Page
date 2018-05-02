var center = document.querySelector('.center'),
  centerInner = document.querySelector('.center-inner'),
  fdArrowRight = document.querySelector('.fd-arrow-right'),
  fdArrowLeft = document.querySelector('.fd-arrow-left');

function fdNextImg() {
  var left = centerInner.style.left === '-3200px' ? 0 : (parseInt(centerInner.style.left) - 800);
  centerInner.style.left = left + 'px';
}

function fdPpreImg() {
  var left = centerInner.style.left === '0px' ? -3200 : (parseInt(centerInner.style.left) + 800);
  centerInner.style.left = left + 'px';
}

fdArrowLeft.onclick = function () {
  fdPpreImg();
}

fdArrowRight.onclick = function () {
  fdNextImg();
}