// navigation-news-tab

var $tab_item = $('.tab-item'),
  $tab_chose = $('.tab-chose'),
  $discount_content = $('.discount-content');

$tab_item.hover(function () {
  if ($(this).html() == '促销') {
    $discount_content.css('display', 'block')
      .next().css('display', 'none');
    $tab_chose.css('transform', 'translateX(0px)');

  } else {
    $discount_content.css('display', 'none')
      .next().css('display', 'block');
    $tab_chose.css('transform', 'translateX(54px)');
  }
})

// navigation-service-tab

var $service_frame = $('.service_frame');

$service_frame.hover(function () {
  $service_frame.addClass('service_frame_on');
  $(this).css({
      'border-bottom': '2px solid #e01121',
      'color': '#e01121'
    })
    .siblings().css('border', 'none').children().css('color', '#666');
})

// floors-rank-tab

var $tab_hd_item = $('.tab-list > li'),
  $tab_bd_item = $('.tab-bd-item');

$tab_hd_item.hover(function(){
  var index = $(this).index();
  $tab_bd_item.eq(index).css('display','block').siblings().css('display','none');
})


