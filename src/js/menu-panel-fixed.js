$(function () {
  var $menu_item_on = $('.menu_item_on'),
    $menu_item = $('.goods-menu-item'),
    $menu_panel = $('.menu-panel'),
    $menu_panels = $('.menu-panels');

  $menu_item_on.hover(function () {
    var scrollTop = $(window).scrollTop(),
      index = $(this).index();


    $menu_item.eq(index).css('background', '#d9d9d9')
      .siblings().css('background-color', '#fff');
    $menu_panels.show();
    $menu_panel.eq(index).show()
      .siblings().hide();

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