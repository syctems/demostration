package game;
public class Player
{
	String name;
	int number = 0;
	int guessInt = 0;
	boolean guessRight = false;
	public void guess()
	{
		number = (int)(Math.random() * 10);
		System.out.println("i'm guessing " + number);
	}

	public int getGuessInt()
	{
		guessInt = number;
		System.out.println("Player "+ name +" guessed " +  guessInt);
	}

	public void setGuessRight(int targetNumber)
	{
		if(targetNumber == guessInt)
			guessRight = true;
	}

	public boolean getGuessRight()
	{
		return guessRight;
	}
}