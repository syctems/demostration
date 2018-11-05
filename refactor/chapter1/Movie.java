public class Movie
{
	public static final int CHILDRENS = 2;
	public static final int REGULAR = 0;
	public static final int NEW_RELEASE = 1;

	private String _title;
	private int _priceCode;

	public Movie(String title,int priceCode)
	{
		_title = title;
		_priceCode = priceCode;
	}

	public int getPriceCode()
	{
		return _priceCode;
	}

	public void setPriceCode(int arg)
	{
		_priceCode = arg;
	}

	public String getTitle()
	{
		return _title;
	}

	private double charget()
	{
			double result = 0;
			switch(each.getMovie().getPriceCode())
			{
				case Movie.REGULAR:
					result += 2;
					if(each.getDaysRented() > 2)
						result += (each.getDaysRented() - 2) * 1.5;
					break;
				case Movie.NEW_RELEASE:
					result += each.getDaysRented() * 3;
					break;
				case Movie.CHILDRENS:
						result += 1.5;
						if(each.getDaysRented() > 3)
							result += (each.getDaysRented() - 3) * 1.5;
					break;
			}
			return result;
	}
}