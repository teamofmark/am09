$(document).ready(function(){
    // todo.1 버튼을 10번 클릭하면 "완료되었습니다." 메시지를 checkCount()에서 처리하지 말고 콜백 함수를 이용해 분리해보자.
    checkCount(); 

    // todo.2 탭메뉴 함수 내부의 3개의 기능을 각 개의 중첩 함수로 포장해보자.
    // todo.3 그 이후 각 탭메뉴별 선택된 탭의 index를 #tabMenu1Index, #tabMenu2Index에 각각 출력해보자.
    //? 인덱스 출력함수는 "대상.index();" 이다.
    
    tabMenu("#tabMenu1");
    tabMenu("#tabMenu2");

});
    // todo.1
function checkCount(){
    var count = 0;

    $("#todo1Start").click(function(){
        count++;

        if(count >=10){
            alert("사용불가");
        }
    });
};

    // todo.2
function tabMenu(selector){
    var $tabMenu = null;
    var $menuItems = null;
    // 선택 한 탭메뉴를 저장할 변수
    var $selectMenuItem =null;

    // ! 기능.1 요소 초기화
    $tabMenu = $(selector);
    $menuItems = $tabMenu.find("li");

    // ! 기능.2 메뉴 항목에 클릭 이벤트 등록
    $menuItems.click(function(){
        //! 이하 기능.3 탭메뉴 선택처리
        if($selectMenuItem!=null){ //기존 선택 메뉴 항목이 있으면 비선택 상태로 만들기
            $selectMenuItem.removeClass("select");
        }

        // 클릭한 메뉴 항목을 신규 선택 메뉴 항목으로 저장
        $selectMenuItem = $(this);
        // 선택 상태로 만들기
        $selectMenuItem.addClass("select");
    });
}

