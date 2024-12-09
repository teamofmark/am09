$(function(){
    $(".slider").bxSlider({
        mode: 'horizontal', //? default : horizontal(수평), vertical(수직), fade(사라지고나타나고)
        speed: 750, //? default : 500. 전환속도제어
        
        // * speed 와 간섭
        ticker: false, //? default : false. slider를 controler의 통제를 받지 않는 상태로 흘러가게 만들기. speed,mode의 영향을 받음.
        tickerHover: false, //? default : false. ticker 상태일 때 onMouseOver로 중지시키기.
        
        // * startSlide, randomStart 상호 충돌
        startSlide: 0, //? default : 0. 시작시에 우선 노출될 slide index 설정.
        randomStart: false, //? default: false. slide 노출 순서를 random으로 전환.
    
        // *infiniteLoop, hideControlOnEnd 상호 충돌.
        infiniteLoop: false, //? default : true. slide간 전환 무한반복.(fade)
        hideControlOnEnd: false, //? default : false. 0번 slide = prevBtn 삭제. last slide = nextBtn 삭제. infiniteLoop: false 필수
    
        // *adaptiveHeight
        adaptiveHeight: true, //? default : false. slide content높이에 따라 frame이 적응형으로 변환.
        adaptiveHeightSpeed: 750, //? default : 500.  adaptiveHeight 작동속도. 특이사항없으면 speed 동기화
    
        // *video
        video: true, //! default : false. video 종횡비활성화(slide에 video가 있을 때만!!)
    
        // ? 비중요
        easing: 'ease-in- out', //? default : null. slide간 전환 가속도 설정. CSS timing-function option 사용가능.
        responsive: true, //? default: true. slider 자체 반응형 켜기.

        // *caption
        captions: true, //? default: false. img's에 title attr을 부여하면 그 부분을 이미지 위로 보여준다.
    
        // *pager - indicator
        pager: true, //? default: true. pager 켜기/끄기
        pagerType: 'full', //? default : full-circle, short-count
        //? pagerShortSeparator: '/' default : / . 숫자사이 식별자 변경
        //? pagerSelector: '.newPager' default : ''. 지정된 공간내에 pager 뼈대 제공 받기
        pagerCustom: '.customPager',
        // ! customize - 1. bx원형을 수정(대상찾아 css변경). 2. bx뼈대만을 제공받아 직접 style잡는 방법. 3. 뼈대조차 내가 직접 짜서 만드는 방법.
    
        // *controler
        controls: true, //? default: true. control button 켜기 끄기.
        nextSelector: ".btn_next", //? default : '',공간 생성 및 class 부여 하면 controler 다음버튼 뼈대 제공. 
        prevSelector: ".btn_prev", //? default : '',공간 생성 및 class 부여 하면 controler 이전버튼 뼈대 제공. 
        nextText: "다음", //? default : 'next' controler 뼈대 안에 text 변경
        prevText: "이전", //? default : 'prev'
        
        // * auto
        auto: true,//? default: false. slide 자동전환 켜기
        autoControls: true, //? default : false. auto기능이 켜져있어야 함. 접근성위배인 auto를 완화시킴. auto켜고 끄기
        autoStart: true, //? default: true. controls동작방식을 play로 둘지 pause로 놓을지 결정.(접근성측면에서는 중지상태 권장)
        pause: 4000, //? default : 4000(m/s). 자동전환시 멈춰있는 시간.
        autoDelay: 1500, //? default: 0(m/s). 자동시작 전 지연시간 설정(autoStart가 true일때 systemDelay고려)
        autoHover: true, //? default: false. onMouseOver상태일 때 자동전환 중지.(autoStart: true일 경우 사용가능).
        stopAutoOnClick: true, //? default: false. controls button click할 때 자동전환 중지.
        autoControlsCombine: false, //? default : false.  play/pause button -> toggle(1개) or active(2개)
        autoControlsSelector: '.newAutoControls', //? auto button 뼈대 제공
        startText: '시작', // ?생성된 뼈대 안에 text 변경
        stopText: '중지'
    });
    createCustomPager(".slider");
});
function createCustomPager(target){
    var slideLength = $(target).children("li").length;
    console.log(slideLength);
    for(var i = 0; i < slideLength; i++){
        $(".customPager").append("<li><a data-slide-index='"+ i +"'><img src='images/wallpaper"+ (i+1) +".jpg' alt='slide"+ (i+1)+"'></a></li>");
    }
    $(".customPager li:first-of-type a").addClass("active");
}