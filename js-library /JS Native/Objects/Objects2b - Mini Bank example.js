function BankAccount(initialBalance){
    this.balance = initialBalance
    this.statement = [initialBalance]
    this.printBalance = function(){
        console.log(this.balance)
    }  
    this.printStatement = function(){
        console.log(this.statement)
    }
    this.deposit = function(amount){
        this.balance += amount
        this.statement.push(amount)
    }
    this.withdraw = function(amount){
        this.balance -= amount
        this.statement.push(-amount)
    }

}

var pncSavings = new BankAccount(8500)
pncSavings.deposit(500)
pncSavings.printBalance()
pncSavings.withdraw(1000)
pncSavings.printBalance()
pncSavings.printStatement()


var navyChecking = new BankAccount(15000)
navyChecking.printBalance()

//So this is a Trilogy exercise but their solution is much longer. 
//Why do they use methods when they can just access the object property directly ? Is there a reason for doing that?
//Check out the Resources folder to see their solution