$js.compile("$fetch", null, function ($public, $private, $protected, $self) {

    var self = this;

    self._index = -1;
    self._queue = [];

    self.begin = function () { self._index = -1; self._queue = []; return self; };

    self.queueStylesheet = function (url) { self._queue.push({ type: "stylesheet", url: url }); return self; };
    self.queueScript = function (url) { self._queue.push({ type: "script", url: url }); return self; };

    self.on_fetch = function () { };
    self.onFetch = function (delegate) { self.on_fetch = delegate; return self; };

    self._on_recurse_end = function () { };
    self._recurse = function () {

        self._index++;

        if (self._index == self._queue.length) {

            self._on_recurse_end();

            return;

        }

        var item = self._queue[self._index];

        eval("self." + item.type + "(item.url, self._recurse);");

    };

    self.stylesheet = function (href, onload) {

        var e = document.createElement("link");
        e.setAttribute("rel", "stylesheet");
        e.setAttribute("href", href);
        e.onload = onload;

        document.head.appendChild(e);

    };

    self.script = function (src, onload) {

        var e = document.createElement("script");
        e.setAttribute("type", "text/javascript");
        e.setAttribute("src", src);
        e.onload = function () {

            this.remove();

            onload();

        };

        document.body.appendChild(e);

    };

    self.module = function (name) {

        var url = "/File/Module/" + version + "/" + name.capitalize();
        self.script(url, self.on_fetch);

    };

    self.start = function () {

        self._on_recurse_end = self.on_fetch;
        self._recurse();

    };

}