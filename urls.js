var CLIENT_CONFIG = {};
var LoadConfig = function () {
    CLIENT_CONFIG = {
        SERVICE_BASE: function () {
            var base = window.location.protocol + "//" + window.location.host;
            return base;
        }
    };
}();

var Url = {
    resolveTemplateUrl:function (path) {
        var internalPath = "/static/scripts/app/components/";
        var resolvedPath = CLIENT_CONFIG.SERVICE_BASE() + internalPath  + path;
        return resolvedPath;
    }

}