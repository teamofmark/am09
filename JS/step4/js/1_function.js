/*
    ? function(함수)
    * 기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    * 중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.
*/
// *case.1 

// document.write("안녕? 방가와!","<br>");
// document.write("안녕? 방가와!","<br>");
// document.write("안녕? 방가와!","<br>");

function helloFunc(){
    var comment = "안녕? 방가와!";
    document.write(comment,"<br>");
}

function helloExp(){
    var comment = "안녕? 방가와!";
    for(var i = 0; i < 3; i++){
        document.write(comment,"<br>");
    }
}
// *case.2 매개변수(Parameter)가 있는 함수 만들기.
// ? 함수내 정해진 변수의 value(값)를 변경하여, 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결하기 위함.

function sumParam(num1,num2){
    var result = num1 + num2;
    alert("두 수의 합 ? " + result);
}
// *case.3 매개변수의 자리가 없어도 있는것처럼. arguments(배열인듯 배열아닌 배열같은...)

function sumAll(){
    // console.log(typeof(arguments) + ':' + arguments.length);
    var willReturn = 0;
    for(var i = 0; i< arguments.length; i++){
        willReturn += arguments[i];
    }
    console.log(willReturn);
}