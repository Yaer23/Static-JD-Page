$(function () {
  var $menu_item_on = $('.menu_item_on'),
    $menu_item = $('.goods-menu-item'),
    $menu_panel = $('.menu-panel'),
    $menu_panels = $('.menu-panels');

  $menu_item_on.hover(function () {
    var scrollTop = $(window).scrollTop(),
      index = $(this).index();

    // 设置hover项的背景颜色为#d9d9d9，其他兄弟元素的背景颜色为#fff
    $menu_item.eq(index).css('background', '#d9d9d9')
      .siblings().css('background-color', '#fff');

    // hover时显示面板的包含框
    $menu_panels.show();

    // 显示hover项对应的面板，其他兄弟元素（面板）隐藏
    $menu_panel.eq(index).show()
      .siblings().hide();

    // 当滚动条滚动而使需要显示的面板刚要离开屏幕范围时，根据scrollTop调节面板的top属性使其顶部刚好贴合屏幕顶部
    if (scrollTop > 170) {
      $menu_panels.css({
        'top': scrollTop - 171
      });
    } else {
      $menu_panels.css('top', '0');
    }
  }, function () {
    $menu_panels.hide();
    $menu_item.css('background-color', '#fff');
  })
});