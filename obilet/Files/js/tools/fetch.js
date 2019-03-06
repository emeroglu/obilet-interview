$js.compile("$fetch", null, function ($public, $private, $protected, $self) {

    $private.field.index = -1;
    $private.field.queue = [];

    $public.delegate.begin = function () { $self.index = -1; $self.queue = []; return $self; };

    $public.delegate.addStylesheet = function (_url) { $self.queue.push({ type: "stylesheet", url: _url }); return $self };
    $public.delegate.addScript = function (_url) { $self.queue.push({ type: "script", url: _url }); return $self };

    $private.void.on_fetch = function () { };
    $public.delegate.onFetch = function ($delegate) { $self.on_fetch = $delegate; return $self; }

    $private.void.on_recurse_end = function () { };
    $private.void.recurse = function () {

        $self.index++;

        if ($self.index == $self.queue.length) {

            $self.on_recurse_end();

            return;

        } else {

            let item = $self.queue[$self.index];

            eval("$self." + item.type + "(item.url, $self.recurse);");

        }

    };

    $private.void.stylesheet = function (_url, $on_load) {

        let e = document.createElement("link");
        e.setAttribute("rel", "stylesheet");
        e.setAttribute("href", _url);
        e.onload = $on_load;

        document.head.appendChild(e);

    };

    $private.void.script = function (_url, $on_load) {

        let e = document.createElement("script");
        e.setAttribute("type", "text/javascript");
        e.setAttribute("src", _url);
        e.onload = function () {

            this.remove();

            $on_load();

        };

        document.body.appendChild(e);

    };

    $public.void.module = function (_name, $on_load) {

        let url = "/File/Module/" + version + "/" + name.capitalize();
        $self.script(url, $on_load);

    };

    $public.void.start = function () {

        $self.on_recurse_end = $self.on_fetch;
        $self.recurse();

    };

};