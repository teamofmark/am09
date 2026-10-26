/*
    ? while
    while 반복문은 조건이 참일 경우 무한 반복한다.
    (물론 조건이 정해진다면 for문 처럼도 사용 가능하지만, 
        용도를 구분지어 사용하는 것이 좋다.)
    정해진 횟수만큼의 반복은 for를 사용하지만, 무한반복처리, 파일 읽고쓰기 및 
    전송(java,php...), DB데이터 출력하기.
*/
// case.1 패스워드 '1234'가 입력될 때 까지 무한 실행되는 함수
function pwCheck(){
    while(true){
        var value = prompt('패스워드를 입력하세요.');
        if(value==1234){
            alert('접속승인');
            // ? 권한이 승인되었을 때 실행되어야 하는 함수( header > sideBox(search,cart,myAccount..))
            break;
        }else{
            alert('잘못된 값입니다.');
        }
    }
}
// case.2 구구단 숫자를 입력받아 출력하는 while (9단이 넘어갈시 '9단 이하로 입력하세요' 메시지 출력)
function gugudan(){
    // ! 이전 파일과 동일한 함수명은 상관 없으나, 실무에서는 특히 주의해야함. 상호 의견교류 필수
    var guguNumb = prompt('구구단 숫자를 입력(1~9)');
    var i = 1;
    /*
    if(guguNumb <= 9){
        while(i <= 9){
           document.write(guguNumb + 'x' + i + '=' + guguNumb*i + '<br>'); 
            i++;
        }
    }else{
        alert('9단 이하로 입력하세요');
    }*/
   while(i <= 9){
        if(guguNumb > 9){
            alert('9단 이하로 입력하세요.');
            break;
        }
        document.write(guguNumb + 'x' + i + '=' + guguNumb*i + '<br>'); 
        i++;
   }
}
//todo. end가 입력될 때 까지 숫자를 계속해서 입력받아 입력값 합을 출력하고, prompt에는 몇번 수행 했는가에 대한 "x 번째 입력" 이 표시되야함. 
function sumNumb1(){
    var i = 1; // ? 카운트변수
    var result = 0; //? 결과를 담을 변수
    while(true){
        var numb = prompt(i + " 번째 입력");
        if(numb=="end"){
            alert("입력이 종료되었습니다.");
            break;
        }else if(numb.trim() === ""){
            alert("입력된 값이 잘못되었습니다. 다시 입력하세요.");
            continue;
        }
        result += parseInt(numb);
        document.write('현재까지의 총합 : ' + result + '<br>');
        i++;
    }
}