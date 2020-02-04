import java.util.Scanner;

public class FinalsPractice {
  
  public static void main(String [] args){
    
    Scanner input = new Scanner(System.in);
    
    
    //Inputs:
   System.out.print("Enter your name");
   String name = input.nextLine();
   
   double scores[] = new double[10];
   double average = 0;
   
   int passing = 0;
   int failing = 0;
   
   
   
   for (int c=0; c<=10-1 ; c++){
     
     System.out.print("\nEnter score " + (c+1) );
     double score = input.nextDouble();
     
     
     //For average
     average += score;
     
     //To count passing and failing:
     if(score>=50){
       
       passing+=1;
     }else if(score<=49){
       
       failing +=1;
     }
     
     
   }
   
    average = (average/10);
    
    //Outputs:
   System.out.printf("\nScore summary of %s",name);
   System.out.printf("\nAverage score: %.1f ", average);
   System.out.printf("\nNumber of passing scores: %d",passing);
   System.out.printf("\nNumber of failing scores: %d",failing);
   
    
    
    
    
    
  }
  
  
}