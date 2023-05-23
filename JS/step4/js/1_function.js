/*
    ? function (함수)

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/
// * case. 1 왜 만들었냐.
    // * step. 1 왜 불편했냐
    /*
    document.write('안녕? 방가와',"<br>");
    document.write('안녕? 방가와',"<br>");
    document.write('안녕? 방가와',"<br>");
    */
    // *step. 2 반복시키자
    function helloExp(){
        var comment = '안녕? 방가와!';
        for(var i = 0; i < 3; i++){
            document.write(comment,'<br>');
        }
    }
    function hello(){
        var comment = 'hello...it,s me';
        for(var i = 0; i < 3; i++){
            document.write(comment,'<br>');
        }
    }
// *case. 2 매개변수(parameter)가 있는 함수 만들기.
// ? parameter = 매개변수 = 인자 -> 함수내 정해진 변수의 value를 변경하여, 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결하기위함.
function sumParam(numb1,numb2){
    var result = numb1 + numb2;
    alert('두 수의 합은 = ' + result);
}

// *case. 3 매개변수의 자리가 없어도 있는 것처럼...arguments
// ? arguments = 가변인자함수. (변하는 것이 가능한 매개변수) - 배열인듯 배열아닌 배열같은...
/*
    ? arguments
    * arguments 객체(object)는 모든 함수 안에서 사용하는 지역변수.
    * arguments를 이용해서 함수내 인수들을 참조 할 수 있고 이 객체의 함수에 전달된 각 인수항목을 포함한다.
    * 단, arguments는 array와 비슷해보이지만 length를 구하는 방식을 제외하고는 array와는 다르다.
    * 필요에 따라 array로 추가 변환하여 사용 할 수 있다.
*/

    // * step. 1
function sumAll(){
    console.log(typeof(arguments) + ' : ' + arguments.length);
    var willReturn = 0;
    for(var i = 0; i<arguments.length; i++){
        willReturn += arguments[i];
    }
    console.log(willReturn);
}
function sumAllEx(){
    console.log(typeof(arguments) + ' : ' + arguments.length);
    var willReturn = 0;
    for (var i in arguments){ //? ECMA script
        willReturn += arguments[i];
    }
    return willReturn;
}
// *case. 4 "자신의 이름"의 나이는 "자신의 나이"세. MBTI "XXXX" 입니다. 를 arguments를 이용해 만들어보기.
function showInfo(){
    console.log("0 = " + arguments[0]);
    console.log("1 = " + arguments[1]);
    console.log("2 = " + arguments[2]);
    alert(arguments[0] + '의 나이는' + arguments[1] + '세.' + 'MBTI 는' + arguments[2] +'입니다.');
}
/*
    ? return
    * 함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 불가.
    * 이 때 매개변수를 활용하면 함수 내부로 data를 전달 할 수 있는데, return value는 이와 반대 되는 값.
    * 즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력 부라면, 리턴값은 함수 내부에서 처리한 결과를
    * 함수 외부로 전달하기 위해 사용하는 출력 부.

 */
// *case. 5 return 기본 문법
function f(x){
    return x * x; //! 호 출 부 리 턴.
}
// console.log(f(3));
// document.write(f(5));
// alert(f(2));