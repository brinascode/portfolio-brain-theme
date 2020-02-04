//UI imports
import javax.swing.JFrame;
import javax.swing.JPanel;
import java.awt.BorderLayout;
import javax.swing.JLabel;
import javax.swing.JTextField;
import javax.swing.JButton;


public class LibraryApp extends JFrame {
  
  //private 
  private JPanel centerPanel;
  private JLabel isbnLabel, titleLabel;
  private JButton searchButton, addBookButton;
  private JTextField isbnField, titleField;
  
  //constructor
  public LibraryApp(){
    super("Library App practice!");
    
    
    //Center Panel
    centerPanel = new JPanel();
    JLabel isbnLabel = new JLabel("ISBN");
    JLabel title = new JLabel("Title");
    JTextField isbnField = new JTextField(10);
    JTextField titleField = new JTextField(10);
    JButton searchButton = new JButton("Search book");
    JButton addBookButton = new JButton("Add Book");
    centerPanel.add(isbnLabel);
    centerPanel.add(isbnField);
    centerPanel.add(titleLabel);
    centerPanel.add(titleField);
    centerPanel.add(searchButton);
    centerPanel.add(addBookButton);
    
    //Last stuff added to JFrame:
    add(centerPanel,BorderLayout.CENTER);
    
   //Setting frame settings
    setSize(600,600);
    setVisible(true);
    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  
  }



  //main method
  public static void main(String [] args){
    
    LibraryApp app = new LibraryApp();
  
  }

}