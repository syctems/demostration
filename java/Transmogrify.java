class Actor
{
	public void act() {}
}

class HappyActor extends Actor
{
	public void act()
	{
		System.out.println("HappyActor");
	}
}

class SadActor extends Actor
{
	public void act()
	{
		System.out.println("SadActor");
	}
}

class Stage
{
	private Actor actor = new HappyActor();
	public void change()
	{
		actor = new SadActor();
	}
	public void performPlay()
	{
		actor.act();
	}
}

public class Transmogrify
{
	public static void main(String[] args)
	{
		Stage s = new Stage();
		s.performPlay();
		s.change();
		s.performPlay();
	}
}