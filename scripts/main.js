requirejs.config({
    baseUrl: 'scripts',
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: 'lib/jquery-3.1.1',
        camera: 'lib/camera',
        bootstrap:  "lib/bootstrap",
        "jquery-migrate": "lib/jquery-migrate-3.0.0"
    },
    shim: {
        'camera': {
            deps: ['jquery'],
            exports: 'camera'
        },
        'bootstrap' : {
            deps :['jquery'],
            exports: 'bootstrap'
        },
        'jquery-migrate' : {
            deps :['jquery'],
            exports: 'jquery-migrate'
        }
    }

});