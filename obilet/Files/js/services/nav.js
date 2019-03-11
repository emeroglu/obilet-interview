$js.compile("$nav", null, function ($public, $private, $protected, $self) {

    $public.void.to = function (_page, _enter_from, _enter_to, _exit_from, _exit_to) {

        let fromPage = $view.page;
        let toPage = $view.module.pages[_page];        

        if (toPage.is_loaded()) {

            fromPage.hide(_exit_from, _exit_to, function () { });
            toPage.show(_enter_from, _enter_to, function () {

                $bcast.shout("page_is_in_view");

            });

        } else {

            toPage
                .begin()
                    .setModule($view.module)
                    .onLoad(function () {

                        setTimeout(function () {                        

                            fromPage.hide(_exit_from, _exit_to, function () { });
                            toPage.show(_enter_from, _enter_to, function () {

                                $bcast.shout("page_is_in_view");

                            });

                        }, 250);

                    })
                .load();

        }

    };

});