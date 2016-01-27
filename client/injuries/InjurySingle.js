Template.InjurySingle.onCreated(function(){
	var self = this;
	self.autorun(function(){
	var id = FlowRouter.getParam('id');
		self.subscribe('InjurySingle', id);
	}); // prevents subsription to previous items, performative change here - LUT
});

Template.InjurySingle.helpers({
	injury: ()=> {
		var id = FlowRouter.getParam('id')
		return Injuries.findOne({_id: id});
	}
});