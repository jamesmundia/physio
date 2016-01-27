Meteor.publish('injuries', function(){
	return Injuries.find() // tie this down later 
						//  with author: this.userID
});

Meteor.publish('InjurySingle', function(id){
	check (id, String);
	return Injuries.find({_id: id})

});