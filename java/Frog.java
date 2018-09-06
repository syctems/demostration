class Characteristic
{
	private String s;
	Characteristic(String s)
	{
		this.s = s;
		System.out.println("creating Characteristic " + s);
	}

	protected void dispose()
	{
		System.out.println("dispose Characteristic " + s);
	}
}

class Description
{
	private String s;
	Description(String s)
	{
		this.s = s;
		System.out.println("creating Description " + s);
	}

	protected void dispose()
	{
		System.out.println("dispose Description " + s);
	}
}

class LivingCreature
{
	private Description p = new Description("basic living creature");

	private Characteristic c = new Characteristic("is alive");

	LivingCreature()
	{
		System.out.println("LivingCreature()");
	}

	protected void dispose()
	{
		System.out.println("LivingCreature dispose()");
		p.dispose();
		c.dispose();
	}
}

class Animal extends LivingCreature
{
	private Characteristic p = new Characteristic("has heart");

	private Description t = new Description("Animal not vegetable");

	Animal()
	{
		System.out.println("Animal");
	}

	protected void dispose()
	{
		System.out.println("Animal dispose");
		t.dispose();
		p.dispose();
		super.dispose();
	}
}

class Amphibian extends Animal
{
	private Characteristic p = new Characteristic("can't live in water");

	private Description t = new Description("both water and land");

	Amphibian()
	{
		System.out.println("Amphibian");
	}

	protected void dispose()
	{
		System.out.println("Amphibian dispose");
		t.dispose();
		p.dispose();
		super.dispose();
	}
}

public class Frog extends Amphibian
{
	private Characteristic p = new Characteristic("croaks");

	private Description t = new Description("eats bugs");

	public void Frog()
	{
		System.out.println("frog dispose");
		t.dispose();
		p.dispose();
		super.dispose();
	}

	public static void main(String[] args)
	{
		Frog f = new Frog();
		System.out.println("bye");
		f.dispose();
	}
}