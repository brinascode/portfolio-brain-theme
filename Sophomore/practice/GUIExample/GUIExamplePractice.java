//All my components
import javax.swing.JFrame;
import java.awt.BorderLayout;
import javax.swing.JPanel;
import javax.swing.JLabel;
import javax.swing.JTextField;
import java.awt.Color;
import javax.swing.JComboBox;


public class GUIExamplePractice extends JFrame{
  private JPanel northPanel,westPanel,southPanel;
  private JLabel nameLabel,stateLabel,hobbiesLabel;
  private JTextField nameField;
  private JComboBox statesBox;

  public GUIExamplePractice(){
     super("MY Second Midterm Practice!");
     
     //NORTH
     northPanel = new JPanel();
     northPanel.setBackground(Color.BLUE);
     nameLabel = new JLabel("Enter full name");
     nameLabel.setForeground(Color.WHITE);
     nameField = new JTextField(10);
     northPanel.add(nameLabel);
     northPanel.add(nameField);
     
     
     //WEST
     westPanel = new JPanel();
     stateLabel = new JLabel("State");
     String states [] = {"","DC","VA","MD"};
     statesBox = new JComboBox(states);
     westPanel.add(stateLabel);
     westPanel.add(statesBox);
     
     //SOUTH
     southPanel = new JPanel();
     
     
     //Adding the layout to our JFrame
     add(northPanel,BorderLayout.NORTH);
     add(westPanel,BorderLayout.WEST);
     add(southPanel,BorderLayout.SOUTH);
     
     //My JFrame settings
     setSize(500,500);
     setVisible(true);
     setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
     
  }

  public static void main(String [] args){
    GUIExamplePractice app = new GUIExamplePractice();
  
  }
  

}