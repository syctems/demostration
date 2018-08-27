// state : 当一个对象的内部状态发生改变，会导致其行为的改变，这看起来是改变了对象
var MarryState = function()
{
	var _currentState = {},
		states = {
			jump : function()
			{
				console.log('jump');
			},
			move : function()
			{
				console.log('move');
			},
			shoot : function()
			{
				console.log('shoot');
			},
			squat : function()
			{
				console.log('squat');
			},
		};
	var Action = {
		changeState : function()
		{
			var arg = arguments;
			_currentState = {};
			if(arg.length)
			{
				for(var i = 0 , len = arg.length; i < len ; i++)
				{
					_currentState[arg[i]] = true;
				}
			}
			return this;
		},
		goes : function()
		{
			console.log('one action');
			for(var i in _currentState)
			{
				states[i] && states[i]();
			}
			return this;
		},
		getCurrentState :function()
		{
			return _currentState;
		}

	}

	return {
		change : Action.changeState,
		goes : Action.goes,
		getCurrentState : Action.getCurrentState
	}
}
console.log(MarryState().change('jump','shoot').getCurrentState());
MarryState().change('jump','shoot').goes().goes().change('shoot').goes();