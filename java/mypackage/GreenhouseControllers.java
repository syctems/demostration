package mypackage;
import mypackage.*;
public class GreenhouseControllers extends Controller
{
	private boolean light = false;
	public class LightOn extends Event
	{
		public LightOn(long delayTime)
		{
			super(delayTime);
		}
		public void action()
		{
			light = true;
		}
		public String toString()
		{
			return "Light is on ";
		}
	}

	public class LightOff extends Event
	{
		public LightOff(long delayTime)
		{
			super(delayTime);
		}
		public void action()
		{
			light = false;
		}
		public String toString()
		{
			return "Light is Off";
		}
	}

	private boolean water = false;
	public class WaterOn extends Event
	{
		public WaterOn(long delayTime)
		{
			super(delayTime);
		}
		public void action()
		{
			water = true;
		}
		public String toString()
		{
			return "water is on";
		}
	}

	public class WaterOff extends Event
	{
		public WaterOff(long delayTime)
		{
			super(delayTime);
		}
		public void action()
		{
			water = false;
		}
		public String toString()
		{
			return "water is off";
		}
	}

	private String thermostat = "day";
	public class ThermostatNight extends Event
	{
		public ThermostatNight(long delayTime)
		{
			super(delayTime);
		}
		public void action()
		{
			thermostat = "night";
		}
		public String toString()
		{
			return "thermostat on night";
		}
	}

	public class ThermostatDay extends Event
	{
		public ThermostatDay(long delayTime)
		{
			super(delayTime);
		}
		public void action()
		{
			thermostat = "day";
		}
		public String toString()
		{
			return "thermostat on day";
		}
	}

	public class Bell extends Event
	{
		public Bell(long delayTime)
		{
			super(delayTime);
		}
		public void action()
		{
			addEvent(new Bell(delayTime));
		}
		public String toString()
		{
			return "bing!";
		}
	}

	public class Restart extends Event
	{
		private Event[] eventList;
		public Restart(long delayTime,Event[] eventList)
		{
			super(delayTime);
			this.eventList = eventList;
			for(Event e : eventList)
			{
				addEvent(e);
			}
		}
		public void action()
		{
			for(Event e : eventList)
			{
				e.start();
				addEvent(e);
			}
			start();
			addEvent(this);
		}
		public String toString()
		{
			return "Restarting System";
		}
	}

	public static class Terminate extends Event
	{
		public Terminate(long delayTime)
		{
			super(delayTime);
		}
		public void action()
		{
			System.exit(0);
		}
		public String toString()
		{
			return "Terminate";
		}
	}
}