/**
 * Attach listeners to enable/disable page action.
 * Only http(s) protocols are supported.
 */
chrome.runtime.onInstalled.addListener(function () {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {
                        schemes: ['http', 'https']
                    }
                })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

/**
 * Extension's Page Action.
 * Open PageSpeed Insights with current URL address.
 */
chrome.pageAction.onClicked.addListener(function (tab) {
    window.open('https://developers.google.com/speed/pagespeed/insights/?url=' + encodeURIComponent(tab.url));
});
