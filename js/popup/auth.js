var getRequestToken = function() {
    $.ajax({
            url: urls.requestToken,
            type: 'POST',
            dataType: 'json',
            data: {
                "consumer_key": data.consumer_key,
                "redirect_uri": data.redirect_uri
            },
            headers: {
                "X-Accept": "application/json"
            }
        })
        .done(function(res, textStatus, req) {
            console.log("Successfully retrieved request token");
            oAuthRedirect(res.code);
        })
        .fail(function(req) {
            handleError(req);
            printErrorMessage();
        });
};

var oAuthRedirect = function(request_token) {
    var url = "https://getpocket.com/auth/authorize?request_token=";

    url += request_token + "&redirect_uri=" + data.redirect_uri;


    chrome.windows.getCurrent({
        populate: false
    }, function(w) {

        data.currWindow = w;

        chrome.windows.create({
            type: "popup",
            url: url,
            width: 800,
            height: 600
        });

        chrome.runtime.sendMessage({
            "action": "request_token",
            "request_token": request_token
        });
    });
};

$(document).ready(function() {
    $("#login").click(function(e) {
        getRequestToken();
        e.preventDefault();
    });
});