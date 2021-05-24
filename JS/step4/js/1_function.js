/*
    ? function (함수)

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.
*/

// *exp.1 
/*
document.write('안녕. 반가워요','<br>');
document.write('안녕. 반가워요','<br>');
document.write('안녕. 반가워요','<br>');
helloExp();
function helloExp(){
    for (var i = 0; i < 3; i++){
        document.write('안녕. 반가워','<br>');
    }
}
*/
// *case.1 매개변수(Parameter)가 있는 함수 만들기
// ? 함수 = 폐쇄적 = 기존의 함수가 실행된 이후 functionLC(호출 > 실행 > 종료) => 접근불가 = 안으로 data를 전달할수도 없고, 안의 data를 밖으로 빼낼 수도 없다.

function sumParam(num1, num2){
    var result = num1 + num2;
    alert('두 수의 합은 = ' + result);
}

// *case.2 arguments - 매개변수가 없어도 있는것처럼.(가변인자함수 - 배열은 아닌데 배열처럼사용.)
/*
    ?arguments? 
    arguments 객체는 모든 함수 안에서 사용하는 지역변수다.
    arguments를 이용해 함수내 인수들을 참조 할 수 있고 이 객채의
    함수에 전달된 각 인수항목을 포함한다.
    단 arguments는 Array와 비슷해보이지만 length를 구하는것을 제외
    Array와 다르다. 하지만 필요에 따라 Array로 변환하여 쓸수있다.
*/

function sumAll(){
    document.write(typeof(arguments) + ' : ' + arguments.length);
}
function sumAllRun(){
    var willReturn = 0;
    for (var i in arguments){
        willReturn += arguments[i];
    }
    return willReturn;
}
/*
    ?return (리턴)
    함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 혹은 내부로 접근 할 수 없다.
    이때 매개변수를 활용하면 함수 내부로 data를 전달 할 수 있는데, return value는 이와 반대 되는 값.
    즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력 값이라면, 리턴값은 함수 내부에서 처리한 결과 값을
    함수 외부로 전달하기 위해 사용하는 값.

    !ex.1 함수 f(x)안에 넣는 값이 매개변수. 결과로 나오는 x * x 가 return value;
    function f(x){
        return x * x;
    }
    alert(f(3));
*/
// *case.3 두 수를 매개변수로 받고, 두 값을 더한 결과값을 return하는 함수를 만들어보자.
function sumReturn1(num1,num2){
    var result = num1 + num2;
    return result;
}
/*
alert(sumReturn1(13,26));
document.write(sumReturn1(13,26));
console.log(sumReturn1(13,26));
*/
// *case.4 무한반복을 하며 숫자를 입력받고 입력받은 수의 합을 화면에 출력하는 함수를 만들어보자.
// ! 단 입력값이 0이면 즉시 실행을 멈추게 한다.
function infiniteSum(){
    var sum = 0;
    var count = 1;

    while(true){
        var value = parseInt(window.prompt('숫자만 입력'));
        if(value == 0){
            document.write('반복연산 종료');
            return; //? return은 함수에서 밖으로, break는 반복에서 밖으로.
        }

        sum += value;
        document.write(count + '번 실행.' + sum + '<br>');
        count++;
    }
    document.write('총' + count + '번 실행.');
}