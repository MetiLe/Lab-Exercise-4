let bank=new Array();
let firstName=prompt("Enter your name");
let lastName=prompt("Enter your last name ");
let pwd=prompt("Enter your password");
let bank ={
    phoneNumber : "",
    firstName : "",
    lastName : "",
    pwd:"",
    maxwamount : 5000.00,
    minwamount : 100.00,
    min_balance_amount : 25.00,
    current_balance : 0.0,
    maxdamount:10000000
}

new_account:
function(fname, lname, phoneNumber, initialDeposit){
    this.fname = prompt("Enter your First name")
    this.lname = prompt ("Enter your last name");
    this.phoneNumber = parseInt(prompt("Enter your phone number"));
    this.pwd=prompt("Enter your password")
    this.current_balance = parseFloat(prompt ("Enter the initial amount here"));
    
},