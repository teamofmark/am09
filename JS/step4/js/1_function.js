/*
    ? function (함수)

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/
// case.1 다음 구문을 hello() 라는 함수를 만들어 유지보수 하기 쉽게 만들어보기
// 1-1 수동으로 반복함
/*
document.write("안녕. 방가와","<br>");
document.write("안녕. 방가와","<br>");
document.write("안녕. 방가와","<br>");
*/
// 1-2. 반복을 쉽게하기 위해 반복문
/*
var comment = "안녕. 방가와";
for(var i = 0; i < 3; i++){
    document.write(comment,"<br>");
}
*/
// 1-3. 원할 때 실행하기 위해 함수화
function commentFunc(){
    var comment = "안녕. 방가와";
    for(var i = 0; i < 3; i++){
        document.write(comment,"<br>");
    }
}
// case.2 매개변수=인자=parameter(paramVal)가 있는 함수 만들기
function commentParam(count,comment){
    for(var i = 0; i < count; i++){
        document.write(comment,"<br>");
    }
}
// case.2 다시한번사용해보기
function sumParam(num1, num2){
    var result = num1 + num2;
    console.log("두 수의 합은 = " + result);
};
// case.3 매개변수의 자리가 없어도 있는것처럼.. arguments(가변인자함수 - 배열인듯 배열아닌 배열같은)
/*
    ? arguments
    * arguments 객체(object)는 모든 함수 안에서 사용하는 지역변수.
    * arguments를 이용해서 함수내 인수들을 참조 할 수 있고 이 객체의 함수에 전달된 각 인수항목을 포함한다.
    * 단, arguments는 array와 비슷해보이지만 length를 구하는 방식을 제외하고는 array와는 다르다.
    * 필요에 따라 array로 추가 변환하여 사용 할 수 있다.
*/
// case. 3-1
function showInfo(){
    // ! data의 입력순서를 arguments내에서 조작할 수 없다.
    console.log("index:0 = " + arguments[0]);
    console.log("index:1 = " + arguments[1]);
    console.log("index:2 = " + arguments[2]);
    console.log(arguments[0] + "의 나이는" + arguments[1] + "세입니다." + "혈액형은" + arguments[2]);
}
// case. 3-2
function sumAll(){
    // console.log(typeof(arguments) + ":" + arguments.length);
    var willReturn = 0;
    for(var i = 0; i<arguments.length; i++){
        willReturn += arguments[i];
    }
    console.log(willReturn);
}
/*
    ?return (리턴)
    * 함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 불가.
    * 이 때 매개변수를 활용하면 함수 내부로 data를 전달 할 수 있는데, return value는 이와 반대 되는 값.
    * 즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력 부라면, 리턴값은 함수 내부에서 처리한 결과를 함수 외부로 전달하기 위해 사용하는 출력 부.    
*/
function f(x){
    return x*x;
}
function sumAllEX(){
    var willReturn = 0;
    for(var i in arguments){
        willReturn += arguments[i];
    }
    return willReturn;
}