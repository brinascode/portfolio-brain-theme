public class DivideAndException2 {

  public static void main(String [] args){
  
    int numerator = 10;
    int denominator = 0;
    try{
      
        //you have to specify what you try to catch, when you create your own exception
      if(denominator == 0){ //detecting the error
          //if this error happens, we pass the control to the catch block
        throw new DivideByZeroException("You cant divide by zeroooo");
      
      }
      
        int result = numerator / denominator;
         System.out.println("Result: "+ result); //everything inside try block --> if everything is valid this happens
        
  
    }
    catch(DivideByZeroException e) {
    
      System.out.println(e.toString());
    //  System.out.println(e.getMessage());
     // e.printStackTrace();
    
    }
     System.out.print("End successfully");

   
  }



}