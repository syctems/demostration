// command : 将请求与实现解耦并封装成独立对象，从而使不同的请求对客户端的实现参数化
var viewCommand = (function(){
	var tpl = {
		product : [
			'<div>',
				'<img src="{#src#}" />',
				'<p>{#text#}</p>',
			'</div>'
		].join(''),
		title : [
			'<div class="title">',
				'<div class="main">',
					'<h2>{#title#}</h2>',
					'<p>{#tips#}</p>',
				'</div>',
			'</div>'
		].join(''),
	},
	html = '';
	function formateString(str,obj)
	{
		return str.replace(/\{#(\w+)#\}/g , function(match,key){
			return obj[key];
		})
	}

	var Action = {
		create : function(data,view)
		{
			if(data.length)
			{
				for(var i = 0, len = data.length; i < len ; i++)
				{
					html += formateString(tpl[view],data[i]);
				}
			}else{
				html += formateString(tpl[view],data);
			}
		},
		display : function(container,data,view)
		{
			if(data)
			{
				this.create(data,view);
			}
			document.getElementById(container).innerHTML = html;
			html = '';
		}
	}

	return function excute(msg)
	{
		msg.param = Object.prototype.toString.call(msg.param) === '[object Array]'? msg.param : [msg.param];
		Action[msg.command].apply(Action,msg.param);
	}
})();

var productData = [
	{
		src : 'command/01.jpg',
		text : 'command/01.jpg'
	},
	{
		src : 'command/02.jpg',
		text : 'command/02.jpg'
	},
	{
		src : 'command/03.jpg',
		text : 'command/03.jpg'
	},
],

titleData = {
	title : 'summer',
	tips : 'summer'
};

// viewCommand({
// 	command : 'display',
// 	param : ['container',titleData,'title']
// });

// viewCommand({
// 	command : 'display',
// 	param : ['container',{
// 		src : 'command/014.jpg',
// 		text : 'command/014.jpg'
// 	},'product']
// });

viewCommand({
	command : 'display',
	param : ['container',productData,'product']
});