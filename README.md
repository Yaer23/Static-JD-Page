# 仿京东首页

仿站实践-练习css布局，jQuery使用

## 在线演示

[仿京东首页-效果预览](https://yaer23.github.io/Static-JD-Page/src/index.html)

## 项目介绍

 - 搜索框吸顶效果(添加annimate动画)
 - 商品分类面板（jQuery结合css实现了position:sticky效果）
 - swiper轮播图实现各个部分滑动轮播
 - 对轮播图小圆点的样式制作
 - tab选项卡的切换效果
 - 图片及商品部分的懒加载(使用的是jQuery插件lazysizes.min.js)
 - 回到顶部功能及侧边栏导航

## todolist

 - sass改写css样式
 - 做一些性能上的提升

## 项目细节部分总结

### CSS Sprites和iconfont

在项目中直接使用了京东首页的雪碧图，通过调整`background-position`来改变背景图片的位置，图标使用了iconfont

#### 使用雪碧图的好处：

 - 减少网页的HTTP请求，大大提高页面的性能
 - 减少图片的字节总数（总是小于等于总的图片的字节）
 - 操作方便（跟换风格时整个雪碧图就可以直接换掉，不需要挨个修改样式）

#### iconfont的好处：

 - 图标规范化
 - 通过平台生成，自动存储到阿里云CDN，免费加速
 - 管理方便

### 商品分类

分类选项hover时出现`position:absolute;top:0`的面板固定在分类选项的右侧，当面板顶部滚动到屏幕之外时实现固定定位，改变top值使之固定在屏幕内，类似于`position:sticky`的吸附效果

```

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

```

### 轮播图

[两种方式实现轮播图](https://github.com/Yaer23/Demo/blob/master/%E8%BD%AE%E6%92%AD%E5%9B%BE%E2%88%9A/%E8%BD%AE%E6%92%AD%E5%9B%BE.md)

[滑动轮播Demo](https://yaer23.github.io/Demo/%E8%BD%AE%E6%92%AD%E5%9B%BE%E2%88%9A/%E6%BB%91%E5%8A%A8%E8%BD%AE%E6%92%AD.html)

### tab选项卡

![tab选项卡](http://oofwms1or.bkt.clouddn.com/%E4%BA%AC%E4%B8%9C%E9%80%89%E9%A1%B9%E5%8D%A1.png)

格外使用一个div用来选定选项并通过`transform:translateX()`结合`transition: -webkit-transform .3s ease, -moz-transform .3s ease, transform .3s ease;`来进行滑动

![jd-tab](http://oofwms1or.bkt.clouddn.com/jd-tab.png)

```

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

```

### “|” 分割线的实现

 - 使用div设置`width:1px;height:10px;background-color:#ccc`结合margin值进行定位
 - 对a选项的border-left或者border-right进行设置

### 伪元素的运用

#### 轮播图小圆点

使用滑动轮播并通过css样式实现轮播图中的小圆点展示：
![轮播图小圆点](http://oofwms1or.bkt.clouddn.com/%E4%BA%AC%E4%B8%9C%E8%BD%AE%E6%92%AD%E5%9B%BE%E5%B0%8F%E5%9C%86%E7%82%B9.png)

```

.sw-button {
  display: inline-block;
  margin-right: 5px;
  width: 6px;
  height: 6px;
  border: 2px solid hsla(0, 0%, 100%, .4);
  border-radius: 50%;
  cursor: pointer;
  transition: all .2s ease
}

.sw-button:after {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

```

方法：使用伪元素实现里面的小圆点


#### 劵的实现

依然是用伪元素对优惠券进行'打孔'

![优惠券](http://oofwms1or.bkt.clouddn.com/%E4%BC%98%E6%83%A0%E5%88%B8.png)

```
.ticket-item:before,
.ticket-item:after {
  content: '';
  display: 'block';
  background-color: #fff;
  position: absolute;
  top: -10px;
  right: 50px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.ticket-item:after {
  top: 108px;
}
```



### 文本处理

#### white-space

white-space 属性设置如何处理元素内的空白。
`white-space:nowrap`设置文本不换行

#### text-overflow

text-overflow 属性规定当文本溢出包含元素时发生的事情。
`text-overflow:ellipsis` 文本溢出部分设置为省略符号

#### overflow

overflow 属性规定对溢出元素框的内容的处理。
`overflow:hidden` 溢出部分隐藏
