String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

String.prototype.capitalize = function () {

    var initial = this.charAt(0).toUpperCase();
    var rest = this.slice(1);
    var restLower = "";

    for (var i = 0; i < rest.length; i++) {
        restLower += rest[i].toLowerCase();
    }

    return initial + restLower;

};

$global.$fetch = new $fetch();

$fetch
    .begin()
        .addStylesheet("/File/Style/" + version)
        .addScript("/File/Script/" + version)
        .onFetch(function () {

            $global.$api = new $api();            
            $global.$css = new $css();
            $global.$data = new $data();
            $global.$http = new $http();
            $global.$lexicon = new $lexicon();
            $global.$module = new $module();
            $global.$nav = new $nav();
            $global.$path = new $path();
            $global.$page = new $page();
            $global.$theme = new $theme();
            $global.$view = new $view();

            $fetch.module("Journey", function () {

                alert();

            });

        })
    .start();