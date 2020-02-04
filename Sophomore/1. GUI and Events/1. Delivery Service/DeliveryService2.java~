//Imports
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JLabel;
import java.awt.BorderLayout;
import javax.swing.JTextField;
import javax.swing.JRadioButton;
import javax.swing.ButtonGroup;
import javax.swing.JCheckBox;
import java.awt.GridLayout;
import javax.swing.JButton;


public class DeliveryService1 extends JFrame {
  
  private JLabel weightLabel, deliveryLabel, emptyLabel1;
  private JPanel northPanel,westPanel,westBlock1,southPanel;
  private JTextField weightField;
  private JRadioButton localRadioBtn, distanceRadioBtn;
  private ButtonGroup distanceGrp;
  private JCheckBox insuranceCheckBox;
  private JButton goBtn, resetBtn;
 
  
  public DeliveryService1(){
    
    super("Delivery Service");
  
    //North
    northPanel = new JPanel();
    
    weightLabel = new JLabel("Enter Weight in Pounds");
    weightField = new JTextField(10);
    northPanel.add(weightLabel);
    northPanel.add(weightField);
    
    //West 
    westBlock1 = new JPanel();
    westBlock1.setLayout(new GridLayout(3,5));
    
    deliveryLabel = new JLabel("Type of Delivery");
    westBlock1.add(deliveryLabel);
    emptyLabel1 = new JLabel("");
    westBlock1.add(emptyLabel1);
    localRadioBtn = new JRadioButton("Local");
    distanceRadioBtn = new JRadioButton("Long Distance");
    distanceGrp = new ButtonGroup();
    distanceGrp.add(localRadioBtn);
    distanceGrp.add(distanceRadioBtn);
    westBlock1.add(localRadioBtn);
    westBlock1.add(distanceRadioBtn);
    
    insuranceCheckBox = new JCheckBox("Insurance");
    westBlock1.add(insuranceCheckBox);
    
    westPanel = new JPanel();
    westPanel.add(westBlock1);
    
    //South
    southPanel = new JPanel();
    goBtn = new JButton("Go");
    resetBtn = new JButton("Reset");
    southPanel.add(goBtn);
    southPanel.add(resetBtn);
    
    
    //Adding final panels to JFrame
    add(northPanel,BorderLayout.NORTH);
    add(westPanel,BorderLayout.WEST);
    add(southPanel,BorderLayout.SOUTH);
    
    setSize(500,500);
    setVisible(true);
    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  }
  
  
  public static void main(String [] args){
  
    DeliveryService1 app = new DeliveryService1(); //how does it know to run this?
  
  }
  




}