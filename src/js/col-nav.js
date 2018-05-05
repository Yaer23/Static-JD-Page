// 侧栏导航的滑动

var $nav_top_item = $('.nav_top_item,.nav_bottom_item'),
  $extend = $('.nav_top_item span');

$nav_top_item.hover(function () {
  $(this).children('span').css('left', '-60px').parent().children().css('background-color', '#c81623')
}, function () {
  $(this).children('span').css('left', '35px').parent().children().css('background-color', '#7a6e6e')
})

// js原生实现 回到顶部

var to_Top = document.querySelector(".to_top");

to_Top.onclick = function () {
  var dd = document.documentElement,      // documentElement 是整个节点树的根节点root，即<html> 标签
    db = document.body,                   // body是DOM对象里的body子节点，即 <body> 标签
    top = dd.scrollTop || db.scrollTop,   // 页面有DTD存在，会导致db.scrollTop为0
    step = Math.floor(top / 20);

  (function () {
    top -= step;
    if (top > -step) {
      db.scrollTop == 0 ? dd.scrollTop = top : db.scrollTop = top;
      setTimeout(arguments.callee, 20);
    }
  })();
}

//jQuery动画实现 回到顶部

$(".to_top").click(function () {
  $("html,body").animate({
    scrollTop: 0
  }, 500);
});