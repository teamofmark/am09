$(document).ready(function(){
    $('.slider').bxSlider({
        //! general
        mode: 'horizontal', //? default: horizontal(수평방향전환), option: vertical(수직방향전환), fade(사라지고나타나는효과)
        speed: 750, //? default: 500. 전환속도제어
        ticker: false, //? default: false slider를 controler통하지 않고 흘러가는 상태로 변경. speed,mode 영향받음.
        tickerHover: false, //? default: false. ticker 상태일 때 mouse over event로 중지시키기. 

        //* startSlide, randomStart 충돌.       
        startSlide: 0, //? default: 0. 시작시에 노출될 slide index 설정.
        randomStart: false, //? default: false. slide 순서를 random으로 전환.

        //* infiniteLoop, hideControlOnEnd 충돌.
        infiniteLoop: false, //? default: true. slide간 전환 무한반복.
        ideControlOnEnd: true, //? default: false. 0번slide일 경우 prevBtn 삭제. 마지막(4번)slide일 경우 nextBtn 삭제.
        
        // *adaptiveHeight
        adaptiveHeight: true, //? default: false. slide내 img의 높이에 따라 frame자체가 유동적으로 변함.
        adaptiveHeightSpeed: 750, //? default: 500. adaptiveHeight frame이 변하는 속도. 되도록 speed와 같은 수치.

        easing: 'ease-in-out', //? default: null. slide전환 가속도 설정. CSS timing-function option 사용가능.
        captions: true, //? default: false. img's에 title attr을 부여하면 그 부분을 이미지 위로 보여준다.
        video: true, //? default: false. video option 활성화. fitvids.js를 연결해두면 iframe,video등의 width,height 자동설정 가능.
        responsive: true, //? default: true. slider 자체 반응형 켜기.
        
        // *mobile - 비중요.
        touchEnabled: true, //? default: true. ? 터치스와이프 켜기 끄기.
        swipeThreshold: 50, //? default: 50. ? slide 터치스와이프시. 터치상태로 움직여야하는 px수.
        
        // *비중요
        preloadImages: 'visible', //? default: visible. slider시작전에 한장(첫장)만 load, all. slider 시작전에 slide모든 image download.
        useCSS: true //? default: true. css animation(하드웨어가속)사용. 켜기(권장) 끄기.
        //? slideSelector : $(parent child) //? default: ''. slide로 작동될 요소를 직접선택 가능.
        
        //! carousel
        //? slideMargin: 100  slide간 간격 설정.(다수의 slide(carousel)를 사용시에 설정필요.)
    });
});