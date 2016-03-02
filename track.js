function scook(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function gcook(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

var fsession = gcook('fsession');
if (!fsession) {
    fsession = '' + new Date();
    scook('fsession', fsession);
}

function guid() {
    function s4() {
	return Math.floor((1 + Math.random()) * 0x10000)
	.toString(16)
	.substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

// anonymous uuid
var uuid = guid();

(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
  a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-74309819-1', 'auto');
ga('set', 'checkProtocolTask', function () {}); 
ga('set', 'dimension1', uuid);
ga('set', 'dimension2', fsession);

ga('send', 'pageview', location.pathname);

