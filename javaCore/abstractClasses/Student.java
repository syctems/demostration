package abstractClasses;

public class Student extends Person
{
	private String major;

	public Student(String name,String major)
	{
		super(name);
		this.major = major;
	}

	public String getDescription()
	{
		return "a Student majorint in " + major;
	}
}