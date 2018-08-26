import net.mindview.util.*;

class Art
{
	Art()
	{
		Print.print("Art constructor");
	}
}

class Drawing extends Art
{
	Drawing()
	{
		Print.print("Drawing constructor");
	}
}

public class Cartoon extends Drawing
{
	Cartoon()
	{
		Print.print("Cartoon constructor");
	}

	public static void main(String[] args)
	{
		Cartoon x = new Cartoon();
	}
}