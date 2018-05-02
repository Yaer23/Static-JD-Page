window.onscroll = function () {
    var oSearch = document.getElementById('search'),
    scrollTop = document.documentElement.scrollTop;

    if(scrollTop > 680){
        oSearch.className = 'search search-fix';
    } else {
        oSearch.className = 'search';
    }
}