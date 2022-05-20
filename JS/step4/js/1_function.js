/*
    ? function = 함수
    * 기존 반복문으로만 모든 복수사용부분을 해결 할 수 없기 때문에 만들어진 것.
    * 중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 유지보수의 용이성을 확보.
*/

// *case.1 함수의 필요성
/*
document.write("안녕? 방가와","<br>");
document.write("안녕? 방가와","<br>");
document.write("안녕? 방가와","<br>");
*/
/*
for (var i = 0 ; i < 3; i++){
    document.write("안녕? 방가와","<br>");
}
*/
function hello(){
    var comment = "안녕? 방가와";
    document.write(comment,"<br>");
}

// *case.2 매개변수(Parameter)가 있는 함수 만들기.
// ? 함수내 정해진 변수의 value를 변경하여 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결.
// ! 함수 = 폐쇄적.

function sumParam(num1, num2, num3){
    // ? 인자 수가 무조건 지켜져야 하는 단점.(수가 넘치면 무시되고, 모자르면 error).
    var result = num1 + num2 - num3;
    alert("두 수의 합은 = " + result);
}

// *case.3 가변인자함수 (arguments). - 배열인듯 배열아닌 배열같은.
/*
    ? arguments
    * arguments 객체(object)는 모든 함수 안에서 사용하는 지역변수.
    * arguments를 이용해서 함수내 인수들을 참조 할 수 있고 이 객체의 함수에 전달된 각 인수항목을 포함한다.
    * 단, arguments는 array와 비슷해보이지만 length를 구하는 방식을 제외하고는 array와는 다르다.
    * 필요에 따라 array로 추가 변환하여 사용 할 수 있다.
*/

function sumAll(){
    var willReturn = 0;
    for(var i = 0; i < arguments.length; i++){
        willReturn += arguments[i];
    }
    console.log(typeof(arguments) + ' : ' + arguments.length + ' / ' + willReturn);
}

function sumAllEX(){
    var willReturn = 0;
    for (var i in arguments){ //? for in. -> i = 0; i < arguments.length; i++
        willReturn += arguments[i];
    }
    return willReturn;
}

// ? 결론 : arguments = 약속되지 않은 임의 매개변수들.