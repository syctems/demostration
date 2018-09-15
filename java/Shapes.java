import ploymorphism.*;
public class Shapes
{
	private static RandomShapeGenerator g = new RandomShapeGenerator();
	public static void main(String[] args)
	{
		Shape s[] = new Shape[9];
		for(int i = 0; i < s.length; i++)
		{
			s[i] = g.next();
		}

		for(Shape shp : s)
		{
			shp.draw();
		}
	}
}