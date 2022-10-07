$(document).ready(function(){
    $(".bxSlider").bxSlider({ //? 매개변수 / 객체형태변환(css({x,x,x,x...}))
        // ! general

        mode: 'horizontal', //? default : horizontal(수평방향전환), vertical(수직방향전환), fade(부드럽게사라지고나타나기)
        speed: 1000, //? default : 500. 전환속도 제어
        ticker: false, //? default :  false. slider를 controler통하지 않은 상태로 흘러가기. speed,mode 영향받음.
        tickerHover: false, //? default : false. ticker 상태일 때 onMouseOver로 중지시키기.
        
        // * startSlide, randomStart 충돌.
        startSlide: 0, //? default: 0. 시작시에 우선 노출될 slide index 설정.
        randomStart: false, //? default: false. slide 노출 순서를 random으로 전환.

        // * infiniteLoop, hideControlOnEnd 충돌.
        infiniteLoop: false,  //? default : true. slide간 전환 무한반복.
        hideControlOnEnd: true //? default : false. 0번 slide = prevBtn 삭제. last slide = nextBtn 삭제.

        
    });
});