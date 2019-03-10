$js.compile("DateInput", View, function ($public, $private, $protected, $self) {

    $protected.override.func.on_key = function () { return "date-input"; };

    $protected.override.void.on_construct = function (_views) {

        _views.date = new RelativeLayout();
        _views.date.set_name("date");                

    };

    $protected.extension.void.on_style = function (_views) {

        $self.select_tag()
            .begin()
                .absolute()
                .sideFull()                
            .save();

        _views.date.select_path()
            .begin()
                .widthCropFromFull(32)
                .height(64)
                .marginHorizontal(16)
                .marginTop(20)
                .backgroundColor($theme.color.white)
                .round(2)
            .save();

    };

});