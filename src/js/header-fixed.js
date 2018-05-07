// js实现

// window.onscroll = function () {
//     var oSearch = document.getElementById('search'),
//     scrollTop = document.documentElement.scrollTop;

//     if(scrollTop > 680){
//         oSearch.className = 'search search-fix';
//     } else {
//         oSearch.className = 'search';
//     }
// }


// jQuery实现

$(window).scroll(function(){
	var $oSearch = $('#search'),
		scrollTop = $('html, body').scrollTop();

	if(scrollTop > 680) {
		$oSearch.attr('class','search search-fix');
	} else {
		$oSearch.attr('class','search')
	}
})