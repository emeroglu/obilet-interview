$js.compile("Page", null, function ($public, $private, $protected, $self) {

    $private.field.element = null;
    $private.field.style_elements = [];

    $public.field.views = {};

    $private.field.tag = "";
    $public.func.get_tag = function () { return $self.tag; };

    $private.field.loaded = false;
    $public.func.is_loaded = function () { return $self.loaded; };

    $public.delegate.begin = function () { $self.parent = null; return $self; };

    $private.field.module = {};
    $public.delegate.setModule = function (_module) { $self.module = _module; return $self; };

    $private.void.on_load = function () { };
    $public.delegate.onLoad = function ($delegate) { $self.on_load = $delegate; return $self; };    

    $public.virtual.func.is_initial = function () { return false; };

    $private.field.key = "";
    $protected.virtual.func.on_key = function () { return ""; };

    $protected.virtual.void.on_construct = function (_views) { };
    $protected.virtual.void.on_flourish = function (_views) { };
    $protected.virtual.void.on_feed = function (_views) { };
    $protected.virtual.void.on_style = function (_views) { };
    $protected.virtual.void.on_ready = function (_views, $ready) { $ready(); };

    $protected.virtual.void.on_show = function (_views) { };
    $protected.virtual.void.on_shown = function (_views) { }

    $protected.virtual.void.on_hide = function (_views) { };
    $protected.virtual.void.on_hidden = function (_views) { };

    $protected.virtual.void.on_wide_style = function (_views) { $css.target = $view.page.get_tag() + "-" + $view.port; };
    $protected.virtual.void.on_medium_style = function (_views) { $css.target = $view.page.get_tag() + "-" + $view.port; };
    $protected.virtual.void.on_narrow_style = function (_views) { $css.target = $view.page.get_tag() + "-" + $view.port; };
    $protected.virtual.void.on_tablet_style = function (_views) { $css.target = $view.page.get_tag() + "-" + $view.port; };
    $protected.virtual.void.on_mobile_style = function (_views) { $css.target = $view.page.get_tag() + "-" + $view.port; };

    $protected.virtual.void.on_viewport_changed = function (_port, _views) { };

    $protected.virtual.void.on_wide_viewport = function (_views) { };
    $protected.virtual.void.on_medium_viewport = function (_views) { };
    $protected.virtual.void.on_narrow_viewport = function (_views) { };
    $protected.virtual.void.on_tablet_viewport = function (_views) { };
    $protected.virtual.void.on_mobile_viewport = function (_views) { };

    // Styling

    $private.void.generate_style_element = function (_id) {

        let e = document.createElement("style");
        e.setAttribute("id", _id);
        e.setAttribute("type", "text/css");
        document.head.appendChild(e);

        $self.style_elements.push(e);

    };

    $private.void.listen_viewport = function () {

        $bcast.listen("viewport_new", function () {

            $self.generate_style_element($self.tag + "-" + $view.port);

            eval("$self.on_" + $view.port + "_style($self.views);");

        });

    };

    $private.void.page_styling = function () {

        $bcast.listen("viewport_changed", function () {

            $self.element.setAttribute("o-viewport", $view.port);

            $self.on_viewport_changed($view.port, $self.views);

            eval("$self.on_" + $view.port + "_viewport($self.views);");

        });

        $css.select($self.tag)
            .begin()
                .absolute()
                .sideFull()
                .mask()
                .backgroundColor($theme.color.grayLight)
            .save()
            .state("initial")
                .opacity(1)
                .translateXPercent(0)
            .save()
            .state("center")
                .opacity(1)
                .translateXPercent(0)
            .save()
            .state("left")
                .opacity(0)
                .translateXPercent(-100)
            .save()
            .state("right")
                .opacity(0)
                .translateXPercent(100)
            .save();

    };

    // Recurse

    $private.field.keys = [];

    $private.field.index = 0;
    $private.void.on_recurse_end = function () { };
    $private.void.recurse = function () {

        $self.index++;

        if ($self.index == 0) {
            $self.keys = Object.keys($self.views);
        }

        if ($self.index == $self.keys.length) {
            $self.on_recurse_end();
            return;
        }

        let key = $self.keys[$self.index];
        let view = $self.views[key];

        view
            .begin()
                .setParent($self)
                .onLoad($self.recurse)
            .load();

    };

    // Load

    $public.void.load = function () {        

        $view.page = $self;

        $self.listen_viewport();

        $self.key = $self.on_key();
        $self.tag = "o-" + $self.key + "-page";

        $self.element = document.createElement($self.tag);
        $self.module.container.appendChild($self.element);

        $self.element.className = "o-none o-initial";

        $self.on_construct($self.views);
        $self.on_flourish($self.views);
        $self.on_feed($self.views);

        $self.generate_style_element($self.tag);

        $self.page_styling();

        $self.index = -1;
        $self.on_recurse_end = function () {

            $self.on_style($self.views);            

            $self.on_ready($self.views, $self.on_load);

            $self.loaded = true;

        };
        $self.recurse();

    };

    $public.void.show = function (_from, _to, $on_show) {

        $view.page = $self;        

        $self.element.className = "o-ease-500 o-disp o-" + _from;

        $self.on_show($self.views);

        setTimeout(function () {

            $self.element.className = "o-ease-500 o-disp o-" + _to;

            setTimeout(function () {

                $self.element.className = "o-disp o-" + _to;

                $self.on_shown($self.views);

                $on_show();

            }, 550);

        }, 50);        

    };

    $public.void.hide = function (_from, _to, $on_hide) {

        $self.on_hide($self.views);

        $self.element.className = "o-ease-500 o-disp o-" + _from;

        setTimeout(function () {

            $self.element.className = "o-ease-500 o-disp o-" + _to;

            setTimeout(function () {

                $self.element.className = "o-none o-" + _to;

                $self.on_hidden($self.views);

                $on_hide();

            }, 550);

        }, 50);

    };

});