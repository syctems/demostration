import java.util.*;

public class InputTest
{
	public static void main(String[] args)
	{
		Scanner in = new Scanner(System.in);
		System.out.println("what is your name?");
		String name = in.nextLine();

		System.out.println("how old are you?");
		int age = in.nextInt();

		System.out.println("hello," + name + ",next year,you will be " + (age + 1));
	}
}