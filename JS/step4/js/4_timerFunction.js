// ? core Library Function : 기본적으로 제공해주는 기능함수.

// *ex.1 timer function

/*
    ? setInterval() : 일정 시간마다 주기적으로 특정 구문을 실행하는 기능.
    ? setTimeout() : 일정 시간이 지난 후 특정 구문을 한번만 실행하는 기능.
    ? clearInterval() : 실행 중인 타이머 함수를 멈추는 기능.
*/



$(document).ready(function(){
    var $output = $("#output");
    var count = 0;
    var timerID = 0; //? ex. 1-3 setInterval이 리턴해주는 timerID를 저장할 변수 초기화

    function funcCount(){
        count ++;
        $output.text(count);
    }
    
    timerID = setInterval(funcCount, 1000); //?ex.1-1 일반함수.

    function funcTimeOut3s(){
        $output.text("hi");
    }
    //setTimeout(funcTimeOut3s, 3000); //? ex.1-2 일반함수.

    // *ex.1-3 #countStop 버튼을 누르면 증가중지.

    $("#countStop").click(function(){ //? ex. 1-3 interval clear
        clearInterval(timerID);
        alert('중지되었습니다.');
    });

});

// *ex.1-1 1초에 한 번씩 변숫값 1씩 증가. #output 출력.
function addCount(){
    var $output = $("#output");
    var count = 0;
    
    setInterval(function(){
        count ++;
        $output.text(count);
    },1000);
}
// addCount();  //? 익명함수.


// *ex.1-2 3초후 hi #output출력.
function timeout3s(){
    var $output = $("#output");
    setTimeout(function(){
        $output.text("hi");
    },3000);
}
// timeout3s(); //익명함수.

// todo. timingfunction etc9 ~ 12.


