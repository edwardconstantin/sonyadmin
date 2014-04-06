define(['app', 'models/title'], function(App){
	var UserTitlesCollection = Backbone.Collection.extend({
		model: App.Models.TitleModel,
		setUrl: function(options) {
			this.url = '/profile/' + options.userId + '/titles';
		},
		parse: function(response, xhr) {
			if (typeof response == 'string' ) {
				response = response.replace(/,titles:/, ',"titles":');
				response = JSON.parse(response);
			}
			return response.titles;
		}
	});

	App.Collections.UserTitlesCollection = UserTitlesCollection;
	return UserTitlesCollection;
});
