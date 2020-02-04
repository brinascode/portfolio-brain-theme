import java.util.Scanner;

public class NumberAboveAverage {
  
  public static void main(String [] args){
    
    Scanner input = new Scanner(System.in);
    
    double temps[] = new double[10];
    double average = 0;
    //Inputting the temperatures
    for(int i=0;i<10;i++){
      int e = i+1;
      System.out.print("Enter Day "+e);
      temps[i] = input.nextDouble(); 
      
    }
    
    //Getting average
      for(int i=0;i<10;i++){
      int e = i+1;
     average += temps[i];
      
    }
    average = average / 10;
    
    
     //Getting how many are above average
      int aboveAve = 0;
      for(int i=0;i<10;i++){
        if(temps[i] > average){
          aboveAve += 1;
        }
      
    }
    
      
   //Outputs
      
      System.out.print("Average = "+average);
      System.out.print("\nNumber of Days Above Average: "+aboveAve);
    
  }
  
  
}