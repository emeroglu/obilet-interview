$js.compile("RouteInput", View, function ($public, $private, $protected, $self) {

    $protected.override.func.on_key = function () { return "route-input"; };

    $protected.override.void.on_construct = function (_views) {

        _views.origin = new RelativeLayout();
        _views.origin.set_name("origin");

        _views.destination = new RelativeLayout();
        _views.destination.set_name("destination");

    };

    $protected.extension.void.on_style = function (_views) {

        $self.select_tag()
            .begin()
                .absolute()
                .sideFull()                
            .save();

        _views.origin.select_path()
            .begin()
                .widthCropFromFull(32)
                .height(64)
                .marginHorizontal(16)
                .marginTop(27)
                .backgroundColor($theme.color.white)
                .round(2)
            .save();

        _views.destination.select_path()
            .begin()
                .widthCropFromFull(32)
                .height(64)
                .marginHorizontal(16)
                .marginTop(3)
                .backgroundColor($theme.color.white)
                .round(2)
            .save();

    };

});