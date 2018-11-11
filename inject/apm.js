// apm监控
window.NRUM = window.NRUM || {};
window.NRUM.config = {
    key: '32fe9c8395ba4b4195f6a845504d4aa5',
    clientStart: +new Date()
};
(function () {
    var n = document.getElementsByTagName('script')[0],
        s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = '//nos.netease.com/apmsdk/napm-web-min-1.1.5.js';
    if ('DEPLOY_ENV_FOR_FE' === 'online') setTimeout(function () {
        n.parentNode.insertBefore(s, n);
    })
})();