import java.util.Scanner;

public class CountFamilies {
  
  
  public static void main(String [] args){
    
    Scanner input = new Scanner(System.in);
    
    //Inputs:
    System.out.print("How many family members do you have? \n");
    int famNum = input.nextInt();
    double incomes[] = new double[famNum];
   
   //Enter incomes of fam members
    for(int c=0;c <= famNum-1 ;c++){
      int element = c+1;
      System.out.print("\nPlease enter the income of family member "+ element);
      incomes[c]= input.nextDouble();
      
    }
    
    //Getting the maximum
     double max = 0;
     for(int c=0;c <= famNum-1 ;c++){
      int element = c+1;
  
      if(incomes[c]>=max){
        
        max = incomes[c];
      }
     
    }
    
     //Lnumber of families below maxPercent
     double maxPercent  = 0.10 * max;
     int underMax = 0;
     
     for(int c=0;c <= famNum-1 ;c++){
       int element = c+1;
       if(incomes[c]<= maxPercent){
         underMax += 1;
       }
       
      }
     
     
     
     
     
     //Final outputs
      
     for(int c=0;c <= famNum-1 ;c++){
     int element = c+1;
        System.out.printf("\nIncome of Family member %d is %.2f", element,incomes[c]);
      }
     System.out.printf("\nMaximum Income: $%.2f",max);
     System.out.printf("\n10 percent of maximum income: $%.2f",maxPercent);
     System.out.printf("\nNumber of families whose income is below percent: %d",underMax);
    
  }
  
  
  
}