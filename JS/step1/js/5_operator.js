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
// case.1 10이 저장된 변수 a, 숫자 20, 그리고 문자 "30"을 더해서 result 변수에 저장 후 출력.
function numbOP1(){
    var a  = 10;
    var result = a + 20 + parseInt("30");
    console.log("합산 : " + result);
}
// case.2 50이 저장된 변수 a, 20이 저장된 변수 b를 곱한 값을 10으로 나누어 result 변수에 저장 후 출력
function numbOP2(){
    var a = 50;
    var b = 20;
    var result = a*b/10;
    console.log("복합연산 : " + result);
}
// case.3 'hi'가 담긴 변수 a 와 'WEB'이담긴 변수 b를 합쳐 'hi WEB'을 console 에 출력.
function stringOP(){
    var a = 'hi';
    var b = 'WEB';
    console.log(a + b);
}
// case.4 ul,li구조의 tag를 html페이지에 삽입 및 출력 해보자.
function operatorEX(){
    var list = ''; //? tag가 안담긴 상황이 list== null / tag 가 담긴 상황이 되면 list != null 으로 잡아내기
    list += '<ul>';
    list += '   <li>안농?</li>';
    list += '   <li>스크립트야?</li>';
    list += '</ul>';
    document.body.innerHTML = list;
}
// case.5 연산자가 뒤로올 경우를 예상해보기
function numberPlusAfter(){
    var number = 10;
    alert(number++); //? 예상 되는 값 : 11 / 10
    alert(number++); //? 예상 되는 값 : 12 / 11
    alert(number++); //? 예상 되는 값 : 13 / 12
    console.log(number);// 하지만 최종 13으로 마무리 되고 우리가 확인할 수 없음.
}
// case.6 연산가 앞으로 올 경우 예상해보기
function numberPlusBefore(){
    var number = 10;
    alert(++number);
    alert(++number);
    alert(++number);
    console.log(number);
}
// todo 증감연산자 복합결과 예상하기
function numberPlusTodo(){
    var number = 10;
    console.log(number++); //? 10
    console.log(--number); //? 10
    console.log(++number); //? 11
    console.log(number--); //? 11
    console.log(number++); //? 10
    console.log(++number); //? 12
    console.log(--number); //? 11
    console.log(number++); //? 11
    console.log(++number); //? 13
    console.log(number); //? 13
}
// case.7 다음 코드를 증감연산자를 이용하여 간소화.
function numberOperator(){
    var a = 10;
    // a = a + 1;
    // a+=1;
    // a -= 1;
    // a *= 1;
    a /= 1;
    console.log("a = " + a);
}
// case.8 숫자 10이 담긴 변수 a와 20이 담긴 변수 b 의 크기를 비교해봐.
function compareOp1(){
    var a = 10;
    var b = 20;
    var result = a <= b;
    console.log ("a가 b보다 작거나 같냐?" + result);
}
// case.9 숫자 10이 담긴 변수a, 20이 담긴 변수 b가 같은지 비교하여 결과를 출력.
function compareOp2(){
    var a = 10;
    var b = 20;
    var result = a == b;
    console.log("a =  b ?" + result);
}
// case. 10 숫자 10이 담긴 변수a, 20이 담긴 변수 b의 올바른 비교식을 세워라.
function compareOp3(){
    var a = 10;
    var b = 20;
    var result = a != b;
    console.log("a와 b가 다르다." + result);
}
// case. 11 a변수에는 '여자', b변수에는 '웹 디자이너'라는 값이 저장되어 있다. 담겨있는 두 값이 모두 맞는지 점검.
function logicalOp1(){
    var a = "여자";
    var b = "웹퍼블리셔";
    var result = (a == "여자")&&(b == "웹디자이너");
    console.log("result = " + result);
}
// case. 12 a변수에는 '남자', b변수에는 '웹퍼블리셔'라는 값이 저장되어 있다. 담겨있는 두 값중 하나라도 맞는지 점검.
function logicalOp2(){
    var a = '여자';
    var b = '웹퍼블리셔';
    var result = (a=='남자') || (b=='웹퍼블리셔');
    console.log('result = ' + result);
}
// todo. 다음 코드의 잘못된 결과를 올바르게 출력될 수 있도록 해결해보기
function compareTodo(){
    console.log(30 > 20 && 20 > 10); //? 지능 - true / 처리 - false = 간극 해결.
    // ? 1. 컴퓨터는 한번에 한개만 처리할 수 있다.
    // ? 2. 30 과 20의 비교를 먼저 처리 하겠지? -> true
    // ? 3. true >10 을 비교하라 - -_-...아니.....형변환하는 개념이 몇개냐고...암시적 or 명시적
    // ? 4. 암시적형변환후 -> 1 > 10을 비교 -> false
}