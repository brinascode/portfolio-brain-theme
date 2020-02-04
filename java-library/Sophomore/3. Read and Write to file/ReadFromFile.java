import java.io.File;
import java.io.FileNotFoundException;

import java.util.Scanner;

public class ReadFromFile{

  public static void main(String [] args){
  
     File file = new File("data.txt");
     
     try {
       Scanner reader = new Scanner(file); 
     //  System.out.println(reader.nextLine()); can crash easily
       
       while(reader.hasNext()){
           System.out.println(reader.nextLine());
           /* 
            can also do:
            String line = reader.nextLine();
            System.out.println(line);
            */
       }
       
       reader.close();
     }
     catch(FileNotFoundException fnfe){
       fnfe.printStackTrace();
     }
   
  }

}