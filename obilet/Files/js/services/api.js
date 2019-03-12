$js.compile("$api", null, function ($public, $private, $protected, $self) {

    $public.void.new_session = function ($success, $fail) {

        $http
            .begin()
                .setMethod("POST")
                .setUrl("/auth/new-session")                
                .onSuccess($success)
                .onError($fail)
            .send();

    };

    $public.void.possible_locations = function ($success, $fail) {

        $http
            .begin()
                .setMethod("POST")
                .setUrl("/journey/possible-locations")
                .setData({
                    auth: {
                        "sessionKey": $data.session_key,
                        "deviceKey": $data.device_key
                    },
                    data: null
                })
                .onSuccess($success)
                .onError($fail)
            .send();

    };

    $public.void.journeys = function ($success, $fail) {        

        $http
            .begin()
            .setMethod("POST")
            .setUrl("/journey/journeys")
            .setData({
                auth: {
                    "sessionKey": $data.session_key,
                    "deviceKey": $data.device_key
                },
                data: {
                    "originId": $data.origin.id,
                    "destinationId": $data.destination.id,
                    "date": $data.date.truncate()
                }
            })
            .onSuccess($success)
            .onError($fail)
            .send();

    };

});