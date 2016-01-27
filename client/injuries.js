Template.injuries.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('injuries');
	}); // prevents unnecssary subscriptions - LevelUpTuts
});

Template.injuries.helpers({
	injuries: ()=> {
		return Injuries.find({});
	}
});