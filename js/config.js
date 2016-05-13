var urls = {
    "authorize": "https://getpocket.com/v3/oauth/authorize",
    "requestToken": "https://getpocket.com/v3/oauth/request",
    "get": "https://getpocket.com/v3/get",
};

var data = {
    consumer_key: "54352-b59d5316f21522d3e8af4259",
    redirect_uri: "chrome-extension://" + chrome.runtime.id +
        "/src/auth_complete.html"
};

var storage = chrome.storage.local;