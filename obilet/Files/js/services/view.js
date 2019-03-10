$js.compile("$view", null, function ($public, $private, $protected, $self) {

    $public.field.ports = [];
    $public.field.port = "";

    $public.field.module = {};
    $public.field.page = {};

    $private.field.index = 0;
    $private.field.types = [];
    $private.field.loadeds = [];
    $private.void.recurse = function () {

        $self.index++;

        if ($self.index == $self.types.length) {

        } else {

            let type = $self.types[$self.index];
            let is_loaded = $self.is_loaded(type.name);

            if (is_loaded)
                $self.recurse();
            else {

                let view;
                eval("view = new " + type.name + "();");

                view
                    .begin()
                        .setParent($self.module)
                        .onLoad(function () {
                            $self.recurse();
                        })
                    .sneaky_load();

            }

        }

    };

    $public.void.sneaky_load = function (_types) {        
        
        $self.types = _types;                

        $self.index = -1;
        $self.recurse();

    };

    $public.func.is_loaded = function (name) {
        for (let index in $self.loadeds) {
            if ($self.loadeds[index] == name)
                return true;
        }
        return false;
    };

    $public.void.loaded = function (name) {

        $self.loadeds.push(name);

    };

});