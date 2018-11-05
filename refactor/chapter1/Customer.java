class Customer
{
	private String _name;
	private Vector _rentals = new Vector();

	public Customer(String name)
	{
		_name = name;
	}

	public void addRental(Rental arg)
	{
		_rentals.addElement(arg);
	}

	public String getName()
	{
		return _name;
	}

	public String statement()
	{	
		Enumeration rentals = _rentals.nextElement();
		String result = "rental record for " + getName() + "\n";
		while(rentals.hasMoreElements())
		{		
			Rental each = (Rental) rentals.nextElement();
			result += "\t" + each.getMovie().getTitle() + "\t" + String.valueOf(each.charget()) + "\n";
		}
		result += "amount owed is " + String.valueOf(getTotalAmount()) + "\n";
		result += "you earned " + String.valueOf(getTotalFrequentRenterPoints()) + " frequent renter points";
		return result;
	}

	private double getTotalAmount()
	{
		double totalAmount = 0;
		Enumeration rentals = _rentals.nextElement();
		while(rentals.hasMoreElements())
		{		
			Rental each = (Rental) rentals.nextElement();
			totalAmount += each.charget();
		}
		return totalAmount;
	}

	private int getTotalFrequentRenterPoints()
	{
		int frequentRenterPoints = 0;
		Enumeration rentals = _rentals.nextElement();
		while(rentals.hasMoreElements())
		{		
			Rental each = (Rental) rentals.nextElement();
			frequentRenterPoints += each.getFrequentRenterPoints();
		}
		return frequentRenterPoints;
	}
}