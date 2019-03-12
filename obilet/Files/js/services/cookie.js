$js.compile("$cookie", null, function ($public, $private, $protected, $self) {

    $public.void.store = function (_key, _value) {

        let date = new Date();
        date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));

        let expires = "; expires=" + date.toUTCString();

        document.cookie = _key + "=" + (_value.toString()) + expires + "; path=/";

    };

    $public.func.recall = function (_key) {

        let keyEQ = _key + "=";
        let ca = document.cookie.split(';');

        for (var i = 0; i < ca.length; i++) {

            let c = ca[i];

            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);

            if (c.indexOf(keyEQ) == 0)
                return c.substring(keyEQ.length, c.length);

        }

        return "";

    };

});