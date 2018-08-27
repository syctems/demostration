// strategy : 将定义的一组算法封装起来，使其互相可以替换，有一定的独立性，不会随客户端变化而变化
var PriceStrategy = function()
{
	var strategy = {
		return30 : function(price)
		{
			return price + parseInt(price / 100) * 30;
		},
		return50 : function(price)
		{
			return price + parseInt(price / 100) * 50;
		},
		percent90 : function(price)
		{
			return price * 100 * 90 / 10000;
		},
		percent80 : function(price)
		{
			return price * 100 * 80 / 10000;
		},
		percent50 : function(price)
		{
			return price * 100 * 50 / 10000;
		},
	}
	return function(algorithm,price)
	{
		return strategy[algorithm] && strategy[algorithm](price);
	}
}();

var price = PriceStrategy('return50',400);
console.log(price);

