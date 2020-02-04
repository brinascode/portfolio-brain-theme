//To set up the sql connection
import java.sql.Connection; 
import java.sql.DriverManager; //package that we use to send information to mySQL
import java.sql.SQLException;

//What we'll need these to execute the sql commands:
import java.sql.Statement;
import java.sql.ResultSet;

//To connect to a different db, the only thing that would need to change is the protocol and all and the url...
//You do not need to use multiple try blocks, just use multiple catch


public class DatabaseExample2 {
  public static void main(String [] args){
    
   //Connecting to the db
   String url = "jdbc:mysql://localhost/it230?user=root&password="; //This protocol is for mySQL only.
   
   try {
     Class.forName("com.mysql.jdbc.Driver"); //used to connect to somee packages
     System.out.println("JDBC is found!!!");
     
     
     Connection connection = DriverManager.getConnection(url);
     System.out.println("Database is connected");
     
      //A select command --> querying the database --> here something will be returned to us
     Statement stmt = connection.createStatement();
     String query = "select studentId,firstName from student";
     ResultSet  result = stmt.executeQuery(query);
     while(result.next()){ //will check whether the next row is a null or if there's a value
       String studentId = result.getString(1);
       String firstName = result.getString(2);
       System.out.println(studentId + " " + firstName); //accessing the column
     }
    
    
   }catch(ClassNotFoundException cnfe){
     cnfe.printStackTrace();
   }catch(SQLException sqle){
      sqle.printStackTrace(); //note that you can also write this printStackTrace to a text file :)
   }
   
  }
} 