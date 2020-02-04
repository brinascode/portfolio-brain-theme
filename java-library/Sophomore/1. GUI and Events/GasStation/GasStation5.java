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

//File Writing/Reading imports
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.FileNotFoundException;
import java.util.Scanner;


public class GasStation5 extends JFrame implements ActionListener{
  
  private JPanel northPanel,centerPanel,southPanel;
  private JLabel gasPriceLabel,washIconLabel;
  private JTextField gasPriceField;
  private ImageIcon gasImage, washImage;
  private JCheckBox carWashBox;
  private JButton payBtn, printBtn, clearBtn;
  

  public GasStation5(){
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
    printBtn.addActionListener(this);
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
      
      
      try{
        
        //Detecting error first
        if(gasPriceField.getText().equals("")){
          throw new AmountException();
        }else if(Double.parseDouble(gasPriceField.getText()) <= 0 ){
         throw new AmountException("Error: Your dollar amount is either a 0 or a negative number!!!");
        }
        
        //Continues here if there's no error  
         String gasAmtString = gasPriceField.getText();
         double gasAmt = Double.parseDouble(gasAmtString);
         String carWash = "No"; 
         double totalFee = gasAmt;
      
        if(carWashBox.isSelected()){
          carWash = "Yes";
          totalFee += 10;
        
        }
        else{
        
          carWash = "No";
        
          }
        
      
      String output = "Gas Amount: $" + gasAmt + 
                      "\nCar Wash: $" + carWash+
                      "\nTotal Fee: $"+ totalFee;
      
      try{
        File file = new File("receipt.txt");
        FileWriter writer = new FileWriter(file);
        writer.write(output);
        writer.close();
      }catch(IOException ioexception){
        System.out.print(ioexception);
      }
      
     
     
      
      
      JOptionPane.showMessageDialog(null,output);
      
      }
      catch(AmountException exception){
        
        System.out.println(exception.toString());
        JOptionPane.showMessageDialog(null,exception.toString());
      }
      
      
     
    
    }else if(e.getSource() == printBtn){
    
     
      try{
        File file = new File("receipt.txt");
        Scanner reader = new Scanner(file);
       
        while(reader.hasNext()){
          System.out.println(reader.nextLine());
        }
        
         reader.close();
         
      }
      catch(FileNotFoundException fnfe){
        
        fnfe.printStackTrace();
      }
       
       
      
     
      
      
      
      
    }else if(e.getSource() == clearBtn){
    
       gasPriceField.setText("");
       carWashBox.setSelected(false);
       
    
    }
  
  }
  
   

  
  public static void main(String [] args){
  
    GasStation5 app = new GasStation5();
  
  
  }
  


}