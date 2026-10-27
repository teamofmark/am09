/*
    ? function (함수)

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.
*/
// case.1 다음 구문을 hello() 라는 함수를 만들어 유지보수 하기 쉽게 만들어보기
/* 1-1 수동으로 반복함
document.write("안녕. 방가와","<br>");
document.write("안녕. 방가와","<br>");
document.write("안녕. 방가와","<br>");
// 1-2. 반복을 쉽게하기 위해 반복문
var comment = "안녕. 방가와";
for(var i = 0; i < 3; i++){
    document.write(comment,"<br>");
}
// 1-3. 원할 때 실행하기 위해 함수화
function commentFunc(){
    var comment = "안녕. 방가와";
    for(var i = 0; i < 3; i++){
        document.write(comment,"<br>");
    }
}
*/
// case.2 매개변수(parameter)가 있는 함수 만들기
// ? 매개(가되어주는)변수, 인자, parameter, paramVal.....호칭 여러개.
function commentParam(count,comment){
    for(var i = 0; i < count; i++){
        document.write(comment,"<br>");
    }
}
// case.3 매개변수 복습
function sumParam(num1,num2){
    var result = num1 + num2;
    console.log("두 수의 합은 = " + result);
}
// case. 3 매개변수의 자리가 없어도 있는것처럼.. arguments(가변인자함수 - 배열은 아니지만 배열처럼 사용하면 된다.)
/*
    ? arguments
    * arguments 객체(object)는 모든 함수 안에서 사용하는 지역변수.
    * arguments를 이용해서 함수내 인수들을 참조 할 수 있고 이 객체의 함수에 전달된 각 인수항목을 포함한다.
    * 단, arguments는 array와 비슷해보이지만 length를 구하는 방식을 제외하고는 array와는 다르다.
    * 필요에 따라 array로 추가 변환하여 사용 할 수 있다.
*/