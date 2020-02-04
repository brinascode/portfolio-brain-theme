//Importing our components
import javax.swing.JFrame;
import javax.swing.JPanel;
import java.awt.BorderLayout;
import javax.swing.JTextField;
import javax.swing .JLabel;
import javax.swing.JCheckBox;
import javax.swing.ImageIcon;
import javax.swing.JButton;


public class GasStation extends JFrame{
  
  //Declaring our components
  private JPanel centerPanel,southPanel;
  private JTextField gasPriceField;
  private JLabel gasImageLabel,gasPriceLabel, washImageLabel;
  private JCheckBox washBox;
  private ImageIcon gasImage, washImage;
  private JButton payBtn, printBtn, clearBtn;
  
  
  
  
  public GasStation(){
    super("Practicing for midterms");
    
    //Center 
    centerPanel = new JPanel();
    gasImage = new ImageIcon("gas.gif");
    gasImageLabel = new JLabel(gasImage);
    gasPriceLabel = new JLabel("$");
    gasPriceField = new JTextField(10);
    washImage = new ImageIcon("carwash.gif");
    washImageLabel = new JLabel(washImage);
    washBox = new JCheckBox("$10");
    centerPanel.add(gasImageLabel);
    centerPanel.add(gasPriceLabel);
    centerPanel.add(gasPriceField);
    centerPanel.add(washImageLabel);
    centerPanel.add(washBox);
    
    //South
    southPanel = new JPanel();
    payBtn = new JButton("Pay");
    printBtn = new JButton("Print Receipt");
    clearBtn = new JButton("Clear");
    southPanel.add(payBtn);
    southPanel.add(printBtn);
    southPanel.add(clearBtn);
    
    
    //Adding the Panels to the Layout
    add(centerPanel,BorderLayout.CENTER);
    add(southPanel,BorderLayout.SOUTH);
    
    //Our JFrame settings
    setSize(500,500);
    setVisible(true);
    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  }
  

  public static void main(String [] args){
     GasStation app = new GasStation();
  }


}