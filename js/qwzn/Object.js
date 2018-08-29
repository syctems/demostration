var ObjectCreate = (function(){
	var o1 = Object.create({x:1,y:2});
	var o = {};
	o.x = 16;
	return {
		inherit : function(o)
		{
			if(o == null)
				throw TypeError();
			if(Object.create)
				return Object.create(o);
			var t = typeof o;
			if(t !== "object" && t !== "function")
				throw TypeError();
			function f() {};
			f.prototype = o;
			return new f();
		},
		prototypeParam : function()
		{
			var p = this.inherit(o);
			p.y = 14;
			console.log(p.y + p.x);
		},

	}
})();
var o = { x : "don't change this value" };
//console.log(ObjectCreate.inherit(o));
ObjectCreate.prototypeParam();
