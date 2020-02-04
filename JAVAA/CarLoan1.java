import java.util.Scanner;
public class CarLoan1 {
  
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
    
    //Calculations:
    double totalPrice  = (price - tradeInValue - downPayment);
    double monthlyPayment = (totalPrice / termOfLoan);
    System.out.printf("Total Price: $%.2f",totalPrice);
    System.out.printf("\nMonthly Payment: $%.2f",monthlyPayment);
      
      
     
    
  }
  
  
}