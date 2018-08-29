// iterator : 在不暴露对象内部结构的同时，可以顺序访问聚合对象内部的元素。
var Iterator = function(items,container)
{
	var container = document.getElementById(container) || document;
	var items = container.getElementsByTagName(items);
	var length = items.length;
	var index = 0;
	var splice = [].splice;

	return {
		first : function()
		{
			index = 0;
			return items[index];
		},
		second : function()
		{
			index = length - 1;
			return items[index];
		},
		pre : function()
		{
			if(--index > 0)
			{
				return items[index];
			}else{
				index = 0;
				return null;
			}
		},
		next : function()
		{
			if(++index < length)
			{
				return items[index];
			}else{
				index = length - 1;
				return null;
			}
		},
		get : function(num)
		{
			index = num > 0 ? num % length : num % length + length;
			return items[index];
		},
		dealEach : function(fn)
		{
			var args = splice.call(arguments,1);
			for(var i = 0; i < length ; i++)
			{
				fn.apply(items[i],args);
			}
		},
		dealItem : function(num,fn)
		{
			fn.apply(this.get(num),splice.call(arguments,2));
		},
		exclusive : function(num,allFn,numFn)
		{
			this.dealEach(allFn);
			if(Object.prototype.toString.call(num) === "[object Array]")
			{
				for(var i = 0,len = num.length; i< len ; i++)
				{
					this.dealItem(num[i],numFn);
				}
			}else{
				this.dealItem(num,numFn);
			}
		},
		getIndex : function()
		{
			return index;
		}

	}
};

var d = new Iterator("li","uls");
// console.log(d.first());
// console.log(d.next());
// console.log(d.getIndex());
// console.log(d.get(2));

// d.dealEach(function(text,color){
// 	this.innerHTML = text;
// 	this.style.background = color;
// },'test','pink');

d.exclusive([2,3],function(){
	this.innerHTML = "exclusive";
	this.style.background = "green";
},function(){
	this.innerHTML = "check";
	this.style.background = "red";
});