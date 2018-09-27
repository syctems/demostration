package game;
public class GuessGame
{
	Player p1,p2,p3;
	int targetNumber = (int)(Math.random() * 10);
	public GuessGame()
	{
		p1 = new Player("one");
		p2 = new Player("two");
		p3 = new Player("three");
	}


	public void startGame()
	{
		System.out.println("i'm thinking of a number between 0 and 9...");
		p1.guess();
		p2.guess();
		p3.guess();

		p1.getGuessInt();
		p2.getGuessInt();
		p3.getGuessInt();

		p1.setGuessRight(targetNumber);
		p2.setGuessRight(targetNumber);
		p3.setGuessRight(targetNumber);

		if(p1.getGuessRight() || p2.getGuessRight() || p3.getGuessRight())
		{
			System.out.println("we have a winner!");
			System.out.println("Player one got iy right?" + p1.getGuessRight());
			System.out.println("Player two got iy right?" + p2.getGuessRight());
			System.out.println("Player three got iy right?" + p3.getGuessRight());
			System.out.println("game is over!");
		}else{
			System.out.println("Player will have to try again.");
		}
	}
}