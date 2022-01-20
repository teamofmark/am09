/*

    ? while
    * 문법이 for에 비해 단조로워 무한루프(무한반복처리, 파일의 읽고쓰기, 데이터의 전송 및 출력)를 수행시키거나 할 시에 적합.
    
*/

// *case.1 password 1234가 입력되면 '접속승인' 아니면 '잘못 입력하였습니다.'
function pwCheck(){
    while(true){
        var value = window.prompt('패스워드를 입력하세요.');
        if(value == 1234){
            alert('접속승인!');
            break;
        }else{
            alert('잘못 입력하였습니다.');
        }
    }
}

// *case.2 while Continue
function whileContinue(){
    var i = 1;
    while(i<=10){
        i++;
        continue;
        document.write(i + '<br>');
    }
    document.write('최종 i = ' + i + '<br>');
}
// *case.3 while Break
function whileBreak(){
    var i = 1;
    while(i <= 10){
        break;
        i++;
        document.write(i + '<br>');
    }
    document.write('최종 i = ' + i + '<br>');
}
// todo. 구구단 숫자를 입력받아 출력하는 while문
// ? 1. 숫자입력받을 prompt 출력.
// ? 2. 숫자를 입력받으면 해당 구구단을 출력.
// ! 9단 이내로만 입력받기 ex> 9단을 넘길 시 '9단 이하로 입력하세요.'

function gugudan(){
    var guguNumb = window.prompt('구구단 숫자를 입력(1 ~ 9)');//? 숫자를 입력받는 부분
    var i = 1; //? 증가와 연산을 담당할 변수 (ex > i)
    if(guguNumb <= 9){
        while(i <= 9){
            document.write(guguNumb + 'x' + i + '=' + guguNumb*i + '<br>');
            //? 2 x 1 = 2 이런 식으로 출력할 구문
            i++;
            //? 반복됨에 따라 증가 해야하는 변수i
        }
        //? 9보다 작거나 같을때 까지 수행되어야 하는 반복
    } //? 9보다 작거나 같을때 까지 수행되어야 하는 조건
    else{
        alert('9단 이하로 입력하세요.');
    }//? 9보다 큰수나 다른것들을 예외처리
}


// todo. end가 입력될 때 까지 숫자를 계속해서 입력받아 합을 출력하고 prompt에는 수행 횟수를 출력.
// ? 1. end가 입력되기 전까지는 무한 prompt.(계속 더해지는.)
// ? 2. end가 입력되면 '입력이 종료되었습니다.' 최종결과 출력.
// ? 3. prompt 상단에 'x 번째 입력'
function sumNumb(){
    var i = 1; //? 카운트 변수
    var result = 0; //? 결과를 담을 변수
    while(true){
        var numb = window.prompt(i + '번째 입력'); //? 무한반복으로 입력 받기
        if(numb=="end"){ //? end 라는 값과 일치하면
            alert('입력이 종료되었습니다.');
            break; //? 반복중단 및 종료 경고창 출력.
        }
        result += parseInt(numb); //? 결과변수에 형변환후 더해서 저장.
        document.write('현재까지의 총합 : ' + result + '<br>'); //? 반복해서 result 값에 저장된 값을 출력.
        i++; //? 반복당 카운트 증가.
    }
}