/*
    ? function (함수)

    * 기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    * 중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/

// *case. 1 sayHi(); 인사함수 만들기.
function sayHi(){
    var comment = 'Hi, Welcome';
    for(i = 0; i < 100; i++){
        document.write(comment, '<br>');
    }
}

// *case. 2 매개변수(Parameter)가 있는 함수.
function sumParam(num1, num2){
    var result = num1 + num2;
    alert ('두 수의 합은 = ' + result);
}

// *case. 3 매개변수의 자리가 없어도 있는것처럼..arguments = 가변인자함수

function sumAll(){
    alert(typeof(arguments) + ' : ' + arguments.length);
}

// *case. 4 매개변수의 자리가 없는 곳에 입력된 매개변수를 arguments를 이용해 출력.
function showInfo(){
    console.log("arguments Index 0 = " + arguments[0]);
    console.log("arguments Index 1 = " + arguments[1]);
    alert(arguments[0] + '의 나이는' + arguments[1] + '세 입니다.');
}

// *case.5 es6[ECMA Script6] arguments For
function sumES6(){
    var willReturn = 0; //?
    for (var i in arguments){ //?
        willReturn += arguments[i]; //?
    }
    return willReturn; //?
}