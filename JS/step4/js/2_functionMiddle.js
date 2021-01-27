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

// !중첩함수
// ? 지역변수처럼 함수 내부에서만 활용할 경우, 중복 코드나 코드그룹핑을 내부에서 처리해야 될 경우.

// *case. 1 1초에 한번씩 'hi'출력.
function sayHi(){
    var count = 0;
    setInterval(function(){
        count ++;
        document.write(count + '. hi <br>');
    },1000);
}

// *case. 2 중첩함수를 이용해 사칙연산계산기
function calculator(op, numb1, numb2){
    var result = '';
    switch(op){
        case '+':
            result = add(numb1, numb2);
            break;
        case "-" :
            result = sub(numb1, numb2);
            break;
        case "*" :
            result = mul(numb1, numb2);
            break;
        case "/" :
            result = div(numb1, numb2);
            break;
        default:
            result = "잘못된 입력값 입니다.";
            break;
    }

    return result;

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
}
/*
    ? 이렇게 처리 할 경우 이전에 처리했던 (1_function.js todo.3)번과는 달리.
    ? add~div 함수들을 calculator 외부에서 사용할 수 없게 되는 대신 좀더 구조적인 코드로 접근할 수 있게 되는 것이기 때문에,
    ? 용도에 따라 맞게 사용해야 한다.
*/
// * case.3 중첩 함수와 중첩함수를 포함한 함수의 관계
function innerFunctionTest(){
    var a = 10;
    var b = 20;
    var c = 30;
    function outerFunc(){
        var b = 200;
        var c = 300;
        function innerFunc(){
            var c = 3000;

            console.log('1. =' + a); //? 실행시 자신과 인접한 함수 내부부터 해당 변수를 찾는다. 전역 영역까지 존재 하지 않을 시 undefined.
            console.log('2. =' + b);
            console.log('3. =' + c);
        }
        innerFunc();
    }
    outerFunc();
}

// *case.4 callBack 함수를 이용한 사칙연산계산기

function calculatorCallBack(op, numb1, numb2, callBack){
    var result = '';

    switch(op){
        case "+": {
            result = add(numb1, numb2);
            break;
        }
        case "-": {
            result = sub(numb1, numb2);
            break;
        }
        case "*": {
            result = mul(numb1, numb2);
            break;
        }
        case "/": {
            result = div(numb1, numb2);
            break;
        }
        default: {
            result = '잘못된 입력값입니다.';
            break;
        }
    }
    return result;
    
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
    
}