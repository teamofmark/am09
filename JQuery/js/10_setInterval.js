// $(document).ready(function(){
//     var $circle = $("#circle");
//     var runStep = 10;
//     var xpos = $circle.position().left;
//     var railWidth = $("#rail").width();
//     var timerID = 0;

//     startMove($circle, runStep, xpos, railWidth, timerID);
// });
// function startMove($circle, runStep, xpos, railWidth, timerID){
//     $("#btn_start").click(function(){
//         timerID = setInterval(function(){
//             xpos += runStep;
//             $circle.css("left", xpos);
//             // todo. 왕복운동 하게 만들기.
//             if(xpos > railWidth || xpos < 0){
//                 runStep *= -1;
//             }
//         },0); 
//         stopMove(timerID);
//     });
// };
// function stopMove(timerID){
//     $("#btn_stop").click(function(){
//         clearInterval(timerID);
//     }); 
// }

$(document).ready(function(){
    // ? 어떤 함수를 물려서 구동 시킬까
});

function init(){ //? jquery 에서 사용할 대상 및 변수 초기화

};
function initEvent(){
    // ? 움직이는기능
    // ? 멈추는기능
}
function moveStart(){ //? circle 움직이기. (좌,우)

}
function moveStop(){ //? circle 움직임 멈추기.

}