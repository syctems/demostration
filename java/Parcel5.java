interface Destination
{
	String readLable();
}

public class Parcel5
{
	public PDestination destination(String s)
	{
		class PDestination implements Destination
		{
			private String label;
			private PDestination(String whereTo)
			{
				lable = whereTo;
			}

			public String readLable()
			{
				return lable;
			}
		}	

		return new PDestination(s);	
	}

	public static void main(String[] args)
	{
		Parcel5 p = new Parcel5();
		PDestination d = p.destination("tasmania");
		d.readLable();
	}
}