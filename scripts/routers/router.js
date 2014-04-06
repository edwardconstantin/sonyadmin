define(['app'], function(App){
	var MainRouter = Backbone.Router.extend({
	
		routes: {
			"": "home",
			"newuser": "newuser",
			"signin": "signin",
			"signout": "signout",
			"edituser": "edituser"
		},
		
		home: function () {
			if ($.cookie("sessionId")) {
				$('.top-btn, .page').hide();
				$('#edituser, #signout, .user-titles, .titles').show();
			}
		},
		
		newuser: function () {
			$('.top-btn, .user-titles, .titles').hide();
			$('#signin, .page').show();
			App.editUser.render();
		},
		
		edituser: function () {
			$('.top-btn, .user-titles, .titles').hide();
			$('#home, #signout, .page').show();
			App.editUser.render({id: $.cookie('userId')});
		},
		
		signin: function () {
			$('.top-btn, .user-titles, .titles').hide();
			$('#register, .page').show();
			App.signIn.render();	
		},
		
		signout: function () {
			$.removeCookie("sessionId");			
			$('.page, .titles, .user-titles').html('');
			App.router.navigate('signin', {trigger:true});
		}
	
	});

	App.Routers.MainRouter = MainRouter;
	return MainRouter;
});
