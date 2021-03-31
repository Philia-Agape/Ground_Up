import java.util.*;
public class area{
  public static double area(double r){
       double PI = 3.141592653589793;
       return (r * r * PI);
  }
  public static void main(String[] args){ 
       Scanner input = new Scanner(System.in);
       System.out.println("Enter the radius of the circle");
       double r = input.nextDouble();
       double s = area(r);
       System.out.println("area is "+ s);
  }
}  
