chrome.browserAction.onClicked.addListener(function(activeTab) {
    var newURL = "http://ayal.github.io/peachy/";
    chrome.tabs.create({ url: newURL });
});

window.get = function(url, cb) {
    $.ajax({
	url: url,
	cache: false,
	dataType: "json",
	success: function (data) {
	    chrome.storage.local.set({'cachedFeed': data}, function () {
		//console.log(data)
	    });
	}
    })
    
}
