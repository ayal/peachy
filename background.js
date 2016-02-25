chrome.browserAction.onClicked.addListener(function(activeTab) {
    var newURL = "http://www.peachyyy.com";
    chrome.tabs.create({ url: newURL });
});
