import java.util.Scanner;

public class ArrayExample2{
  
  public static void main(String [] args){
    
    Scanner input = new Scanner(System.in);
    
    int a[] = new int[3];
    

       for(int index=0;index < a.length; index++){
         System.out.print("Enter a number:");
         a[index] = input.nextInt();
         System.out.println(a[index]);
       }
    
  }
  
}