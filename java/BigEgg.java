class Egg
{
	private Yolk y;
	protected class Yolk
	{
		public Yolk()
		{
			System.out.println("egg Yolk()");
		}
	}
	public Egg()
	{
		System.out.println("new egg()");
		y = new Yolk();
	}
}

public class BigEgg extends Egg
{
	public class Yolk
	{
		public Yolk()
		{
			System.out.println("BigEgg Yolk()");
		}
	}
	public static void main(String[] args)
	{
		new BigEgg();
	}

}