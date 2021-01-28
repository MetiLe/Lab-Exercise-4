let bank ={
    phoneNumber : "",
    firstName : "",
    lastName : "",
    pwd:"",
    bankNo:"",
    maxwamount : 10000.00,
    minwamount : 100.00,
    minbamount : 25.00,
    current_balance : 0.0,
    maxdamount:10000000,

new_account:function(firstName, lastName, phoneNumber,bankno,pwd, initialDeposit){
    this.fname = prompt("Enter your First name")
    this.lname = prompt ("Enter your last name");
    this.phoneNumber = parseInt(prompt("Enter your phone number"));
    this.bankNo=parseInt(prompt("Enter bank no"));
    this.pwd=prompt("Enter your password");
    this.current_balance = parseFloat(prompt ("Enter the initial amount here"));
    
}}


let account1 = {
    firstName: "Meti",
    lastName: "Leggese",
    bankNo:"123", 
    balance: "1000",
    pwd:"25",
};

let account2 = {
    firstName2: "moti",
    lastName2: "legg",
    bankNo:"225", 
    balance: "5000",
    pwd:"50",
    
};
let account3 = {
    firstName3: "moti",
    lastName3: "legg",
    bankNo:"", 
    balance: "0",
    pwd:"20",
    
};
(function () {
    while (true) {
        let choice = prompt("services \n 1. Deposit \n 2. Withdraw \n 3. Balance \n 4. Transfer \n 5.Exit");
        choice = parseInt(choice);

        if (choice === 1) {
            let dvalue = prompt("How much do you want to deposit.");
            dvalue = parseInt(dvalue);
            if (dvalue < 0 ) {
                alert("You inserted an invalid value");
            }
            else if(dvalue>1000000){
                alert("you have passed the limited amount please try again")
            }
            account1.balance = account1.balance + depositValue;
        } else if (choice === 2) {
            
            let wValue = prompt("How much do you want to withdraw.");
            wValue = parseInt(wValue);
            if (wValue > account1.balance) {
                alert("You don't have sufficient balance");
            } 
            else if (wValue>10,000){
                alert("you have passed your limit please try again")
            }
            
            else {
                account1.balance = account1.balance - wValue;
            }
        } else if (choice === 3) {
            alert("Your account balance is " + account1.balance);
        } else if (choice === 4) {
            let transferNo = prompt("Enter the transfer amount:");
            transferNo = parseInt(transferNo);
            if (transferNo > account1.balance) {
                alert("You don't have sufficient balance");
                console.log("You don't have sufficient balance");
            } else {
                account3.firstName = prompt("Enter the recipient's first name:");
                account3.lastName = prompt("Enter the recipient's last name:");
                account3.bankno = prompt("Enter the recipient's Account Number:");
                account3.balance = account3.balance + transferNo;
                account3.balance = account3.balance - transferNo;
                alert("Transferred succesfully");
            }

        } else if (choice === 5) {
            break;
        } else {
            alert("Wrong input. Try again!");
        }

    }

})();


