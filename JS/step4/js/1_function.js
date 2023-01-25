/*
    ? function (함수)

    * 기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    * 중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/

// *case. 1 다음 구문을 hello()라는 함수를 만들어서 유지보수가 쉽게 만들기.
function helloExp(loopCount,comment){
    for(var i = 0; i < loopCount; i++){
        document.write(comment,"<br>");
    }
}
// *case. 2 매개변수(Parameter)가 있는 함수 만들기.
// ? 인자 / Parameter(매개변수) - param
// * 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결.
function sumParam(num1,num2){
    var result = num1 + num2;
    alert('두 수의 합은 = ' + result + ' 입니다.');
}
// *case. 3 매개변수의 자리가 없어도 있는것처럼..
// ? arguments(가변인자함수 - 배열은 아니지만 배열처럼 사용되는 매개변수들)