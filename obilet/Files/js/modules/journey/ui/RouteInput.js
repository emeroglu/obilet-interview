$js.compile("RouteInput", View, function ($public, $private, $protected, $self) {

    $protected.override.func.on_key = function () { return "route-input"; };

    $protected.override.void.on_construct = function (_views) {

        _views.origin = new RelativeLayout();
        _views.origin.set_name("origin");

        _views.origin.views.left = new RelativeLayout();
        _views.origin.views.left.set_name("origin_left");

        _views.origin.views.right = new RelativeLayout();
        _views.origin.views.right.set_name("origin_right");

        _views.destination = new RelativeLayout();
        _views.destination.set_name("destination");

        _views.destination.views.left = new RelativeLayout();
        _views.destination.views.left.set_name("destination_left");

        _views.destination.views.right = new RelativeLayout();
        _views.destination.views.right.set_name("destination_right");
    
    };

    $protected.override.void.on_flourish = function (_views) {

        _views.origin.views.left.views.icon = new ImageView();
        _views.origin.views.left.views.icon.set_name("origin_icon");
        _views.origin.views.left.views.icon.set_src($path.ic_origin);

        _views.destination.views.left.views.icon = new ImageView();
        _views.destination.views.left.views.icon.set_name("destination_icon");
        _views.destination.views.left.views.icon.set_src($path.ic_destination);

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

        _views.origin.views.left.select_path()
            .begin()
                .width(30)
                .heightFull()
            .save();

        _views.origin.views.right.select_path()
            .begin()
                .widthCropFromFull(30)
                .heightFull()
            .save();

        _views.origin.views.left.views.icon.select_path()
            .begin()
                .widthCentered(14)
                .height(14)
                .bottom(15)
                .opacity(0.25)
            .save();

        _views.destination.views.left.views.icon.select_path()
            .begin()
                .widthCentered(10)
                .height(14)
                .bottom(15)
                .opacity(0.25)
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

        _views.destination.views.left.select_path()
            .begin()
                .width(30)
                .heightFull()
            .save();

        _views.destination.views.right.select_path()
            .begin()
                .widthCropFromFull(30)
                .heightFull()
            .save();

    };

});