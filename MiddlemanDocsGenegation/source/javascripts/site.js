// This is where it all goes :)

function openApp() {
    var urlString = window.location.href;
    var url = new URL(urlString);
    var code = url.searchParams.get("data");

    var deeplinkUrlString = "tyumencity://auth?data=" + code;

    var deeplinkUrl = new URL(deeplinkUrlString);
    window.open(deeplinkUrl);
}

function logOutFromEsia() {
    var linkUrl = new URL("https://www.gosuslugi.ru/auth/logout");
    window.open(linkUrl);
}