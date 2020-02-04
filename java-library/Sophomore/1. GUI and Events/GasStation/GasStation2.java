//Component Imports
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JLabel;
import java.awt.BorderLayout;
import java.awt.Color;
import javax.swing.JTextField;
import javax.swing.ImageIcon;
import javax.swing.JCheckBox;
import javax.swing.JButton;

//Action/Event imports
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JOptionPane;

public class GasStation2 extends JFrame implements ActionListener{
  
  private JPanel northPanel,centerPanel,southPanel;
  private JLabel gasPriceLabel,washIconLabel;
  private JTextField gasPriceField;
  private ImageIcon gasImage, washImage;
  private JCheckBox carWashBox;
  private JButton payBtn, printBtn, clearBtn;
  

  public GasStation2(){
    super("Gas Station Cashier");
    
    
   
    //Center
    
    centerPanel = new JPanel();
    centerPanel.setBackground(Color.PINK);
    gasImage = new ImageIcon("gas.gif");
    gasPriceLabel = new JLabel(gasImage);
    gasPriceField = new JTextField(10);
    centerPanel.add(gasPriceLabel);
    centerPanel.add(gasPriceLabel);
    centerPanel.add(gasPriceField);
    
  
    washImage = new ImageIcon("carwash.gif");
    washIconLabel = new JLabel(washImage);
    carWashBox = new JCheckBox("$10");
    centerPanel.add(carWashBox);
    centerPanel.add(washIconLabel);
    
    //South
    southPanel = new JPanel();
    payBtn = new JButton("Pay");
    payBtn.addActionListener(this);
    printBtn = new JButton("Print Receipt");
    clearBtn = new JButton("Clear");
    clearBtn.addActionListener(this);
    southPanel.add(payBtn);
    southPanel.add(printBtn);
    southPanel.add(clearBtn);
    
    

    add(centerPanel,BorderLayout.CENTER);
    add(southPanel,BorderLayout.SOUTH);
    
    
    //Our JFrame settings
      setSize(500,500);
      setVisible(true);
      setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

  
  }
  
  public void actionPerformed(ActionEvent e){
  
    
    if(e.getSource() == payBtn){
      
      String gasAmtString = gasPriceField.getText();
      double gasAmt = Double.parseDouble(gasAmtString);
      
      String carWash = "No";
      if(carWashBox.isSelected()){
        carWash = "Yes";
      }else{
        carWash = "No";
        }
        
      
      String output = "Gas Amount: $" + gasAmt + 
                      "\nCar Wash: $" + carWash;
    
      JOptionPane.showMessageDialog(null,output);
    
    }else if(e.getSource() == clearBtn){
    
      
          gasPriceField.setText("");
          carWashBox.setSelected(false);
       
    
    }
  
  }
  
   

  
  public static void main(String [] args){
  
    GasStation2 app = new GasStation2();
  
  
  }
  


}