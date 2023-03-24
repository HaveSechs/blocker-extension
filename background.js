var blockedUrls = ["adsafeprotected.com"];

chrome.webRequest.onBeforeRequest.addListener( function(details) {
    if (blockedUrls.some(function(url) { return details.url.includes(url); })) {
      return { cancel: true };
    }
  },
{ urls: ["<all_urls>"] },["blocking"]);
