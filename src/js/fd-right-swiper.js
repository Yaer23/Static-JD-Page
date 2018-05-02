var rightWrap = document.querySelector('.right-wrap'),
  rightInner = document.querySelector('.right-inner'),
  rButton1 = document.querySelector('.right-button1'),
  rButton2 = document.querySelector('.right-button2'),
  fdTimer = null;

function fd_r_nextImg () {
  var left = rightInner.style.left === '-180px' ? 0 : (parseInt(rightInner.style.left) - 180);
  rightInner.style.left = left + 'px';
  fd_showCurrentImg();
}

function fd_autoPlay() {
  fdTimer = setInterval(function () {
    fd_r_nextImg();
  }, 2000);
}

function fd_showCurrentImg () {
  if(rightInner.style.left == '0px'){
    rButton1.classList.add('fd-current-img');
    rButton2.classList.remove('fd-current-img');
  } else {
    rButton2.classList.add('fd-current-img');
    rButton1.classList.remove('fd-current-img');    
  }
}

// 启动自动播放
fd_autoPlay();

rButton1.onmouseover = function () {
  rightInner.style.left = '0px';
  fd_showCurrentImg();
}

rButton2.onmouseover = function () {
  rightInner.style.left = '-180px';
  fd_showCurrentImg();
}