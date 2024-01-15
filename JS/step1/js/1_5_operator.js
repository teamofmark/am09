/* 
    ? 기본사칙(숫자열) 연산자
    * +, -, *, / 나누기, % 나머지, () 우선
    
    ? 문자열 연산자
    * + 문자열을 합친다.

    ? 복합 대입 연산자		
    * += 기존 변수의 값에 값을 더함 , -= 기존 변수의 값에 값을 뺌
    * *= 기존 변수의 값에 값을 곱함 , /= 기존 변수의 값에 값을 나눔
    * %= 기존 변수의 값에 나머지를 구함. 	
    * var a = 20;
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
    var result = a+20+30;
    console.log('합산 : ' + result);
}
// *case.2 50이 저장된 변수a, 20이 저장된 변수 b를 곱한 값을 10으로 나누어 result 변수에 저장후 출력.
function numbOP2(){
    var a = 50;
    var b = 20;
    var result = a*b/10;
    console.log('복합연산 : ' + result);
}
// *case.3 ul, li 구조의 tag를 html page에 삽입 후 출력.
function operatorEx(){
    var list = '';
    list += '<ul>';
    list += '   <li>Hello</li>';
    list += '   <li>JS..!</li>';
    list += '</ul>';
    document.body.innerHTML = list;
}
// *case.4 연산자가 뒤로 올 경우
function numberPlusAfter(){
    // !실행먼저하지않기
    var number = 10;
    alert(number++); //? 예상결과 : 10 / 11 / 10(++), -> 10을 확인했을 때 이미 11로 변경된.
    alert(number++); //? 예상결과 : 20 / 12 / 11, --> 11을 확인했을 때 이미 12로 변경된.
    alert(number++); //? 예상결과 : 30 / 13 / 12 ---> 12를 확인했을 때 이미 13으로 변경된.
}
// *case.5 연산자가 앞으로 올 경우
function numberPlusBefore(){
    var number = 10;
    alert(++number); //? 예상결과 : 11
    alert(++number); //? 예상결과 : 12
    alert(++number); //? 예상결과 : 13
}
// todo. 증감연산자복합.
function numberPlusTodo(){
    var number = 10;
    console.log(number++); // ? 출력숫자 : 10 / 현재숫자 : 11 
    console.log(--number); // ? 출력숫자 : 10 / 현재숫자 : 10  
    console.log(++number); // ? 출력숫자 : 11 / 현재숫자 : 11  
    console.log(number--); // ? 출력숫자 : 11 / 현재숫자 : 10  
    console.log(number++); // ? 출력숫자 : 10 / 현재숫자 : 11 
    console.log(++number); // ? 출력숫자 : 12 / 현재숫자 : 12  
    console.log(--number); // ? 출력숫자 : 11 / 현재숫자 : 11  
    console.log(number++); // ? 출력숫자 : 11 / 현재숫자 : 12  
    console.log(++number); // ? 출력숫자 : 13 / 현재숫자 : 13  
    console.log(number); // ? 출력&현재숫자 : 13. 
}
