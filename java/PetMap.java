import typeinfo.pets.*;
import java.util.*;

public class PetMap
{
	public static void main(String[] args)
	{
		Map<String,Pet> petMap = new HashMap<String,Pet>();
		petMap.put("my cat",new Cat("molly"));
		petMap.put("my dog",new Dog("ginger"));
		petMap.put("my hamster",new Hamster("bosco"));
		System.out.println(petMap);
		Pet dog = petMap.get("my dog");
		System.out.println(dog);
		System.out.println(petMap.containKey("my dog"));
		System.out.println(petMap.containValue(dog));
	}
}