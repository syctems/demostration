package init;
class Base
{
	static int a = 1;
	static {
		System.out.println("init base");
	}
}

class Sub extends Base
{
	static int b  = 12;
	static {
		System.out.println("init sub");
	}
}

public class init
{
	static {
		System.out.println("init test");
	}

	public static void main(String[] args)
	{
		//System.out.println(" b = " + Sub.b);
		Sub s;
		System.out.println("after defining base");
		s = new Sub();
		System.out.println("after creating an object of base");
		System.out.println(" b = " + Sub.b);
	}
}