import java.util.Scanner;
public class Lawn {
  
  public static void main(String [] args){
    
    Scanner input = new Scanner(System.in);
    //Opening
    System.out.print("Lawn-mowing service");
    System.out.print("\nPlease enter the length and width of your lawn:");
    
    //Length
    System.out.print("\nLength:");
    double length = input.nextDouble();
 
    //Width
    System.out.print("\nWidth");
     double width = input.nextDouble();
     
     //Payment times
     System.out.print("\nHow would you like to set up the payment?");
     String once = "once";
     String twice = "twice";
     String twenty = "20 times per year";
     System.out.printf("\n(1)%s, (2) %s, (3)%s",once,twice,twenty);
     int times = input.nextInt();
    String payment = "";
    if(times == 1){
      payment = " a one time fee";
    }else if(times ==2){
      payment = "twice a year";
      
    }else if(times == 3){
      payment = "20 times per year";
    }
     
     //Billing calculations
     double area = width * length;
     double weeklyFee = 0;
     double seasonalFee = 0;
     if(area <= 4000){
       
       weeklyFee = 25;
       seasonalFee = weeklyFee * 20;
       
     }else if (area > 4000 && area < 6000){
       
        weeklyFee = 35;
       seasonalFee = weeklyFee * 20;
       
     }else if(area>=6000){
      weeklyFee = 50;
       seasonalFee = weeklyFee * 20;
     }
     
     double paymentAmt = (seasonalFee/times);
       
     //Bill:
     System.out.printf("\nYour lawn is %s square feet.",area);
     System.out.printf("\nWeekly fee $%.2f",weeklyFee);
     System.out.printf("\n20-week seasonal fee $%.2f",seasonalFee);
     System.out.printf("\nYour payment is %s $%.2f",payment,paymentAmt);
  }
  
}