public class MultiThreadExample {

  public static void main(String [] args){
     
    Thread task1 = new Thread(new CountExample("Task1"));
    task1.start();
    
    Thread task2 = new Thread(new CountExample("Task2"));
    task2.start();
  
  }



}

class CountExample implements Runnable{
  
  String task;
  
  public CountExample(String newTask){ //YOu dont have to create the constructor if there isn't anything you want to pass 
  
    task = newTask;
  }

  public void run(){
     
    
    try{
      
       for(int i = 1; i<= 5; i++){
         int number = (int) ((Math.random()*10) % 3) *1000;
         Thread.sleep(number);
         System.out.println(task+ " "  + i + " is counting" );
       
       }
       System.out.print(task + " Done!!!");
        
       }catch(InterruptedException ie){
         ie.printStackTrace();
    }
       
    
       
  }

}