//Imports
import javax.swing.JFrame;
import javax.swing.JPanel;
import java.awt.BorderLayout;
import javax.swing.JTextField;
import javax.swing.JComboBox;
import javax.swing.JCheckBox;
import javax.swing.JRadioButton;
import javax.swing.ButtonGroup;
import javax.swing.JTextArea;
import javax.swing.JButton;
import javax.swing.JLabel;

import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import javax.swing.JOptionPane;


public class TalentShow extends JFrame implements ActionListener{
  
  private JLabel nameLabel, ageLabel, stateLabel;
  private JTextField nameField, ageField;
  private JCheckBox singingBox, dancingBox;
  private JRadioButton femaleBtn, maleBtn;
  private JPanel centerPanel;
  private JButton submitBtn, clearBtn;
  

  public TalentShow(){
    super("Talent Show time!");
    
    //Center
    centerPanel = new JPanel();
    nameLabel = new JLabel("Name");
    nameField = new JTextField(10);
    centerPanel.add(nameLabel);
    centerPanel.add(nameField);
    
    ageLabel = new JLabel("Age");
    ageField = new JTextField(10);
    centerPanel.add(ageLabel);
    centerPanel.add(ageField);
    
    submitBtn = new JButton("Submit");
    submitBtn.addActionListener(this);
    clearBtn = new JButton("Clear");
    clearBtn.addActionListener(this);
    centerPanel.add(submitBtn);
    centerPanel.add(clearBtn);
    
    
    
    //JFrame Layout 
    add(centerPanel,BorderLayout.CENTER);
    
    //JFrame settings
    setSize(500,500);
    setVisible(true);
    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  
  }
  
  public void actionPerformed(ActionEvent event){
    
    if(event.getSource() == submitBtn){
      JOptionPane.showMessageDialog(null,"Submitted");
    }else if(event.getSource() == clearBtn){
      JOptionPane.showMessageDialog(null,"Everything cleared!");
      }
  
  }

  public static void main(String [] args){
     TalentShow app = new TalentShow();
  }

}