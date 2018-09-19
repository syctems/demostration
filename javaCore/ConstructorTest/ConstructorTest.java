import java.util.*;

public class ConstructorTest
{
	public static void main(String[] args)
	{
		Employee[] staff = new Employee[3];

		staff[0] = new Employee("harry",40000);
		staff[1] = new Employee(60000);
		staff[2] = new Employee();

		for(Employee e : staff)
			System.out.println("name="+ e.getName() + ",id=" + e.getId() + ",salary="+e.getSalary() + ",nextId=" + e.getNextId());
	}
}

class Employee
{
	private static int nextId;

	private int id;
	private String name = "";
	private double salary;

	static
	{
		Random g = new Random();
		nextId = g.nextInt(10000);
	}

	{
		id = nextId;
		nextId++;
	}

	public Employee(String n,double s)
	{
		name = n;
		salary = s;
	}
	
	public int getNextId()
	{
	    return nextId;
	}

	public Employee(double s)
	{
		this("Employee #" + nextId,s);
	}

	public Employee()
	{

	}

	public String getName()
	{
		return name;
	}

	public double getSalary()
	{
		return salary;
	}

	public int getId()
	{
		return id;
	}
}