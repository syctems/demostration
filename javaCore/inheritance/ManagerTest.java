package inheritance;
public class ManagerTest
{
	public static void main(String[] args)
	{
		Manager boss = new Manager("carl cracker",80000,1987,12,14);
		boss.setBonus(5000);

		Employee[] staff = new Employee[3];
		staff[0] = boss;
		staff[1] = new Employee("harry hacker",50000,1989,10,1);
		staff[2] = new Employee("tommy tester",30000,1990,3,15);

		for(Employee e : staff)
			System.out.println("name=" + e.getName() + ",salary=" + getSalary());
	}
}