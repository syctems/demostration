package runimpl;
public class Machine implements Runnable
{
	private int i = 0;
	public void run()
	{
		for(i = 0; i < 50; i++)
		{
			System.out.println(Thread.currentThread().getName() + ":" + i);
			try{
				Thread.sleep(100);
			}catch(InterruptedException e){
				throw new RuntimeException(e);
			}
		}
		
	}

	public static void main(String[] args)
	{
		Machine s = new Machine();
		Thread t1 = new Thread(s);
		Thread t2 = new Thread(s);
		t1.start();
		t2.start();
	}
}