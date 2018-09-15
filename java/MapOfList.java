import typeinfo.pets.*;
import java.util.*;

public class MapOfList
{
	public static Map<Person,List<? extends Pet>>
		petPeople = new HashMap<Person,List<? extends Pet>>;

	static 
	{
		petPeople.put(new Person("dawn"),Arrays.asList(new Cymric("molly"),new Mutt("spot")));
		petPeople.put(new Person("kate"),Arrays.asList(new Cat("shackleton"),new Cat("elsie may"),new Dog("margrett")));
		petPeople.put(new Person("marilyn"),Arrays.asList(new Cat("pinkola"),new Cat("negro"),new Pug("dupree")));
		petPeople.put(new Person("luke"),Arrays.asList(new Rat("fuzzy"),new Rat("fizzy")));
		petPeople.put(new Person("isaac"),Arrays.asList(new Rat("freckly")));
	}
	public static void main(String[] args)
	{
		System.out.println("people:" + petPeople.keySet());
		System.out.println("pets:" + petPeople.values());
		for(Person person : petPeople.keySet())
		{
			System.out.println(person + " has:");
			for(Pet pet : petPeople.get(person))
				print("   " + pet);
		}
	}
}