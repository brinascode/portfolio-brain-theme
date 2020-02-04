import java.util.Scanner;
public class NetPay {
  
  public static void main(String [] args){
    
    Scanner input = new Scanner(System.in);
    
    //INPUTS:
    
      //Name:
      System.out.print("Enter employee\'s name");
      String name = input.nextLine();
      
      //Hours:
      System.out.print("Enter number of hours worked in a week");
      double hours = input.nextDouble();
      
      //Hourly rate:
      System.out.print("Enter hourly pay rate:");
      double payRate = input.nextDouble();
      
      //Federal tax and state tax withholding rate:
      System.out.print("Enter federal tax withholding rate");
      double fedTax = input.nextDouble();
      System.out.print("Enter state tax withholding rate");
      double stateTax = input.nextDouble();
      
      //Calculations:
      double grossPay = (hours * payRate);
      double fedWithholding = (grossPay) * (fedTax/100);
      double stateWithholding = (grossPay) * (stateTax/100);
      double totalDeduction = (fedWithholding + stateWithholding);
      double netPay = grossPay - totalDeduction;
      
    //OUTPUTS:
    System.out.print("\nPayroll Statement");
    System.out.print("\nEmployee name: " + name);
    System.out.printf("\nHours worked: %.1f", hours);
    System.out.printf("\nPay rate: %.2f",payRate);
    System.out.printf("\nGross Pay: %.2f", grossPay);
    System.out.print("\nDeductions:");
    System.out.printf("\n- Federal Withholding (%s) percent: %.2f",fedTax,fedWithholding);
    System.out.printf("\n- State Withholding (%s) percent: %.2f",stateTax,stateWithholding);
    System.out.printf("\n- Total deduction: %.2f",totalDeduction);
    System.out.printf("\nNet Pay: $ %.2f",netPay);
    
    
    
    
    
  }
  
  
}