import java.util.Scanner;
public class CarLoan2 {
  
  public static void main(String [] args){
    
    Scanner input = new Scanner(System.in);
    //Vehicle price
    System.out.print("Enter Vehicle Price: ");
    double price = input.nextDouble();
    
     //Trade in value
    System.out.print("Enter Trade In Value: ");
    double tradeInValue = input.nextDouble();
    
      //Down Payment
    System.out.print("Enter Down Payment: ");
    double downPayment = input.nextDouble();
    
      //Term of loan
    System.out.print("Enter Term of Loan: ");
    double termOfLoan = input.nextDouble();
    
    
    //Credit Scores:
    System.out.print("Enter Credit Score: ");
    int creditScore = input.nextInt();
    double interestRate = 0;
    if(creditScore <= 500){
      interestRate = 0.10;
    }
    else if (creditScore<=700){
      
      interestRate = 0.5;
      
    }
    else if(creditScore>700){
      interestRate = 0.3;
      
    }
    
    //Calculations:
    double totalPrice  = (price - tradeInValue - downPayment);
    double grandTotal = totalPrice + (totalPrice*interestRate);
    double monthlyPayment = (grandTotal / termOfLoan);
    System.out.printf("Total Price: $%.2f",totalPrice);
    System.out.printf("\nGrand Total: $%.2f",grandTotal);
    System.out.printf("\nMonthly Payment: $%.2f",monthlyPayment);
      
      
     
    
  }
  
  
}