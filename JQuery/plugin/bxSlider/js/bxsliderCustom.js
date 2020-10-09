$(document).ready(function(){
    $('.bxslider').bxSlider({
        //? options: 'optionsValue'
        mode: 'fade', //? 'horizontal' : 좌,우 'vertical' : 상,하 'fade' : fade in, out
        speed: 500, //? m/s
        
        adaptiveHeight: true, //? 'mode : horizontal' 시에만 구동. 각 이미지의 높이에 따라 슬라이더 높이의 유동적 조절 여부
        adaptiveHeightSpeed: 500, //? adaptiveHeight 동작속도
        easing: 'ease-out', //? 동작 가속도 css와 동일
        
        startSlide : 0, //? 시작시 사용할 slide(0부터시작)
        randomStart : false, //?  시작시 random slide 여부
    
        // ! control method
        controls: true
    });
});