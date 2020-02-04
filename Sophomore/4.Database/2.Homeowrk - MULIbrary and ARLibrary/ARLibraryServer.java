//Imports

//For sockets
import java.net.ServerSocket;
import java.net.Socket;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.InetAddress;
import java.util.Scanner;

//For database
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.ResultSet;


public class ARLibraryServer {
  
  
  //Declaring some private vars
  private ServerSocket serverSocket;
  private Socket socket;
  private ObjectInputStream input;


  public ARLibraryServer(){
  
    //Server to receive inputs from MU LIbrary
    System.out.print("Arlington Library Server is running");
    Scanner scanner = new Scanner(System.in);
    
    //Initialize the socket and its stuff
    try{
      serverSocket = new ServerSocket(1098,500); //the port the server socket will be receiving messages on
      
      while(true){ //Use a loop to keep the server running
        socket = serverSocket.accept();
        input = new ObjectInputStream(socket.getInputStream()); //Display message received
        String message = (String) input.readObject();
       // message = String.valueOf(message);//converting our message to String
       
        //Now we must connect to db to see if we have the book!!
        String url = "jdbc:mysql://localhost/arlibrary?user=root&password=";
          try{
              Class.forName("com.mysql.jdbc.Driver");
              System.out.println("JDBC is found");
              
              Connection connection = DriverManager.getConnection(url);
              System.out.println("Database is connected");
              
              Statement stmt = connection.createStatement();
              String query = "select * from book where isbn = " + message + "";
              ResultSet result = stmt.executeQuery(query);
              
              String response;
              if(result.next()){
                response = result.getString(1) + " is available at ARLibrary";
              }else{
                 response = message + " is not available at ARLibrary";
              }
              
               //Return results to MU Library app
                Socket socket2  = new Socket(InetAddress.getByName("localhost"),1097);
                ObjectOutputStream output = new ObjectOutputStream(socket2.getOutputStream());
                output.writeObject(response);
                output.flush();
                
              
              
            
           }
            catch(ClassNotFoundException cnfe){
              cnfe.printStackTrace();
            }
            catch(SQLException sqle){
             sqle.printStackTrace();
            }
        
      }
    }
    catch(IOException ioe){
      ioe.printStackTrace();
    }catch(ClassNotFoundException cnfe){
      cnfe.printStackTrace();
    }
    
    
  
  }
  
  
  public static void main(String [] args){
  
    ARLibraryServer app = new ARLibraryServer();
    
  }

  

}