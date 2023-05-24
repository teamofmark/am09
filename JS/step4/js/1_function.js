/*
    ? function (함수)

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/
// * case. 1 왜 만들었냐.
    // * step. 1 왜 불편했냐
    /*
    document.write('안녕? 방가와',"<br>");
    document.write('안녕? 방가와',"<br>");
    document.write('안녕? 방가와',"<br>");
    */
    // *step. 2 반복시키자
    function helloExp(){
        var comment = '안녕? 방가와!';
        for(var i = 0; i < 3; i++){
            document.write(comment,'<br>');
        }
    }
    function hello(){
        var comment = 'hello...it,s me';
        for(var i = 0; i < 3; i++){
            document.write(comment,'<br>');
        }
    }
// *case. 2 매개변수(parameter)가 있는 함수 만들기.
// ? parameter = 매개변수 = 인자 -> 함수내 정해진 변수의 value를 변경하여, 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결하기위함.
function sumParam(numb1,numb2){
    var result = numb1 + numb2;
    alert('두 수의 합은 = ' + result);
}

// *case. 3 매개변수의 자리가 없어도 있는 것처럼...arguments
// ? arguments = 가변인자함수. (변하는 것이 가능한 매개변수) - 배열인듯 배열아닌 배열같은...
/*
    ? arguments
    * arguments 객체(object)는 모든 함수 안에서 사용하는 지역변수.
    * arguments를 이용해서 함수내 인수들을 참조 할 수 있고 이 객체의 함수에 전달된 각 인수항목을 포함한다.
    * 단, arguments는 array와 비슷해보이지만 length를 구하는 방식을 제외하고는 array와는 다르다.
    * 필요에 따라 array로 추가 변환하여 사용 할 수 있다.
*/

    // * step. 1
function sumAll(){
    console.log(typeof(arguments) + ' : ' + arguments.length);
    var willReturn = 0;
    for(var i = 0; i<arguments.length; i++){
        willReturn += arguments[i];
    }
    console.log(willReturn);
}
function sumAllEx(){
    console.log(typeof(arguments) + ' : ' + arguments.length);
    var willReturn = 0;
    for (var i in arguments){ //? ECMA script
        willReturn += arguments[i];
    }
    return willReturn;
}
// *case. 4 "자신의 이름"의 나이는 "자신의 나이"세. MBTI "XXXX" 입니다. 를 arguments를 이용해 만들어보기.
function showInfo(){
    console.log("0 = " + arguments[0]);
    console.log("1 = " + arguments[1]);
    console.log("2 = " + arguments[2]);
    alert(arguments[0] + '의 나이는' + arguments[1] + '세.' + 'MBTI 는' + arguments[2] +'입니다.');
}
/*
    ? return
    * 함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 불가.
    * 이 때 매개변수를 활용하면 함수 내부로 data를 전달 할 수 있는데, return value는 이와 반대 되는 값.
    * 즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력 부라면, 리턴값은 함수 내부에서 처리한 결과를
    * 함수 외부로 전달하기 위해 사용하는 출력 부.

 */
// *case. 5 return 기본 문법
function f(x){
    return x * x; //! 호 출 부 리 턴.
}
// console.log(f(3));
// document.write(f(5));
// alert(f(2));
// *case. 6 두 수를 매개변수로 받고, 두 값을 더한 결과를 return 하는 함수.
function sumReturn1(num1,num2){
    var result = num1 + num2;
    return result;
}
// var val = sumReturn1(10,20);

// todo. 무한루프를 돌며 숫자를 입력받고 입력받은 수의 합을 화면에 출력하는 함수.
// ! 단, 입력값이 0이면 즉시 실행을 멈추게 한다.
function infiniteSum(){
    var count = 1;
    var sum = 0;
    while(true){
        var value = parseInt(window.prompt('숫자만 입력해라.'));
        if(value == 0){
            document.write("종료");
            return;
        }
        sum += value;
        document.write(count + ". " + sum + "<br>");
        count++;
    }
    document.write('총' + count + '번 실행함.');
}
// todo. 다음실행구문으로 전달받은 매개변수로 계산하여 결과를 출력하는 함수.
/*
    //* 실행구문
    document.write("1 결과 =" + calculator("+", 20, 10));
    document.write("2 결과 =" + calculator("-", 20, 10));
    document.write("3 결과 =" + calculator("*", 20, 10));
    document.write("4 결과 =" + calculator("/", 20, 10));
    document.write("5 결과 =" + calculator("%", 20, 10));
    //* 결과 
    1 결과 = 30
    2 결과 = 10
    3 결과 = 200
    4 결과 = 2
    5 결과 = 잘못된 연산자 입니다.
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
            result = "잘못된연산자.";
            break;
    }
    return result;
}
// todo. 위의 예제에 추가로 사칙연산부를 함수로 분리하여 보다 편하게 사용 할 수있게 하기.
/* 
//*
* 실행구문
* document.write(calculator2("+", 20, 10) + "<br>");
* document.write(add(20, 10) + "<br>");
* document.write(sub(20, 10) + "<br>");
* document.write(mul(20, 10) + "<br>");
* document.write(div(20, 10) + "<br>");

? 결과 
? 1 결과 = 30
? 2 결과 = 10
? 3 결과 = 200
? 4 결과 = 2
? 5 결과 = 잘못된 연산자 입니다.
*/
function calculator2(op,numb1,numb2){
    var result = '';
    switch(op){
        case "+":
            result = /*numb1 + numb2;*/
            break;
    }
}
function add(){
    var addResult = numb1 + numb2;

}
function sub(){
    var subResult = numb1 - numb2;
    
}
function mul(){
    var mulResult = numb1 * numb2;
    
}
function div(){
    var divResult = numb1 / numb2;
    
}