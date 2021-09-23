/*
    ? function (함수)

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/
// *case.1 매개변수(Parameter)가 있는 함수

function sumParam(num1, num2){
    var result = num1 + num2;
    alert('두 수의 합은 = ' + result);
}

// *case.2 arguments(가변인자함수) = 매개변수의 자리가 없어도 있는것처럼..배열방식으로 받는다.
/*
    ? arguments 객체는 모든 함수안에서 사용하는 지역 변수.
    ? arguments를 이용해 함수내 인수들을 참조 할 수 있고 이 객체의 함수에 전달된 각 인수항목을 포함.
    ? arguments는 array(배열)와 비슷해 보이지만 length를 구하는 것을 제외 하고 array와 다르다.
    ! 필요에따라 array로 변환하여 사용 가능.
*/
function sumAll(){
    alert(typeof(arguments) + ':' + arguments.length);
}

function sumAllExp(){
    var willReturn = 0;
    for (var i in arguments){
                //for in 반복문은 IE9 이상에서만 가능. vue.js 등의 프론트엔드 프레임워크에서 사용.
        willReturn += arguments[i];
        // willReturn 이라는 변수에 arguments(매개변수의 배열) 내의 값을 더해서 대입해라. 배열의 갯수만큼.
    }
    return willReturn;
    // 나온값을 리턴하라.
}

// *case.3 매개변수의 자리가 없는 곳에 입력된 매개변수를  arguments를 이용하여 출력.
function showInfo(){
    console.log("0 = " + arguments[0]);
    console.log("1 = " + arguments[1]);
    alert(arguments[0] + '의 나이는' + arguments[1] + '세 입니다.');
}
/*
    ? return (리턴)
    ? 함수는 함수내부라는 범위안에 갇히기 때문에, 한번 실행되면 함수 외부 접근 불가.
    ? 매개변수,가변인자를 활용하면 함수 내부로 데이터를 전달 할 수 있는데 return value는 그와 반대되는 개념.
    ? 즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력값이라면, 리턴값은 함수 내부에서 처리한 결과값을 함수 외부로 전달하기 위해 사용하는 값.

    !ex
    function f(x){
        return x * x;
    }

    alert(f(3));
 */

// *case.4 두 수를 매개변수로 받고, 두 값을 더한 결과를 리턴하는 함수.

function sumReturn1(num1,num2){
    var result = num1 + num2;
    return result; //? 지를 불러주는 위치에 return. = 호출부리턴.
}