//mediator :通过中介者封装一系列对象之间的交互，使对象不在互相引用，降低他们之间的耦合
var Mediator = function()
{
	var _msg = {};
	return {
		register : function(type,action)
		{
			if(_msg[type])
			{
				_msg[type].push(action);
			}else{
				_msg[type] = [];
				_msg[type].push(action);
			}
		},

		send : function(type)
		{
			if(_msg[type])
			{
				for(var i = 0,len = _msg[type].length; i < len ; i++)
				{
					_msg[type][i] && _msg[type][i]();
				}
			}
		},

		getMsg : function()
		{
			return _msg;
		}
	}
}();

Mediator.register('demo',function(){
	console.log('first');
});
Mediator.register('demo',function(){
	console.log('second');
});
Mediator.register('demo2',function(){
	console.log('third');
});
//console.log(Mediator.getMsg());
Mediator.send('demo');