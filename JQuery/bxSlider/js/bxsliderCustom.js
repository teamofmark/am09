$(document).ready(function(){
    $(".bxslider").bxSlider({
        mode: 'horizontal',
        speed: 1000,
        infiniteLoop: false,
        hideControlOnEnd: true,
        easing: 'ease-in',
        captions: true,
        adaptiveHeight: true,
        adaptiveHeightSpeed: 500,
        preventDefaultSwipeY: false,
        
        pagerCustom: '.newPagerCustom',

        controls: true,
        prevSelector : '.btn_Prev',
        nextSelector : '.btn_Next',
        prevText: '뒤로',
        nextText: '앞으로',

        auto : true,
        autoControls: true,
        autoControlsCombine: true,
        autoControlsSelector: '.newAutoControl',
        startText: '시작',
        stopText: '중지',
        // keyboardEnabled: true
        // pagerSelector: '.newPager'
        // pagerType: 'short',
        // pagerShortSeparator: '-'
        // wrapperClass: 'wrap'
        // ticker: true,
        // tickerHover: true
        // startSlide: 2,
        // randomStart: false
        // slideMargin: 50
        // video: true
        // ! touchEnabled . mobileChrome 충돌(a가 있을경우)
    });
});