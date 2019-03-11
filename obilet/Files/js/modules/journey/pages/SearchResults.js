$js.compile("SearchResultsPage", Page, function ($public, $private, $protected, $self) {

    $protected.override.func.on_key = function () { return "search-results"; };

    $protected.override.void.on_construct = function (_views) {

        _views.bar = new RelativeLayout();        

        _views.route = new AbsoluteLayout();
        _views.date = new AbsoluteLayout();

        _views.back = new AbsoluteLayout();

        _views.list = new RelativeLayout();

    };

    $protected.override.void.on_flourish = function (_views) {

        _views.bar.views.bar = new View();

        _views.back.views.icon = new ImageView();
        
        _views.route.views.text = new TextView();
              
        _views.date.views.text = new TextView();
        
        _views.list.views.list = new ListView();

    };

    $protected.override.void.on_feed = function (_views) {

        _views.back.views.icon.set_src($path.ic_left_arrow);
        _views.back.views.icon.onClick(function () {
            $nav.to("search", "left", "center", "center", "right");
        });

        _views.route.views.text.set_text("İstanbul Avrupa - Ankara");
        _views.route.views.text.set_family("opensans");
        _views.route.views.text.set_align("center");
        _views.route.views.text.set_weight("semibold");
        _views.route.views.text.set_size("smaller");
        _views.route.views.text.set_color("white");  

        _views.date.views.text.set_text("25 Ekim Perşembe");
        _views.date.views.text.set_family("opensans");
        _views.date.views.text.set_align("center");
        _views.date.views.text.set_weight("regular");
        _views.date.views.text.set_size("smallest");
        _views.date.views.text.set_color("white");

        _views.list.views.list
            .begin()
                .onItem(function () {
                    return SearchResultItem;
                })
                .onModel(function () {
                    return ["a", "b"];
                })
                .onConstruct(function (_item, _model, _index) {                    

                })
                .onFlourish(function (_item, _model, _index) {

                })
                .onFeed(function (_item, _model, _index) {

                });

    };

    $protected.override.void.on_style = function (_views) {

        _views.bar.select()
            .begin()
                .widthFull()
                .height(72)
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
                .top(15)
                .left(10)
            .save();

        _views.route.select()
            .begin()
                .widthFull()
                .height(20)
                .top(16)
                .left(0)
            .save();

        _views.route.views.text.select()
            .begin()
                .textHeight(20)
            .save();

        _views.date.select()
            .begin()
                .widthFull()
                .height(20)
                .top(40)
                .left(0)
            .save();

        _views.date.views.text.select()
            .begin()
                .textHeight(20)
            .save();

        _views.list.select()
            .begin()
                .widthFull()
                .heightCropFromFull(72)
            .save();

    };

});