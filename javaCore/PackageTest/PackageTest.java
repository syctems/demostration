import com.horstmann.corejava.*;

import static java.lang.System.out;

public class PackageTest
{
	public static void main(String[] args)
	{
		Employee harry = new Employee("harry hacker",50000,1989,10,1);
		harry.raiseSalary(5);
		println("name=" + harry.getName() + ",salary=" + harry.getSalary());
	}
}