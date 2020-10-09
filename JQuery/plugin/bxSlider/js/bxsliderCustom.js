$(document).ready(function(){
    $('.bxslider').bxSlider({
        //? options: 'optionsValue'
        mode: 'horizontal', //? 'horizontal' : 좌,우 'vertical' : 상,하 'fade' : fade in, out
        speed: 500, //? m/s
        
        adaptiveHeight: true, //? 'mode : horizontal' 시에만 구동. 각 이미지의 높이에 따라 슬라이더 높이의 유동적 조절 여부
        adaptiveHeightSpeed: 500, //? adaptiveHeight 동작속도
        easing: 'ease-out', //? 동작 가속도 css와 동일
        
        startSlide : 0, //? 시작시 사용할 slide(0부터시작)
        randomStart : false, //?  시작시 random slide 여부
    
        infiniteLoop : false, //? 마지막에 도달 했을시, 첫슬라이드로 갈 것인가 멈출것인가
        hideControlOnEnd: true, //? 첫번째 슬라이드 일경우 이전 버튼 삭제, 마지막 슬라이드 일 경우 다음 버튼 삭제 단, infiniteLoop: false 일 경우만 사용 가능.
        
        captions: true,

        ticker: false, //? ticker 모드 사용 (speed 조절필요)
        tickerHover: false, //? ticker 모드 사용시 마우스 오버로 멈추기.

        video : true,

        // ! control method
        controls: true,

        // ! pager method
        pager: true,
        pagerType: 'short'
    });
});