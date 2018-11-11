(function (h, a) {
  if (!a.__SV) {
    var b = window; try { var c, l, i, j = b.location, e = j.hash; c = function (a, b) { return (l = a.match(RegExp(b + "=([^&]*)"))) ? l[1] : null }; e && c(e, "state") && (i = JSON.parse(decodeURIComponent(c(e, "state"))), "mpeditor" === i.action && (b.sessionStorage.setItem("_mpcehash", e), history.replaceState(i.desiredHash || "", h.title, j.pathname + j.search))) } catch (m) { } var k, g; window.DATracker = a; a._i = []; a.init = function (b, c, f) {
      function e(b, a) {
        var c = a.split("."); 2 == c.length && (b = b[c[0]], a = c[1]); b[a] = function () {
          b.push([a].concat(Array.prototype.slice.call(arguments,
            0)))
        }
      } var d = a; "undefined" !== typeof f ? d = a[f] = [] : f = "DATracker"; d.people = d.people || []; d.toString = function (b) { var a = "DATracker"; "DATracker" !== f && (a += "." + f); b || (a += " (stub)"); return a }; d.people.toString = function () { return d.toString(1) + ".people (stub)" }; k = "register_attributes register_attributes_once clear_attributes unregister_attributes current_attributes single_pageview disable time_event get_appStatus track set_userId track_pageview track_links track_forms register register_once alias unregister identify login logout signup name_tag set_config reset people.set people.set_once people.set_realname people.set_country people.set_province people.set_city people.set_age people.set_gender people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.set_populationWithAccount  people.set_location people.set_birthday people.set_region people.set_account".split(" ");
      for (g = 0; g < k.length; g++)e(d, k[g]); a._i.push([b, c, f])
    }; a.__SV = 1.2; b = h.createElement("script"); b.type = "text/javascript"; b.async = 0; b.src = "https://hubble-js-bucket.nosdn.127.net/DATracker.globals.1.5.0.js"; c = h.getElementsByTagName("script")[0]; c.parentNode.insertBefore(b, c)
  }
})(document, window.DATracker || []);

// 生产环境：MA-9E66-C87EFACB60BC
// 测试环境：MA-90A9-637B35C71E8B
var DATRACKER_APP_KEY = window.location.protocol === 'https:' ? 'MA-9E66-C87EFACB60BC' : 'MA-90A9-637B35C71E8B'

DATracker.init(DATRACKER_APP_KEY, {
  heatmap: {
    isTrackLink: true
  }
});
