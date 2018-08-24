function extend(subClass,superClass)
{
	var F = function(){};
	F.prototype = superClass.prototype;
	subClass.prototype = new F();
	subClass.prototype.constructor = subClass;
}

function Person(name)
{
	this.name = name;
}

Person.prototype.getName = function()
{
	return this.name;
}

function Author(name,books)
{
	Person.call(this,name);
	this.books = books;
}

Author.prototype.getBooks = function()
{
	return this.books;
}

extend(Author,Person);
