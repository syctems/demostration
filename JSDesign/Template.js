// template ： 父类中定义一组操作算法骨架，而讲一些实现步骤延迟到子类中
//使子类可以不改变父类的算法结构的同时重新定义算法中某些实现步骤

var Alert = function(data)
{
	if(!data)
		return;

	this.content = data.content;

	this.panel = document.createElement('div');
	this.panel.className = 'alert';

	this.contentNode = document.createElement('p');
	this.contentNode.innerHTML = this.content;

	this.confirmBtn = document.createElement('span');
	this.confirmBtn.className = 'a-confirm';
	this.confirmBtn.innerHTML = data.confirm || 'confirm';

	this.closeBtn = document.createElement('b');
	this.closeBtn.className = 'a-close';

	this.success = data.success || function(){};
	this.fail = data.fail || function(){};
}

Alert.prototype = {
	init : function()
	{
		this.panel.appendChild(this.closeBtn);
		this.panel.appendChild(this.contentNode);
		this.panel.appendChild(this.confirmBtn);

		document.body.appendChild(this.panel);

		this.bindEvent();

		this.show();
	},

	bindEvent : function()
	{
		var me = this;

		this.closeBtn.onclick = function()
		{
			me.fail();
			me.hide();
		}

		this.confirmBtn.onclick =  function()
		{
			me.success();
			me.hide();
		}
	},
	
	hide : function()
	{
		this.panel.style.display = 'none';
	},

	show : function()
	{
		this.panel.style.display = 'block';
	}

}
//右侧按钮提示框
var RightAlert = function(data)
{
	Alert.call(this,data);
	this.confirmBtn.className = this.confirmBtn.className + ' right';
} 

RightAlert.prototype = new Alert();

//标题提示框
var TitleAlert = function(data)
{
	Alert.call(this,data);

	this.title = data.title;

	this.titleNode = document.createElement('h3');

	this.titleNode.innerHTML = this.title;
}

TitleAlert.prototype = new Alert();

TitleAlert.prototype.init = function()
{
	this.panel.insertBefore(this.titleNode,this.panel.firstChild);
	Alert.prototype.init.call(this);
}

//取消提示框
var  CancelAlert = function(data)
{
	TitleAlert.call(this,data);

	this.cancel = data.cancel;

	this.cancelBtn = document.createElement('span');

	this.cancelBtn.className = 'cancel';

	this.cancelBtn.innerHTML = this.cancel || 'cancel';
}

CancelAlert.prototype = new Alert();

CancelAlert.prototype.init = function()
{
	TitleAlert.prototype.init.call(this);
	this.panel.appendChild(this.cancelBtn);
}

CancelAlert.prototype.bindEvent = function()
{
	var me = this;

	TitleAlert.prototype.bindEvent.call(me);

	this.cancelBtn.onclick = function()
	{
		me.fail();
		me.hide();
	}
}

new CancelAlert({
	title:'提示标题',
	content : '提示内容',
	success : function()
	{
		console.log('success');
	},
	fail : function()
	{
		console.log('fail');
	}
	}).init();