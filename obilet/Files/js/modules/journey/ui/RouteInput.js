$js.compile("RouteInput", View, function ($public, $private, $protected, $self) {    

    $public.override.void.apply = function () {
        
        $self.views.origin.views.right.views.bottom.views.text.set_text($data.origin.name);
        $self.views.origin.views.right.views.bottom.views.text.apply();

        $self.views.destination.views.right.views.bottom.views.text.set_text($data.destination.name);
        $self.views.destination.views.right.views.bottom.views.text.apply();

    };

    $protected.override.func.on_key = function () { return "route-input"; };

    $protected.override.void.on_construct = function (_views) {

        _views.origin = new RelativeLayout();
        _views.origin.set_name("origin");

        _views.origin.views.left = new RelativeLayout();
        _views.origin.views.left.set_name("origin_left");

        _views.origin.views.left.views.bottom = new AbsoluteLayout();
        _views.origin.views.left.views.bottom.set_name("origin_left_bottom");

        _views.origin.views.right = new RelativeLayout();
        _views.origin.views.right.set_name("origin_right");

        _views.origin.views.right.views.top = new RelativeLayout();
        _views.origin.views.right.views.top.set_name("origin_right_top");

        _views.origin.views.right.views.bottom = new RelativeLayout();
        _views.origin.views.right.views.bottom.set_name("origin_right_bottom");

        _views.destination = new RelativeLayout();
        _views.destination.set_name("destination");

        _views.destination.views.left = new RelativeLayout();
        _views.destination.views.left.set_name("destination_left");

        _views.destination.views.left.views.bottom = new AbsoluteLayout();
        _views.destination.views.left.views.bottom.set_name("destination_left_bottom");

        _views.destination.views.right = new RelativeLayout();
        _views.destination.views.right.set_name("destination_right");

        _views.destination.views.right.views.top = new RelativeLayout();
        _views.destination.views.right.views.top.set_name("destination_right_top");

        _views.destination.views.right.views.bottom = new RelativeLayout();
        _views.destination.views.right.views.bottom.set_name("destination_right_bottom");        

        _views.ring = new AbsoluteLayout();
        _views.ring.set_name("ring");

        _views.swap = new AbsoluteLayout();
        _views.swap.set_name("swap");
    
    };

    $protected.override.void.on_flourish = function (_views) {

        _views.origin.views.left.views.bottom.views.icon = new ImageView();
        _views.origin.views.left.views.bottom.views.icon.set_name("origin_icon");        

        _views.origin.views.right.views.top.views.header = new TextView();
        _views.origin.views.right.views.top.views.header.set_name("origin_header");
        
        _views.origin.views.right.views.bottom.views.text = new TextView();
        _views.origin.views.right.views.bottom.views.text.set_name("origin_text");
         
        _views.destination.views.left.views.bottom.views.icon = new ImageView();
        _views.destination.views.left.views.bottom.views.icon.set_name("destination_icon");
        
        _views.destination.views.right.views.top.views.header = new TextView();
        _views.destination.views.right.views.top.views.header.set_name("destination_header");
        
        _views.destination.views.right.views.bottom.views.text = new TextView();
        _views.destination.views.right.views.bottom.views.text.set_name("destination_text");
        
        _views.swap.views.image = new ImageView();
        _views.swap.views.image.set_name("swap_image");
        
    };

    $protected.extension.void.on_feed = function (_views) {

        _views.origin.views.left.views.bottom.views.icon.set_src($path.ic_origin);

        _views.origin.views.right.views.top.views.header.set_text("Nereden");
        _views.origin.views.right.views.top.views.header.set_family("roboto");
        _views.origin.views.right.views.top.views.header.set_align("left");
        _views.origin.views.right.views.top.views.header.set_weight("medium");
        _views.origin.views.right.views.top.views.header.set_size("smaller");
        _views.origin.views.right.views.top.views.header.set_color("blue"); 

        _views.origin.views.right.views.bottom.views.text.set_text("");
        _views.origin.views.right.views.bottom.views.text.set_family("roboto");
        _views.origin.views.right.views.bottom.views.text.set_align("left");
        _views.origin.views.right.views.bottom.views.text.set_weight("regular");
        _views.origin.views.right.views.bottom.views.text.set_size("small");
        _views.origin.views.right.views.bottom.views.text.set_color("gray");

        _views.destination.views.left.views.bottom.views.icon.set_src($path.ic_destination);

        _views.destination.views.right.views.top.views.header.set_text("Nereye");
        _views.destination.views.right.views.top.views.header.set_family("roboto");
        _views.destination.views.right.views.top.views.header.set_align("left");
        _views.destination.views.right.views.top.views.header.set_weight("medium");
        _views.destination.views.right.views.top.views.header.set_size("smaller");
        _views.destination.views.right.views.top.views.header.set_color("blue");

        _views.destination.views.right.views.bottom.views.text.set_text("");
        _views.destination.views.right.views.bottom.views.text.set_family("roboto");
        _views.destination.views.right.views.bottom.views.text.set_align("left");
        _views.destination.views.right.views.bottom.views.text.set_weight("regular");
        _views.destination.views.right.views.bottom.views.text.set_size("small");
        _views.destination.views.right.views.bottom.views.text.set_color("gray");

        _views.swap.views.image.set_src($path.ic_swap);

        _views.swap.onClick(function () {                        

            let x = $data.origin;
            $data.origin = $data.destination;
            $data.destination = x;

            $self.apply();

        });

        _views.origin.onClick(function () {
            $data.selection = "origin";
            $nav.to("location_selector", "right", "center", "center", "left");
        });

        _views.destination.onClick(function () {
            $data.selection = "destination";
            $nav.to("location_selector", "right", "center", "center", "left");
        });

    };

    $protected.override.void.on_ready = function (_views, $ready) {        

        $bcast.listen("update_route", function () { $self.apply(); });

        $self.apply();

        $ready();

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

        _views.origin.views.left.views.bottom.select_path()
            .begin()
                .widthCentered(14)
                .height(14)
                .bottom(15)
                .opacity(0.25)
            .save();

        _views.origin.views.right.views.top.select_path()
            .begin()
                .widthFull()
                .height(30)
            .save();

        _views.origin.views.right.views.top.views.header.select_path()
            .begin()
                .height(30)
                .textLineHeight(40)
            .save();

        _views.origin.views.right.views.bottom.views.text.select_path()
            .begin()
                .height(34)
                .textLineHeight(28)
            .save();

        _views.origin.views.right.views.bottom.select_path()
            .begin()
                .widthFull()
                .height(34)
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

        _views.destination.views.left.views.bottom.select_path()
            .begin()
                .widthCentered(10)
                .height(14)
                .bottom(15)
                .opacity(0.25)
            .save();

        _views.destination.views.right.views.top.select_path()
            .begin()
                .widthFull()
                .height(30)
            .save();

        _views.destination.views.right.views.bottom.select_path()
            .begin()
                .widthFull()
                .height(34)
            .save();

        _views.destination.views.right.views.top.views.header.select_path()
            .begin()
                .height(30)
                .textLineHeight(40)
            .save();

        _views.destination.views.right.views.bottom.views.text.select_path()
            .begin()
                .height(34)
                .textLineHeight(28)
            .save();

        _views.swap.select_path()
            .begin()
                .side(12)
                .bottom(61)
                .right(36)                
            .save();

        _views.ring.select_path()
            .begin()
                .side(28)
                .bottom(66 - 14)
                .right(28)
                .border("1px solid #000000")
                .opacity(0.6)
                .round(15)
            .save();

    };

});