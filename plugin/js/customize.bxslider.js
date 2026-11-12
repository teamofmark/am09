$(document).ready(function(){
    // ! fitVids 사용법 $("대상=비디오").fitVids();
    $('.bxslider').bxSlider({
        mode: 'horizontal',  //? default : horizontal(수평방향전환), vertical(수직방향전환), fade(사라지고나타나고)
        speed: 700, //? default : 500. 전환속도 제어
        ticker: false, //? default : false. slider를 controler의 통제를 받지 않는 상태로 흘러가게 만들기. speed,mode의 영향을 받음.
        tickerHover: false, //? default : false. ticker 상태일 때 onMouseOver로 중지시키기.

        // 상충속성 : startSlide, randomStart
        startSlide: 0, //? default : 0. 시작시에 우선 노출될 slide index 설정.
        randomStart: false, //? default: false. slide 노출 순서를 random으로 전환.

        // 상충속성 : infiniteLoop, hideControlOnEnd
        infiniteLoop: false,  //? default : true. slide간 전환 무한반복.(수평상태에서는 비권장)
        hideControlOnEnd: false,  //? default : false. 0번 slide = prevBtn 삭제. last slide = nextBtn 삭제. infiniteLoop: false 필수
    
        //  adaptiveHeight
        adaptiveHeight: true,  //? default : false. slide content높이에 따라 frame이 적응형으로 변환.
        adaptiveHeightSpeed: 500, //? default : 500. adaptiveHeight 작동속도. 특이사항없으면 speed 동기화

        easing: 'ease-in-out', //? default : null. slide간 전환 가속도 설정. easing plugin 채택
        video: true,  //! default : false. video 종횡비 활성화(slide에 video가 있을 때만!!)
        responsive: true,  //? default: true. slider 자체 반응형 켜기.
        captions: true,  //? default: false. img's에 title attr을 부여하면 그 부분을 이미지 위로 보여준다.

        // pager - indicator
        pager : true,  //? default: true. pager 켜기/끄기
        pagerType: 'full', //? default: full-circle, short-count
        //? pagerShortSeparator: '/'  default: / -> . 식별자변경.
        //? pagerSelector: '.newPager' default: ''. 공간 생성 및 class 부여 하면 pager 뼈대제공.
        pagerCustom: '.customPager'
    });
});

function createCustomPager(target){
    var slideLength = $(target).children("li").length;
    console.log(slideLength);
    for(var i = 0; i < slideLength-2; i++){
        $(".customPager").append("<li><a data-slide-index='"+ i +"'><img src='images/wallpaper"+ (i+1) +".jpg' alt='slide"+ (i+1)+"'></a></li>");
    }
    $(".customPager li:first-of-type a").addClass("active");
}