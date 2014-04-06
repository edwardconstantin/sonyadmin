define(['backbone', 'jquery', 'bootstrap'], function () {

    App = {
        init: function () {
		
			App.headers = {
				"Accept" : "application/json", 
				"Content-Type" : "application/json",
				"sessionId" : $.cookie('sessionId')
			};

			$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
				options.headers = App.headers;
				options.url = 'http://86.168.142.45:11000' + options.url;
			});
			
			require(['util', 'views/signin', 'models/user', 'views/userTitles', 'views/titles', 'views/userEdit', 'routers/router'], function () {
				
				$(document).ready(function() {
					
					App.signIn = new App.Views.SigninView;
					App.userTitlesView = new App.Views.UserTitlesView;
					App.editUser = new App.Views.UserEditView;
					App.titlesView = new App.Views.TitlesView;								
					App.router = new App.Routers.MainRouter;
					
					if ($.cookie("sessionId")) {
						App.userTitlesView.render();	
						App.titlesView.render();
						App.editUser.render({id: $.cookie('userId')});
					}
					
					Backbone.history.start();
					
					if (!$.cookie("sessionId")) {
						App.router.navigate('signin', {trigger:true});
					} else {
						App.router.navigate('', {trigger:true});
					}

					App.router.bind('all', function(ev) {
						if (ev == 'route' || ev == 'route:newuser') return;
						if (ev != 'route:signin' && !$.cookie("sessionId")) {
							App.router.navigate('signin', {trigger:true});
						}
					});
				
				});
		
			});
			
        },
		
        start: function () {
            App.init();
            
        },
		
        Views: {},
        Models: {},
        Collections: {},
        Routers: {}
    }

    return App;
});
