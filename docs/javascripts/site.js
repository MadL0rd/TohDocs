// This is where it all goes :)

function openApp() {
    var urlString = window.location.href;
    var url = new URL(urlString);
    var code = url.searchParams.get("code");

    var deeplinkUrlString = "whynft://auth?code=" + code;

    var deeplinkUrl = new URL(deeplinkUrlString);
    window.open(deeplinkUrl);
}