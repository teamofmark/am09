var $numb = null;

function randomNumb(){
    $numb = $("#numb");
    setInterval(showRandom,500);
}
function showRandom(){
    var value = parseInt(Math.random()*50)+50; //? 0.111111111~0.999999999 를 무작위로 뱉는다.
    $numb.text(value);
}

function pageCount(){
    $numb = $("#numb");
    count(105);
}
function count(postNumb){
    var pages = Math.ceil(postNumb / 10); //? 한화면에 출력 될수있는 pager count 숫자.
    /*
        ! Math.floor method : 매개변수 = num : 실수값. 리턴값 = 입력값이 실수 인 경우 내림한 정수값 (ex 10.2 = 10)
        
        ! Math.ceil method : 매개변수 = num : 실수값. 리턴값 = 입력값이 실수 인 경우 올림한 정수값 (ex 10.2 = 11)
        ? Math.ceil(postNumb/10)
        ? 매개변수로 전달받은 게시글수(105)를 한페이지당 출력값인 (10)으로 나누어 올림값으로 리턴.
        ? 105 / 10 = 10.5 = 11.
    */
    $numb.text(pages);
}