import java.util.Scanner;
public class postBreak {
  
  public static void main(String [] args) {
    
   Scanner input = new Scanner(System.in);
   
 
    while(true){
       System.out.println("Hi there");
       System.out.println("Do you want to continue? Enter Y: Yes, Enter N:No");
       String choice = input.next(); 
       
       if(choice.equals("Y")){
         
         continue;
       }else if(choice.equals("N")){
         break;
       }
       
       
    }

  
  
  }
  
  
}