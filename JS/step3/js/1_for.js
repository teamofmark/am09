/*
    ?for
    *특정구문을 정해진 횟수 만큼 반복해야 할 경우 사용하는 반복문.
    실무사용의 예
    1. 게시판의 게시글 목록 불러올 때
    2. 구글 맵, 네이버 맵 등의 정보를 출력 할 때
    3. 메뉴의 항목(관리자제어가능한) 출력 할 때
    4. 갤러리의 이미지 목록을 출력 할 때
    5. os 등의 파일 탐색기의 파일 목록 출력 할 때...

    *루프
    1. 초기식실행 > 2. 조건식 비교, 조건이 거짓일 경우 반복문 종료 > 
    3. 참일경우 이하 구문 실행 > 4. 증감부 실행 > 5. 2단계

for (var index = 0; index < 10; index++) {
    console.log(index);
}
*/
// 단일 for - for를 한 번만 사용 하는 것

// case.1 이름을 10번 출력해보자.
function namePrint10(){
    var userName = "Mark";
    for(var i = 1; i <= 10; i++){
        console.log(i + '. ' + userName);
    }
}
// case.2 이름을 1,000번 출력해보자.
function namePrint1000(){
    var userName = "Mark";
    for(var i = 1; i <= 1000; i++){
        console.log(i + '. ' + userName);
    }
}
// todo. 위 1,000번 출력 예제에서 홀수 번째만 출력 될 수 있도록 반복문을 짜오기(1,2,3,4...(X) 1,3,5,7,9...(O))
function namePrint500(){
    var userName = "Mark";
    for(var i = 1; i <= 1000; i+=2){
        console.log(i + '. ' + userName);
    }
}
// case.3 자신이 좋아하는 과일 4개를 배열로 배치하고 alert으로 출력.
function favorFruit(){
    var data = ["딸기","메론","수박","귤","샤인머스캣"];
    // ? 배열을 선언하는 방법 - 대부분 배열은 무조건 변수에 담는다.
    for(var i = 0; i < data.length; i++){
        console.log(data[i]);
    }
}``
// todo. 지금까지 배웠던 JS단원을 다음 화면과 같이 출력해보기
function arrayFor(){
    var data = ["변수","형변환","연산자","조건문if","조건문switch","반복문while","반복문for"];
    var swapNumb = ["첫","두","세","네","다섯","여섯","일곱"];
    for(var i = 0; i < data.length; i++){
        document.write(swapNumb[i] + "번째 내용 = " + data[i]+"<br>");
    }
}
// todo.과제 위 배열식을 switch문으로 변환하여 같은 결과를 출력해보기 (swapNumb배열 사용금지)
function arrayFor2(){
    var data = ["변수","형변환","연산자","조건문if","조건문switch","반복문while","반복문for"];
    // ! swapNumb 배열 사용 금지
    var swapNumb = '';
    for(var i = 0; i<data.length; i++){
    switch(i){
        case 0:
            swapNumb = "첫";
            break;
        case 1:
            swapNumb = "두";
            break;
        case 2:
            swapNumb = '세';
            break;
        case 3:
            swapNumb = '네';
            break;
        case 4:
            swapNumb = '다섯';
            break;
        case 5:
            swapNumb = '여섯';
            break;
        case 6:
            swapNumb = '일곱';
            break;
        default:
            i = 'x';
            break;
    }
    document.write(swapNumb + "번째 내용 = " + data[i] + '<br>');
    }
}
// ! tune.todo - ECMA Script
function arrayForES6(){
    let data = ["변수","형변환","연산자","조건문if","조건문switch","반복문while","반복문for"];
    for (let i = 0; i < data.length; i++){
        const element = data[i];
        document.write((i+1) + " 번째 내용 = " + element + "<br>" );
    }
    /*
    for(const key in object){
        if(Object.prototype.hasOwnProperty.call(object,key)){
            const element = object[key];
        }
    }
    arrayFor.forEach(element =>{

    });
    */
}

//  case.4 역반복으로 배열 호출하기.
function reverseFavorFruit(){
    var arr = ['딸기','메론','수박','귤'];
    for(var i = arr.length-1; i >= 0; i--){
        console.log(arr[i]);
    }
}

// case.5 for에서의 continue
function forContinue(){
    for(var i = 0; i <= 10; i++){
        continue;
        document.write(i + "<br>");
    }
    document.write("최종 i =" + i + "<br>");
}
function continueEx(){
    let text = '';
    for(let i = 0; i < 10; i++){
        if(i == 3){
            continue;
        }
        text += i;
    }
    console.log(text);
}
// todo. 과제2 continue를 활용하여 1 ~ 10까지 의 총합을 구하되, 짝수들만 더하여 총합을 출력해라.
// ! 결과 2, 6, 12, 20, 30 만 출력되야 함.
function todoContinue(){
    var output = 0;
    for(var i = 1; i <= 10; i++){
        if(i%2 == 1){
            continue;
        }
        output += i;
        console.log(output);
    }   
}

// case.6 for에서의 break
function forBreak(){
    for(var i =1; i <= 10; i++){
        break;
        document.write(i +"<br>");
    }
    document.write("최종 i = " + i + "<br>");
}
function breakEx(){
    var i = 0;
    while(i < 100){
        if(i == 3){
            break;
        }
        i += 1;
    }
    console.log(i);
}
function runBreak(){
    for(var i = 0; true; i++){
        alert(i + "번째 반복문");
        if(!confirm("계속할까?")){
            // ? confirm : libFunction 중 하나인데, 두개의 선택지를 제공하는 다이얼로그. = cancel-> false / confirm -> true.
            break;
        }
    }
}
// todo. 배열값을 변화시키면 자동으로 반응하는 경고창 만들기.
function runBreak2(){
    var swapNumb = ['첫','두','세','네','다섯','여섯']; //? 배열값을 변화시키면 자동으로 반응하는 경고창.
    for(var i = 0; true; i++){
        console.log(swapNumb[i] + "번째 반복문");
        if(i == swapNumb.length - 1){
            break;
        }
    }
    document.write('지정된 배열값 : ' + swapNumb.length + '개. 출력 완료' + "<br>");
}
// ! 다중 for

// case.1 반절 피라미드
function halfPyramid(){
    var star = '';
    for(var i = 1; i<=10; i++){ //? 1. ifor = 1~10 까지 수행
        for(var j = 0; j < i; j++){//? 2. jfor = j가 i보다 작을때 까지 반복 수행 *,**,***,****,*****......
            star += '*';//? 변수 star에 생성된 *을 넣음.
        }
        star += '<br>';//? ifor 만큼 <br>을 변수 star에 넣음
    }
    document.write(star);//? 완성된 반절 피라미드출력.
}
// case.2 역반절 피라미드
function reverseHalfPyramid(){
    var star = '';
    for(var i = 10; i >=1; i--){//? 1. ifor = 10~1 까지 수행
        for(var j = 0; j < i; j++){ //? jfor = j가 i보다 작을때 까지 반복 수행 10,9,8,7,6....
            star += '*';//? 변수 star에 반복생성된 만큼 *을 넣음.
        }
        star += '<br>';//? ifor 만큼 <br>을 변수 star에 넣음.
    }
    document.write(star);//? 완성된 역반절 피라미드출력.
}
// todo. 완성형 피라미드 그려오기 (위 두개의 상황을 응용하면 됨)
function pyramid(){
    
}