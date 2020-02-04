//UI imports
import javax.swing.JFrame;
import javax.swing.JPanel;
import java.awt.BorderLayout;
import javax.swing.JLabel;
import javax.swing.JTextField;
import javax.swing.JButton;

//Events
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import javax.swing.JOptionPane;


public class LibraryApp extends JFrame implements ActionListener{
  
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
    JLabel titleLabel = new JLabel("Title");
    JTextField isbnField = new JTextField(10);
    JTextField titleField = new JTextField(10);
    
    JButton searchButton = new JButton("Search book");
    searchButton.addActionListener(this);
    JButton addBookButton = new JButton("Add Book");
    addBookButton.addActionListener(this);
    
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
  
  public void actionPerformed(ActionEvent e){
   
    if(e.getSource() == searchButton){
      JOptionPane.showMessageDialog(null,"Searching for your book");
    }else if(e.getSource() == addBookButton){
      JOptionPane.showMessageDialog(null,"Adding your book");
    }
  
  }



  //main method
  public static void main(String [] args){
    
    LibraryApp app = new LibraryApp();
  
  }

}