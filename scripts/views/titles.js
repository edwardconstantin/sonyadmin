define(['app', 'collections/titles'], function(App){

	var TitlesView = Backbone.View.extend({

		el: '.titles',

		events: {
			'click .add-title': 'addTitle'
		},

		addTitle: function (ev) {
			if ($(ev.currentTarget).hasClass('disabled')) return;
			var titleId = ev.currentTarget.getAttribute('titleId');
			var title = new App.Models.TitleModel({id:titleId});
			var url = '/profile/' + $.cookie('userId') + '/titles/' + titleId;
			title.setUrl(url);
			title.save({}, {
				success: function () {
					//$(ev.currentTarget).addClass('disabled');
					$(ev.currentTarget.parentElement.parentElement).hide()
					App.userTitlesView.render();
				}
			})
		},

		render: function () {
			var that = this;
			var titles = new App.Collections.TitlesCollection();
			titles.fetch({
				success: function (titles) {
					var template = _.template($('#titles-list-template').html(), {titles: titles.models});
					that.$el.html(template);
					if (App.usertitles) {
						$('.titles .add-title').each(function () {
							var el = this;
							_.each(App.usertitles, function (title) {
								if (el.getAttribute('titleId') == title.get('id')) $(el.parentElement.parentElement).hide(); //$(el).addClass('disabled');
							});					   
						});
					}
				}
			})		
			return this;
		}
	});

	App.Views.TitlesView = TitlesView;
	return TitlesView;
});
