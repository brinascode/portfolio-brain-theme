import java.net.Socket;
import java.net.ServerSocket;
import java.io.ObjectOutputStream;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.io.IOException;
import java.util.Scanner;
import java.io.ObjectInputStream;


public class ChatUser2 {
  
  //Declare
  private Socket socket; //declare an actual socket
  private ObjectOutputStream output; //declare an output stream to send a message
  private ObjectInputStream input;
  private ServerSocket serverSocket;
  
  
  public ChatUser2() {
    
    //Initialize
    try {
    
      
      serverSocket = new ServerSocket(1097, 500);
      
      while(true) {
        
      //Client socket to send messages to Chat User 1
        socket = new Socket(InetAddress.getByName("localhost"), 1098);
        //socket = new Socket("10.8.42.210", 1098);
        output = new ObjectOutputStream(socket.getOutputStream()); //carrier
        
        
        Scanner scan = new Scanner(System.in);
        System.out.print("User 2 says:");
        String message = scan.nextLine(); //Scanner to type in a message sent to the client (the package being sent)
        
        //write buffered output bytes and flush throught to the underlying stream
        output.writeObject(message);
        output.flush();
        System.out.println("Message sent!!!");
        
        
        //Server socket to receive messages from Chat User 1
        
            socket = serverSocket.accept(); //accept connection from client
            input = new ObjectInputStream(socket.getInputStream());//Display recieved package / Receive output stream object
            String message2 = (String) input.readObject(); //convert String byte to String
            System.out.println("User 1 says: " + message2);//display the message received from 
         
       
      }
      
    }
    catch(UnknownHostException uhe) {
      uhe.printStackTrace();
    }
    catch(IOException ioe) {
      ioe.printStackTrace();
    } 
    catch(ClassNotFoundException cnfe){
          
          cnfe.printStackTrace();
        }
    
    
  }
  

  public static void main(String [] args) {
    new ChatUser2();
  }
}