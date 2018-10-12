package allrun;
public class Machine extends Thread
{
	public void run()
	{
		for(int a = 0; a < 50; a++)
		{
			System.out.println(currentThread().getName() + ":" + a);
			try{
				sleep(100);
			}catch(InterruptedException e){
				throw new RuntimeException(e);
			}
		}
		
	}

	public static void main(String[] args)
	{
		Machine s = new Machine();
		Machine a = new Machine();
		s.start();
		a.start();
	}
}