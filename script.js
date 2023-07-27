var num1 = prompt("Type the first number");
var num2 = prompt("Type the secont number");
var operation = prompt("What would you like to do: add, subtract, multiply, divide?");

if (operation=="add") {
    alert(parseInt(num1)+parseInt(num2));
} else if(operation=="subtract") {
    alert(parseInt(num1)-parseInt(num2));
}else if(operation=="multiply"){
alert(parseInt(num1)*parseInt(num2));
}else if(operation=="divide"){
alert(parseInt(num1)/parseInt(num2));
}else{
    alert("please type a valid math operation.");
}


/* //se o usuario escrive com o sem acento ponemos as 2 opcoes
else if (operacion=="multiplicacion"|| "multiplicación"){
    alert(parseInt(num1)*parseInt(num2));
}
else if (operacion=="division" || "división"){
    alert(parseInt(num1)/parseInt(num2));
} */
