/*
    ! 함수의 종류
    * 큰 분류상 사용자 정의함수 (function name(){}) js core function(기본제공되는함수)로 나뉜다.

    ? 큰 분류 이하 용도에 따른 함수 종류
    * 1. 일반 함수 - 지금까지 우리가 썼던 함수들.
    * 2. 중첩 함수 - 함수 안에 함수가 또 있는 경우.
    * 3. 콜백 함수 - 함수 실행 결과값을 리턴이 아니라,
    * 매개변수를 통해 들어온 함수를 호출해서 넘겨주는 방식(방식자체의 이름 : callBack).
    * 넘어온 매개변수(함수)자체가 콜백함수(callBack function). (ex> plugin, api....)
    * 4. 클로저 함수 - 일반적인 함수의 경우 함수 호출에 의해 함수 내부의 실행구문을 모두 실행하게
    * 되면 함수 내부에서 만든 지역변수는 자동으로 사라지지만(죽는다.) 특정 경우에는 사라지지 않고
    * 남는 경우가 있는데 이 현상을 클로저(closure)라 부르고, 이 현상을 일으키는 함수를 클로저함수.
    * 5. 멤버함수 - 멤버함수는 클래스 내부에 만들어 지며 이를 보통 메서드(method)라고 함.
*/
// !중첩함수
// ? 지역변수처럼 함수 내부에서만 활용하는 함수. 중복 코드나 코드 그룹핑을 내부에서 처리해야 될 경우.

// *case.1 1초마다 한번 씩 hi 출력.
function sayHi(){
    var count = 0;
    setInterval(function(){
        count++;
        document.write(count + 'hi <br>');
    },1000);
}
// ? 알아두기
function innerFunctionTest(){
    var a = 10;
    var b = 20;
    var c = 30;
    function outerFunc(){
        var b = 200;
        var c = 300;
        function innerFunc(){
            var c = 3000;
            console.log('1. = ' + a);
            console.log('2. = ' + b);
            console.log('3. = ' + c);
        }
        innerFunc();
    }
    outerFunc();
}

// *case.2 callBack 함수를 이용한 사칙연산 계산기 만들기.
 function calculatorCallBack(op,numb1,numb2,callBack){
    var result = '';
    switch(op){
        case "+":{
            result = add(numb1, numb2);
            break;
        }
        case "-":{
            result = sub(numb1, numb2);
            break;
        }
        case "*":{
            result = mul(numb1, numb2);
            break;
        }
        case "/":{
            result = div(numb1, numb2);
            break;
        }
        default:{
            result = "잘못된 입력값 입니다.";
            break;
        }
    }
    function add(numb1,numb2){
        return numb1 + numb2;
    }
    function sub(numb1,numb2){
        return numb1 - numb2;
    }
    function mul(numb1,numb2){
        return numb1 * numb2;
    }
    function div(numb1,numb2){
        return numb1 / numb2;
    }

    callBack(result);
 }

 function addPrint(value){
     document.write('두 수의 합은' + value);
 }