/*
    ! 함수의 종류

    *크게 나누면 사용자 정의 함수 와 자바스크립트 코어 함수(기본제공되는함수) 로 나뉜다.

    ? 용도에 따른 함수 종류
    * 1. 일반 함수 - 지금까지 썼던 함수들
    * 2. 중첩 함수 - 함수 안에 함수가 있는 경우 중첩 함수.
    * 3. 콜백 함수 - 함수 실행 결과값을 리턴이 아닌 매개변수로 넘어온 함수를 호출하여 넘겨주는 방식.
    * 이 방식 자체를 콜백 이라 하며, 넘어온 매개변수(함수)가 콜백 함수.
    * 4. 클로저 함수 - 일반적인 함수의 경우 함수 호출에 의해 함수 내부의 실행구문을 모두 실행하게 되면
    * 함수 내부에서 만든 지역변수가 자동으로 사라지지만 어떤 경우에는 사라지지 않고 남는 경우가 있는데.
    * 이 현상 을 클로저라 부르고, 이 현상을 일으키는 함수를 클로저함수 라고 한다.
    * 5. 멤버함수 - 멤버함수는 클래스 내부에 만들어지며, 메서드라 불린다. 
*/

// *case. 1 중첩함수와 중첩함수를 포함한 함수의 관계

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

// *case. 2 callBack 함수를 이용한 계산기.
//? 함수 내부의 처리 결과값을 함수 외부로 내보낼 때 사용 되는 함수.

function calculatorCallBack(op, numb1, numb2, callBack){
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
            result = '잘못된 입력값 입니다.';
        }
    }

    function add(numb1, numb2){
        return numb1 + numb2;
    }
    function sub(numb1, numb2){
       return numb1 - numb2;
    }
    function mul(numb1, numb2){
       return numb1 * numb2;
    }
    function div(numb1, numb2){
       return numb1 / numb2;
    }
   //  ! 여기까지가 로직 구현부
   callBack(result);
   
}
function addPrint(value){
    document.write('두 수의 합은' + value);
}
function subPrint(){

}
function mulPrint(){

}
function divPrint(){

}
//! calculatorCallBack("op", numb1, numb2, addPrint); addPrint(처리함수)가 실행되면서 처리부분 실행.
//? 결과적으로 로직을 구현하는 부분과 처리부분을 나누어 서로를 조립 및 연결 하여 사용할 수있다.
