$js.compile("TextView", View, function ($public, $private, $protected, $self) {

    $private.field.text = "";
    $public.void.set_text = function (_text) { $self.text = _text; };

    $private.field.align = "center";
    $public.void.set_align = function (_align) { $self.align = _align; };

    $private.field.weight = "normal";
    $public.void.set_weight = function (_weight) { $self.weight = _weight; };

    $private.field.height = "auto";
    $public.void.set_height = function (_height) { $self.height = _height; };

    $private.field.line_height = "auto";
    $public.void.set_line_height = function (_line_height) { $self.line_height = _line_height; };

    $private.field.size = "medium";
    $public.void.set_size = function (_size) { $self.size = _size; };

    $private.field.color = "gray";
    $public.void.set_color = function (_color) { $self.color = _color; };

    $public.override.void.apply = function () {

        $self.element.innerHTML = $self.text;
        $self.element.setAttribute("o-align", $self.align);
        $self.element.setAttribute("o-weight", $self.weight);
        $self.element.setAttribute("o-size", $self.size);
        $self.element.setAttribute("o-color", $self.color);
        $self.element.setAttribute("o-height", $self.height);
        $self.element.setAttribute("o-line-height", $self.line_height);

    };

    $protected.override.func.on_key = function () { return "text-view"; };

    $protected.override.void.on_compile = function () {

        let e = document.createElement($self.tag);
        e.innerHTML = $self.text;
        e.setAttribute("o-align", $self.align);
        e.setAttribute("o-weight", $self.weight);
        e.setAttribute("o-size", $self.size);
        e.setAttribute("o-color", $self.color);
        e.setAttribute("o-height", $self.height);
        e.setAttribute("o-line-height", $self.line_height);
        return e;

    };

    $protected.extension.void.on_style = function (_views) {

        $self.select_tag()
            .begin()
                .absolute()
                .sideFull()
            .save();

        $css.select($self.tag + "[o-align='left']")
            .begin()
                .textLeft()
            .save();

        $css.select($self.tag + "[o-align='center']")
            .begin()
                .textCenter()
            .save();

        $css.select($self.tag + "[o-align='right']")
            .begin()
                .textRight()
            .save();

        $css.select($self.tag + "[o-weight='light']")
            .begin()
                .textWeight(300)
            .save();

        $css.select($self.tag + "[o-weight='regular']")
            .begin()
                .textWeight(400)
            .save();

        $css.select($self.tag + "[o-weight='medium']")
            .begin()
                .textWeight(500)
            .save();

        $css.select($self.tag + "[o-size='smallest']")
            .begin()
                .textSize(12)
            .save();

        $css.select($self.tag + "[o-size='smaller']")
            .begin()
                .textSize(14)
            .save();

        $css.select($self.tag + "[o-size='small']")
            .begin()
                .textSize(16)
            .save();

        $css.select($self.tag + "[o-size='medium']")
            .begin()
                .textSize(20)
            .save();

        $css.select($self.tag + "[o-size='large']")
            .begin()
                .textSize(24)
            .save();

        $css.select($self.tag + "[o-size='larger']")
            .begin()
                .textSize(30)
            .save();

        $css.select($self.tag + "[o-color='white']")
            .begin()
                .textColor("#FFFFFF")
            .save();

        $css.select($self.tag + "[o-color='gray']")
            .begin()
                .textColor("#666666")
            .save();

        $css.select($self.tag + "[o-color='black']")
            .begin()
                .textColor("#000000")
            .save();

        $css.select($self.tag + "[o-height='shorter']")
            .begin()
                .height(20)
            .save();

        $css.select($self.tag + "[o-height='short']")
            .begin()
                .height(25)
            .save();

        $css.select($self.tag + "[o-height='medium']")
            .begin()
                .height(30)
            .save();

        $css.select($self.tag + "[o-height='tall']")
            .begin()
                .height(40)
            .save();

        $css.select($self.tag + "[o-height='taller']")
            .begin()
                .height(60)
            .save();

        $css.select($self.tag + "[o-height='tallest']")
            .begin()
                .height(80)
            .save();

        $css.select($self.tag + "[o-height='auto']")
            .begin()
                .heightPlain("auto")
            .save();

        $css.select($self.tag + "[o-line-height='shortest']")
            .begin()
                .textLineHeight(14)
            .save();

        $css.select($self.tag + "[o-line-height='shorter']")
            .begin()
                .textLineHeight(20)
            .save();

        $css.select($self.tag + "[o-line-height='short']")
            .begin()
                .textLineHeight(25)
            .save();

        $css.select($self.tag + "[o-line-height='medium']")
            .begin()
                .textLineHeight(30)
            .save();

        $css.select($self.tag + "[o-line-height='tall']")
            .begin()
                .textLineHeight(40)
            .save();

        $css.select($self.tag + "[o-line-height='taller']")
            .begin()
                .textLineHeight(60)
            .save();

        $css.select($self.tag + "[o-line-height='tallest']")
            .begin()
                .textLineHeight(80)
            .save();

    };

});