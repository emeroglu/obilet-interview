$js.compile("LocationSelectorPage", Page, function ($public, $private, $protected, $self) {

    $protected.override.func.on_key = function () { return "location-selector"; };

    $protected.override.void.on_construct = function (_views) {

        _views.bar = new RelativeLayout();  

        _views.back = new AbsoluteLayout();

        _views.list = new RelativeLayout();

    };

    $protected.override.void.on_flourish = function (_views) {

        _views.bar.views.bar = new View();

        _views.bar.views.text_input = new TextInput();

        _views.back.views.icon = new ImageView();

        _views.list.views.list = new ListView();

    };

    $protected.override.void.on_feed = function (_views) {

        _views.bar.views.text_input.set_placeholder("Search...");
        _views.bar.views.text_input.onChange(function () {

            let query = _views.bar.views.text_input.text().toLowerCase() ;

            if (query.length < 2) {

                $data.location_selection = $data.locations.slice(0, 81);

                _views.list.views.list.update();
                
            } else {

                $api.filter_locations(query, function (_text, _json, _response) {

                    $data.location_selection = _json.data.locations;

                    _views.list.views.list.update();

                }, function () {

                });

            }

        });


        _views.back.views.icon.set_src($path.ic_left_arrow);
        _views.back.views.icon.onClick(function () {
            $nav.to("search", "left", "center", "center", "right");
        });

        _views.list.views.list
            .begin()
                .onItem(function () {
                    return LocationItem;
                })
                .onModel(function () {
                    return $data.location_selection;
                })
                .onConstruct(function (_item, _model, _index) {

                })
                .onFlourish(function (_item, _model, _index) {

                })
                .onFeed(function (_item, _model, _index) {                    

                })
                .onReady(function (_item, _model, _index) {                       

                    _item.views.item.views.text.set_text(_model.name);
                    _item.views.item.views.text.apply();

                })
                .onUpdate(function (_item, _model, _index) {

                    _item.views.item.views.text.set_text(_model.name);
                    _item.views.item.views.text.apply();

                });

    };   

    $protected.override.void.on_show = function (_views) {        

        _views.bar.views.text_input.reset();

        $data.location_selection = $data.locations.slice(0, 81);

        _views.list.views.list.update();

        _views.list.views.list.scrollToTop();

    };

    $protected.override.void.on_style = function (_views) {

        _views.bar.select()
            .begin()
                .widthFull()
                .height(40)
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
                .top(10)
                .left(10)
            .save();

        _views.bar.views.text_input.select()
            .begin()
                .widthCropFromFull(60)
                .left(40)
            .save();

        _views.list.select()
            .begin()
                .widthFull()
                .heightCropFromFull(40)
            .save();

    };

});