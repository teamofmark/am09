$(document).ready(function(){
    tabMenu("#tabMenuDepth0 li");
    tabMenu("#tabMenuDepth1 li");
});
function tabMenu(tabNumb){
    var $selectMenu = null;
    $(tabNumb).click(function(){
        if($selectMenu != null){
            $selectMenu.removeClass("activated");
        }
        $selectMenu = $(this);
        $selectMenu.addClass("activated");
    });
}
// 이하 참고용
// * 일반함수
function addCount(){
    var count = 0;
    count ++;
    return count;
}
// * 클로저 사용시
function createCount(){
    var count = 0;

    function addCount(){
        count++;
        return count;
    }
    return addCount;
}
var counter = createCount();
//? createCount 함수 호출과 동시에 지역변수 count = 0을 초기화 및 생성.
//? 이후 내부 함수 addcount를 생성. 그것자체를 return 한후 함수 종료.
//todo. counter();가 실행되면 addCount(); 함수가 실행되는것과 같은 결과.
/*
    ? 왜 안죽지?
    ! createCount 함수가 종료 되더라도 내부함수인 addCount 안에서 createCount의 지역변수인 count를 사용중인 상태.
    ! 이 상태에서 "외부"로 return 되기때문에 해당 지역변수는 삭제되지 않고 남아있으니(클로저현상)
    ! addCount(클로저함수) 가 실행 될 때마다 해당 지역변수는 계속 값을 갱신하게 된다.
*/
// *case.5-1 사용중인 함수를 리턴해야만 클로저는 아니다.
$(document).ready(function(){
    $("#btnStart").click(function(){
        start(); //? 1. start함수 실행.
        document.write('count Start');
    });
});
function start(){
    var count = 0; //? 2. count 변수 선언 및 초기화 
    setInterval(function(){
        count ++; //? 3. start 함수 내부 setInterval core 함수가 count변수 사용중
        document.write(count); //? 4. 계속 증가되는(사용중인) count가 1초간격으로 출력.
    }, 1000);
}//? 5. start함수가 종료되어도 삭제되지 않고 계속 유지되면서 값이 이어져간다.(closure).

// *case. 5-2 익명함수 이용한 클로저
function outerFunction(name){
    var output = 'hello' + name + '..!'; //? 1. outerFunction 함수 실행시 output 변수 초기화 및 생성.
    return function(){  //? 2. 익명함수를 outerFunction이 실행된 위치로 return.
        return output; //? 3. 익명함수로 지역변수 output을 return (closure).
    }
}

var first = outerFunction('Java Script');
var second = outerFunction('JQuery');

/*
    ! closure를 사용하면 좋은것?
    * 연관성 있는 변수와 기능을 하나의 함수로 묶어 놓고 독립적으로 여러개(번)을 실행 시킬 수 있다.
    ? 함수 내부에 data가 만들어지기 때문에 함수 외부에서 수정할 수 없는 data를 생성하는것도 가능하다.
    ? (privateData)
*/