//Imports
//GUI
import javax.swing.JFrame;
import javax.swing.JTextField;
import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JPanel;
import java.awt.BorderLayout;

//Database Connection
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.ResultSet;

public class FinalPractice extends JFrame{
  
  private JTextField nameField,passwordField;
  private JButton createBtn,loginBtn;
  private JLabel nameLabel,passwordLabel;
  private JPanel centerPanel;
  

  public FinalPractice(){
   
    super("Slay that exam baby!");
    
    //centerPanel
    centerPanel = new JPanel();
    nameField = new JTextField(10);
    passwordField = new JTextField(10);
    nameLabel = new JLabel("Username");
    passwordLabel = new JLabel("Password");
    createBtn = new JButton("Create user");
    loginBtn = new JButton("Login");
    centerPanel.add(nameLabel);
    centerPanel.add(nameField);
    centerPanel.add(passwordField);
    centerPanel.add(passwordLabel);
    centerPanel.add(createBtn);
    centerPanel.add(loginBtn);
    
    
    //Connecting to db
    String url = "jdbc:mysql://localhost/users?user=root&password=";
    try {
      Class.forName("com.mysql.jdbc.Driver");
      Connection connection = DriverManager.getConnection(url);
      System.out.println("Database is connected!");
      
      
      //Executing statements in db:
      String toExecute = "insert into users values(3,'lollipop','motdepasse');";
      Statement stmt = connection.createStatement();
      stmt.execute(toExecute);
      System.out.print("Success"); 
      
      
      //Querying statements in db:
      String query = "select * from users";
      Statement stmt2 = connection.createStatement();
      ResultSet result = stmt2.executeQuery(query);
      while(result.next()){
      String name = result.getString(2);
      String password = result.getString(3);
      System.out.println("Username: " + name + ", password: " + password );
      }
      
      
      
    }catch(ClassNotFoundException cnfe){
      cnfe.printStackTrace();
      
    }catch(SQLException sqle){
      sqle.printStackTrace();
    }
      
    
    
    
    
    
    
    
    add(centerPanel,BorderLayout.CENTER);
    
    setSize(500,500);
    setVisible(true);
    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    
  }
  
  
  public static void main(String [] args){
  
    FinalPractice app = new FinalPractice();
  
  }


}