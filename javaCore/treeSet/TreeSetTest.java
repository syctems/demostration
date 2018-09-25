package treeSet;
import java.util.*;

public class TreeSetTest
{
	public static void main(String[] args)
	{
		SortedSet<Item> parts = new TreeSet<Item>();
		parts.add(new Item("toaster",1234));
		parts.add(new Item("widget",5674));
		parts.add(new Item("modem",9912));
		System.out.println(parts);

		NavigableSet<Item> sortByDescription = new TreeSet<Item>(
			Comparator.comparing(Item::getDescription)
		);

		sortByDescription.addAll(parts);
		System.out.println(sortByDescription);
	}
}