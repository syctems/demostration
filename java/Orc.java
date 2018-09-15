class Villain
{
	private String name;
	public Villain(String name)
	{
		this.name = name;
	}

	protected void set(String nm)
	{
		name = nm;
	}

	public String toString()
	{
		return "i'm a Villain and my name is " + name;
	}
}

public class Orc extends Villain
{
	private int orcNumber;
	public Orc(String name,int orcNumber)
	{
		super(name);
		this.orcNumber = orcNumber;
	}

	public void change(String name, int orcNumber)
	{
		set(name);
		this.orcNumber = orcNumber;
	}

	public String toString()
	{
		return "orc " + orcNumber + ": " + super.toString();
	}

	public static void main(String[] args)
	{
		Orc o = new Orc("lin",12);
		System.out.println(o);
		o.change("bob",19);
		System.out.println(o);
	}
}