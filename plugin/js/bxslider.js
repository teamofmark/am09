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
        
        easing: 'ease-in-out', //? default: null. slide전환 가속도 설정. CSS timing-function option 사용가능.
        captions: true, //? default: false. img's에 title attr을 부여하면 그 부분을 이미지 위로 보여준다.

        adaptiveHeight: true, //? default: false. slide내 img의 높이에 따라 frame자체가 유동적으로 변함.
        adaptiveHeightSpeed: 750 //? default: 500. adaptiveHeight frame이 변하는 속도. 되도록 speed와 같은 수치.

        //? slideSelector : $(parent child) //? default: ''. slide로 작동될 요소를 직접선택 가능.
        
        //! carousel
        //? slideMargin: 100  slide간 간격 설정.(다수의 slide(carousel)를 사용시에 설정필요.)
    });
});