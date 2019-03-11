$js.compile("SearchResultsPage", Page, function ($public, $private, $protected, $self) {

    $protected.override.func.on_key = function () { return "search-results"; };

    $protected.override.void.on_construct = function (_views) {

        _views.btn = new Button();
        _views.btn.onClick(function () {
            $nav.to("search", "left", "center", "center", "right");
        });

    };

});