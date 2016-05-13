var request_token = '';
var authorize = function() {

    $.ajax({
            url: urls.authorize,
            type: 'POST',
            dataType: 'json',
            data: {
                "consumer_key": data.consumer_key,
                "code": request_token
            },
            headers: {
                "X-Accept": "application/json"
            }
        })
        .done(function(res, textStatus, req) {

            if (res.access_token) {
                storage.set({
                    "access_token": res.access_token,
                    "username": res.username
                });
            } else {
                console.log('Invalid access_token sent by server. Please ensure that you have granted permissions.');
            }

        });
};

chrome.runtime.onMessage.addListener(function(msg) {
    if (msg.action === 'authorize') {
        authorize();
    } else if (msg.action === 'request_token') {
        request_token = msg.request_token;
    }
});