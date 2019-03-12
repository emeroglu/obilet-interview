$js.compile("SearchResultItem", View, function ($public, $private, $protected, $self) {

    $protected.override.func.on_key = function () { return "search-result-item-view"; };

    $private.field.index = -1;
    $public.void.set_index = function (_index) { $self.index = _index; }

    $private.field.model = -1;
    $public.void.set_model = function (_model) { $self.model = _model; }    

    $protected.override.void.on_construct = function (_views) {        

        _views.item = new AbsoluteLayout();
        _views.item.set_name("item");

        _views.item.views.top = new RelativeLayout();
        _views.item.views.top.set_name("item_top");

        _views.item.views.bottom = new RelativeLayout();
        _views.item.views.bottom.set_name("item_bottom");

        _views.item.views.top.views.left = new RelativeLayout();
        _views.item.views.top.views.left.set_name("item_top_left");

        _views.item.views.top.views.left.views.origin = new RelativeLayout();
        _views.item.views.top.views.left.views.origin.set_name("origin");

        _views.item.views.top.views.left.views.origin.views.top = new RelativeLayout();
        _views.item.views.top.views.left.views.origin.views.top.set_name("origin_top");

        _views.item.views.top.views.left.views.origin.views.bottom = new RelativeLayout();
        _views.item.views.top.views.left.views.origin.views.bottom.set_name("origin_bottom");

        _views.item.views.top.views.left.views.arrow = new RelativeLayout();
        _views.item.views.top.views.left.views.arrow.set_name("arrow");

        _views.item.views.top.views.left.views.destination = new RelativeLayout();
        _views.item.views.top.views.left.views.destination.set_name("destination");

        _views.item.views.top.views.left.views.destination.views.top = new RelativeLayout();
        _views.item.views.top.views.left.views.destination.views.top.set_name("destination_top");

        _views.item.views.top.views.left.views.destination.views.bottom = new RelativeLayout();
        _views.item.views.top.views.left.views.destination.views.bottom.set_name("destination_bottom");

        _views.item.views.top.views.right = new RelativeLayout();
        _views.item.views.top.views.right.set_name("item_top_right");
        
        _views.item.views.top.views.right.views.price = new AbsoluteLayout();
        _views.item.views.top.views.right.views.price.set_name("price");

    };

    $protected.override.void.on_flourish = function (_views) {

        _views.item.views.top.views.right.views.price.views.text = new TextView();
        _views.item.views.top.views.right.views.price.views.text.set_name("price_text");

        _views.item.views.top.views.left.views.arrow.views.image = new ImageView();
        _views.item.views.top.views.left.views.arrow.views.image.set_name("arrow_image");

        _views.item.views.top.views.left.views.origin.views.top.views.text = new TextView();
        _views.item.views.top.views.left.views.origin.views.top.views.text.set_name("origin_top_text");

        _views.item.views.top.views.left.views.origin.views.bottom.views.text = new TextView();
        _views.item.views.top.views.left.views.origin.views.bottom.views.text.set_name("origin_bottom_text");

        _views.item.views.top.views.left.views.destination.views.top.views.text = new TextView();
        _views.item.views.top.views.left.views.destination.views.top.views.text.set_name("origin_top_text");

        _views.item.views.top.views.left.views.destination.views.bottom.views.text = new TextView();
        _views.item.views.top.views.left.views.destination.views.bottom.views.text.set_name("origin_bottom_text");

        _views.item.views.bottom.views.text = new TextView();
        _views.item.views.bottom.views.text.set_name("bottom_text");

    };

    $protected.override.void.on_feed = function (_views) {

        _views.item.views.top.views.right.views.price.views.text.set_text("75.00 TL");
        _views.item.views.top.views.right.views.price.views.text.set_family("opensans");
        _views.item.views.top.views.right.views.price.views.text.set_align("center");
        _views.item.views.top.views.right.views.price.views.text.set_weight("semibold");
        _views.item.views.top.views.right.views.price.views.text.set_size("smaller");
        _views.item.views.top.views.right.views.price.views.text.set_color("white");

        _views.item.views.top.views.left.views.arrow.views.image.set_src($path.ic_right_arrow);
        
        _views.item.views.top.views.left.views.origin.views.top.views.text.set_text("KALKIŞ");
        _views.item.views.top.views.left.views.origin.views.top.views.text.set_family("opensans");
        _views.item.views.top.views.left.views.origin.views.top.views.text.set_align("center");
        _views.item.views.top.views.left.views.origin.views.top.views.text.set_weight("regular");
        _views.item.views.top.views.left.views.origin.views.top.views.text.set_size("tiny");
        _views.item.views.top.views.left.views.origin.views.top.views.text.set_color("blueDark");

        _views.item.views.top.views.left.views.origin.views.bottom.views.text.set_text("");
        _views.item.views.top.views.left.views.origin.views.bottom.views.text.set_family("opensans");
        _views.item.views.top.views.left.views.origin.views.bottom.views.text.set_align("center");
        _views.item.views.top.views.left.views.origin.views.bottom.views.text.set_weight("semibold");
        _views.item.views.top.views.left.views.origin.views.bottom.views.text.set_size("small");
        _views.item.views.top.views.left.views.origin.views.bottom.views.text.set_color("blueDarker");

        _views.item.views.top.views.left.views.destination.views.top.views.text.set_text("VARIŞ");
        _views.item.views.top.views.left.views.destination.views.top.views.text.set_family("opensans");
        _views.item.views.top.views.left.views.destination.views.top.views.text.set_align("center");
        _views.item.views.top.views.left.views.destination.views.top.views.text.set_weight("regular");
        _views.item.views.top.views.left.views.destination.views.top.views.text.set_size("tiny");
        _views.item.views.top.views.left.views.destination.views.top.views.text.set_color("blueDark");

        _views.item.views.top.views.left.views.destination.views.bottom.views.text.set_text("");
        _views.item.views.top.views.left.views.destination.views.bottom.views.text.set_family("opensans");
        _views.item.views.top.views.left.views.destination.views.bottom.views.text.set_align("center");
        _views.item.views.top.views.left.views.destination.views.bottom.views.text.set_weight("semibold");
        _views.item.views.top.views.left.views.destination.views.bottom.views.text.set_size("small");
        _views.item.views.top.views.left.views.destination.views.bottom.views.text.set_color("blueDarker");

        _views.item.views.bottom.views.text.set_text("");
        _views.item.views.bottom.views.text.set_family("opensans");
        _views.item.views.bottom.views.text.set_align("left");
        _views.item.views.bottom.views.text.set_weight("regular");
        _views.item.views.bottom.views.text.set_size("smallest");
        _views.item.views.bottom.views.text.set_color("blueDarkest");

    };

    $protected.override.void.on_style = function (_views) {

        $self.select_tag()
            .begin()
                .relativeLeftFull()
                .height(80)                
            .save();

        _views.item.select_path()
            .begin()
                .widthCropFromFull(18)
                .height(70)
                .top(8)
                .left(8)
                .border("1px solid " + $theme.color.border)
                .round(3)
            .save();

        _views.item.views.top.select_path()
            .begin()
                .widthFull()
                .height(40)
            .save();

        _views.item.views.bottom.select_path()
            .begin()
                .widthCropFromFull(9)
                .height(30)
                .marginLeft(9)
            .save();

        _views.item.views.top.views.left.select_path()
            .begin()
                .widthCropFromFull(80)
                .heightFull()
            .save();

        _views.item.views.top.views.right.select_path()
            .begin()
                .width(80)
                .heightFull()
            .save();

        _views.item.views.top.views.right.views.price.select_path()
            .begin()
                .width(72)
                .height(27)
                .top(10)
                .backgroundColor($theme.color.red)
                .round(5)
            .save();

        _views.item.views.top.views.right.views.price.views.text.select_path()
            .begin()
                .textHeight(27)
            .save();

        _views.item.views.top.views.left.views.origin.select_path()
            .begin()
                .width(40)
                .height(35)
                .marginLeft(7)
            .save();

        _views.item.views.top.views.left.views.arrow.select_path()
            .begin()
                .side(10)
                .marginTop(25)
                .marginHorizontal(5)
            .save();      

        _views.item.views.top.views.left.views.destination.select_path()
            .begin()
                .width(40)
                .height(35)
            .save();

        _views.item.views.top.views.left.views.origin.views.top.select_path()
            .begin()
                .widthFull()
                .height(13)
                .marginTop(6)
            .save();

        _views.item.views.top.views.left.views.origin.views.bottom.select_path()
            .begin()
                .widthFull()
                .height(20)
            .save();

        _views.item.views.top.views.left.views.origin.views.top.views.text.select_path()
            .begin()
                .textHeight(13)
            .save();

        _views.item.views.top.views.left.views.origin.views.bottom.views.text.select_path()
            .begin()
                .textHeight(20)
            .save();

        _views.item.views.top.views.left.views.destination.views.top.select_path()
            .begin()
                .widthFull()
                .height(13)
                .marginTop(6)
            .save();

        _views.item.views.top.views.left.views.destination.views.bottom.select_path()
            .begin()
                .widthFull()
                .height(20)
            .save();

        _views.item.views.top.views.left.views.destination.views.top.views.text.select_path()
            .begin()
                .textHeight(13)
            .save();

        _views.item.views.top.views.left.views.destination.views.bottom.views.text.select_path()
            .begin()
                .textHeight(20)
            .save();

        _views.item.views.bottom.views.text.select_path()
            .begin()
                .height(30)
                .textLineHeight(27)
            .save();

    };

});