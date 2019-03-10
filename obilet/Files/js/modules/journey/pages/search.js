$js.compile("SearchPage", Page, function ($public, $private, $protected, $self) {

    $public.override.func.is_initial = function () { return true; };

    $protected.override.func.on_key = function () { return "search"; };

    $protected.override.void.on_construct = function (_views) {

        

    };

    $protected.override.void.on_flourish = function (_views) {

        

    };

    $protected.override.void.on_feed = function (_views) {

       

    };

    $protected.override.void.on_style = function (_views) {        

    };

});