/*
    ? function (함수)

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/
// *case. 1 필요성
/* 1차 - 하나부터 열까지 손으로 쳐야함
document.write("안녕, 방가와","<br>"); 
document.write("안녕, 방가와","<br>"); 
document.write("안녕, 방가와","<br>"); 
*/
/* 2차 - 시작과동시 loop가 가동된다. / loop가 가동된 이후 횟수를 수정할 수 없다.
var comment = '안녕, 방가와';
for(var i = 0; i<3; i++){
    document.write(comment,"<br>");
}
*/
function helloFunc(count){
    var comment = "안녕, 방가와";
    for(var i = 0; i<count; i++){
        document.write(comment,"<br>");
    }
}
// *case.2 매개변수(parameter)가 있는 함수 만들기
// ? 함수내 정해진 변수의 value(값)를 변경하여, 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결하기 위함.
function sumParam(num1, num2){
    var result = num1 + num2;
    alert("두 수의 합은 = " + result);
}
// *case.3 arguments(가변-변할수있는 인자) - 매개변수의 자리가 없어도 있는것처럼..
/*
    ? arguments - 배열인듯 배열아닌 배열같은...
    * arguments 객체(object)는 모든 함수 안에서 사용하는 지역변수.
    * arguments를 이용해서 함수내 인수들을 참조 할 수 있고 이 객체의 함수에 전달된 각 인수항목을 포함한다.
    * 단, arguments는 array와 비슷해보이지만 length를 구하는 방식을 제외하고는 array와는 다르다.
    * 배열이 필요하다면 변환하여 사용할 수는 있다.
*/
function sumAll(){
    console.log(typeof(arguments) + ':' + arguments.length);
    var willReturn = 0;
    for(var i = 0; i<arguments.length; i++){
        willReturn += arguments[i];
    }
    console.log(willReturn);
}
function sumAllEX(){
    var willReturn = 0;
    for(var i in arguments){ //? for in loop는 ie9이하 작업 불가.
        willReturn += arguments[i];
    }
    return willReturn;
}
// *case. 4 "자신의 이름"의 나이는 "자신의 나이"세 입니다. 를 arguments를 이용해 만들어보기.
function showInfo(){
    console.log(" 0번방 = " + arguments[0]);
    console.log(" 1번방 = " + arguments[1]);
    alert(arguments[0] +"의 나이는" + arguments[1] + "세 입니다.");
}

/*
    ?return (리턴)
    * 함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 불가.
    * 이 때 매개변수를 활용하면 함수 내부로 data를 전달 할 수 있는데, return value는 이와 반대 되는 값.
    * 즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력 부라면, 리턴값은 함수 내부에서 처리한 결과를 함수 외부로 전달하기 위해 사용하는 출력 부.


    !ex.1 함수f(x)안에 넣는 값이 매개변수, 결과로 나오는 x*x 가 리턴값.
       * function f(x) { return x * x; }
       * alert(f(3));

    !ex.2 alert에서 매개변수를 두개를 선언하면 추가된 매개변수를 무시한다.
    //*(매개변수가 초과 됐을 시) 또한 원래 함수의 매개변수보다 적게 입력하면 undefined를 출력한다.
        alert('기존매개변수', '추가매개변수');
        prompt('기존매개변수');
*/
function sumReturn1(num1,num2){
    var result = num1 + num2;
    return result;
}
function infiniteSum(){
    var sum = 0; //?
    var count = 1; //?
    while(true){ //? 무한반복
        var value = parseInt(window.prompt("숫자만 입력해라.")); //?
        if(value ==0){ //?
            document.write("종료."); //?
            return; //?
        }
        sum += value; //?
        document.write(count + ". " + sum + "<br>"); //?
        count++; //?
    }
    document.write("총 " + count + "번 실행함."); //?
}