package com.horstmann.corejava;
import java.time.*;
class Employee
{
	private String name;
	private double salary;
	private LocalDate hireDay;

	public Employee(String n, double s ,int year,int month,int day)
	{
		name = n;
		salary = s;
		hireDay = LocalDate.of(year,month,day);
	}

	public String getName()
	{
		return name;
	}

	public double getSalary()
	{
		return salary;
	}

	public LocalDate getHireDay()
	{
		return hireDay;
	}

	public void raiseSalary(double byPersent)
	{
		salary += salary * byPersent / 100;
	}
}