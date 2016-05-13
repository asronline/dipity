$(document).ready(function() {
    storage.get({
        "access_token": null,
        "username": null
    }, function(res) {
        var access_token = res.access_token;
        var username = res.username;

        if (access_token == null || username == null) {
            $("#login").show();
        } else {
            $.ajax({
                    url: urls.get,
                    type: 'GET',
                    dataType: 'json',
                    data: {
                        "consumer_key": data.consumer_key,
                        "access_token": access_token
                    },
                    headers: {
                        "X-Accept": "application/json"
                    }
                })
                .done(function(res, textStatus, req) {
                    var unreadItemCount = Object.keys(res.list).length;
                    $("#pocket_info").text(unreadItemCount + " unread pocket items");
                });
        }
    });
});