$(document).ready(function(){
    $(".slider").bxSlider({
        // ! general
        mode: 'horizontal', //? default : horizontal(수평) / vertical(수직) / fade(in,out)
        speed: 750, //? m/s default : 500. 전환속도제어
        ticker: false, //? default : false. slider를 controler,indicator 통제없이 흘려보내기.
        tickerHover: false, //? default : false. ticker상태일때 onMouseOver로 중지시키기.

        // * startSlide, randomStart (충돌속성)
        startSlide: 0,  //? default : 0. 시작시에 우선 노출될 slide index 설정.
        randomStart: false, //? default : false. slide 노출순서를 random으로 전환.

        // * infiniteLoop, hideControlOnEnd (충돌속성)
        infiniteLoop: true, //? default : true. slide간 전환 무한반복.
        hideControlOnEnd: false, //? default : false. 0번 = prevBtn삭제, last = nextBtn 삭제.
    
        // * adaptiveHeight
        adaptiveHeight: false, //? default: false. slide img 높이에 따라 frame자체가 유동적으로 변함.
        adaptiveHeightSpeed: 750, //? default: 500. adaptiveHeight 작동속도.

        easing: 'ease-in-out', //? default: null. slide간 전환가속도 설정. css timing-function option사용가능.
        captions: true, //? default: false. img's에 title attr을 넣으면 해당 부분을 출력.
        video: true, //? default: false. video활성화(slide에 video가 있을 때 fitvids.js를 연결하면 width,height 자동설정)
        responsive: true, //? default: true. slide 자체 반응형 활성화.

        // *pager - indicator
        pager: true, //? default : true. pager 켜기 / 끄기.
        pagerType: 'full', //? default: full(circle).  short: count로 변경.
        //? pagerShortSeparator: '~'  default: / -> 변경 처리.
        //? pagerSelector: '.newPager' 빈 공간 생성 및 지정하면 pager의 기본 뼈대 제공.
        pagerCustom: '.customPager', //? default: null. pager 구조를 직접 작성 및 data-slide-index attr을 이용하여 구현.
    
        // *controler
        controls: true, //? default: true. control button 켜기/끄기.
        nextSelector: '.btn_next', //? 대상 지정 하면 다음버튼 뼈대 제공.
        prevSelector: '.btn_prev',//? 대상 지정하면 이전버튼 뼈대 제공.
        nextText: '>', //? controls 뼈대안 text 변경
        prevText: '<', //? controls 뼈대안 text 변경

        // *auto
        auto: true, //? default: false. slide자동전환 켜기/끄기.
        autoControls: true, //? default: false. auto 기능 자체를 제어.(시각장애인들을 배려하는 것)
        autoStart: false, //? default: true. (false: autoControls로 시작). 화면 준비가 완료되면 바로 자동전환시작.
        pause: 4000, //? default: 4000(m/s). 자동전환시 멈춰있는 시간.
        autoPlay: 1500, //? default: 0(m/s). 자동시작전 지연시간 설정. (autoStart가 true일 경우 사용. systemDelay고려)
        autoHover: false, //? default: false. mouseHover상태일 때 자동전환 중지(autoStart: true일 경우 사용가능).
        stopAutoOnClick: false, //? contoler button을 click 하였을 때 자동전환 중지.
        autoControlsCombine: false, //? default: false. play/pause toggle.
        autoControlsSelector: '.autoControls', //? default: null. 대상지정하면 autocontrols 뼈대 제공.
        startText: '시작', //? 뼈대안 text 변경.
        stopText: '중지', //? 뼈대안 text 변경.

        // *mobile - 비중요.
        touchEnabled: false, //? default: true. ? 터치스와이프 켜기 끄기. chrome touch issue로 인한 비활성화 추천.
        swipeThreshold: 50, //? default: 50. ? slide 터치스와이프시. 터치상태로 움직여야하는 px수.
        onoToOneTouch: true, //? default: true. hori,verti 일경우 터치상태를 slide가 따라다닌다.
        preventDefaultSwipeX: true, //? default: true. screen자체 터치상태에서 x축 움직임을 중지 
        preventDefaultSwipeY: false, //? default: false. screen자체 터치상태에서 Y축 움직임을 중지 

        // *비중요
        wrapperClass: 'bx-wrapper', //? default: 'bx-wrapper' 종속된 css 를 해제하고 다른 부모 class로 변경한다.
        preloadImages: 'visible', //? default: visible. slider시작전에 한장(첫장)만 load, all. slider 시작전에 slide모든 image download.
        useCSS: true, //? default: true. css animation(하드웨어가속)사용. 켜기(권장) 끄기.
        //? slideSelector : $(parent child) //? default: ''. slide로 작동될 요소를 직접선택 가능.
        //? keyboardEnabled: default: false. slider keyboard 조작가능 하게 변경.
        // ? autoDirection: 'next', 자동전환 방향설정 'prev'는 일반적이지 않다.
        
        //! carousel
        //? minSlides: 1,  default: 1. 최소 노출 슬라이드 장수.
        //? maxSlides: 3,  default: 1. 최대 노출 슬라이드 장수.
        //? slideWidth: 600,  default: 0. 슬라이드 너비.
        //? shrinkItems: default: false. max/min 기준으로 viewport에 맞게 img를 축소.
        //? moveSlides: 2 default: 0. 전환시 이동할 슬라이드 장수.
        //? slideMargin: 100  slide간 간격 설정.(다수의 slide(carousel)를 사용시에 설정필요.)
    
        //! Accessibility 비사용 - 기본 접근성 보완 사항 준수시.
        /*
            ! Callbacks. - 기본 제공 기능 외  detail한 customize가 필요할 때 사용 하면 됨.
            ! onSliderLoad - slider load 완료 후 실행 할 로직.
            ! onSliderResize - slider size가 조정 된 직후 실행.
            ! onSlideNext - slide가 전환 되기 직전 실행.
            ! onSlidePrev - slide가 전환 된 직후 실행.
            ! onSlideBefore - slide가 전환되기 전 실행.
            ! onSlideAfter - slide가 전환된 후 실행.
            ! onAutoChange - 자동전환이 시작 / 중지 된 직후 실행.
        */
        // *Public methods.
        // ? goToslide : 특정 index 슬라이드로 전환.
        // ? goToNextSlide : '다음' 슬라이드로 전환. (ex> wheelScroll에 반응하여 다음,이전 작동..)
        // ? goToPrevSlide : '이전' 슬라이드로 전환. 
        // ! startAuto, stopAuto: 기존 auto로 충분히 대체가 가능.
        // ? getCurrentSlide : 현재 슬라이드 찾기(반환).
        // ? getSlideCount : 슬라이드.length 찾기(반환).
        // ? redrawSlider : slider . show / hide or display none / block 등의 숨김해제 이후 재생성 할때.
        // ? reloadSlider : slider를 다시 불러오기. jquery mediaQuery. (ex> 장치변환시 slider 다시부르기.)
        // ? destroySlider : slider 없애기. (slider 구조도 사라짐.) 
    });
});