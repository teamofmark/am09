/*
    ? function (함수)

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/
function helloExp(count,comment){
    for (var i = 0; i < count; i++){
        document.write(comment);
    }
}
// * case. 1 매개변수(Parameter / 인자)가 있는 함수 만들기
// ? 함수내 정해진 변수의 값(value)을 변경하여, 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결하기 위함.
function sumParam(numb1,numb2){
    var result = numb1 + numb2;
    alert("두 수의 합은 = " + result);
} 