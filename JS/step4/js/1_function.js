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
    return (x*x);
}
/*
console.log(f(9));
document.write(f(9));
alert(f(9));
*/
// case.6 arguments + return 혼합
function sumAllEx(){
    var willReturn = 0;
    for (var i in arguments){
        // var i = 0; i<arguments.length; i++
        willReturn += arguments[i];
    }
    return willReturn;
}
// case.7 returnValue를 변수에 저장하고 전달하기
function sumReturn1(num1,num2){
    var result = num1 + num2;
    return result;
}
var value = sumReturn1(13,26);
// 함수실행 자체가 변수 내에서 이루어졌다. -> 해당함수는 리턴을 가지고있다. -> 변수내로 함수실행결과가온다.
/*
console.log(value);
alert(value);
document.write(value);
*/
// case. 8 무한루프를 돌며 숫자를 입력받고 입력받은 수의 합을 출력하는 함수
// ! 단, 입력값이 0이면 즉시 실행 중지.
function infiniteSum(){
    var sum = 0;
    var count = 1;
    while(true){
        var value = parseInt(window.prompt('숫자만 입력해라.'));
        if(value==0){
            document.write('종료. ');
            return;
            //  return; -> 함수부 종료. break; -> 해당로직(loop)을 종료. = 반복문 밖의 구문이 실행.
        }
        sum += value;
        document.write(count + ". " + sum + "<br>");
        count++;
    }
    document.write("총 " + count + "번 실행함.");
}
// todo. 기존 구구단형태를 "x"단 출력 방식의 함수로 만들어보기
function printGugudan(numb){
    var data = '';// 1. 결과를 담을 변수.
    for(var i = 2; i <= numb; i++){
    // 2. 대기어 반복 -> ? <br>
        data += i + "단 출력" + "<br>";
        for(var m = 1; m <= numb; m++){
        // 3. 소기어 반복 -> 연산반복
            data += i + "x" + m + "=" + (i*m) +"<br>";
        }
        data += '<br>';
    }
    return data;
    // 5. 실행된위치로 결과반환
}
// document.write(printGugudan(15));

// case. 9 다음 실행 구문으로 전달받은 매개변수를 계산하여 결과로 출력하는 함수
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
function calculator(op,numb1,numb2){
    var result = '';
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
            result = "잘못된 연산자입니다.";
            break;
    }
    return result;
}

    document.write("1 결과 =" + calculator("+", 20, 10) + "<br>");
    document.write("2 결과 =" + calculator("-", 20, 10) + "<br>");
    document.write("3 결과 =" + calculator("*", 20, 10) + "<br>");
    document.write("4 결과 =" + calculator("/", 20, 10) + "<br>");
    document.write("5 결과 =" + calculator("%", 20, 10) + "<br>");