define(['app'], function(App){
	var TitleModel = Backbone.Model.extend({
		setUrl: function(url) {
			this.url = url;
		}
	});

	App.Models.TitleModel = TitleModel;
	return TitleModel;
});
