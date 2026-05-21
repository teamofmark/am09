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
// ! 중첩 함수
// ? 지역변수처럼 함수 내부에서만 활용하는 함수. 중복 코드나 코드그룹핑을 내부에서 처리해야될 경우.
// case.1 1초에 한 번씩 인사하기
function sayHi(){
    var count = 0;
    setInterval(function(){
        count++;
        document.write(count + '. hi <br>');
    },1000);
}
// case.2 중첩함수 주의사항
function innerFunctionTest(){
    var a = 10;
    var b = 20;
    var c = 30;
    function outerFunc(){
        var b = 200;
        var c = 300;
        function innerFunc(){
            var c = 3000;
            console.log('1. a = ' + a); //? 실행시 자신과 가장 인접한 함수 내의 지역변수부터 찾는다.
            console.log('2. b = ' + b);
            console.log('3. c = ' + c);
        }
        innerFunc();//? 실행되어야만 innerFunc가 활성화
    }
    outerFunc(); //? 실행되어야만 outerFunc가 활성화
}
// case.3 callBack 함수를 이용한 사칙연산기 만들기
function calculatorCallBack(op,numb1,numb2,callBack){
    var result = '';
    switch(op){
        case "+":{
            result = add(numb1,numb2);
            break;
        }
        case "-":{
            result = sub(numb1,numb2);
            break;
        }
        case "*":{
            result = mul(numb1,numb2);
            break;
        }
        case "/":{
            result = div(numb1,numb2);
            break;
        }
        default:{
            result = '잘못된 입력값 입니다.';
            break;
        }
    }
    callBack(result);
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
function addPrint(value){
    document.write('두 수의 합은' + value);
}
function subPrint(value){
    document.write('두 수의 차는 ' + value);
}
function mulPrint(value){
    document.write('두 수의 곱은' + value);
}
function divPrint(value){
    document.write('두 수의 나누기는' + value);
}
/*
1. calculatorCallBack 함수에 마지막 인자는 함수라는 약속을 정의 한다.
2. calculatorCallBack 함수 맨 마지막에는 그 인자를 통해 들어온 함수 실행식이 준비됨.
3. calculatorCallBack 함수 안에서 처리된 결과를 담은 변수인 result를 마지막 인자로 들어온 함수에 넣는다.
4. 이렇게되면 외부에있던 addPrint라는 함수가 calculatorCallBack 함수내에서 실행이 되면서 동시에
인자로 전달 받은 result를 사용할 수 있는 상태가 된다.
= 이렇듯 함수내부에서 다른 함수를 인자로 불러와 자신의 매개변수를 넣어 실행하는 함수를 콜백함수라 한다. 
*/
// case.4 return 대신 callBack??
// ? 그렇지 않다. 구현부와 처리부가 나눠져 있지 않은 형태일 때 단순 값은 return이 훨씬 편하다.
/*
function sum(numb1, numb2){
    return numb1 + numb2;
}
var result = sum(10,20);
document.write('두 수 합' + result);
*/
/*
function sum(numb1,numb2,callBack){
    var temp = numb1 + numb2;
    callBack(temp);
}
function result(value){
    document.write ('두 수 합' + value);
}
sum(10,20,result);
*/
// ! a->b->c->d 형태의 순차적 처리 방식의 함수 연결 이라면 return이 유리
// ! a<->d / b<->a / c<->d / b<->c... 등의 서로 필요에 따라 처리 순서가 계속 바뀌는 함수 연결이라면 callBack

// *case.4 동기 와 비동기처리

// *동기 - 함수 호출 이후 끝날 때 까지 다음 구문 수행 안됨. -> ServerSideRendering (SSR)
// ? SSR = 서버에서 모든페이지를 다 조립해서 보내는 방식 -> 고객컴퓨터에선 다운로드 받아서 출력.
// ? -> 페이지 전체를 갈아 끼우는 방식 = server일일전송허용량 및 과부하 측면에서 불리.
// ? = 모든 완성된 형태가 서버에서 갖춰지기 때문에 검색노출 등에 유리함.
function sync(){
    alert('hi');
    document.write('End Alert');
    console.log('End Alert & write');
}
// *비동기 - 함수 호출 이후 끝나는 여부와 상관없이 다음 구문 수행. -> ClientSideRendering (CSR)
/*
? CSR = 고객컴퓨터로 부품을 보내서 조립하는 방식. -> 고객컴퓨터의 캐시(임시메모리)사용가능.
? -> 변경이 필요한 최소한의 부품만 전송받아 처리가 가능 = server일일전송허용량 및 과부하 측면에서 용이.
? = 최소 필요한 부분만 고객 컴퓨터에서 로컬로 변경 되기 때문에 검색 노출 등에 불리함.
*/
// ! 함수 호출 이후 끝나는 것과 상관없이 다음 구문 수행. = 그렇기 때문에 callBack함수를 많이 쓸 수 밖에 없음.
// ! 왜? 함수 실행이 완료되는 시점에 실행되는 부분을 처리 할 수 있으니까
function async(){
    var count = 1;
    setInterval(function(){
        document.write("2. count = " + count + '<br>');
        count++;
    },3000);
    document.write("1. 동작과 상관없이 바로 실행." + '<br>');
}
// case.5 클로저(closer(x) / 클로슈어=closure)
// ? 함수 내부에 만든 지역변수가 안죽고 계속해서 값을 유지하여 함수 자체를 강제로 견인하는 함수.
// 일반함수
function addCount(){
    var count = 0;
    count ++;
    return count;
}
// 클로저사용시
function createCount(){
    var count = 0;
    function addCount(){
        count++;
        return count;
    }
    return addCount;
}
var counter = createCount();
/*
    ? createCount 함수 호출과 동시에 지역변수 count = 0을 초기화 및 생성.
    ? 이후 내부 함수 addCount를 생성. 그것 자체를 return 한 후 함수 종료.
    ? 결국 counter();가 실행되면 addCount(); 함수가 실행되는 것과 같은 결과
    ? 왜 안죽어?
    ! createCount함수가 종료되더라도 내부함수인 addCount안에서 createCount의 지역변수인 count를 사용 중인 상태가 유지됨.
    ! 이 상태에서 함수 "외부로 return 되기 때문에 해당 지역변수는 삭제되지 못하고 남아있으니(클로저현상) addCount(클로저함수)가 실행 될 때 마다 해당 지역변수는 계속 값을 갱신하게 된다.
*/
// case. 5-1 사용중인 함수를 리턴해야만 클로저는 아니다.
$(document).ready(function(){
    $("#btnStart").click(function(){
        start(); //? 1. start함수 실행.
        document.write('count Start');
    });
});
function start(){
    var count = 0; //? 2. count변수 선언 및 초기화
    setInterval(function(){
        count ++; //? 3. start함수 내부 setInterval 함수가 start함수의 count 지역변수 사용중.
        document.write(count); //? 4. 계속 증가되는(사용중인) count가 1초간격으로 출력.
    },1000);
}//? 5. start함수가 종료되어도 삭제되지 못하고 계속 유지되면서 count 값이 이어져간다.(closure)

// case. 5-2 익명함수 클로저
function outerFunction(name){
    var output = 'Hello?' + name + '...!'; //? 1. outerFunction 함수 실행시 output변수 초기화 및 생성
    return function(){//? 2. 익명함수를 outerFunction이 실행된 위치로 return.
        return output; //? 3. 익명함수로 지역변수 output을 return(closure)
    }
}
var first = outerFunction("JavaScript");
var second = outerFunction("JQuery");
/*
    ! closure를 사용하면 좋은 점은?
    * 연관성 있는 변수와 기능을 하나의 함수로 묶어 놓고 독립적으로 여러개(번)을 실행시킬 수 있다.
    ? 함수 내부에 data가 만들어지기 때문에 함수 외부에서 수정할 수 없는 data를 생성하는것 역시 가능.
    ? 대표적인 데이터 유형에는 민감한 개인정보 = privateData 등이 있다.
*/