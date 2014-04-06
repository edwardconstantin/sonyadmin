require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        jqcookie: '../components/jquery/jqcookie',
        underscore: '../components/underscore/underscore',
        backbone: '../components/backbone/backbone',
        bootstrap: 'vendor/bootstrap'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
		jqcookie: {
            deps: ['jquery'],
            exports: 'jqcookie'		
		}
    }
});

define(['app', 'jquery', 'bootstrap', 'jqcookie'], function(App, $){
    App.start();
});
