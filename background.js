var blockedUrls = ["adsafeprotected.com", "googleads.g.doubleclick.net", "cm.g.doubleclick.net", "ad.doubleclick.net", "pagead2.googlesyndication.com", "securepubads.g.doubleclick.net", "s.yimg.com/dy/ads"];

chrome.webRequest.onBeforeRequest.addListener( function(details) {
    if (blockedUrls.some(function(url) { return details.url.includes(url); })) {
	console.log(details.url);
      return { cancel: true };
    }
  },
{ urls: ["<all_urls>"] },["blocking"]);
