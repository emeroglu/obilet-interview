$js.compile("LocationSelectorPage", Page, function ($public, $private, $protected, $self) {

    $protected.override.func.on_key = function () { return "location-selector"; };

    $protected.override.void.on_construct = function (_views) {

        _views.bar = new RelativeLayout();  

        _views.back = new AbsoluteLayout();

    };

    $protected.override.void.on_flourish = function (_views) {

        _views.bar.views.bar = new View();

        _views.back.views.icon = new ImageView();

    };

    $protected.override.void.on_feed = function (_views) {

        _views.back.views.icon.set_src($path.ic_left_arrow);
        _views.back.views.icon.onClick(function () {
            $nav.to("search", "left", "center", "center", "right");
        });

    };

    $protected.override.void.on_style = function (_views) {

        _views.bar.select()
            .begin()
                .widthFull()
                .height(60)
            .save();

        _views.bar.views.bar.select()
            .begin()
                .absolute()
                .sideFull()
                .backgroundColor($theme.color.blue)
            .save();

        _views.back.select()
            .begin()
                .side(20)
                .top(20)
                .left(10)
            .save();

    };

});