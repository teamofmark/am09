// todo.1 자신의 이름을 한 글자씩 나누어 변수에 담은 후, 다시 하나의 변수에 담아 출력.

function myName(){
    var c = '헌';
    var b = '도';
    var a = '장';
    
    console.log(a+b+c);
}



// todo.2 다음 숫자가 출력 되도록 연산자를 활용하여 코드를 작성.

function numberOperator(){
    var number = 10;
    alert(number++); //? 10을 출력후 더해서 다시 number로 - 10
    alert(++number); //? 11에 1을 더해서(12) 출력후, 다시 number로 - 12
    alert(number--); //? 12를 출력후 빼서 다시 number로 - 12
    alert(--number); //? 11에서 1을 빼서(10) 출력후, 다시 number로 - 10
}
