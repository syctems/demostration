package mypackage;
import java.util.*;
public class Controller
{
	private List<Event> eventList = new ArrayList<Event>();
	public void addEvent(Event v)
	{
		eventList.add(v);
	}
	public void run()
	{
		while(eventList.size() > 0)
		{
			for(Event e : new ArrayList<Event>(eventList))
			{
				if(e.ready())
				{
					System.out.println(e);
					e.action();
					eventList.remove(e);
				}
			}
		}
	}
}