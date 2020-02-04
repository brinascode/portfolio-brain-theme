public class DivideByZeroException extends Exception {

  public DivideByZeroException(){ //This is our constructor
    super("Error: Can't divide by Zero!!!");
  
  }
  
  public DivideByZeroException(String message){ //Creating a second constructor, to allow the 'user' program to pass any message...they want
    super(message);
  }



}