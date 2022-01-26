var num1 = prompt("Enter First Number");
var num2 = prompt("Enter Second Number");
var num3 = prompt("Enter Third Number");

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

if(num1 < num2 && num1 < num3){
    alert(num1);
}else if(num2 < num1 && num2 < num3){
    alert(num2);
}else{
    alert(num3);
}