/*
    ? function (함수)

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/
function helloExp(count,comment){
    for (var i = 0; i < count; i++){
        document.write(comment);
    }
}
// * case. 1 매개변수(Parameter / 인자)가 있는 함수 만들기
// ? 함수내 정해진 변수의 값(value)을 변경하여, 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결하기 위함.
function sumParam(numb1,numb2){
    var result = numb1 + numb2;
    alert("두 수의 합은 = " + result);
} 
// *case. 2 매개변수의 자리가 없어도 있는 것처럼 보이는 arguments(가변인자함수)

function sumAll(){
    // console.log(typeof(arguments) + ' : ' + arguments.length);
    var willReturn = 0;
    for(var i = 0; i < arguments.length; i++){
        willReturn += arguments[i];
    }
    console.log(willReturn);
}

function sumAllEX(){
    let willReturn = 0;
    for(var i in arguments){ //? IE10이상 사용 가능
        willReturn += arguments[i];
    }
    return willReturn;
}
// *case.3 "자신의 이름"의 나이는 "나이"세 입니다. 를 arguments를 이용해 만들어보기
// ! data의 입력순서를 arguments내에서 조작 할 수 없다.
function showInfo(){
    console.log("index[0] = " + arguments[0]);
    console.log("index[1] = " + arguments[1]);
    alert(arguments[0] + "의 나이는" + arguments[1] + "세 입니다.");
}
/*
    ?return (리턴)
    * 함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 불가.
    * 이 때 매개변수를 활용하면 함수 내부로 data를 전달 할 수 있는데, return value는 이와 반대 되는 값.
    * 즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력 부라면, 리턴값은 함수 내부에서 처리한 결과를 함수 외부로 전달하기 위해 사용하는 출력 부.(호출부 리턴)


    !ex.1 함수f(x)안에 넣는 값이 매개변수, 결과로 나오는 x*x 가 리턴값.
        function f(x) { return x * x; }
        alert(f(3));

    !ex.2 alert에서 매개변수를 두개를 선언하면 추가된 매개변수를 무시한다.
    //*(매개변수가 초과 됐을 시) 또한 원래 함수의 매개변수보다 적게 입력하면 undefined를 출력한다.
        alert('기존매개변수', '추가매개변수');
        prompt('기존매개변수');
*/
// * case.4 두 수를 매개변수로 받고, 두 값을 더한 결과값을 리턴하는 함수.
function sumReturn1(num1,num2){
    var result = num1 + num2;
    // alert(result);
    return result;
}
// alert(sumReturn1(10,20));
// *case. 5 무한루프를 돌면서 숫자를 입력받고 입력받은 수의 합을 화면에 출력하는 함수
// ! 단, 입력값이 0이면 즉시 실행 중단.
function infiniteSum(){
    var sum = 0;
    var count = 1;
    while(true){
        var value = parseInt(prompt('숫자만 입력해라.'));
        if(value == 0){
            document.write("종료");
            return;
            /*
                ? break / return : break는 속한 반복루프를 종료 시키는 반면 return은 속한 함수 전체를 종료
            */
        }
        sum += value;
        document.write(count + '. ' + sum + '<br>');
        count++;
    }
    document.write('총' + count + '번 실행함.');
}

// todo. x단 출력을 함수로 만들기
function printGugudan(numb){
    for (var i = 2; i <= numb; i++){
        document.write(i+'단 출력.',"<br>");
        for(var m = 1; m <= numb; m++){
            document.write(i + 'x' + m + '=' + (i*m),"<br>");
        }
        document.write("<br>");
    }
}
// todo. x단 출력을 함수로 만들기 - 과제
function printGugudan2(numb){
    // ! 위 풀이된 예제를 return 으로 작동되게 변경하기. => 내부에 출력부(write,log,alert..) 금지.
}
// 실행구문 - document.write(printGugudan(15));

// * case.6 다음실행구문으로 전달받은 매개변수로 계산하여 결과를 출력하는 계산기 만들기.

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
            result = '잘못된 연산자 입니다.';
            break;
    }
    return result;
}
// todo. 위의 예제에 추가로 사칙연산 부분을 함수로 변환하여 보다 편하게 사용 할 수 있게 만들기.
/* 
//* 실행구문 - 더하기,빼기,곱하기,나누기 기능을 각 함수로 분리하여 calculator2함수가 끌어다 쓸 수 있게 만들기.
document.write(calculator2("+", 20, 10) + "<br>");
document.write(add(20, 10) + "<br>");
document.write(sub(20, 10) + "<br>");
document.write(mul(20, 10) + "<br>");
document.write(div(20, 10) + "<br>");
*/