//Observer 发布-订阅者模式，或者消息机制定制依赖关系，解决主体对象与观察者之间功能的耦合
var Observer = (function(){
	var _messages = {};
	return {
		regist : function(type,fn)
		{
			if(typeof _messages[type] === 'undefined')
			{
				_messages[type] = [fn];
			}else{
				_messages[type].push(fn);
			}
		},
		fire : function(type,args)
		{
			if(!_messages[type])
			{
				console.log("can't find "+ type + " function");
				return;
			}
			var events = {
				type : type,
				args : args || {}
			},
			len = _messages[type].length;
			for (var i = 0; i < len; i++) {
				_messages[type][i].call(this,events);
			}
		},
		remove : function(type,fn)
		{
			if(_messages[type] instanceof Array)
			{
				var i = _messages[type].length - 1;
				for (; i >= 0; i--) 
				{
					_messages[type][i] === fn && _messages[type].splice(i,1);
				}
			}
		},
		getMessage : function()
		{
			return _messages;
		}
	}
})();

Observer.regist('test',function(e){
	console.log(e.type,e.args.msg);
});

Observer.fire('test',{msg : "param"});
Observer.fire('test2',{msg : "param2"})