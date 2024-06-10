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
// * case.1 이름을 10번 출력해보자.
function namePrint10(){
    var userName = "Mark";
    for(var i = 1; i <= 1000; i++){
      document.write(i+"."+userName,"<br>");
    }
}
// todo. 1,000번 출력중 홀수 번째만 출력되게 해보기.
function namePrint500(){
    var userName = "Mark";
    for(var i = 1; i <= 1000; i+=2){
      document.write(i+"."+userName,"<br>");
    }
}
// todo. 1 - 10 까지 출력되는 반복문을 짜는데 최대한 많은 케이스를 짜오기.
function answer1(){
  for(var i=0; i<10; i++){ //? 10보다 작을때 (0~9) 까지 만 반복 수행
      document.write((i+1)+"<br>");//? 1~ 10번 까지 출력
  }
}
function answer2(){
  for(var i=1; i<=10; i++){ //? 10보다 작거나 같을때 (1~10)까지 만 반복 수행
      document.write(i+"<br>"); //? 1~10번 까지 출력
  }
}
function answer3(){
  for(var i=100; i<110; i++){ //? 110보다 작을때 (100~109)까지만 반복 수행
      document.write((i-99)+"<br>"); //?1~10번 까지 출력
  }
}
function answer4(){
  for(var i=1; i<=10; i+=2){ //? 10보다 작거나 같을때 (1~10)까지 만 반복 수행, 단 루프가 끝난후 i에 2를 더함.(증감부)
      document.write(i+"<br>"); //? 1, 3, 5, 7, 9 (증감이 이루어 지지 않은 iteration)
      document.write((i+1)+"<br>"); //? 2, 4, 6, 8, 10 (증감이 이루어 진 이후 iteration)
  }
}
function answer5(){
  for(var i=10; i>=1; i--){ //? 1보다 크거나 같을때 (10~1)까지 만 반복 수행.
      document.write((11-i)+"<br>"); //? 1~10번 까지 출력
  }
}
// * case.2 자신이 좋아하는 과일 4개를 배열로 배치하고, alert으로 출력.
function favorFruit(){
  var array = ['포도','사과','바나나','망고','딸기'];
  // ? 배열(array) - data들이 저장되는 방.(C/R/U/D) -> ['data'(0),'data1'(1),'data2'(2)]
  // ! data는 입력 및 저장되는 순서대로 0 부터 증가 되는 것이 기본 이다.
  console.log(array.length);
  for(var i = 0; i < array.length; i++){
    // ? target.length = 대상(target)의 갯수를 구해온다.
    alert(array[i]);
  }
}
// todo. 지금까지 배운 js단원명을 배열 활용하여 출력.
function arrayFor(){
  var data = ["변수", "연산자", "형변환", "조건문 if", "조건문 switch", "반복문 while", "반복문 for"];
  var swapNumb = ["첫","두","세","네","다섯","여섯","일곱"];
  for(var i = 0; i < data.length; i++){
    document.write(swapNumb[i]+'번째 내용 = '+ data[i] + '<br>');
  }
}
function arrayFor2(){
  var data = ["변수", "연산자", "형변환", "조건문 if", "조건문 switch", "반복문 while", "반복문 for"];
  var swapNumb = '';
  for(var i = 0; i < data.length; i++){
    swapNumb = i;
    switch(i){
      case 0:
        swapNumb = '첫';
        break;
      case 1:
        swapNumb = '두';
        break;
      case 2:
        swapNumb = '세';
        break;
      case 3:
        swapNumb = '네';
        break;
      case 4:
        swapNumb ='다섯';
        break;
      case 5:
        swapNumb ='여섯';
        break;
      case 6:
        swapNumb ='일곱';
        break;
    }
    document.write(swapNumb + '번째 내용 = ' + data[i] + '<br>');
  }
}
// *case.3 역반복
function reverseFavorFruit(){
  var array = ['딸기','메론','수박','참외'];
  for(var i = array.length-1; i>=0; i--){
    document.write(array[i],'<br>');
  }
}
// *case.4 continue문
function forContinue(){
  for (var i = 0; i <= 10; i++){
    continue;
    document.write(i + '<br>');
  }
  document.write('최종 i = ' + i + '<br>');
}
// *case.5 continueEX
function continueEx(){
  var text= '';
  for (var i = 0; i<10; i++){
    if(i==3){
      continue;
    }
    text += i;
  }
  console.log(text);
}
// todo 1~10까지 의 총합중 홀수는 제외한 짝수끼리의 총합을 구하기
function runContinue(){
  var output = 0;
  for (var i = 1; i <= 10; i++){
    if(i%2 == 1){
      continue;
    }
    output += i;
    console.log(output);
  }
}