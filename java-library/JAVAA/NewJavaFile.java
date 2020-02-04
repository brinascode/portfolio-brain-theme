import java.util.Scanner;
public class NewJavaFile {
  
  public static void main(String [] args){
     
    Scanner input = new Scanner(System.in);
    System.out.print("Please enter first number");
    int x = input.nextInt();
    System.out.print("Please enter second number");
    int y = input.nextInt();
    
    int sum = x + y;
    System.out.printf("%d + %d = %d", x,y,sum);
    int diff = x - y;
    int prod = x * y;
    int quo = x / y;
    
    
    
  }
  
  
} //no code allowed after this bracket!