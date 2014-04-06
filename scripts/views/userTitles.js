define(['app', 'models/title', 'collections/userTitles'], function(App){
	var UserTitlesView = Backbone.View.extend({

		el: '.user-titles',

		events: {
			'click .delete-title': 'deleteTitle'
		},

		deleteTitle: function (ev) {
			var that = this;
			var titleId = ev.currentTarget.getAttribute('titleId');
			var title = new App.Models.TitleModel({id:titleId});
			var url = '/profile/' + $.cookie('userId') + '/titles/' + titleId;
			title.setUrl(url);
			title.destroy({
				success: function () {
					//$('.page [titleid="' + titleId + '"]').removeClass('disabled');
					$('.titles [titleid="' + titleId + '"]').parent().parent().show();
					that.render();
				}
			})
		},

		render: function () {
			var that = this;
			var titles = new App.Collections.UserTitlesCollection();
			titles.setUrl({userId: $.cookie("userId")});
			titles.fetch({
				dataType: "text",
				success: function (titles) {
					App.usertitles = titles.models;
					var template = _.template($('#user-titles-list-template').html(), {titles: titles.models});
					that.$el.html(template);
				}
			})		
			return this;
		}
	});

	App.Views.UserTitlesView = UserTitlesView;
	return UserTitlesView;
});
