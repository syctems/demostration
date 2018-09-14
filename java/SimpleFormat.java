public class SimpleFormat
{
	public static void main(String[] args)
	{
		int x = 5;
		double y = 5.334;
		System.out.println("row 1:[" + x + " " + y + "]");
		System.out.format("row 1:[%d %f]\n",x,y);
		System.out.printf("row 1:[%d %f]\n",x,y);
	}
}