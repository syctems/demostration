import java.util.*;

public class Statistics
{
	public static void main(String[] args)
	{
		Random rand = new Random(47);
		Map<Integer,Integer> m = new HashMap<Integer,Integer>();
		for(int i = 0; i < 1000; i++)
		{
			int r = rand.nextInt(20);
			Integer f = m.get(r);
			m.put(r,f == null?1:f+1);
		}
		System.out.println(m);
	}
}