if(Meteor.isClient) {

Accounts.onLogin(function(){
    FlowRouter.go('injuries');
});

Accounts.onLogout(function(){
    FlowRouter.go('home');
});

}

FlowRouter.triggers.enter([function(context, redirect){
    if(!Meteor.userId()){
        FlowRouter.go('home');
    }
}]);

FlowRouter.route('/', {
    name: "home",
    action() {
        if(Meteor.userId()){
            FlowRouter.go('injuries');
        }
	BlazeLayout.render('billboard', {top: "topnav",});
    }
});

FlowRouter.route('/injuries', {
    name: "injuries",
    action : function() {
    BlazeLayout.render('layout', {top: "topnav", main: "injuries",});
    }
});
//FlowRouter.route('/', {
  //  name: "injury-url",
    //action : function() {
	//BlazeLayout.render('layout1', {top: "header", main: "injury",});
	//console.log("Home route has been Rendered, BRUGH!");
    //}
// });

FlowRouter.route('/injury/:id', {
    name: "injurydetail",
    action : function() {
	BlazeLayout.render('layout', {top: "topnav", main: "InjurySingle",});
    }
});