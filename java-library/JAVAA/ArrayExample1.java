
public class ArrayExample1{
  
  public static void main(String [] args){
  
    int a [] = {10,20,30,14,5,-11};
    int b [] = new int[5];
    System.out.println(a[1]);
    
    b[4] = 18;
    
    int sum = a[3] + b[3];
    System.out.println(sum);
    
    for(int index=0;index <= a.length-1; index++){
      System.out.println(a[index]);
    }
    
  
  }
  
  
  
}