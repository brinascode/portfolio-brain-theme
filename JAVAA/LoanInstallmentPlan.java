import java.util.Scanner;
public class LoanInstallmentPlan {
  
  public static void main (String [] args) {
    
    Scanner input = new Scanner(System.in);
  //Inputs
    //Names
    System.out.print("First name");
    String firstName = input.next();  
    System.out.print("Last name");
    String lastName = input.next();
    
    //Address
    input.nextLine(); //Clear buffer
    System.out.print("Billing Address");
    String address = input.nextLine();
    
    //Loan amount
    System.out.print("Loan Amount");
    double loanAmount = input.nextDouble();
    
    //Term of loan(months)
    System.out.print("Term of Loan (Months): ");
    int months = input.nextInt();
    
    //Credit Score
    System.out.print("Credit Score");
    int creditScore = input.nextInt();
    
    //CALCULATING Interest, Total Loan and monthly payment:
    double interestRate = 0.0;
    if(creditScore > 0 && creditScore <= 300){
    
      interestRate = 3.9;
     }
    else (if creditScore > 301 && creditScore <= 600) {
      
      interestRate = 2.5;
     }
     else (if creditScore > 600 && creditScore <= 800) {
      
      interestRate = 2.5;
     }
    else {
      rate = 25;
    }
    
    
    double interest = loanAmount * (interestRate/100);
    double totalLoan = loanAmount + interest;
    double monthlyPayment = totalLoan / months;
    
    
  //Outputting
    System.out.print("Borrower: " + firstName + " " + lastName);
    System.out.print("\nBilling Address: " + address);
    System.out.printf("\nLoan Amount: $ %.2f" ,loanAmount);
    System.out.printf("\nInterest: %.2f" ,interest);
    System.out.printf("\nTotal Loan Amount: %.2f" ,totalLoan);
    System.out.printf("\nTerm of Loan: %d months" ,months);
    System.out.printf("\nPayment/month: $ %.2f" ,monthlyPayment);
   
    
  }
  
  
}