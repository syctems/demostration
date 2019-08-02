class Engine
{
	public void start() {}
	public void rev() {}
	public void stop() {}
}

class Wheel
{
	public void inflate(int psi)
	{
		System.out.println("inflate is " + psi);
	}
}

class Window
{
	public void rollup()
	{
		System.out.println("rollup");
	}
	public void rolldown() {}
}

class Door
{
	public Window wd = new Window();
	public void open() {}
	public void close() {}
}

public class Car
{
	public Engine e = new Engine();
	public Wheel w[] = new Wheel[4];
	public Door l = new Door();
	public Door r = new Door();
	public Car()
	{
		for(int i = 0; i < 4 ; i++)
		{
			w[i] = new Wheel();
		}
	}

	public static void main(String[] args)
	{
		Car c = new Car();
		c.l.wd.rollup();
		c.w[0].inflate(72);
	}
}