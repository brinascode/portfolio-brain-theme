import java.net.ServerSocket;
import java.net.Socket;
import java.io.IOException;
import java.io.ObjectInputStream;

import java.net.InetAddress;
import java.io.ObjectOutputStream;
import java.util.Scanner;


public class TCPServerExample {
  
  //Declare
  private ServerSocket serverSocket;
  private Socket socket;
  private ObjectInputStream input;
  
  private ObjectOutputStream output;

  
  public TCPServerExample() {
    System.out.println("Server is running!!!");
    Scanner scanner = new Scanner(System.in);
    
    
    //Initialize
    try {
    serverSocket = new ServerSocket(1098, 500); //Do NOT ever put this in loop...
    
    while(true) {//Use a loop to keep server running

      socket = serverSocket.accept(); //accept connection from client
      input = new ObjectInputStream(socket.getInputStream());//Display recieved package / Receive output stream object
      String message = (String) input.readObject(); //convert String byte to String
      System.out.println("Client says: " + message);//display the message received from client
      
      
      
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
    new TCPServerExample();
  }
}