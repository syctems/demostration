package hidestatic;
class Base
{
	void method()
	{
		System.out.println("base method");
	}
	static void staticMethod()
	{
		System.out.println("base staticMethod");
	}
}

public class Sub extends Base
{
	void method()
	{
		System.out.println("sub method");
	}

	static void staticMethod()
	{
		System.out.println("sub staticMethod");
	}

	public static void main(String[] args)
	{
		Base s = new Sub();
		s.method();
		s.staticMethod();
	}
}

