define(['app'], function(App){

	var UserEditView = Backbone.View.extend({
		el: '.page',

		events: {
			'submit .edit-user-form': 'save'
		},

		save: function (ev) {
			var userDetails = $(ev.currentTarget).serializeObject();
			var user = new App.Models.UserModel();
			var isUpdate = (userDetails.notes != undefined);
			var that = this;
			var url = isUpdate ? '/profile/' + userDetails.userId : '/register/' + userDetails.username;			
			user.save(userDetails, {
				url: url,
				method: 'PUT',
				success: function (user) {
					App.user = user;
					//that.render({id:userDetails.userId});
					App.router.navigate(isUpdate ? '': 'signin', {trigger:true});
				},
				error: function (o) {
					$(".reg-alert").show();
				}				
			});
			return false;
		},

		render: function (options) {
			var that = this;
			if(options && options.id) {
				that.user = new App.Models.UserModel({id: options.id});
				that.user.fetch({
					success: function (user) {
						var template = _.template($('#edit-user-template').html(), {user: user});
						that.$el.html(template);
						activateButtons();
					}
				})
				
			} else {
				var template = _.template($('#edit-user-template').html(), {user: null});
				that.$el.html(template);
			}
		}
	});

	App.Views.UserEditView = UserEditView;
	return UserEditView;
});
