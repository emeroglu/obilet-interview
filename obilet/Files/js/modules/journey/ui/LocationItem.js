$js.compile("LocationItem", View, function ($public, $private, $protected, $self) {

    $protected.override.func.on_key = function () { return "location-item-view"; };

    $protected.override.void.on_construct = function (_views) {        

        _views.item = new AbsoluteLayout();
        _views.item.set_name("item");

    };

    $protected.override.void.on_flourish = function (_views) {

        _views.item.views.text = new TextView();
        _views.item.views.text.set_name("text");

    };

    $protected.override.void.on_feed = function (_views) {

        _views.item.views.text.set_text("İstanbul Avrupa");
        _views.item.views.text.set_family("roboto");
        _views.item.views.text.set_align("center");
        _views.item.views.text.set_weight("regular");
        _views.item.views.text.set_size("smallest");
        _views.item.views.text.set_color("gray");        

    };

    $protected.override.void.on_style = function (_views) {

        $self.select_tag()
            .begin()
                .relativeLeftFull()
                .height(32)
                .backgroundColor($theme.color.white)
                .marginTop(1)
            .save();    

        _views.item.select_path()
            .begin()
                .widthCropFromFull(20)
                .height(30)
                .left(10)
                .top(2)
            .save();

        _views.item.views.text.select_path()
            .begin()
                .textHeight(30)
            .save();

    };

});