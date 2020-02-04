import java.util.Scanner;

public class ScoreCount {

  public static void main(String [] args){
    
    Scanner input = new Scanner(System.in);
    double average = 0;
    
    //Inputs
    System.out.print("Enter Student Name \n");
    String name = input.next();
    double scores[] = new double[10];
    int passing = 0;
    int failing = 0;
    
    for(int c=0; c <= 9; c++){
      int element = c + 1;
      System.out.print("Enter score: "+ element);
 
      double score = input.nextDouble();
      scores[c] = score;
      average += scores[c];
      
      if(score >=50){
        passing += 1;
      }else{
        
        failing +=1;
      }
      
      
    }
    

    
    //Brain
    average = average / 10;
    
    //Output
    System.out.printf("Score Summary of: %s", name);
    System.out.printf("\nAverage Score: %.1f",average);
    System.out.printf("\nNumber of Passing Scores: %d",passing);
    System.out.printf("\nNumber of Failing Scores: %d",failing);
  }



}