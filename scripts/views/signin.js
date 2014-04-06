define(['app'], function(App){

	var SigninView = Backbone.View.extend({

		el: '.page',
	
		events: {
			'submit .signin-user-form': 'signin'
		},
		
		signin: function (ev) {
			var userDetails = $(ev.currentTarget).serializeObject();
			var user = new App.Models.UserModel();
			user.fetch({
				url:'/signin/' + userDetails.username + '/' + userDetails.password,
				success: function (session) {
					App.headers['sessionId'] = session.get('sessionId');					
					var expires = new Date();
					expires.setTime(expires.getTime() + session.get('expiryTime'));
					$.cookie("username", userDetails.username, {expires:expires});
					$.cookie("userId", session.get('userId'), {expires:expires});
					$.cookie("sessionId", session.get('sessionId'), {expires:expires});
					App.userTitlesView.render();	
					App.titlesView.render();
					App.editUser.render({id: $.cookie('userId')});
					App.router.navigate('', {trigger:true});
				},
				error: function (o) {
					$(".signin-alert").show();
				}	
			});
			return false;
		},	
		
		render: function () {
			var template = _.template($('#signin-user-template').html(), {});
			this.$el.html(template);
			return this;
		}
	});

	App.Views.SigninView = SigninView;
	return SigninView;
});
