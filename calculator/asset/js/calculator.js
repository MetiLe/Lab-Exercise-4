var number1;
var nummber2;

function add(numbers1) {
    var result = 0;
    for(let i = 0; i < numbers1.length; i++) {
        result = result + parseInt(numbers1[i]);
    }
    return result;
}

function sub(number1, number2) {
    var result = 0;
    result = number1 - number2;
    return result;
}

function mul(numbers1) {
    var result = 1;
    for( var i = 0; i < numbers.length; i++) {
        result = result * parseInt(numbers[i]);
    }
    return result;
}

function div(number1, number2) {
    var result = 0;
    if (number2 != 0) {
        result = number1 / number2;
        return result;
    }
    else {
        return "incorrect please change the divisor";
    }
}

(function() {
    let numbers1 = new Array(); 
    let operate = prompt("Enter Your Operand ( '+' '-' '*' '/' 'max' )");
    if (operate == "+" || operate == "*") {
        var amount = prompt("How many numbers do you have: ");
        for (let i = 0; i < parseInt(amount); i++) {
            numbers1[i] = prompt("Your Number " + (i + 1));
        }
        if (operate == "+") {
            result = add(numbers1);
            console.log(result);
        }
        else if (operate == "*") {
            result = mul(numbers1);
            console.log(result);
        }
        else if(operate=="max"){
            result=max(numbers1);
            console.log(result)
        }
        else {
            console.log("Invalid");
        }
    }
    else if (operate == "-" || operate == "/") {
        if (operand == "-") {
            var number1 = parseInt(prompt("Enter first number "));
            var number2 = parseInt(prompt("Enter second number "));
            result = sub(number1, number2);
            console.log(result);
        }
        else if (operate == "/") {
            var number1 = parseInt(prompt("Enter first number "));
            var number2 = parseInt(prompt("Enter second number "));
            result = div(number1, number2);
            console.log(result);
        }   
    }
    else {
        console.log("Invalid")
    }
})();