/*
    ?array Class
    * 각종 리스트 (게시판, 이미지, 메뉴 ...)를 출력 할 때 사용.
    * 배열 생성,추가,삭제,찾기 등 을 담고있다.
*/

// ? 배열 만드는 방법
/*
    ! 리터럴 방식 var arr = ["item1","item2","item3"];
    ! array Class 방식 var arr = new Array("item1","item2","item3");

    ? 리터럴 방식으로 사용해도 js가 해석할 때 자동 변환 
*/

// * ex.1 배열 요소 개수 알아내기

function arrCount(){
    var users = ["user1", "user2", "user3", "user4"];
    console.log(users.length);
}

// * ex.2 특정 위치의 배열 요소 접근하기

function targetArr(){
    var menuItems = ["menu1","menu2","menu3","menu4"];

    for (var i = 0; i < menuItems.length; i++) {
        var element = menuItems[i];
        console.log(i + " = " + element);
    }
}

// * ex.3 배열을 문자열로 만들기

/*
    ! 배열.join("separator")
    ! 매개변수 = separator, 선택사항. 배열 요소 구분용도의 문자열. 생략시 , 가 구분자.
    ! 리턴값 = 지정된 구분자로 배열 요소들을 이어 붙혀서 만들어진 문자열
*/

function joinArr(){
    var items = ["item1","item2","item3","item4"];
    var result = items.join("-");
    console.log(result); 
}

// * ex.4 문자열을 배열로 만들기

/*
    ! 배열.split(separator)
    ! 매개변수 = separator, 구분자로 사용할 문자열.
    ! 리턴값 = 구분자로 나눠 만들어진 배열.
*/

var $menu = null;

$(document).ready(function(){
    init();
    stringArr();
});

function init(){
    $menu = $("nav ul");
}

function stringArr(){
    var menuData = "menu1,menu2,menu3,menu4";

    var menuItems = menuData.split(",");

    for (var i = 0; i < menuItems.length; i++) {
        var result = menuItems[i];
        var addMenuItem = "<li>"+result+"</li>";
        $menu.append(addMenuItem);
    }
}

// * ex.5 특정 위치에 배열 요소 추가하기
/*
    ! 배열.push(element[,element]);
    ! 매개변수 = element : 배열 마지막에 추가할 배열 요소.
    ! 리턴값 = 신규 배열 요소를 추가한 배열.

    ! 배열.unshift(element[,element]);
    ! 매개변수 = element: 배열 첫번째에 추가할 배열 요소.
    ! 리턴값 = 신규 배열 요소를 추가한 배열.

    ! 배열.splice(start, deleteCount [,element]);
    ! 매개변수 =
    ! start: 추가 또는 삭제할 배열 요소 시작 위치.
    ! deleteCount : start부터 시작하여 삭제할 배열 요소의 개수, 요소를 추가할 때는 0을 적용.
    ! element : 추가요소
    ! 리턴값 = 삭제한 요소들 외 배열. 추가할 경우 리턴값 없음.
     
*/
// * ex. 5-1 배열 뒤에 요소 추가.
function addAfterArr(){
    var menuItems = ["menu1","menu2","menu3","menu4"];
    console.log("실행 전 : " + menuItems);
    menuItems.push("newMenu");
    console.log("실행 후 : " + menuItems);
}

// *ex. 5-2 배열 앞에 요소 추가.
function addBeforeArr(){
    var menuItems = ["menu1","menu2","menu3","menu4"];
    console.log("실행 전 : " + menuItems);
    menuItems.unshift("newMenu");
    console.log("실행 후 : " + menuItems);
}

// *ex. 5-3 배열 중 n번째에 요소 추가.
function nAddArr(){
    var menuItems = ["menu1","menu2","menu3","menu4"];
    console.log("실행 전 : " + menuItems);
    // menuItems.splice(2,0,"newMenu");
    menuItems.splice(0,2);
    console.log("실행 후 : " + menuItems);
}

// * ex.6 특정 위치에 배열 요소 삭제하기.
/*
    ! 배열.shift();
    ! 매개변수 = 없음.
    ! 리턴값 = 삭제된 배열 요소외 배열.

    ! 배열.pop();
    ! 매개변수 = 없음.
    ! 리턴값 = 삭제된 배열 요소외 배열.

    
*/

// *ex.6-1 첫번째 요소 삭제

function firstValDel(){
    var menuItems = ["menu1","menu2","menu3","menu4"];
    console.log("실행 전 : " + menuItems.join("/"));
    menuItems.shift();
    console.log("실행 후 : " + menuItems);
}

// *ex.6-2 마지막 요소 삭제

function lastValDel(){
    var menuItems = ["menu1","menu2","menu3","menu4"];
    console.log("실행 전 : " + menuItems);
    menuItems.pop();
    console.log("실행 후 : " + menuItems);
}

// *ex.6-3 N(index:2)번째 요소 삭제

function nthValDel(){
    var menuItems = ["menu1","menu2","menu3","menu4"];
    console.log("실행 전" + menuItems);
    menuItems.splice(2, 1);
    console.log("실행 후" + menuItems);
}

// *ex. 7 정렬하기
/*
    ! 배열.sort([compareFunction]);
    ! 매개변수 = compareFunction - 정렬순서 정의 함수. 생략시 오름 차순 처리.
    ?(문자열변환 후 유니코드값의 크기에 따라 정렬)
    ! 리턴값 = 정렬이 완료된 결과 값.
    ? 리턴 값 < 0 : a가 b보다 앞에
    ? 리턴 값 = 0 : a와 b순서 바꾸지 않음.
    ? 리턴 값 > 0 : b가 a보다 앞에
*/

// *ex.7-1 ㄱ,ㄴ 순으로 정렬

function sortKor(){
    var userNames = ["영희","철수","미자","진수","고수","나영"];
    console.log("실행 전 : " + userNames);
    userNames.sort();
    console.log("실행 후 : " + userNames);
}

// *ex.7-2 ㄱ,ㄴ 역순으로 정렬

function reverseSortKor(){
    var userNames = ["영희","철수","미자","진수","고수","나영"];
    console.log("실행 전 : " + userNames);
    userNames.sort(function(a,b){
        var a = a.toString().toLowerCase(); //?toLowerCase() = 대,소문자 무시
        var b = b.toString().toLowerCase(); 
        return ( b < a ) ? -1 : ( b == a ) ? 0 : 1; 
        // ? condition ? exprIfTrue : exprIfFalse
        /*
            * condition (조건문)
            * 조건문으로 들어갈 표현식
            * exprIfTrue (참일 때 실행할 식)
            * condition이 Truthy일 때 실행되는 표현식입니다. (true일 때 치환될 값입니다).
            * exprIfFalse (거짓일 때 실행할 식)
            * condition이 falsy일 때 실행되는 표현식입니다. (false일 때 치환될 값입니다).
        */
    });
    console.log("실행 후 : " + userNames);
}

// *ex.7-3 숫자 순 정렬

function numbSort(){
    var numbData = [1,2,3,4,5,55,44,33,22,11];
    console.log("실행 전 : " + numbData);
    //! 문제점 발생 numbData.sort(); 
    // ? 매개변수(파라미터)를 생략할 경우 요소는 ASCII 문자 기준 오름차순으로 정렬된다.
    numbData.sort(function(a,b){
        return a - b;
    });
    console.log("실행 후 : " + numbData);
}

// *ex.7-4 숫자 역순 정렬

function reverseNumbSort(){
    var numbData = [1,2,3,4,5,55,44,33,22,11];
    console.log("실행 전 : " + numbData);
    numbData.sort(function(a,b){
        return ( b < a ) ? -1 : ( b == a ) ? 0 : 1; 
    });
    console.log("실행 후 : " + numbData);
}

// todo.1 배열 총합 구해 출력.
function arraySum(){
    var sumData = [5,2,8,9,3,6,4,1,77];
    var sumVal = 0;
    for (var i = 0; i < sumData.length; i++) {
        sumVal += sumData[i];
    }
    console.log(sumVal);
}

// todo.2 etc11