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
function sumAllEX(){
    var willReturn = 0;
    for (var i in arguments){ //? A(var i=0;) in B (arguments.length) / IE 9이상.
        willReturn += arguments[i];
    }
    console.log(willReturn);
}
// *case.4 "자신의 이름"의 나이는 "자신의 나이" 세입니다. 를 arguments를 이용해 만들기.
function showInfo(){
    console.log("0 = " + arguments[0]);
    console.log("1 = " + arguments[1]);
    console.log("2 = " + arguments[2]);
    document.write(arguments[0] + "의 나이는" + arguments[1] + "세입니다." + "저의 성별은" + arguments[2] +"입니다.");
}
/*
    ?return (리턴)
    * 함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 불가.
    * 이 때 매개변수를 활용하면 함수 내부로 data를 전달 할 수 있는데, return value는 이와 반대 되는 값.
    * 즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력 부라면, 리턴값은 함수 내부에서 처리한 결과를
    * 함수 외부로 전달하기 위해 사용하는 출력 부.
*/
// *case. 5 간단한 문법으로 원리 알아보기
function f(x){ return x * x; }

// *case. 6 두 수를 매개변수로 받고, 두 값을 더한 결과값을  return 하는 함수.
function sumReturn1(num1,num2){
    var result = num1 + num2;
    return result;
}
// *case. 7 무한루프를 돌며 숫자를 입력받고 입력받은 수의 합을 화면에 출력하는 함수를 만들어보자.
// ! 단, 입력값이 0이라면 즉시 실행 중지.
function infiniteSum(){
    var sum = 0;
    var count = 1;

    while(true){
        var value = parseInt(window.prompt("숫자만 입력해라."));
        if(value == 0){
            document.write("종료");
            return;
            // ? return 은 함수를 빠져나오지만(구문출력불가), break는 loop를 빠져나오기 때문에 '총 x 번 실행함' 구문 출력가능.
        }
        // ? infiniteLoop Logic
        sum += value;
        document.write(count + '.' + sum + '<br>');
        count++;
    }
    document.write("총 " + count + "번 실행함.");
}
// todo. 다음 실행구문으로 전달받은 매개변수로 계산하여 결과를 출력하는 함수 만들기.
/*
    //* 실행구문
    document.write("1 결과 =" + calculator("+", 20, 10));
    document.write("2 결과 =" + calculator("-", 20, 10));
    document.write("3 결과 =" + calculator("*", 20, 10));
    document.write("4 결과 =" + calculator("/", 20, 10));
    document.write("5 결과 =" + calculator("%", 20, 10));
    //* 결과 
    결과 = 30
    결과 = 10
    결과 = 200
    결과 = 2
    결과 = 잘못된 연산자 입니다.
*/

function calculator(op, numb1, numb2){
    var result = '';// ? 결과를 담을 변수
    
    switch(op){
        case "+":
            result = numb1 + numb2;
            break;
        case "-":
            result = numb1 - numb2;
            break;
        case "*":
            result = numb1 * numb2;
            break;
        case "/":
            result = numb1 / numb2;
            break;
        default:
            result = "잘못된 연산자 입니다.";
            break;
    }
    // ? 분기및처리 - switch(key?){case ? : 결과를담을변수 = ?;} x 4 그외 나머지처리.

    return result;
    // ? 처리된 변수 (결과를 담을 변수) 내보내야지.(?)
}