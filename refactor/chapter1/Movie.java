public class Movie
{
	public static final int CHILDRENS = 2;
	public static final int REGULAR = 0;
	public static final int NEW_RELEASE = 1;

	private String _title;
	private int _priceCode;
	private Price _price;

	public Movie(String title,int priceCode)
	{
		_title = title;
		setPriceCode(priceCode);
	}

	public int getPriceCode()
	{
		return _price.getPriceCode();
	}

	public void setPriceCode(int arg)
	{
		switch(arg)
		{
			case REGULAR:
				_price = new RegularPrice();
				break;
			case CHILDRENS:
				_price = new ChildrensPrice();
				break;
			case NEW_RELEASE:
				_price = new NewReleasePrice();
				break;
			default :
				throws new IllegalArgumentException("incorrect price code!");
		}
	}

	public String getTitle()
	{
		return _title;
	}

	public double charget(int daysRented)
	{
		return _price.charget(daysRented);
	}

	public int getFrequentRenterPoints(int daysRented)
	{
		return _price.getFrequentRenterPoints(daysRented);
	}
}

abstract class Price
{
	abstract int getPriceCode();
	abstract double charget(int daysRented);
	int getFrequentRenterPoints(int daysRented)
	{
			return 1;
	}
}

class ChildrensPrice extends Price
{
	int getPriceCode()
	{
		return Movie.CHILDRENS;
	}

	double charget(int daysRented)
	{
		double result = 1.5;
		if(daysRented > 3)
			result += (daysRented - 3) * 1.5;
		return result;
	}
}

class NewReleasePrice extends Price
{
	int getPriceCode()
	{
		return Movie.NEW_RELEASE;
	}

	double charget(int daysRented)
	{
		return daysRented * 3;
	}

	int getFrequentRenterPoints(int daysRented)
	{
		return (daysRented > 1) ? 2 : 1;
	}
}

class RegularPrice extends Price
{
	int getPriceCode()
	{
		return Movie.REGULAR;
	}

	double charget(int daysRented)
	{
		double result = 2;
		if(daysRented > 2)
			result += (daysRented - 2) * 1.5;
		return result;
	}
}