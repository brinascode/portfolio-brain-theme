import java.net.ServerSocket;
import java.net.Socket;
import java.io.IOException;
import java.io.ObjectInputStream;

import java.net.InetAddress;
import java.io.ObjectOutputStream;
import java.util.Scanner;


public class ChatUser1 {
  
  //Declare
  private ServerSocket serverSocket;
  private Socket socket;
  private ObjectInputStream input;
  
  private ObjectOutputStream output;

  
  public ChatUser1() {
    System.out.println("Server is running!!!");
    Scanner scanner = new Scanner(System.in);
    
    
    //Initialize
    try {
      
      serverSocket = new ServerSocket(1098, 500); //Do NOT ever put this in loop... its only the listening socket that goes in the loop
      
    
    while(true) {//Use a loop to keep server running

      //initialize socket to send a message to client running on port 1097
      socket = new Socket(InetAddress.getByName("localhost"),1097);
      
   //Server socket to receive messages SENT TO Chat User 1
      socket = serverSocket.accept(); //accept connection from client
      input = new ObjectInputStream(socket.getInputStream());//Display recieved package / Receive output stream object
      String message = (String) input.readObject(); //convert String byte to String
      System.out.println("Client says: " + message);//display the message received from client
      
      
   //Client socket to send messages to Chat User 2
     
      //initialize output stream object
      output = new ObjectOutputStream(socket.getOutputStream());
      System.out.print("Server says:");
      String message2 = scanner.nextLine();
      
      //write buffered output bytes and flush through to the underlying stream
      output.writeObject(message2);
      output.flush();
      System.out.println("Message sent!!");
    }
  }
    
    catch(IOException ioe) {
     ioe.printStackTrace(); 
    }
    
    catch(ClassNotFoundException cnfe) {
      cnfe.printStackTrace();
    }
  }
  
  
  public static void main(String [] args) {
    new ChatUser1();
  }
}