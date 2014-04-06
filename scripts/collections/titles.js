define(['app', 'models/title'], function(App){
	var TitlesCollection = Backbone.Collection.extend({
		model: App.Models.TitleModel,
		url: '/gametitles/list',
		parse: function(response, xhr) {
			return response.titles;
		}
	});

	App.Collections.TitlesCollection = TitlesCollection;
	return TitlesCollection;
});
