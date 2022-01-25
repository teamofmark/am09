/*
    ? function (함수)

    * 기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    * 중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/
// *case.1 다음구문을 hello()라는 함수를 만들어 유지보수 하기 쉽게 만들자.
// document.write('안녕? 방가와.');
// document.write('안녕? 방가와.');
// document.write('안녕? 방가와.');

function helloExp(comment){
    for(var i = 0; i < 3; i++){
        document.write(comment,'<br>');
    }
}

// *case.2 매개변수(Parameter)가 있는 함수 만들기
// ?함수내 정해진 변수의 value(값)를 변경하여, 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결하기 위함.
function sumParam(num1, num2){
    var result = num1 + num2;
    alert('두 수의 합은 = ' + result);
}

// *case.3 매개변수의 자리가 없어도 있는것처럼.. arguments(가변인자함수 - 인자를 받는 대로 배열화(정식배열아님))
/*
    ? arguments
    * arguments 객체는 모든 함수 안에서 사용하는 지역변수다.
    * arguments를 이용해 함수내 인수들을 참조 할 수 있고 이 객체의 함수에 전달된 각 인수항목을 포함한다.
    * 단 arguments는 Array와 비슷해보이지만  length를 구하는 것을 제외 하고 Array와 다르다.
    * 필요에 따라 Array로 변환하여 쓸수는 있다.
*/
// *case. 3 - 1 
function sumAll(){
    // alert(typeof(arguments) + ' : ' + arguments.length);
    // ? arguments - 약속되지 않은 임의 매개변수들.
    var willReturn = 0;
    for (var i in arguments){
        // var i = 0; i<arguments.length; i++
        willReturn += arguments[i];
    }
    return willReturn;
}
// *case. 3 - 2
function showInfo(){
    console.log('0 = ' + arguments[0]);
    console.log('1 = ' + arguments[1]);
    document.write(arguments[0] + '의 나이는' + arguments[1] + '세 입니다.');
}
/*
    ? return(리턴)
    * 함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 불가.
    * 이 때 매개변수를 활용하면 함수 내부로 data를 전달 할 수 있는데, return value는 이와 반대 되는 값.
    * 즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력 부라면, 리턴값은 함수 내부에서 처리한 결과를
    * 함수 외부로 전달하기 위해 사용하는 출력 부.
*/
// *case. 4 test
function f(x){
    return x * x;
} 

// *case.5 두 수를 매개변수로 받고, 두 값을 더한 결과값을 리턴하는 함수.
function sumReturn1(num1,num2){
    var result = num1 + num2;
    return result; //? 호출부 리턴.
}
var value = sumReturn1(13,26);
document.write(value);

// *case.6 무한루프를 돌며 숫자를 입력받고 입력받은 수의 합을 화면에 출력하는 함수.
// ! 단, 입력값이 0이면 즉시 실행 중지.
function infiniteSum(){
    var sum = 0;
    var count = 1;

    while(true){
        var value = parseInt(window.prompt('숫자만 입력'));
        if(value == 0){
            document.write('종료');
            return;
            // ? return = 함수 이탈, break는 loop 이탈.
        }
        sum += value;
        document.write(count + '.' + sum + '<br>');
        count++;
    }
    document.write('총' + count + '번 실행함');
}
// todo.1 구구단 출력을 함수로 만들기.
function printGugudan(){
    // * x단 출력 식으로 9단까지 출력되게 만들기.
    for (let i = 2; i <= 9; i++){
        document.write(i + '단 출력', '<br>');
        for(var m = 1; m <= 9; m++){
            document.write(i + 'x' + m + ' = ' + (i*m), '<br>');
        }
        document.write('<br>');
    }

}

// todo.2 다음실행구문으로 전달받은 매개변수로 계산하여 결과를 출력하는 계산기 함수 만들기.
/*
    ? 실행구문.
    * document.write("1 결과 =" + calculator("+", 20, 10));
    * document.write("2 결과 =" + calculator("-", 20, 10));
    * document.write("3 결과 =" + calculator("*", 20, 10));
    * document.write("4 결과 =" + calculator("/", 20, 10));
    * document.write("5 결과 =" + calculator("%", 20, 10));
    
    ! 결과
    * 결과 = 30
    * 결과 = 10
    * 결과 = 200
    * 결과 = 2
    * 결과 = 잘못된 연산자 입니다.
*/
function calculator(op, numb1, numb2){
    var result = '';
    switch(op){
        case "+" : 
            result  = numb1 + numb2;
            break;
        case "-" : 
            result  = numb1 - numb2;
            break;
        case "*" : 
            result  = numb1 * numb2;
            break;
        case "/" : 
            result  = numb1 / numb2;
            break;
        default : 
            result  = "잘못된 연산자 이거나 입력값 입니다.";
            break;
    }
    return result;
}

// todo.3 위의 예제에 추가로 사칙연산부를 함수로 변환하여 보다 편하게 사용하게 만들기.
/*
    * 실행구문
    * calculator2("+",20,10); = 결과 30
    * add(20,10); = 결과 30.
    * sub(20,10); = 결과 10.
    * mul(20,10); = 결과 200.
    * div(20,10); = 결과 2.
*/
function calculator2(op, numb1, numb2){
    var result = '';
    switch(op){
        case "+" : 
            result  = add(numb1, numb2);
            break;
        case "-" : 
            result  = sub(numb1, numb2);
            break;
        case "*" : 
            result  = mul(numb1, numb2);
            break;
        case "/" : 
            result  = div(numb1, numb2);
            break;
        default : 
            result  = "잘못된 연산자 이거나 입력값 입니다.";
            break;
    }
    return result;
}
function add(numb1,numb2){
    var addResult = numb1 + numb2;
    return addResult;
}
function sub(numb1,numb2){
    var subResult = numb1 - numb2;
    return subResult;
}
function mul(numb1,numb2){
    var mulResult = numb1 * numb2;
    return mulResult;
}
function div(numb1,numb2){
    var divResult = numb1 / numb2;
    return divResult;
}

// *case. 7 함수를 변수에 담기.
function hello(name){
    console.log(name + ' welcome!');
}
var func = hello;

// *case. 8 매개변수 값으로 함수 사용.
function hi1(){
    console.log('Hello.');
}
function hi2(){
    console.log('안녕하세요.');
}
function execute(func){
    func();
}

// *case.9 button click 시 매개변수 값으로 넘긴 함수 호출해보기
function welcome(){
    alert('환영합니다. 반갑습니다.');
}
$(document).ready(function(){
    $("#runEx9").click(welcome);   
});

// *case.10 1초마다 매개변수 값으로 넘긴 익명 함수 호출.
function loopStart(){
    setInterval(function(){
        document.write('hi, hello');
    },1000);
}

// *case. 11 함수를 매개변수로 전달받아 반복호출.
function callFunctionTenTimes(otherFunction){
    for (var i = 0; i < 10; i++){
        otherFunction();
    }
}
function justFunction(){
    document.write('hello, world!','<br>');
}
// *case. 12 return value로 함수 사용.
function createHello(){
    function hello(user){
        document.write(user + ' welcome!');
    }
    return hello;
}
var result = createHello();