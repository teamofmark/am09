/*
    ? string
    * 특정 문자열을 다른 문자열로 치환하거나 삭제, 입력받은 데이터의 공백 등을 없애는 기능 만들기 등에 사용.
*/

// ? 문자열 만드는 방법
/*
    ! 리터럴 방식 var str = "Hello";
    ! String Class 객체 생성 방식 var str = new String("Hello");

    ? 리터럴 방식으로 사용해도 js가 해석할 때 자동 변환 
    * ex) alert("hello".length); = alert(new String("Hello").length);
*/

// *ex.2 입력받은 문자열 길이 알아내기(length)
/*
var str = window.prompt("문자를 입력");
alert("문자열 길이는 = " + str.length);
*/

/*
    ? 특정 위치의 문자 구하기(charAt)
    ! charAt(indexNumber) :
    ! 매개변수 = index 문자열 위치 인덱스 값, 인덱스는 0부터 시작. 
    ? ex) var ch = "ABCDEF"; charAt(0) = A, charAt(5) = F 
    ! 리턴값 = index 위치의 문자.
*/



// *ex.3 #panel에 입력받은 문자열을 1초마다 한 문자씩 출력. 다되면 "종료." 메시지 출력

function print1ch(){
    var str = window.prompt("문자를 입력");
    var charCount = 0;

    var timerID = setInterval(function(){
        $("#panel").text(str.charAt(charCount));
        charCount ++;
        
        if(charCount > str.length){
            clearInterval(timerID);
            alert("종료.");
        }
    },1000);

}
/*
    ?문자(열) 위치 찾기 (indexof)
    ! indexof(searchValue, start)
    ! 매개변수 = searchValue  : 찾는 문자열, start : 시작위치, default 0
    ! 리턴값 = 찾는 문자열의 위치 값. 못찾는 경우 -1 
*/

// *ex.4 문자열 입력받고 example 문자 포함여부 판단. 참일 경우  몇번째 위치 출력, 거짓일 경우 "존재하지않습니다." 출력

function findString(){
    var insertWord = window.prompt("문자를 입력.");
    var finder = insertWord.indexOf("example"); //? 입력받은 insertWord내 에서 example을 찾음.

    if(finder >= 0){ //? 찾았다면 위치값을 리턴했을테니 0보다 클것.
        alert(finder + "번째 위치에 있습니다.");
    }else{ //? 못찾았다면 위치값이 리턴되지 않음.
        alert("존재하지않습니다.");
    }
}

/*
    ? 특정 위치에 문자 추가. 

    ! slice(start, end)
    ! 매개변수 = start : 문자열 시작 위치, end : 문자열 끝 위치
    ! 리턴값 = 지정한 문자열(의미상 잘라내기지만 복사)

    ! substr(start, length)
    ! 매개변수 = start : 문자열 시작 위치, length : 시작위치부터 복사할 길이.
    ! 리턴값 = 지정한 문자열
*/

// *ex.5 문자열 일부(두번째에서 네번째) 잘라내보기

function sliceText(){
    var str = "Abcdef";
    var strSlice = str.slice(2,4); //? 문자로 세지말고 문자사이 커서를 셀것.
    console.log(str);
    console.log(strSlice);
}

// *ex.6 문자열 일부(두번째에서 네번째) 잘라내보기 - 2

function substrText(){
    var str = "abcdef";
    var strSubstr = str.substr(2,2); //? 문자로 세지말고 문자사이 커서를 셀것.
    console.log(str);
    console.log(strSubstr);
}

// todo.1 slice를 이용하여 str 사이에 문자 추가.
function sliceAddText(){
    var str = "Mak";
    var strSlice = str.slice(0,2) + "r" + str.slice(2,3);
    console.log(strSlice);
}

// todo.2 subStr을 이용하여 str 사이에 문자 추가.
function subStrAddText(){
    var str = "MakStark";
    var strSubstr = str.substr(0,2) + "r" + str.substr(2,6);
    console.log(strSubstr);
}
/* 
    ?특정 위치 문자 변경
    ! replace(searchvalue, newvalue)
    ! 매개변수 = searchvalue : 찾는 문자, newvalue : 교체문자.
    ! 리턴값 = 찾는 문자를 교체문자로 변경한 값.
*/

// *ex.7 다음 문자열의 ?를 자신의 이름으로 변경.
function changeName(){
    var data = "hi, ?. welcome";
    var result = data.replace("?", "Mark");
    alert(result);
}

/*
    ?특정 위치 문자 제거
    ! 문자추가와 동일.
*/

// *ex.8 "-" 을 제거.

function deleteText(){
    var data = "mark-II";
    var result = data.slice(0,4)+data.slice(5,7);
    alert(result);
}

// todo.3 문자열 앞(좌측)에 붙는 공백 모두 제거기능.
// todo.4 문자열 뒤(우측)에 붙는 공백 모두 제거기능.
// todo.5 앞,뒤 붙는 공백 모두 제거기능.
// todo.6 세자리수 마다 콤마(,) 추가기능.

$(document).ready(function(){
    var $numbIn = $("#numbInput");
    var $numbOut = $("#numbOutput");

    $("#confirm").click(function(){
        var numbVal = $numbIn.val();
        var result = money(numbVal);
        $numbOut.html(numbVal + "=>" + result);
    });

});

function trim(str){
    var result = ltrim(str); //? 앞(좌측) 제거수행 
    result = rtrim(result); //? 뒤(우측) 제거수행
    return result; //? 리턴.
}

function ltrim(str){
    if(str.length <= 0){
        return "_"; //? 입력받은 값이 빈 문자열 일 경우 그대로 빈 문자열 리턴.
    }

    var firstCh = str.charAt(0); //? 첫 문자

    if(firstCh!="_"){ //? 첫문자가 공백이 아닐 때 그대로 리턴.
        return str;
    }

    for(var index=1; index<str.length; index++){ //? 입력된 문자열 길이만큼 반복 
        var ch = str.charAt(index); //? 공백 문자 위치 구함.(ex. 공백문자가 3칸이라면 3이 찍힐것) 
        if(ch!="_"){ //? 공백이 아닌 문자 를 만날 경우 반복중지.
            break;
        }
    }

    var result = str.substr(index, str.length); //? 위 반복문 으로 나온 공백문자 인덱스(ex. 3) 부터 문자열 길이 만큼 잘라내어

    return result; //? 리턴.
}

function rtrim(str){
    if(str.length <= 0){
        return "_"; //? 입력받은 값이 빈 문자열 일 경우 그대로 빈 문자열 리턴.
    }

    var lastCh = str.charAt(str.length-1);
    /*
        ?마지막 문자자리 구함.
        ! ex> 123456789 = str.length = 9; = 마지막문자자리를 넘어감.
        ! ex> -1 인경우 = 8; = 마지막문자자리.
    */
    if(lastCh != "_"){ 
        return str; //? 마지막 문자가 공백이 아니라면 그대로 리턴.
    }

    for(var index=1; index<str.length-1; index++){ //? 문자열 길이만큼 반복.
        var ch = str.charAt(index); //? 
        if(ch == "_"){ //? 문자중 공백문자가 나올시 반복중지.
            break;
        }
    }
    var result = str.substr(0, index); //? 우측공백제외 문자열 길이 만큼 잘라내어
    return result; //? 리턴.
    /*
    if(str.length <= 0){
        return ""; //? 입력받은 값이 빈 문자열 일 경우 그대로 빈 문자열 리턴.
    }

    var lastCh = str.charAt(str.length-1); //? 마지막 문자자리 구함.
    if(lastCh != "_"){
        return str; //? 마지막 문자가 공백이 아니라면 그대로 리턴.
    }

    for(var index=str.length-1; index>=0; index--){//? 문자열 길이만큼 역반복.
        var ch = str.charAt(index);//? 공백문자 시작자리 구함.
        if(ch != "_"){ //? 문자중 공백문자가 아닐시 문자 잘림방지로 1만큼 index 더하고 반복중지.
            index++;
            break;
        }
    }

    var result = str.slice(0, index); //? 공백문자 이전 길이만큼 잘라내어
    return result; //? 리턴.
    */
}


function money(str){
    if(str.length <= 3){
        return str; //? 문자열 길이가 3보다 작으면 그대로 리턴.
    }

    var loopCount = Math.floor((str.length - 1) / 3); 
    /*
        ? 반복횟수 구함.
        ! ex> 123456789 = length 9. 9/3 = 3 floor 내림정수값 3.
        ! -1 인 경우 = length 8. 8/3 = 2.666... floor 내림정수값 2. 
    */
    var result = ''; //? 최종 결과 변수.

    for (var index = 0; index < loopCount; index++) {
        var strLength = str.length; //? 입력받은 값 길이.
        var cutStr = str.substr(strLength-3, strLength);//? 입력받은길이중 끝에서 3자리 까지 복사.
        result = ","+cutStr+result;
        str = str.slice(0, strLength-3); 
        /*
            ? 잘라내어 콤마 삽입.
            ! ex> 123456789
            ! 1. result = ,789(cutStr) + ""; , str  = 123456;
            ! 2. result = ,456(cutStr) + ,789; , str = 123;
            ! fin. result = ,456,789 str = 123;
        */
    }

    result = str + result;
    /*
        ? 최종결과에 담기.
        ! 123 + ,456,789;
    */

    return result; //? 리턴.
}