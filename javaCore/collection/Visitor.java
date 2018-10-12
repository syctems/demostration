package collection;
import java.util.*;
public class Visitor
{
	public static void print(Collection<? extends Object> c)
	{
		Iterator<? extends Object> it = c.iterator();
		while(it.hasNext())
		{
			Object element = it.next();
			System.out.println(element);
		}
	}

	public static void printWithForEach(Collection<? extends Object> c)
	{
		for(Object element : c)
		{
			System.out.println(element);
		}
	}

	public static void main(String[] args)
	{
		Set<String> set = new HashSet<String>();
		set.add("tom");
		set.add("mary");
		set.add("jack");
		print(set);

		List<String> list = new ArrayList<String>();
		list.add("linda");
		list.add("mary");
		list.add("rose");
		print(list);

		Queue<String> queue = new ArrayDeque<String>();
		queue.add("tom");
		queue.add("mike");
		queue.add("jack");
		print(queue);

		Map<String,String> map = new HashMap<String,String>();
		map.put("m","mate");
		map.put("f","femate");
		print(map.entrySet());

		printWithForEach(set);
		printWithForEach(list);
		printWithForEach(queue);
		printWithForEach(map.entrySet());
	}
}