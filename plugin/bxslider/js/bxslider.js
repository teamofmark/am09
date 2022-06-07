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
        pagerSelector: '.newPager'
    });
});