(function() {
    var updateBaseFontSize = function() {
        var dWidth = document.documentElement.clientWidth;
        var baseFontSize = dWidth * 100 / 750;
        $('html').css('font-size',baseFontSize+'px');
    };

    window.addEventListener('resize', updateBaseFontSize);
    updateBaseFontSize();
})();