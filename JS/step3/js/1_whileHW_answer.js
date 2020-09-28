//todo.1 구구단 숫자를 입력받아 출력하는 while문.

function gugudan(){
    var guguNumb = window.prompt('구구단숫자를 입력(1~9)');
    var i = 1;
    while(i <=9){
        document.write(guguNumb + 'x' + i + '=' + guguNumb*i + '<br>');
        i++;
    }
}

//todo.2 end가 입력될 때 까지 숫자를 계속해서 입력받아 입력값 합을 출력하고, prompt에는 몇번 수행 했는가에 대한 "x 번째 입력" 이 표시되야함. 
function sumNumb(){
    var i = 1; //? 카운트 변수
    var result = 0; //? 결과를 담을 변수
    while(true){
        var numb = window.prompt(i+"번째 입력"); //? 무한 루프로 입력받기.
        if(numb=="end"){ //? end 라는 값과 일치하면
            alert('입력이 종료되었습니다.');
            break; //? 루프 중단 및 종료alert 출력
        }
        
        result += parseInt(numb); //? 결과변수에 형변환후 더해서 저장.
        document.write("현재까지의 총합 : " + result + "<br>"); //? 저장된 result 값을 출력.
        i++; //? 수행할 때마다 카운트 중가.
    }
}