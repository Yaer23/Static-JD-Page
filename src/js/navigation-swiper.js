var container = document.querySelector('.swiper-container'),
  wrapper = document.querySelector('.swiper-wrapper'),
  arrowRight = document.querySelector('.arrow-right'),
  arrowLeft = document.querySelector('.arrow-left'),
  timer = null,
  sw_buttons = document.getElementsByClassName('sw-button'),
  index = 0;


function nextImg () {
  var left = wrapper.style.left === '-4130px' ? 0 : (parseInt(wrapper.style.left) - 590);
  wrapper.style.left = left + 'px';
  index++;
  if (index > sw_buttons.length - 1) {
    index = 0;
  }
  showCurrentButton();
}

function preImg() {
  var left = wrapper.style.left === '0px' ? -4130 : (parseInt(wrapper.style.left) + 590);
  wrapper.style.left = left + 'px';
  index--;
  if (index < 0) {
    index = sw_buttons.length - 1;
  }
  showCurrentButton();  
}

function autoPlay() {
  timer = setInterval(function () {
    nextImg();
  }, 2000);
}

// 启动自动播放
autoPlay();

// 鼠标悬浮 清除计时器 停止轮播
container.onmouseenter = function () {
  clearInterval(timer);
}

// 鼠标离开 启动轮播
container.onmouseleave = function () {
  autoPlay();
}

arrowLeft.onclick = function () {
  preImg();
}

arrowRight.onclick = function () {
  nextImg();
}

function showCurrentButton() {
  for (var i = 0; i < sw_buttons.length; i++) {
    sw_buttons[i].className = "sw-button";
    }
    sw_buttons[index].className = "sw-button button-chose";
}

for (var i = 0; i < sw_buttons.length; i++) {
  (function (i) {
    sw_buttons[i].onmouseover = function(){
      wrapper.style.left = i * (-590) + 'px';
      index = i;
      showCurrentButton();
    }
  })(i);
}