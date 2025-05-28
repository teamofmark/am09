//todo.1 구구단 숫자를 입력받아 출력하는 for문.
function gugudan(){
    var guguNumb = prompt("구구단 숫자 입력하소.");
    for(var i = 1; i <= 9; i++){
        document.write(guguNumb + ' x ' + i + ' = ' + guguNumb*i + '<br>');
    }
}


// todo.2 배열의 총 합을 구하기. var data = [10,20,30,40,50];
function arraySum(){
    var data = [10,20,30,40,50];
    var result = 0;
    for(var i = 0; i < data.length; i++){
        result += data[i];
    }
    document.write("해당 배열의 총합은 ? = " + result);
}