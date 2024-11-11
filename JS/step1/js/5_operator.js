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
    * ex> a = a + 10; > a += 10; / a = a * 10; > a*=10;

    ? 증감 연산자
    * ++ 1씩 증가, -- 1씩 감소 / loop 엔진역할

    ? 조건비교 연산자
    * >= 좌변이 우변보다 크거나 같다.
    * <= 우변이 좌변보다 크거나 같다.
    * > 좌변이 크다.
    * < 우변이 크다.
    * == 좌변과 우변이 같다. |ex> a=2,b,1  / a==b -> 
    * != 좌변과 우변이 다르다. |ex> a=2,b,1 / a!=b -> 
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
    * ! / toggleStatus 필수 값.
    * ex>
    alert(!true);
    alert(!false);
    참을 거짓으로, 거짓을 참으로 바꾼다.

    ? 접근 연산자
    * .
*/

// * case.1 10이 저장된 변수a, 숫자20, 그리고 30을 더해서 result변수에 저장 후 출력.
function numbOP1(){
    var a = 10;
    var result = a+20+30;
    console.log('합산 : ' + result);
}

// * case.2 50이 저장된 변수a, 20이 저장된 변수 b를 곱한 값에 10을 나누어 result 변수에 저장 후 출력.
function numbOP2(){
    var a = 50;
    var b = 20;
    var result = a*b/10;
    console.log('복합연산 : ' + result);
}
// todo. 1 숫자 5를 2로 나누었을 때 나머지 값이 몇인지 result 변수에 저장후 console에 출력.
function numbOP3(){
    var result = 5%2;
    console.log(result);
}
// todo. 2 'hi'가 담긴 변수 a 와 'WEB'이 담긴 변수 b를 합쳐 'hiWEB'을 console에 출력.
function stringOP(){
    var a = 'hi';
    var b = 'web';
    console.log(a+b);
}

// todo. 3 다음 코드를 복합대입연산자를 이용하여 간소화 해보기.
function compareOperator(){
    var a = 10;
    // a = a + 20;
    a+=20;
    console.log('a = ' + a);
}
// case.3 ul안에 li구조의 tag들을 삽입하여 html에 출력.
function operatorEx(){
    var list = ''; // 무엇이든 다 담을 수 있는 변수
    list += '<ul>';
    list += '   <li>Hello</li>';
    list += '   <li>JS...!</li>';
    list += '</ul>';
    document.body.innerHTML = list;
}
// case.4 연산자가 뒤로 올 경우-
function numberPlusAfter(){
    var number = 10;
    alert(number++); // todo. 결과값 : 11(x) -> 10 -> 11
    alert(number++); // todo. 결과값 : 12(x) -> 11
    alert(number++); // todo. 결과값 : 13(x) -> 12
    console.log(number);
}
// case.5 연산자가 앞으로 올 경우-
function numberPlusBefore(){
    var number = 10;
    alert(++number); // todo. 결과값 : 11
    alert(++number); // todo. 결과값 : 12
    alert(++number); // todo. 결과값 : 13

}
// todo. 증감 연산자적용의 이해 
function numberPlusTodo(){
    var number = 10;
    console.log(number++); // todo. 출력 : 10 / 현재 : 11 
    console.log(--number); // todo. 출력 : 10 / 현재 : 10  
    console.log(++number); // todo. 출력 : 11 / 현재 : 11  
    console.log(number--); // todo. 출력 : / 현재 :  
    console.log(number++); // todo. 출력 : / 현재 :  
    console.log(++number); // todo. 출력 : / 현재 :  
    console.log(--number); // todo. 출력 : / 현재 :  
    console.log(number++); // todo. 출력 : / 현재 :  
    console.log(++number); // todo. 출력 : / 현재 :  
    console.log(number); // todo. 최종결과 : 13.
}
// * case. 6 숫자 10이 담긴 변수a 와 숫자 20이 담긴 변수b 의 크기를 비교하여 결과를 출력.
function compareOperator(){
    var a = 10;
    var b = 20;
    var result = a>b;
    console.log("a > b = " + result);
}
// * case. 7 숫자 10이 담긴 변수a 와 숫자 20이 담긴 변수b 가 같은지 비교하여 결과를 출력.
function compareOperator2(){
    var a = 10;
    var b = 20;
    // var result = a==b;
    var result = a!=b;
    console.log("a = b ?" + result);
}
// * case. 8 a변수에는 '여자', b변수에는 '웹디자이너' 라는 값이 저장되어 있다. 담겨있는 두 값이 모두 맞는지 result변수에 저장후 출력.
function logicalOperator1(){
    var a = '남자';
    var b = '웹디자이너';
    var result = (a=='여자')&&(b=='웹디자이너');
    console.log("result = " + result);
}
// * case. 9 a변수에는 '남자', b변수에는 '웹퍼블리셔' 라는 값이 저장되어 있다. 담겨있는 두 값중 하나라도 맞는지 result변수에 저장후 출력.
function logicalOperator2(){
    var a = '여자';
    var b = '웹디자이너';
    var result = (a=="남자") || (b=="웹퍼블리셔");
    console.log("result = " + result);
}
// todo. 다음 코드의 실행하여 문제점을 찾아 수정하기
function compareOperator3(){
    console.log(30 > 20 && 20 > 10); //? false
    // ! true > 10 -> 1 > 10 -> false.
}