class Shared
{
	private int refcount = 0;
	private static long counter = 0;
	private final long id = counter++;

	public Shared()
	{
		System.out.println("creating " + this);
	}

	public void addRef()
	{
		refcount++;
	}

	protected void dispose()
	{
		if(--refcount == 0)
			System.out.println("disposing " + this);
	}

	public String toString()
	{
		return "Shared " + id;
	}
}

class Composing
{
	private Shared shared;
	private static long  counter = 0;
	private final long id  = counter++;
	void print(String s)
	{
		System.out.println(s);
	}
	public Composing(Shared shared)
	{
		print("creating " + this);
		this.shared = shared;
		this.shared.addRef();
	}

	protected void dispose()
	{
		print("disposing " + this);
		shared.dispose();
	}

	public String toString()
	{
		return "Composing " + id;
	}
}

public class ReferenceCounting
{
	public static void main(String[] args)
	{
		Shared s = new Shared();
		Composing[] c = {
			new Composing(s),
			new Composing(s),
			new Composing(s),
			new Composing(s),
			new Composing(s),
			new Composing(s),
		};
		for(Composing c : c)
			c.dispose();
	}
}