//4th variable to ask user if it should repeat.
var do_it_again = "yes";

// 2nd - declare the functions. 
// while you dont call the functions, they wont do anything
function add (num1, num2){
    alert("The final addition results into: " + (num1 + num2));
}
function subtract (num1, num2){
    alert("The final subtraction results into: " + (num1 - num2));
}
function multiply (num1, num2){
    alert("The final multiplication results into: " + (num1 * num2));
}
function division (num1, num2){
    alert("The final division results into: " + (num1 / num2));
}

//5th - do/while. It will Do without asking by default at least the 1st time the code bellow.
do{
    // 1st -  declare and initiate the variables
    var math_operator = prompt("Which math operation would you like to perform: add, subtract, multiply or division ? ");
    // if you dont add the parseInt, you will get a wrong final add operation result.
    var num1 = parseInt(prompt("please type the first number:"));
    var num2 = parseInt(prompt("please type the second number:"));
    
    // 3rd use if else to call the function
        if (math_operator  == "add") {
             add (num1, num2);
            
        } else if (math_operator  == "subtract"){
            subtract (num1,num2);
            
        } else if (math_operator  == "multiply"){
            multiply(num1,num2);
            
        } else if (math_operator  == "division"){
            division(num1,num2);
            
        }else{
            alert("Please revise the data you've typed in.")
        }
    //6th get a new value for do_it_again from user
    do_it_again = prompt("Would you like to perform another math operation again?");
}
//7th while user says yes, the function will repeat itself.
while(do_it_again=="yes");