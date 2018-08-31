class BaseGun
{
	public void gunZoom()
	{
		System.out.println("gunZoom");
	}
}

class HanGun extends BaseGun
{
	public void gunZoom()
	{
		System.out.println("HanGun gunZoom");
	}
}

class RifleGun extends BaseGun
{
	public void gunZoom()
	{
		System.out.println("RifleGun gunZoom");
	}
}

class Soldier
{
	private BaseGun gun;

	Soldier(BaseGun gun)
	{
		this.gun = gun;
	}

	public void startShoot()
	{
		this.gun.gunZoom();
	}
}

public class Make 
{
	public static void main(String[] args)
	{
		Soldier s = new Soldier(new HanGun());
		s.startShoot();
		Soldier s2 = new Soldier(new RifleGun());
		s2.startShoot();
	}
}