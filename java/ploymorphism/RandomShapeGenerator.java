package ploymorphism;
import java.util.*;
public class RandomShapeGenerator
{
	private Random r = new Random(47);
	public Shape next()
	{
		switch(r.nextInt(3))
		{
			default:
			case 0:
				return new Circle();
			case 1:
				return new Square();
			case 2:
				return new Triangle();
		}
	}
}