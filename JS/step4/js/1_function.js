/*
    ? function (함수)

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.
*/
// case.1 함수의 필요성
// 1-1. 수동출력
/*
document.write("안녕. 방가와.","<br>");
document.write("안녕. 방가와.","<br>");
document.write("안녕. 방가와.","<br>");
*/
// 1-2. 반복출력 -> 이럴 때는 안나왔으면 좋겠어요 needs.... -> ? condition = if, switch...
//  -> 사용자가 원하는 만큼이라는 수량제어 등등의 기능을 하나의 함수에서 작동시키게 하기위함.
/*
var comment = "안녕. 방가와";
for(var i = 0; i < 30; i++){
    document.write(comment,"<br>");
}
*/
// case.2 매개변수(parameter)가 있는 함수 만들기
function commentParam(count,comment){
    for(var i = 0; i < count; i++){
        document.write(comment,"<br>");
    }
}
// case.3 매개변수 다시한번
// ? 함수내 정해진 변수의 value(값)를 변경하여, 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결하기위함.
function sumParam(num1,num2){
    var result = num1 + num2;
    alert("두 수의 합은 =" + result);
}
// case.4 매개변수의 자리가 없어도 있는 것처럼 사용하는 arguments(가변인자함수 -배열인듯배열아닌배열같은)
/*
    ? arguments
    * arguments 객체(object)는 모든 함수 안에서 사용하는 지역변수.
    * arguments를 이용해서 함수내 인수들을 참조 할 수 있고 이 객체의 함수에 전달된 각 인수항목을 포함한다.
    * 단, arguments는 array와 비슷해보이지만 lenth를 구하는 방식을 제외하고는 array와 다름.
    * 그렇기 때문에 배열화 시켜서 사용하려면 array로 추가변환작업이 필요.
*/
function sumAll(){
    console.log(typeof(arguments)+ ':' + arguments.length);
    var willReturn = 0;
    for(var i = 0; i<arguments.length; i++){
        willReturn += arguments[i];
    }
    console.log(willReturn);
}
// todo. "자신의 이름"의 나이는 "자신의 나이"세 입니다. 출력문을 arguments를 이용해 만들어보기.
// ! data 입력순서 변경 불가 = arguments
function showInfo(){
    alert(arguments[0] + "의 나이는" + arguments[1] + "세 입니다.");
}
/*
    ? return(리턴)
    * 함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 불가.
    * 이때 매개변수나 arguments를 활용하면 함수 내부로 data등을 전달 할 수 있는데,
    * return Value는 이와 반대 되는 값.
    * 즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력 부라면, 리턴 값은 함수 내부에서 처리한것을 함수 외부로 전달하기 위함.
*/

// case.5 함수 f(x)안에 넣는 값이 매개변수. 그럼 출력은?
function f(x){
    alert(x*x);
    document.write(x*x);
    console.log(x*x);
}