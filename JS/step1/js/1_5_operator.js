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

// *case. 1 10이 저장된 변수a, 숫자 20, 그리고 30을 더해서 result 변수에 저장후 출력.
function numbOP1(){
    var a = 10;
    var result = a + 20 + 30;
    console.log(result);
}

// *case. 2 50이 저장된 변수a, 20이 저장된 변수 b를 곱한 값을 10으로 나누어 result 변수에 저장후 출력.
function numbOP2(){
    var a = 50;
    var b = 20;
    var result = a*b/10;
    console.log(result);
}
// *case. 3 숫자 5를 2로 나눈 나머지.
function numbOP3(){
    var result = 5%2;
    console.log(result);
}
// *case. 4 'hi' 문자열 a 와 'WEB' 문자열 b 를 더하기.
function stringOP(){
    var a = 'hi';
    var b = 'WEB';
    console.log(a + b);
}
// *case. 5 ul,li 구조의 tag를 html page에 삽입후 출력.
function operatorEx(){
    var list = '';
    list += '<ul>';
    list += '   <li>Hello</li>';
    list += '   <li>JS!</li>';
    list += '</ul>';
    document.body.innerHTML = list;
}
// todo. 다음코드를 복합대입연산자를 이용하여 간소화.
function compareOperator(){
    var a = 10;
    a += 20; // todo.
    console.log('a = ' + a);
}

// todo. 나올 결과를 주석으로 예측하고 확인해보기
// ! 반드시 예측을 먼저 하고 확인 할 것.
function numberPlusAfter(){
    var number = 10; 
    alert(number++); //todo. 결과예측 : 11 -> 10 
    alert(number++); //todo. 결과예측 : 12 -> 11
    alert(number++); //todo. 결과예측 : 13 -> 12
    console.log(number);
}
// *case.6 연산자가 앞으로 올 경우
function numberPlusBefore(){
    var number = 10;
    alert(++number); //? 결과예측 : 10에 1을 더해서 11출력.
    alert(++number); //? 결과예측 : 11에 1을 더해서 12출력.
    alert(++number); //? 결과예측 : 12에 1을 더해서 13출력.
    console.log(number);
}
// todo. 증감연산자 복합
function numberPlusTodo(){
    var number = 10;
    number++; //? 결과 예측 :
    --number; //? 결과 예측 :
    ++number; //? 결과 예측 :
    number--; //? 결과 예측 :
    number++; //? 결과 예측 :
    ++number; //? 결과 예측 :
    --number; //? 결과 예측 :
    number++; //? 결과 예측 :
    ++number; //? 결과 예측 :
    console.log(number); //? 최종 확인 : 
}