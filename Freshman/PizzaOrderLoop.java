import java.util.Scanner;
public class PizzaOrderLoop {
  
  public static void main(String [] args){
     Scanner input = new Scanner(System.in);
     
     while(1 == 1){
   
    

    //Topping:
    String pepperoni = "Pepperoni";
    String sausage = "Sausage";
    String veggie = "Veggie";
    System.out.print("\nPizza Order - Select Topping:");
    System.out.printf("\n1. %s",pepperoni);
    System.out.printf("\n2. %s",sausage);
    System.out.printf("\n3. %s\n",veggie);
    int pizzaNum  = input.nextInt();
    
    //Amount of pizza
    System.out.print("Amount of pizza: ");
    int amount = input.nextInt();
    
    
    //Billing calculations
    double price = 0;
    String topping = "";
    if(pizzaNum == 1){
      price = 9.5;
      topping = pepperoni;
        
    }
    else if(pizzaNum == 2){
      price = 8.5;
      topping = sausage;
    }
    else if(pizzaNum == 3){
      price = 7.5;
      topping = veggie;
    }
    else {
      //?
    }
    double subtotal = amount * price;
    double tax = 0.10 * subtotal;
    double total = subtotal + tax;
      
     //Billing outputs:
      
     System.out.printf("Topping: %s",topping);
     System.out.printf("\nPrice: $%.2f",price);
     System.out.printf("\nAmount: %d",amount);
     System.out.printf("\nSubtotal: $%.2f",subtotal);
     System.out.printf("\nTax: $%.2f",tax);
     System.out.printf("\nTotal: $%.2f",total);
     
     }
    
    
    
    
  }

}