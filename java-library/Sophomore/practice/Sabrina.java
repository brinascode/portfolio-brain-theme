//Imports
import java.net.Socket;
import java.net.ServerSocket;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.UnknownHostException;
import java.net.InetAddress;
import java.util.Scanner;



public class Sabrina{
  
  private ServerSocket serverSocket;
  private Socket socket;
  private ObjectOutputStream output;
  private ObjectInputStream input;

  public Sabrina(){
    
    try{
      
      //Our Server socket
      serverSocket = new ServerSocket(1098,500);
      
      while(true){
        
      
        
      
        //Sending messages
          //Our client socket to send messages:
        socket = new Socket(InetAddress.getByName("localhost"),1097);
        output = new ObjectOutputStream(socket.getOutputStream());
        
         //Actually typing the message we want to send
        Scanner scan = new Scanner(System.in);
        System.out.print("Sabrina says: ");
        String message = scan.nextLine();
        
        //Sending it
        output.writeObject(message);
        output.flush();
        System.out.println("Message sent!");
        
           //Receiving messages
        socket = serverSocket.accept();
        input = new ObjectInputStream(socket.getInputStream());
        String message2 = (String) input.readObject();
        System.out.println("Mahi says "+ message2);
     
        
        
        
       
        
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
  
    new Sabrina();
  
  }

}