import mypackage.*;
public class GreenhouseController
{
	public static void main(String[] args)
	{
		GreenhouseControllers gc = new GreenhouseControllers();
		gc.addEvent(gc.new Bell(900));
		Event[] evnetList = {
			gc.new ThermostatNight(0),
			gc.new LightOn(20),
			gc.new LightOff(400),
			gc.new WaterOn(600),
			gc.new WaterOff(800),
			gc.new ThermostatDay(1400) 
		};
		gc.addEvent(gc.new Restart(2000,evnetList));
		if(args.lenght == 1)
			gc.addEvent(new greenhouseControls.Terminate(new Integer(args[0])));
		gc.run();
	}
}