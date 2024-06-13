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