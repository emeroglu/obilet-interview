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

$window.onresize = function () {

    let w = $window.innerWidth;
    let port = $view.port;

    if (1200 <= w)
        $view.port = "wide";
    else if (992 <= w)
        $view.port = "medium";
    else if (768 <= w)
        $view.port = "narrow";
    else if (500 <= w)
        $view.port = "tablet"
    else
        $view.port = "mobile"

    if ($view.ports.includes($view.port)) {

    } else {
        $view.ports.push($view.port);
        $bcast.shout("viewport_new");
    }

    if (port != $view.port)
        $bcast.shout("viewport_changed");

    $bcast.shout("viewport_" + $view.port);

};

$global.$fetch = new $fetch();

$fetch
    .begin()
        .addStylesheet("/File/Style/" + version)
        .addScript("/File/Script/" + version)
        .onFetch(function () {

            $global.$api = new $api();            
            $global.$bcast = new $bcast();
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

                new JourneyModule()
                    .begin()
                    .onLoad(function () {

                        document.getElementsByTagName("script")[0].remove();

                        $window.onresize();

                    })
                    .load();

            });

        })
    .start();