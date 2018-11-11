// 手机适配
(function (win) {
    // 计算、转换布局单位
    var html = document.getElementsByTagName('html')[0],
        timerCount = 0;

    function setFontSize() {
        var winWidth = Math.min(document.documentElement.getBoundingClientRect().width, window.innerWidth);
        if (winWidth > 520) {
            winWidth = 520;
        } else if (!winWidth) {
            if (timerCount < 9) {
                winWidth = 375;
                setTimeout(function () {
                    timerCount++;
                    setFontSize();
                }, 200);
            }
        }
        // 以100px为1rem，designWidth为目前视觉出稿尺寸，可改
        // 适配方式：以视觉稿为基准整屏缩放，(designWidth / 100)rem表示整屏宽
        var designWidth = 750;
        var fontSize = winWidth / (designWidth / 100);
        html.style.fontSize = fontSize + 'px';
    }
    setFontSize();
    win.addEventListener('resize', function () {
        setFontSize();
    });
})(window);
