define(['app'], function(App){
	var UserModel = Backbone.Model.extend({
		urlRoot: '/profile'
	});

	App.Models.UserModel = UserModel;
	return UserModel;
});
