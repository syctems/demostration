public class Generation
{
	public <T> void f(T x)
	{
		System.out.println(x.getClass().getName());
	}
	public static void main(String[] args)
	{
		Generation gm = new Generation();
		gm.f("");
		gm.f(1);
		gm.f(2.0);
		gm.f('c');
		gm.f(gm);
	}
}