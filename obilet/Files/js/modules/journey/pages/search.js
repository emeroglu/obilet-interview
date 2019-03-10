$js.compile("SearchPage", Page, function ($public, $private, $protected, $self) {

    $public.override.func.is_initial = function () { return true; };

    $protected.override.func.on_key = function () { return "search"; };

    $protected.override.void.on_construct = function (_views) {

        _views.bar = new RelativeLayout();

        _views.route = new RelativeLayout();

        _views.date = new RelativeLayout();

        _views.submit = new RelativeLayout();

        _views.rest = new RelativeLayout();
        _views.rest.views.inset = new AbsoluteLayout();

    };

    $protected.override.void.on_flourish = function (_views) {

        _views.bar.views.bar = new View();

        _views.route.views.input = new RouteInput();

        _views.date.views.input = new DateInput();

        _views.submit.views.button = new Button();

        _views.rest.views.inset.views.text = new TextView();

    };

    $protected.override.void.on_feed = function (_views) {

        _views.submit.views.button.set_text("Bileti Bul");        

        _views.rest.views.inset.views.text.set_align("left");
        _views.rest.views.inset.views.text.set_weight("regular");
        _views.rest.views.inset.views.text.set_size("smallest");
        _views.rest.views.inset.views.text.set_color($theme.color.gray);
        _views.rest.views.inset.views.text.set_line_height("shortest");
        _views.rest.views.inset.views.text.set_text("Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blan");

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

        _views.route.select()
            .begin()
                .widthFull()
                .height(158) 
                .backgroundColor($theme.color.grayLight)
            .save();

        _views.date.select()
            .begin()
                .widthFull()
                .height(92)
                .backgroundColor($theme.color.grayLight)
            .save();

        _views.submit.select()
            .begin()
                .widthFull()
                .height(85)
                .backgroundColor($theme.color.grayLight)
            .save();

        _views.rest.select()
            .begin()
                .widthFull()
                .heightCropFromFull(40 + 158 + 92 + 85)   
                .backgroundColor($theme.color.white)
            .save(); 

        _views.rest.views.inset.select()
            .begin()
                .widthCropFromFull(29 + 20)
                .height(149)
                .top(13)
                .left(29)
                .mask()
            .save(); 

    };

});