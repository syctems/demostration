package poly;
class Base
{
	String var = "base var";
	static String staticVar = "staticVar";

	void method()
	{
		System.out.println("base method");
	}

	static void staticMethod()
	{
		System.out.println("static base method");
	}
}

public class Sub extends Base
{
	String var = "sub var";
	static String staticVar = "staticSubVar";

	void method()
	{
		System.out.println("sub method");
	}

	static void staticMethod()
	{
		System.out.println("static sub staticMethod");
	}

	public static void main(String args[])
	{
		Base w = new Sub();
		System.out.println("var = " + w.var);
		System.out.println("staticVar = " + w.staticVar);
		w.method();
		w.staticMethod();
	}
}