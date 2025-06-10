$(document).ready(function(){
    $(".slider").bxSlider({
        mode: 'horizontal', //? default : horizontal(수평방향전환), vertical(수직방향전환), fade(사라지고나타나고)
        speed: 750, //? default : 500. 전환속도 제어
        ticker: false, //? default : false. slider를 controler의 통제를 받지 않는 상태로 흘러가게 만들기. speed,mode의 영향을 받음.
        tickerHover: false,  //? default : false. ticker 상태일 때 onMouseOver로 중지시키기.
    });
});