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