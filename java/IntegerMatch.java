public class IntegerMatch
{
	public static void main(String[] args)
	{
		System.out.println("-1234".matchs("-?\\d+"));
		System.out.println("745".matchs("-?\\d+"));
		System.out.println("+745".matchs("-?\\d+"));
		System.out.println("+911".matchs("(-|\\+)?\\d+"));
	}
}