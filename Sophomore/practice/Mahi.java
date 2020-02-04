//imports
import java.net.Socket;
import java.net.ServerSocket;
import java.io.ObjectOutputStream;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.io.IOException;
import java.util.Scanner;
import java.io.ObjectInputStream;

public class Mahi{
  
  //Declaring
  private Socket socket;
  private ObjectOutputStream output;
  private ObjectInputStream input;
  private ServerSocket serverSocket;
  
  
  public Mahi(){
  
  
    try{
    
      //Our server socket to receive messages
      serverSocket = new ServerSocket(1097,500);
      
      while(true){
        
        //Receiving messages
      socket = serverSocket.accept();
      input = new ObjectInputStream(socket.getInputStream());
      String message2 = (String) input.readObject();
      System.out.println("Sabrina says " + message2);
      
      
     //Sending messages
        //Our client socket to send messages
        socket = new Socket(InetAddress.getByName("localhost"),1098);
        output = new ObjectOutputStream(socket.getOutputStream());
        
        //Actually typing the message we want to send
        Scanner scan = new Scanner(System.in);
        System.out.print("Mahi says:");
        String message = scan.nextLine();
        
        //Sending it
        output.writeObject(message);
        output.flush();
        System.out.println("Message Sent!!!");
      
     
      
      
      
      }
      
      
    }catch(UnknownHostException uhe){
        uhe.printStackTrace();
        
    }catch(IOException ioe){
       ioe.printStackTrace();
    }catch(ClassNotFoundException cnfe){
      cnfe.printStackTrace();
    }
  
  
  }
  
  
  

  public static void main(String [] args){
  
    new Mahi();
  
  }

}