define(['jquery', 'camera', 'bootstrap', 'jquery-migrate'], function($, Camera, Bootstrap, Migrate) {
    "use strict";
    var Util = function(){
        //console.log($);
        //console.log(Camera);
        //console.log(Bootstrap);
        this.initiateCamera();
    }
    Util.prototype = {
        initiateCamera: function(){
            var o = $('#camera');
            if (o.length > 0) {
                o.camera({
                    autoAdvance: true,
                    height: '50%',
                    minHeight: '600px',
                    pagination: true,
                    thumbnails: false,
                    playPause: false,
                    hover: false,
                    loader: 'none',
                    navigation: true,
                    navigationHover: false,
                    mobileNavHover: false,
                    fx: 'simpleFade'
                })
            }
        }
    }
    return Util;
});