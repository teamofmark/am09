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