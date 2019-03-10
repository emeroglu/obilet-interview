$js.compile("JourneyModule", Module, function ($public, $private, $protected, $self) {

    $protected.override.func.on_key = function () { return "journey"; };

    $protected.override.func.on_types = function () { return [DateInput, RouteInput]; };

    $protected.override.void.on_construct = function (_pages, _views) {

        _pages.search = new SearchPage();

    };

});