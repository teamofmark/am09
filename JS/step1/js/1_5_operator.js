/* 
    ? 기본사칙(숫자열) 연산자
    * +, -, *, / 나누기, % 나머지, () 우선
    
    ? 문자열 연산자
    * + 문자열을 합친다.

    ? 복합 대입 연산자		
    * += 기존 변수의 값에 값을 더함 , -= 기존 변수의 값에 값을 뺌
    * *= 기존 변수의 값에 값을 곱함 , /= 기존 변수의 값에 값을 나눔
    * %= 기존 변수의 값에 나머지를 구함. 	
    * ex> a = a + 10; > a += 10;

    ? 증감 연산자
    * ++ 1씩 증가, -- 1씩 감소

    ? 조건비교 연산자
    * >= 좌변이 우변보다 크거나 같다.
    * <= 우변이 좌변보다 크거나 같다.
    * > 좌변이 크다.
    * < 우변이 크다.
    * == 좌변과 우변이 같다.
    * != 좌변과 우변이 다르다.
    * ex> 
    if(273 < 52){
        alert('273은 52보다 작습니다.');
    }
    if(273 > 52){
        alert('273은 52보다 큽니다.');
    }
    참이면 실행하고 거짓이면 무시한다.

    ? 논리 연산자
    * &&(곱) 그리고, ||(합, verticalBar) 이거나
    
    ? 논리 부정연산자
    * !
    * ex>
    alert(!true);
    alert(!false);
    참을 거짓으로, 거짓을 참으로 바꾼다.

    ? 접근 연산자
    * .
*/
// * case.1 10이 저장된 변수a, 숫자 20, 그리고 30을 더해서 result 변수에 저장후 출력.
function numbOP1(){
    var a = 10;
    var result = a + 20 + 30;
    console.log(result);
}
// * case.2 50이 저장된 변수a, 20이 저장된 변수 b를 곱한 값을 10으로 나누어 result 변수 저장/출력.
function numbOP2(){
    var a = 50;
    var b = 20;
    // var result =;
    console.log(a*b/10);
}
// *case.3 ul, li 구조의 tag를 html page 에 삽입 해보기.
function operatorEx(){
    var list = '';
    list += '<ul>';
    list += '   <li>Hello</li>';
    list += '   <li>JS..!</li>';
    list += '</ul>';
    document.body.innerHTML = list;
}
// *case.4 증감연산자가 뒤로 올 경우
function numberPlusAfter(){
    var number = 10;
    console.log(number++); //? 예상 : . 
    console.log(number++); //? 예상 : .
    console.log(number++); //? 예상 : .
}
function numberPlusBefore(){
    var number = 10;
    console.log(++number); //? 예상 : .
    console.log(++number); //? 예상 : .
    console.log(++number); //? 예상 : .
}
// todo. 증감연산자복합.
function numberPlusTodo(){
    var number = 10; //? 변수 선언 및 초기화
    console.log(number++); // ? 출력 : 10 / 현재 : 11 
    console.log(--number); // ? 출력 : 10 / 현재 : 10
    console.log(++number); // ? 출력 : 11 / 현재 : 11
    console.log(number--); // ? 출력 : 11 / 현재 : 10
    console.log(number++); // ? 출력 : 10 / 현재 : 11
    console.log(++number); // ? 출력 : 12 / 현재 : 12
    console.log(--number); // ? 출력 : 11 / 현재 : 11
    console.log(number++); // ? 출력 : 11 / 현재 : 12
    console.log(++number); // ? 출력 : 13 / 현재 : 13.
    console.log(number); //? 13.
}
// * case. 6 숫자 10이 담긴 변수 a 와 숫자 20이 담긴 변수b 의 크기를 비교하여 결과를 출력.
function compareOperator1(){
    var a = 10;
    var b = 20;
    var result = a>b;
    console.log("10 > 20 = " + result);
}
// todo.5 숫자 10이 담긴 변수a 와 숫자 20이 담긴 변수b 가 다른지 비교하여 결과를 출력.


// todo.6 다음 코드를 작성 후 결과를 예상한 다음 출력하라.
function compareOperator4(){
    console.log(30 > 20 > 10);
}

// todo.6-1 5번예제를 정상적인 결과가 출력되도록 수정.
function compareOperator4R(){

}