$js.compile("TextInput", View, function ($public, $private, $protected, $self) {

    $private.field.input = null;

    $private.field.placeholder = "";
    $public.void.set_placeholder = function (_placeholder) { $self.placeholder = _placeholder; };

    $private.field.size = "medium";
    $public.void.set_size = function (_size) { $self.size = _size; };

    $private.void.on_change = function () { };
    $public.delegate.onChange = function ($delegate) { $self.on_change = $delegate; return $self; };

    $private.void.on_key_release = function () { };
    $public.delegate.onKeyRelease = function ($delegate) { $self.on_key_release = $delegate; return $self; };    

    $protected.override.func.on_key = function () { return "text-input"; };

    $protected.override.func.on_compile = function () {

        let e = document.createElement($self.tag);

        $self.input = document.createElement("input");
        $self.input.setAttribute("type", "text");        
        e.appendChild($self.input);

        return e;

    };

    $protected.override.void.on_ready = function (_views, $ready) {

        $self.input.onfocus = function () {

            if ($self.raw() == $self.placeholder)
                $self.text("");

        };

        $self.input.onblur = function () {

            if ($self.raw() == "") {

                $self.text($self.placeholder);
                $self.input.setAttribute("type", "text");

            }

        };

        $self.input.oninput = function () {

            if ($self.raw() == $self.placeholder)
                $self.text("");

            $self.on_change($self.text());

        };

        $self.input.onkeyup = function () {

            $self.on_key_release();

        };

        $self.text($self.placeholder);

        $ready();

    };

    $public.func.raw = function () {
        return $self.input.value;
    };

    $public.void.text = function (_text) {

        if (_text == null)
            return $self.input.value.trim();
        else
            $self.input.value = _text;

    };

    $public.void.reset = function () {

        $self.input.value = $self.placeholder;

    };

    $protected.extension.void.on_style = function (_views) {

        $self.select_tag()
            .begin()
                .absolute()
                .sideFull()                
            .save();

        $css.select("o-text-input input")
            .begin()
                .absolute()
                .widthCropFromFull(10)
                .height(40)
                .textLineHeight(42)
                .left(10)
                .textColor($theme.color.white)
                .textSize(15)
                .paddingTop(5)
                .removeBorder()
                .removeBackground()
                .removeOutline()
            .save();

    };

});