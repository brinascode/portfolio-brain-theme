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


public class GasStation1 extends JFrame{
  
  private JPanel northPanel,centerPanel,southPanel;
  private JLabel gasPriceLabel,washIconLabel;
  private JTextField gasPriceField;
  private ImageIcon gasImage, washImage;
  private JCheckBox carWashBox;
  private JButton payBtn, printBtn, clearBtn;
  

  public GasStation1(){
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
    carWashBox = new JCheckBox();
    centerPanel.add(carWashBox);
    centerPanel.add(washIconLabel);
    
    //South
    southPanel = new JPanel();
    payBtn = new JButton("Pay");
    printBtn = new JButton("Print Receipt");
    clearBtn = new JButton("Clear");
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
  
  
   

  
  public static void main(String [] args){
  
    GasStation1 app = new GasStation1();
  
  
  }
  


}