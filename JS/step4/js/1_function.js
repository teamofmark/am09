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
// case.4 "자신의 이름"의 나이는 "자신의 나이" 세입니다. 를 arguments를 이용해 만들어보기
function showInfo(){
    alert(arguments[0] + "의 나이는" + arguments[1] + " 세 입니다.");
    // ?arguments는 장점만 있는 것은 아니고 입력순서를 임의로 수정 및 변경이 불가하다.
    // ! 그렇기 때문에 내부에서 해당 case를 감지하고 보정 할 수 있는 logic이 필요함.
    console.log("index 0 = " + arguments[0] + "type : " + typeof(arguments[0]));
    console.log("index 1 = " + arguments[1] + "type : " + typeof(arguments[1]));
}
/*
    ?return (리턴)
    * 함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 불가.
    * 이 때 매개변수를 활용하면 함수 내부로 data를 전달 할 수 있는데, return value는 이와 반대 되는 값.
    * 즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력 부라면, 리턴값은 함수 내부에서 처리한 결과를 함수 외부로 전달하기 위해 사용하는 출력 부.
*/
// ex
function f(x){
    return x*x;
}
/*
console.log(f(3));
alert(f(6));
document.write(f(9));
*/
// case. 5 위 sum 함수를 return으로 변형해보기
function sumAllEx(){
    var willReturn = 0;
    // for(var i = 0; i < arguments.length; i++){
    for(var i in arguments){ //? for in 반복문 - IE9이상에서만 사용 가능.
        willReturn += arguments[i];
    }
    return willReturn;
}
// case. 6 returnValue를 변수에 저장하고 전달하기
function sumReturn1(num1,num2){
    var result = num1 + num2;
    return result;
}
var testValue = sumReturn1(13,26);
console.log(testValue);
alert(testValue);
document.write(testValue);

// case. 7 다음 실행구문으로 전달받은 매개변수를 계산하여 결과 출력하는 함수 만들기.
/*
    //* 실행구문
    document.write("1 결과 =" + calculator("+", 20, 10) + "<br>");
    document.write("2 결과 =" + calculator("-", 20, 10) + "<br>");
    document.write("3 결과 =" + calculator("*", 20, 10) + "<br>");
    document.write("4 결과 =" + calculator("/", 20, 10) + "<br>");
    document.write("5 결과 =" + calculator("%", 20, 10) + "<br>");
    //* 결과 
    결과 = 30
    결과 = 10
    결과 = 200
    결과 = 2
    결과 = 잘못된 연산자 입니다.
*/