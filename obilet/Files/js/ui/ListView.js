$js.compile("ListView", View, function ($public, $private, $protected, $self) {

    $private.field.container = null;

    $private.field.model = [];

    $public.void.scrollToTop = function () {        

        $self.get_element().scrollTop = 0;        

    };

    $public.void.update = function () {

        let model = $self.on_model();        

        if (model.length == $self.model.length) {

            $self.model = model;

            for (let index in $self.model) {

                let name = "item_" + index;
                let view = $self.views.container.views[name];

                $self.on_item_feed(view, $self.model[index], index);
                $self.on_item_update(view, $self.model[index], index);

            }

        } else {

            $self.model = model;

            $self.views.container.destroy();

            $self.views.container = new View();

            for (let index in $self.model) {

                let name = "item_" + index;
                let view;
                eval("view = new " + $self.on_item().name + "();");
                view.set_name(name);            
                view.set_index(index);
                view.set_model($self.model[index]);

                $self.on_item_construct(view, $self.model[index], index);
                $self.on_item_flourish(view, $self.model[index], index);
                $self.on_item_feed(view, $self.model[index], index);                

                $self.views.container.views[name] = view;

            }

            $self.views.container
                .begin()
                    .setParent($self)
                    .onLoad(function () {                        

                        for (let index in $self.model) {

                            let name = "item_" + index;
                            let view = $self.views.container.views[name];

                            $self.on_item_ready(view, $self.model[index], index);

                        }

                    })
                .load();

        }

    };

    $protected.override.func.on_key = function () { return "list-view"; };

    $protected.func.on_item = function () { return []; };
    $public.delegate.onItem = function ($delegate) { $self.on_item = $delegate; return $self; };

    $protected.func.on_model = function () { return []; };
    $public.delegate.onModel = function ($delegate) { $self.on_model = $delegate; return $self; };

    $protected.void.on_item_construct = function (_view, _model, _index) { };
    $public.delegate.onConstruct = function ($delegate) { $self.on_item_construct = $delegate; return $self; };

    $protected.void.on_item_flourish = function (_view, _model, _index) { };
    $public.delegate.onFlourish = function ($delegate) { $self.on_item_flourish = $delegate; return $self; };

    $protected.void.on_item_feed = function (_view, _model, _index) { };
    $public.delegate.onFeed = function ($delegate) { $self.on_item_feed = $delegate; return $self; };

    $protected.void.on_item_ready = function (_view, _model, _index) { };
    $public.delegate.onReady = function ($delegate) { $self.on_item_ready = $delegate; return $self; };

    $protected.void.on_item_update = function (_view, _model, _index) { };
    $public.delegate.onUpdate = function ($delegate) { $self.on_item_update = $delegate; return $self; };

    $protected.override.void.on_construct = function (_views) {

        $self.model = $self.on_model();

        _views.container = new View();
        _views.container.set_name("container");

        for (let index in $self.model) {

            let name = "item_" + index;
            let view;
            eval("view = new " + $self.on_item().name + "();");
            view.set_name(name);
            view.set_index(index);
            view.set_model($self.model[index]);

            $self.on_item_construct(view, $self.model[index], index);
            $self.on_item_flourish(view, $self.model[index], index);
            $self.on_item_feed(view, $self.model[index], index);

            _views.container.views[name] = view;

        }

    };

    $protected.override.void.on_ready = function (_views, $ready) {

        for (let index in $self.model) {

            let name = "item_" + index;
            let view = _views.container.views[name];

            $self.on_item_ready(view, $self.model[index], index);

        }

        $ready();

    };

    $protected.extension.void.on_style = function (_views) {

        $self.select_tag()
            .begin()
                .absolute()
                .sideFull()
                .verticalScroll()
            .save();

        _views.container.select_path()
            .begin()
                .relativeLeftFull()
                .widthFull()                
            .save();

    };

});