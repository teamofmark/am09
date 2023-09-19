/*
    ? function (함수)

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/

// *case.1 함수화의 필요성
// document.write('안녕? 방가와!',"<br>");
// document.write('안녕? 방가와!',"<br>");
// document.write('안녕? 방가와!',"<br>");

// for (var i = 0; i < 3; i++){
//     document.write('안녕? 방가와!',"<br>");
// }
// for (var i = 0; i < 3; i++){
//     document.write('hi? welcome!',"<br>");
// }
function helloFunc(comment,count){
    for(var i = 0; i < count; i++){
        document.write(comment,"<br>");
    }
}
// helloFunc("안녕? 방가와!",3);

// *case. 2 매개변수(Parameter)가 있는 함수 만들기
// ? 함수내 정해진 변수의 value(값)를 변경하여, 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결하기 위함.
function sumParam(num1,num2){
    var result = num1 + num2;
    alert("두 수의 합은 = " + result);
}
// *case. 3 무조건 약속된 매개변수를 사용하기 불가능 할때? = arguments(가변인자함수)
/*
    ? arguments
    * arguments 객체(object)는 모든 함수 안에서 사용하는 지역변수.
    * arguments를 이용해서 함수내 인수들을 참조 할 수 있고 이 객체의 함수에 전달된 각 인수항목을 포함한다.
    * 단, arguments는 array와 비슷해보이지만 length를 구하는 방식을 제외하고는 array와는 다르다.
    * 필요에 따라 array로 추가 변환하여 사용 할 수 있다.
*/
function sumAll(){
    // console.log(typeof(arguments) + ':' + arguments.length + ':' + arguments[2]);
    var willReturn = 0;
    for (var i = 0; i < arguments.length; i++){
        willReturn += arguments[i];
    }
    console.log(willReturn);
}
function sumAllEX(){
    var willReturn = 0;
    for (var i in arguments){ // ? var i = 0; i < arguments.length; i++
        willReturn += arguments[i];
    }
    return willReturn;
}
// *case.4 arguments 부르는 방법
function showInfo(){
    console.log("0 = " + arguments[0]);
    console.log("1 = " + arguments[1]);
    alert(arguments[0] + "의 나이는" + arguments[1] + "세 입니다.");
}
/*
    ? return(리턴) - 함수의 꽃
    * 함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 불가.
    * 이 때 매개변수를 활용하면 함수 내부로 data를 전달 할 수 있는데, return value는 이와 반대 되는 값.
    * 즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력 부라면, return value는 함수 내부에서 처리한 결과를 함수 외부로 전달하기 위해 사용하는 출력 부.
    
    ! ex 함수 f(x)안에 넣는 값이 매개변수, 결과로 나오는 x*x가 returnValue.
    todo function f(x){ return x * x; }
    todo alert(f(3));
    todo console.log(f(3));
*/
// *case. 5 두 수를 매개변수로 받고, 두 값을 더한 결과를 return하는 함수를 만들어보자.
function sumReturn(num1, num2){
    var result = num1 + num2;
    return result;
}
// *case. 6 무한루프를 돌며 숫자를 입력받고 입력받은 수의 합을 화면에 출력하는 함수.
// ! 단, 입력값이 0 이면 즉시 실행을 멈추게 한다.
function infiniteSum(){
    var sum = 0, count = 1;
    while(true){
        var value = parseInt(window.prompt('숫자만 입력해라.'));
        if(value == 0){
            document.write('종료');
            return;
            // break;
        }
        sum += value;
        document.write(count + ". " + sum +"<br>");
        count++;
    }
    document.write("총 " + count + "번 실행함.");
}
// todo. 다음실행구문으로 전달받은 매개변수로 계산하여 결과를 출력하는 함수 만들기.

function calculator(op,numb1,numb2){
    var result = "";
    // ? 계산기 로직
    switch (op) {
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
    return result;
    // ?이 값을 실행한 위치로 전달
}
/* 
document.write("1 결과 =" + calculator("+", 20, 10) + "<br>");
document.write("2 결과 =" + calculator("-", 20, 10) + "<br>");
document.write("3 결과 =" + calculator("*", 20, 10) + "<br>");
document.write("4 결과 =" + calculator("/", 20, 10) + "<br>");
document.write("5 결과 =" + calculator("%", 20, 10) + "<br>");
*/

//todo. 위의 예제에 추가로 사칙연산 부분을 함수로 변환하여 보다 편하게 사용 할 수 있게 만들기.
/*
//* 실행구문
todo document.write(calculator2("+", 20, 10) + "<br>");
todo document.write(add(20, 10) + "<br>"); 더하기함수
todo document.write(sub(20, 10) + "<br>"); 빼기함수
todo document.write(mul(20, 10) + "<br>"); 곱하기함수
todo document.write(div(20, 10) + "<br>"); 나누기함수
*/