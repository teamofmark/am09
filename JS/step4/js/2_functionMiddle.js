/*
    ! 함수의 종류

    *크게 나누면 사용자 정의 함수 와 자바스크립트 코어 함수(기본제공되는함수) 로 나뉜다.

    ? 용도에 따른 함수 종류
    * 1. 일반(기명,익명) 함수 - 지금까지 썼던 함수들
    * 2. 중첩 함수 - 함수 안에 함수가 있는 경우 중첩 함수.
    * 3. 콜백 함수 - 함수 실행 결과값을 리턴이 아닌 매개변수로 넘어온 함수를 호출하여 넘겨주는 방식.
    * 이 방식 자체를 콜백 이라 하며, 넘어온 매개변수(함수)가 콜백 함수.
    * 4. 클로저 함수 - 일반적인 함수의 경우 함수 호출에 의해 함수 내부의 실행구문을 모두 실행하게 되면
    * 함수 내부에서 만든 지역변수가 자동으로 사라지지만 어떤 경우에는 사라지지 않고 남는 경우가 있는데.
    * 이 현상 을 클로저라 부르고, 이 현상을 일으키는 함수를 클로저함수 라고 한다.
    * 5. 멤버함수 - 멤버함수는 클래스 내부에 만들어지며, 메서드라 불린다. 
*/
/*
    ? 함수의 그룹핑
    * 복잡한 기능을 담은 컴포넌트일 수록 하나의 함수안에 동작 코드를 모두 작성하면, 이후 재사용 및 수정, 유지보수가
    * 어려워 지기 떄문에, 각 기능별 함수를 만들어 분리하여 만드는 것이 재사용, 수정, 유지보수에 용이하다.

    ! grouping 순서
    * 1. 중복 코드 및 재사용 코드 를 찾고 함수화
    * 2. 중복 코드에서 변경되지 않는 부분과 변경되는 부분확인.
    * 3. 변경되는 부분을 매개변수화.
*/
// ! 중첩함수

//? 지역변수처럼 함수 내부에서만 활용되야 할 경우, 중복 코드나 코드 그룹핑을 내부에서 처리해야 할때

// *case. 1 1초에 한 번씩 hi 출력.
function sayHi(){
    var count = 0;
    setInterval(function(){
        count ++;
        document.write(count + '. hi <br>');
    }, 1000);
}
// *case. 2 중첩함수 방식의 사칙연산계산기

function calculator(op,numb1,numb2){
    // ! 선언 > 처리 > 출력.
    var result = '';
    switch (op) {
        case "+":
            result = add(numb1,numb2); //? console.log(add(20,10));
            break;
        case "-":
            result = sub(numb1,numb2); //? console.log(sub(20,10));
            break;
        case "*":
            result = mul(numb1,numb2); //? console.log(mul(20,10));
            break;
        case "/":
            result = div(numb1,numb2); //? console.log(div(20,10));
            break;
        default:
            result = '잘못된 연산자 입니다.';
            break;
    }
    return result;
    
    function add(numb1, numb2){
        var addResult = numb1 + numb2; 
        return addResult;
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
// ! 중첩 함수와 중첩함수를 포함한 함수의 관계

function innerFunctionTest(){
    var a = 10;
    var b = 20;
    var c = 30;
    function outerFunc(){
        var b = 200;
        var c = 300;
        function innerFunc(){
            var c = 3000;
            
            console.log('1. =' + a);
            console.log('2. =' + b);
            console.log('3. =' + c);
        }
        innerFunc();
    }
    outerFunc();
}

function calculatorCallBack(op, numb1, numb2, callBack){
    var result = '';

    switch(op){
        case "+":
            result = add(numb1,numb2);
            break;
        case "-":
            result = sub(numb1,numb2);
            break;
        case "*":
            result = mul(numb1,numb2);
            break;
        case "/":
            result = div(numb1,numb2);
            break;
        default:
            result = "잘못된 입력값입니다.";
            break;
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
    // ! 로직구현부
    callBack(result);
}
function addPrint(value){
    document.write('두 수의 합은' + value);
}
function subPrint(value){
    document.write("두 수의 차는" + value);
}
function mulPrint(value){
    document.write("두 수의 곱은" + value);
}
function divPrint(value){
    document.write("두 수의 나누기는" + value);
}