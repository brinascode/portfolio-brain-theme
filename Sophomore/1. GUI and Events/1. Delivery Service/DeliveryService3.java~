//Imports -- Components
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

//Imports -- Events
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JOptionPane;


public class DeliveryService2 extends JFrame implements ActionListener{
  
  private JLabel weightLabel, deliveryLabel, emptyLabel1;
  private JPanel northPanel,westPanel,westBlock1,southPanel;
  private JTextField weightField;
  private JRadioButton localRadioBtn, distanceRadioBtn;
  private ButtonGroup distanceGrp;
  private JCheckBox insuranceCheckBox;
  private JButton goBtn, resetBtn;
 
  
  public DeliveryService2(){
    
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
    goBtn.addActionListener(this);
    resetBtn = new JButton("Reset");
    resetBtn.addActionListener(this);
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
  
  
  public void actionPerformed(ActionEvent event){
    
    String weight = weightField.getText();
    
    
    String delivery = "";
    if(localRadioBtn.isSelected()){
      delivery = "Local";
    }else if(distanceRadioBtn.isSelected()){
      delivery = "Long Distance";
    }
    
    String insurance = "No";
    if(insuranceCheckBox.isSelected()){
       insurance = "Yes";
       
    }else {
       insurance = "No";
    }
    
    if(event.getSource() == goBtn){
      String messageOutput = "Delivery Information" +
                             "\nWeight: "+  weight + 
                             "\nType of Delivery: " + delivery+
                             "\nInsurance: " + insurance;
                        
      JOptionPane.showMessageDialog(null,messageOutput);
      
      
      
    }else if(event.getSource() == resetBtn){
   
        weightField.setText("");
        distanceGrp.clearSelection();
        insuranceCheckBox.setSelected(false);
    }
  
  }
  
  
  public static void main(String [] args){
  
    DeliveryService2 app = new DeliveryService2(); //how does it know to run this?
  
  }
  




}