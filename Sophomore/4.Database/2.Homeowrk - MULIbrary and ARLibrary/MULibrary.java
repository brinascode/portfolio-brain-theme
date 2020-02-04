//Imports -- layout 
import javax.swing.JFrame;
import javax.swing.JPanel;
import java.awt.BorderLayout;
import javax.swing.JLabel;
import javax.swing.JTextField;
import javax.swing.JButton;


//Imports -- events
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import javax.swing.JOptionPane;

//Imports -- for database
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.ResultSet;

//For Sockets
import java.net.Socket;
import java.net.ServerSocket;
import java.io.ObjectOutputStream;
import java.io.ObjectInputStream;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.io.IOException;
import java.util.Scanner;


public class MULibrary extends JFrame implements ActionListener {
  
  private JPanel centerPanel;
  private JLabel isbnLabel,titleLabel;
  private JTextField isbnField, titleField;
  private JButton newBookBtn, searchMUBtn, searchArlBtn;
  
  private Socket socket;
  private ServerSocket serverSocket;
  private ObjectOutputStream output;
  
  
  
  
 
  
  public MULibrary(){
   super("MU Library");
   
   //CenterPanel
    centerPanel = new JPanel();
    isbnLabel = new JLabel("ISBN");
    titleLabel = new JLabel("Title");
    isbnField = new JTextField(10);
    titleField = new JTextField(10);
    centerPanel.add(isbnLabel);
    centerPanel.add(isbnField);
    centerPanel.add(titleLabel);
    centerPanel.add(titleField);
    
    newBookBtn = new JButton("Add New Book");
    newBookBtn.addActionListener(this);
    searchMUBtn = new JButton("Search ISBN - MU Library");
    searchMUBtn.addActionListener(this);
    searchArlBtn = new JButton("Search ISBN - Arlington Library");
    searchArlBtn.addActionListener(this);
    centerPanel.add(newBookBtn);
    centerPanel.add(searchMUBtn);
    centerPanel.add(searchArlBtn);
   
   
   //Last things added to JFrame:
   add(centerPanel,BorderLayout.CENTER);
   
   //JFrame Dimensions:
   setSize(500,500);
   setVisible(true);
   setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
   
   try{
     serverSocket = new ServerSocket(1097,500);
  }catch(IOException ioe){
    ioe.printStackTrace();
  }
   
   
  }
  
  public void actionPerformed(ActionEvent event){
    
    
    //***************************DATABASE CONNECTION
     String url = "jdbc:mysql://localhost/mulibrary?user=root&password="; //This protocol is for mySQL only.
     Connection connection;
     
     try {
        
       
        // 1. Connecting to the db
            Class.forName("com.mysql.jdbc.Driver"); //used to connect to somee packages
            connection = DriverManager.getConnection(url);
            System.out.print("Database is connected");
            
            
         
        // 2. Our actual event handlers now ...
            
            //****If Add New Book is clicked
            if(event.getSource() == newBookBtn){
              
              String isbn = isbnField.getText();
              String title = titleField.getText();
              
              //Showing the messageDialog
              String output = "The following book is successfully added to MU Library"+ 
                "\n ISBN"+ isbn + 
                "\n Title:"+ title + "";         
              JOptionPane.showMessageDialog(null,output);
              //Saving to database
              try {
                //To insert, update, delete, create etc... Any command where you don't need to receive anything in return
                String insertStatement = "insert into book values("+ isbn + ","+ "'" + title + "'"+ ")";
                System.out.println("\n"+insertStatement);
                Statement stmt = connection.createStatement();
                stmt.execute(insertStatement);
                System.out.print("Inserted Successfully!");
              }catch(SQLException sqle){
                sqle.printStackTrace(); //note that you can also write this printStackTrace to a text file :)
              }
              
            }  
            //****If Search MU Library is Clicked
            else if(event.getSource() == searchMUBtn){
             
              
              String isbn = isbnField.getText();
              
               //A select command --> querying the database --> here something will be returned to us
              Statement stmt = connection.createStatement();
              String query = "select isbn,title from book where isbn =" + isbn + "";
              String output = "";
              ResultSet  result = stmt.executeQuery(query);
              while(result.next()){ //will check whether the next row is a null or if there's a value
                isbn = result.getString(1);
                String title = result.getString(2);
                output = "ISBN: " +isbn + "\nTitle:" + title + "\n Available at MU Library";
              }
              
              if(output.equals("")){
                JOptionPane.showMessageDialog(null, "ISBN:"+ isbn+ " is not available at MU Library");
              }else{
                JOptionPane.showMessageDialog(null,output);
              }
              
            }//****If Search Arl Library is Clicked  --> we connect to the ARLibrary server
            else if(event.getSource() == searchArlBtn){
               
              try{
                
                 
                
               //this doesnt go in a loop. Do not use a loop on the gui
               
                
                
                //Sending the isbn to the ARLibrary Server:
                socket = new Socket(InetAddress.getByName("localhost"),1098);
                output = new ObjectOutputStream(socket.getOutputStream());
                
                
                Scanner scan = new Scanner(System.in);
                String message = isbnField.getText(); //Scanner to type in the  message to send
               
                
                output.writeObject(message); //Ready to send
                output.flush();
                
                //Receiving response from ARLibraryServer:
                
                 
                 socket = serverSocket.accept();
                 ObjectInputStream input = new ObjectInputStream(socket.getInputStream()); //Display message received
                 String message2 = (String) input.readObject();
                 JOptionPane.showMessageDialog(null,message2);
              
              }
              catch(UnknownHostException uhe){
                uhe.printStackTrace();
                }catch(IOException ioe){
                  ioe.printStackTrace();
                }
                
            
            }
           
          }catch(ClassNotFoundException cnfe){
            cnfe.printStackTrace();
          }catch(SQLException sqle){
            sqle.printStackTrace();
          }
   
  }

  public static void main(String [] args) {
  
    MULibrary app = new MULibrary();
  
  
  }




}