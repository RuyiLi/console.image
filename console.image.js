console.image = function (url) {
    var img = new Image();
    img.src = url;
    img.onload = function () {
        var width = img.width,
            height = img.height;
        console.log('%c ', 'font-size:0;background-image:url(\'' + url + '\');padding:' + width / 2 + 'px ' + height / 2 + 'px;');
    };
    img.onerror = console.error;
};