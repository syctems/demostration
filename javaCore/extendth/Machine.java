package extendth;
public class Machine extends Thread
{
	public void run()
	{
		for(int a = 0; a < 50; a++)
		{
			System.out.println(a);
		}
	}

	public static void main(String[] args)
	{
		Machine s = new Machine();
		s.start();
		System.out.println("Thread start ");
	}
}