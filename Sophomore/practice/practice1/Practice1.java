//Imports -- UI Stuff
import javax.swing.JFrame;
import javax.swing.JPanel;
import java.awt.BorderLayout;
import java.awt.Color;
import javax.swing.JLabel;
import javax.swing.JTextField;
import javax.swing.JComboBox;
import java.awt.GridLayout;
import javax.swing.JCheckBox;
import javax.swing.JRadioButton;
import javax.swing.ButtonGroup;
import javax.swing.JButton;
import javax.swing.ImageIcon;

//Imports -- Events stuff
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import javax.swing.JOptionPane;


public class Practice1 extends JFrame implements ActionListener{
  
  private JPanel northPanel,southPanel,eastPanel,westPanel,centerPanel,westPanelW,westPanel2,westPanelW2;
  private JLabel nameLabel,ageLabel,statesLabel,talentLabel,persInfoLabel,genderLabel,nationalityLabel,maleLabel,femaleLabel;
  private JTextField nameTextField,ageTextField;
  private JComboBox statesDropBox;
  private JCheckBox singingCheckBox,dancingCheckBox,codingCheckBox;
  private JRadioButton femaleRadioBtn, maleRadioBtn,americanRadioBtn,foreignRadioBtn;
  private ButtonGroup genderGrp,nationalityGrp;
  private JButton submitBtn, cancelBtn;
  private ImageIcon maleIcon, femaleIcon;
  

  public Practice1(){ //our Constructor
     super("My awesome practice!");  
     
     //NORTH
     northPanel = new JPanel();
     northPanel.setBackground(Color.BLUE);
     
     nameLabel = new JLabel("Name:");
     nameLabel.setForeground(Color.WHITE);
     ageLabel = new JLabel("Age ");
     ageLabel.setForeground(Color.WHITE);
     
     
     nameTextField  = new JTextField(10);
     ageTextField = new JTextField(10);
     
     northPanel.add(nameLabel);
     northPanel.add(nameTextField);
     northPanel.add(ageLabel);
     northPanel.add(ageTextField);
     
    
     
     //SOUTH
     southPanel = new JPanel();
     southPanel.setBackground(Color.RED);
     
     submitBtn = new JButton("Submit");
     submitBtn.addActionListener(this);
     cancelBtn = new JButton("Cancel");
     cancelBtn.addActionListener(this);
     
     southPanel.add(submitBtn);
     southPanel.add(cancelBtn);
     
     //EAST
     eastPanel = new JPanel();
     eastPanel.setBackground(Color.YELLOW);
     
     
     
     //WEST
     //westPanel (1)
     westPanel = new JPanel();
     westPanel.setBackground(Color.GREEN);
     westPanel.setLayout(new GridLayout(2,5));
     
     statesLabel = new JLabel("State: ");
     statesLabel.setForeground(Color.WHITE);
     String states [] = {"","MD","VA","DC"};
     statesDropBox = new JComboBox(states);
     westPanel.add(statesLabel);
     westPanel.add(statesDropBox);
     
     talentLabel = new JLabel("");
     singingCheckBox = new JCheckBox("Singing");
     dancingCheckBox = new JCheckBox("Dancing");
     codingCheckBox = new JCheckBox("Coding");
     westPanel.add(talentLabel);
     westPanel.add(singingCheckBox);
     westPanel.add(dancingCheckBox);
     westPanel.add(codingCheckBox);
     
     //westPanel2
     westPanel2 = new JPanel();
     westPanel2.setBackground(Color.RED);
     westPanel2.setLayout(new GridLayout(2,2));
     
     persInfoLabel = new JLabel("Personal Info");
     persInfoLabel.setToolTipText("Don't worry, nuffin too personal");
     westPanel2.add(persInfoLabel);
     
     genderLabel = new JLabel("Gender");
     genderLabel.setForeground(Color.WHITE);
     westPanel2.add(genderLabel);
     femaleRadioBtn = new JRadioButton("Female");
     maleRadioBtn = new JRadioButton("Male");
     genderGrp = new ButtonGroup();
     maleIcon = new ImageIcon("boy.jpg");
     femaleIcon = new ImageIcon("girl.png");
     maleLabel = new JLabel(maleIcon);
     femaleLabel = new JLabel(femaleIcon);
     genderGrp.add(femaleRadioBtn);
     genderGrp.add(maleRadioBtn);
     westPanel2.add(femaleLabel);
     westPanel2.add(femaleRadioBtn);
     westPanel2.add(maleLabel);
     westPanel2.add(maleRadioBtn);
     
     
     nationalityLabel = new JLabel("Nationality");
     westPanel2.add(nationalityLabel);
     americanRadioBtn = new JRadioButton("American");
     foreignRadioBtn = new JRadioButton("Foreign");
     nationalityGrp = new ButtonGroup();
     nationalityGrp.add(americanRadioBtn);
     nationalityGrp.add(foreignRadioBtn);
     westPanel2.add(americanRadioBtn);
     westPanel2.add(foreignRadioBtn);
     
     
   
    
     
     
      westPanelW2 = new JPanel();
      westPanelW2.setLayout(new GridLayout(2,1));
      westPanelW2.add(westPanel);
      westPanelW2.add(westPanel2);
      westPanelW = new JPanel();
      westPanelW.add(westPanelW2);
     
     
     //CENTER
     centerPanel = new JPanel();
     centerPanel.setBackground(Color.PINK);
     
     
     
     add(northPanel,BorderLayout.NORTH);
     add(southPanel,BorderLayout.SOUTH);
     add(eastPanel,BorderLayout.EAST);
     add(westPanelW,BorderLayout.WEST);
     add(centerPanel,BorderLayout.CENTER);
     
     
     //Mainframe settings
     setSize(600,600);
     setVisible(true);
     setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
     
  }
  
  
  public void actionPerformed(ActionEvent event){
  
    if(event.getSource() == submitBtn){
      
      //Getting the value of our input fields
      String name = nameTextField.getText();
      String age = ageTextField.getText();
      String state = statesDropBox.getSelectedItem().toString();
      
      String singing = "No";
      String dancing = "No";
      String coding = "No";
      
      if(singingCheckBox.isSelected()){
         singing = "Yes";
      }
      else{
         singing = "No";
      }
      
      if(dancingCheckBox.isSelected()){
         dancing = "Yes";
      }else{
         dancing = "No";
      }
      
      if(codingCheckBox.isSelected()){
      
        coding = "Yes";
      }else{
        coding = "No";
      }
      
      String gender = "";
      if (femaleRadioBtn.isSelected()){
        gender = "Female";
      }else if(maleRadioBtn.isSelected()){
        gender = "Male";
      }
      
      String nationality = "";
      if(americanRadioBtn.isSelected()){
         nationality = "American";
      }else if(foreignRadioBtn.isSelected()){
         nationality = "Foreign";
      }
      
      
      String outputMessage = "Your name is: " + name +
                             "\n Age: " + age +
                             "\n State:" + state +
                             "\n Can you sing? " + singing +
                             "\n Can you dance? " + dancing +
                             "\n Can you code? " + coding +
                             "\n You are a: " + gender +
                             "\n Nationality: " + nationality;
        
        
        JOptionPane.showMessageDialog(null,outputMessage);
        
    }else if(event.getSource() == cancelBtn){
      
      nameTextField.setText("");
      ageTextField.setText("");
      statesDropBox.setSelectedIndex(0);
      singingCheckBox.setSelected(false);
      dancingCheckBox.setSelected(false);
      codingCheckBox.setSelected(false);
      genderGrp.clearSelection();
      nationalityGrp.clearSelection();
       JOptionPane.showMessageDialog(null,"Alrighty, form cleared");
    
    }
  
  
  }
  
  
  public static void main(String [] args){ //Our Main Method
  
    Practice1 app = new Practice1(); //how does system know to run this though??
  
  }


}