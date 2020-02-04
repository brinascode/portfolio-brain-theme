import java.util.Scanner;
public class TollFee5{
  
  public static void main(String [] args){
    
    Scanner input = new Scanner(System.in);
    
     //Inputs
    System.out.print("Toll Fee Cashier");
    System.out.print("\nEnter your first name");
    String firstName = input.next();
    System.out.print("\nEnter your last name");
    String lastName = input.next();
    
    //Do...while loop
    int choice = 0;
    double totalFee = 0;
    do{
         System.out.println("\nEnter type of vehicle: \n1.Two Axels \n2.Three or more Axels  \n3.A Motorcycle");
         int vehicle = input.nextInt();
         String vehicleType = "";
         
         System.out.print("\nEnter R for Regular Tolls: P for Peak Weekends");
         String time = input.next();
    
         //Brain / Logic:
         double fee = 0;
         
         if(vehicle == 1){
           fee = 3.00;
           totalFee +=fee;
           vehicleType = "Two Axels";
         }else if(vehicle == 2){
           fee = 4.00;
            totalFee +=fee;
           vehicleType = "Three or More Axels";
         }else if(vehicle == 3){
           fee = 1.00;
            totalFee +=fee;
           vehicleType = "Motorcycle";
         }
         
         if(time.equals("P")){
           fee += 3;
           totalFee += 3;
           
         }else {
           fee += 0;
         }
         
         System.out.printf("\nVehicle Type: $%s",vehicleType);
         System.out.printf("\nToll fee: $%.2f",fee);
         System.out.print("\nEnter 1 to Continue: 0 to Exit");
         choice = input.nextInt();
       
       }while(choice==1);
       
      
   
    //Outputs:
   
    System.out.print("\nFee collected by");
    System.out.printf("\nCashier name:%s %s",firstName,lastName);
    System.out.printf("\nTotal Fee:$ %.2f",totalFee);
    
  }
  
}
