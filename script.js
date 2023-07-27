//5th variable to ask user if it should repeat.
var do_it_again = "yes";

// 2nd - create a funcion that includes the if else statment. 
function calculator (math_operator , num1, num2){
    if (math_operator  == "add") {
        return(num1+num2);
        
    } else if (math_operator  == "subtract"){
        return(num1-num2);
        
    } else if (math_operator  == "multiply"){
        return(num1*num2);
        
    } else if (math_operator  == "divide"){
        return(num1/num2);
        
    }else{
        alert("Please revise the data you've typed in.")
    }
}

//6th - do/while. It will Do without asking by default at least the 1st time the code bellow.
do{
// 1st -  declare and initiate the variables
var math_operator = prompt("Which math operation would you like to perform: add, subtract, multiply or divide ? ");
// if you dont add the parseInt, you will get a wrong final add operation result.
var num1 = parseInt(prompt("please type the first number:"));
var num2 = parseInt(prompt("please type the second number:"));


// 3rd = call the function 
// store its result on a variable
// you cannot call the function before you declare the variable!
var final_result = calculator(math_operator, num1, num2);
//4th show the result on screen:
alert("Final result: " + final_result);

//7th get a new value for do_it_again from user
do_it_again = prompt("Would you like to perform another math operation again?");
}

//8th while user says yes, the function will repeat itself.
while(do_it_again=="yes");


