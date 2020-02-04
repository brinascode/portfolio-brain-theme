//Importing all our components
import javax.swing.JFrame; //our lihgtwieght main frame
import javax.swing.JLabel; // our lightweight label
import javax.swing.JPanel;
import javax.swing.JTextField;
import javax.swing.JComboBox;
import javax.swing.JCheckBox;
import javax.swing.JRadioButton;
import javax.swing.ButtonGroup; //it is not JBUttonGroup because its not a component
import javax.swing.JTextArea;
import javax.swing.JButton;
import java.awt.GridLayout;
import java.awt.BorderLayout; //its in the awt because the layout does not need to be lightweight, so we dont take it from swing
import java.awt.Color;
import javax.swing.ImageIcon;


//do not include action listener if you will not use it
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

import javax.swing.JOptionPane;


public class GUIExample extends JFrame implements ActionListener{
  
  //We declare our components (as variables)
  private  JLabel fullnameLabel,stateLabel,hobbyLabel,blankLabel, maleLabel, femaleLabel;
  private ImageIcon maleIcon, femaleIcon;
  private  JTextField fnTextField;
  private JPanel northPanel,westPanel,westPanel2,centerPanel,southPanel;
  private JComboBox stateDropbox;
  private JCheckBox musicBox, movieBox;
  private JRadioButton maleRadioButton, femaleRadioButton;
  private ButtonGroup genderGroup;
  private JTextArea commentArea;
  private JButton submitButton, cancelButton;

  public GUIExample(){
    
    super("My awesome GUI");  //setTitle("My java GUI")//System.out.println("hello"); 
    
    

    
                           //***Putting the Label component and TextField to a north Panel
    
    northPanel = new JPanel();
                 //Styling
                 northPanel.setBackground(Color.BLUE);
                 //Label component
                  fullnameLabel = new JLabel("Enter Full Name:");
                  fullnameLabel.setForeground(Color.WHITE);
                  add(fullnameLabel,BorderLayout.NORTH);
    
                 //TextFieldComponent
                 fnTextField = new JTextField(5);
                 
         northPanel.add(fullnameLabel);
         northPanel.add(fnTextField);
    
         
    westPanel = new JPanel();
         westPanel.setLayout(new GridLayout(3,2));
                //StateLabel
                stateLabel = new JLabel("State");
                //Dropbox
                String states [] = {"","DC","MD","VA"};
                stateDropbox = new JComboBox(states);
                //HobbyLabel
                hobbyLabel = new JLabel("Hobbies:");
                hobbyLabel.setToolTipText("Tips here!");
                //Checkboxes
                blankLabel = new JLabel("");
                musicBox = new JCheckBox("Music");
                movieBox = new JCheckBox("Movies");
         westPanel.add(stateLabel);
         westPanel.add(stateDropbox);
         westPanel.add(hobbyLabel);
         westPanel.add(blankLabel);
         westPanel.add(musicBox);
         westPanel.add(movieBox);
         
         westPanel2 = new JPanel();
         westPanel2.add(westPanel);
    
         //Center
         //RadioButtons
         maleRadioButton = new JRadioButton("");      
         femaleRadioButton = new JRadioButton("");
         genderGroup = new ButtonGroup();
         genderGroup.add(maleRadioButton);
         genderGroup.add(femaleRadioButton);
         maleIcon = new ImageIcon("male.gif");
         femaleIcon = new ImageIcon("female.gif");
         maleLabel = new JLabel(maleIcon);
         femaleLabel = new JLabel(femaleIcon);
         centerPanel = new JPanel();
         centerPanel.add(maleLabel);
         centerPanel.add(maleRadioButton);
         centerPanel.add(femaleLabel);
         centerPanel.add(femaleRadioButton);
         
         //CommentArea
         commentArea = new JTextArea(5,10);
         
         
        //South
        southPanel = new JPanel();
        submitButton = new JButton("Submit");
        submitButton.addActionListener(this);
        cancelButton = new JButton("Cancel");
        cancelButton.setBackground(Color.RED);
        cancelButton.addActionListener(this);
        southPanel.add(submitButton);
        southPanel.add(cancelButton);


                                      //***Adding our panels to our JFrame
         
    add(northPanel,BorderLayout.NORTH);
    add(commentArea,BorderLayout.EAST);
     add(centerPanel,BorderLayout.CENTER); 
     add(southPanel,BorderLayout.SOUTH);
    add(westPanel2,BorderLayout.WEST);   
 
    
    //Our mainframe settings
    setSize(600,500);
    setVisible(true);
    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  }
  
  public void actionPerformed(ActionEvent event){
    
    if(event.getSource() == submitButton){
      
      String fullname = fnTextField.getText();
      String comment = commentArea.getText();
      String state = stateDropbox.getSelectedItem().toString();
      
      String movie = "No";
      String music = "No";
      if(movieBox.isSelected()){
        movie = "Yes";
      }else{
        movie = "No";
      }
      
      if(musicBox.isSelected()){
        music = "Yes";
      }else{
        music = "No";
      }
      
      
      String gender = "";
      if(maleRadioButton.isSelected()){
        gender = "male";
      }
      if(femaleRadioButton.isSelected()){
        gender = "female";
      
      }
      
      
      
      String output = "Full name: "+ fullname + 
                      "\nComment: " + comment +
                      "\n State: " + state +
                      "\n Movie? " + movie +
                      "\n Music? " + music +
                      "\n Gender: " + gender;
      
      
       JOptionPane.showMessageDialog(null,output);
       
       
       
    }else if(event.getSource() == cancelButton){
       fnTextField.setText("");
       commentArea.setText("");
       stateDropbox.setSelectedIndex(0);
       musicBox.setSelected(false);
       movieBox.setSelected(false);
       genderGroup.clearSelection();
    }
   
    
  }
  
  public static void main(String [] args) {
    GUIExample app = new GUIExample();
    
  }
  
  
}