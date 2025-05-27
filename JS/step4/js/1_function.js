/*
    ? function (함수) - 개발의 꽃

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/
// case.1 다음구문을 hello라는 함수를 만들어 유지보수 하기 쉽게 만들어보기
// 1-1.수동반복
/*
document.write("안녕? 방가와!");
document.write("안녕? 방가와!");
document.write("안녕? 방가와!");
document.write("안녕? 방가와!");
document.write("안녕? 방가와!");
*/
// 1-2. 반복문을 사용
/*
var comment = "hello? welcome!"
for(var i = 0; i < 5; i++){
    document.write(comment,"<br>");
}*/
// 1-3. 원할 때만 실행하기 위해 함수화
function commentFunc(){
    var comment = "hello? welcome!"
    for(var i = 0; i < 5; i++){
        document.write(comment,"<br>");
    }
}
// case. 2 매개변수(parameter/인자/매개변수)가 있는 함수 만들기
function commentParam(count,comment){
    for(var i = 0; i < count; i++){
        document.write(comment,"<br>");
    }
}
function sumParam(num1,num2){
    var result = num1 + num2;
    alert("두 수의 합은 ? = " + result);
}
// case.3 매개변수가 없어도 있는 것처럼 사용하는 가변인자함수(arguments)- 배열인듯 배열아닌 배열같은 
/*
    ? arguments 는 dataType - object(객체)
    ? 기존의 배열 등의 객체들은 내부공간이 확실히 정의되어 있는 것에 반해 가변인자함수는 그렇지 않다.
    ? 이 말인 즉슨, length는 있으나 실제 존재하는 data는 아니라는 얘기.
*/
function sum(){
    console.log(typeof(arguments) + ' : ' + arguments.length);
    var willReturn = 0;
    for(var i = 0; i < arguments.length; i++){
        willReturn += arguments[i];
    }
    console.log(willReturn);
}