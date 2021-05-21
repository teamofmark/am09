/*
    ? function (함수)

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.
*/

// *exp.1 
/*
document.write('안녕. 반가워요','<br>');
document.write('안녕. 반가워요','<br>');
document.write('안녕. 반가워요','<br>');
helloExp();
function helloExp(){
    for (var i = 0; i < 3; i++){
        document.write('안녕. 반가워','<br>');
    }
}
*/
// *case.1 매개변수(Parameter)가 있는 함수 만들기
// ? 함수 = 폐쇄적 = 기존의 함수가 실행된 이후 functionLC(호출 > 실행 > 종료) => 접근불가 = 안으로 data를 전달할수도 없고, 안의 data를 밖으로 빼낼 수도 없다.

function sumParam(num1, num2){
    var result = num1 + num2;
    alert('두 수의 합은 = ' + result);
}

// *case.2 arguments - 매개변수가 없어도 있는것처럼.(가변인자함수 - 배열은 아닌데 배열처럼사용.)
/*
    ?arguments? 
    arguments 객체는 모든 함수 안에서 사용하는 지역변수다.
    arguments를 이용해 함수내 인수들을 참조 할 수 있고 이 객채의
    함수에 전달된 각 인수항목을 포함한다.
    단 arguments는 Array와 비슷해보이지만 length를 구하는것을 제외
    Array와 다르다. 하지만 필요에 따라 Array로 변환하여 쓸수있다.
*/

function sumAll(){
    document.write(typeof(arguments) + ' : ' + arguments.length);
}
function sumAllRun(){
    var willReturn = 0;
    for (var i in arguments){
        willReturn += arguments[i];
    }
    return willReturn;
}