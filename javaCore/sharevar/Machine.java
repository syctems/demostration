package sharevar;
public class Machine extends Thread
{
	private int i = 0;
	public void run()
	{
		for(i = 0; i < 50; i++)
		{
			System.out.println(currentThread().getName() + ":" + i);
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
		s.start();
		s.run();
	}
}