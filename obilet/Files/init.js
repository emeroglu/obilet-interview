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

Date.prototype.truncate = function () {

    let day = this.getDate();
    let month = this.getMonth() + 1;
    let year = this.getFullYear();

    if (month < 10)
        month = "0" + month;

    return year + "-" + month + "-" + day + " 12:00:00";

};

Date.prototype.shorten = function () {

    let months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];    

    let day = this.getDate();
    let month = months[this.getMonth()];
    let dow = days[this.getDay()];

    if (month < 10)
        month = "0" + month;

    return day + " " + month + " " + dow;

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
            $global.$cookie = new $cookie();
            $global.$css = new $css();
            $global.$data = new $data();
            $global.$http = new $http();
            $global.$lexicon = new $lexicon();            
            $global.$nav = new $nav();
            $global.$path = new $path();            
            $global.$theme = new $theme();
            $global.$view = new $view();

            $js.compile("UIModule", Module, function ($public, $private, $protected, $self) {

                $protected.override.func.on_key = function () { return "ui"; };

                $protected.override.func.on_types = function () { return [AbsoluteLayout, Button, ImageView, ListView, RelativeLayout, TextInput, TextView]; };                

            });

            new UIModule()
                .begin()
                .onBuild(function () {

                    let cover = document.createElement("o-cover");
                    cover.style = "position: absolute; width: 100vw; height: 100vh; top: 0px; left: 0px; margin: 0; padding: 0; background-color: #FFFFFF; opacity: 1; z-index: 1;";
                    cover.className = "o-ease-500";

                    let logo = document.createElement("img");
                    logo.src = $path.logo;
                    logo.style = "position: absolute; width: 204px; height: 70px; top: calc(50% - 35px); left: calc(50% - 102px); ";

                    cover.appendChild(logo);
                    document.body.appendChild(cover);

                    $fetch.module("Journey", function () {

                        $api.new_session(function (_text, _json, _response) {

                            $data.session_key = _json.data.sessionKey;
                            $data.device_key = _json.data.deviceKey;                                

                            $api.possible_locations(function (_text, _json, _response) {

                                $data.locations = _json.data.locations;
                                $data.location_selection = $data.locations.slice(0, 81);

                                $data.cities = $data.locations.slice(0, 81);

                                let last_selected_origin_id = $cookie.recall("last_selected_origin_id");
                                let last_selected_destination_id = $cookie.recall("last_selected_destination_id");

                                if (last_selected_origin_id == "") {

                                    $data.origin = $data.locations[0];
                                    $data.destination = $data.locations[2];

                                } else {

                                    $data.origin = $data.locations.filter(l => l.id == last_selected_origin_id)[0];
                                    $data.destination = $data.locations.filter(l => l.id == last_selected_destination_id)[0];

                                }

                                new JourneyModule()
                                    .begin()
                                        .onLoad(function () {

                                            document.getElementsByTagName("script")[0].remove();

                                            $window.onresize();

                                            cover.style = "position: absolute; width: 100vw; height: 100vh; top: 0px; left: 0px; margin: 0; padding: 0; background-color: #FFFFFF; opacity: 0; z-index: 1;";

                                            setTimeout(function () {
                                                cover.remove();
                                            }, 550);

                                            

                                        })
                                    .load();

                            });

                        }, function () {

                        });                            

                    });

                })
                .build();                        

        })
    .start();