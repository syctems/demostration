public class DotNew
{
	public class Inner
	{
		void Inner()
		{
			System.out.println("Inner");
		}
	}

	public static void main(String[] args)
	{
		DotNew d = new DotNew();
		DotNew.Inner c = d.new Inner();
	}
}