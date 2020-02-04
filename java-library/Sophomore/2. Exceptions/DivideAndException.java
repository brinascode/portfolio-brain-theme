public class DivideAndException {

  public static void main(String [] args){
  
    int numerator = 10;
    int denominator = 0;
    try{
        int result = numerator / denominator;
         System.out.println("Result: "+ result); //everything inside try block --> if everything is valid this happens
        //We use this way to catch any exception
  
    }
    catch(Exception e) {
    
      System.out.println(e.toString());
      System.out.println(e.getMessage());
      e.printStackTrace();
    
    }
     System.out.print("End successfully");

   
  }



}