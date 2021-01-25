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

/*
    ?return (리턴)
    함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 할 수 없다.
    이때 매개변수를 활용하면 함수 내부로 데이터를 전달 할 수 있는데, 리턴값은 이와 반대 되는 값.
    즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력 값이라면, 리턴값은 함수 내부에서 처리한 결과값을
    함수 외부로 전달하기 위해 사용 하는 출력값.


    !ex.1 함수f(x)안에 넣는 값이 매개변수, 결과로 나오는 x*x 가 리턴값.
        function f(x) { return x * x; }
        alert(f(3));

    !ex.2 alert에서 매개변수를 두개를 선언하면 추가된 매개변수를 무시한다.
    //*(매개변수가 초과 됐을 시) 또한 원래 함수의 매개변수보다 적게 입력하면 undefined를 출력한다.
        alert('기존매개변수', '추가매개변수');
        prompt('기존매개변수');
*/
// *exp.5 두 수를 매개변수로 받고, 두 값을 더한 결과값을 리턴하는 함수를 만들어보자.

function sumReturn1(num1, num2){
    var result = num1 + num2;
    return result;
}

// *exp.6 무한반복을 돌며 숫자를 입력받고 입력받은 수의 합을 화면에 출력.
// ! 단, 입력값이 0 이면 즉시 중지.

function infiniteSum(){
    var sum = 0;
    var count = 1;
    while(true){
        var value = parseInt(window.prompt('숫자만 입력해라.'));
        if(value == 0){
            document.write('0이 입력되었으므로 종료합니다.');
            return;
        }

        sum += value;
        document.write(count + '.' + sum + '<br>');
        count++;
    }
    document.write('총' + count + '번 실행함.');
}