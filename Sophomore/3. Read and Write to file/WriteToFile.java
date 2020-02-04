import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class WriteToFile {

  public static void main(String [] args){
  
    File file = new File("data.txt");
    String sampleTxt = "Marymount University";
    
    try{
      FileWriter writer = new FileWriter(file); 
    
     // FileWriter writer = new FileWriter(file,true);  //to keep the old content/ to append text
      writer.write("HEyyyyyyyy hiimaaaaa");
      writer.write(sampleTxt);
      writer.write("\nHappy Galentines dayy");
      writer.close();
    }
    catch(IOException ioe){
    
        System.out.println(ioe.toString());
    
    }
  }

}