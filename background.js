var blockedUrls = [
	"adsafeprotected.com", 
	"googleads.g.doubleclick.net", 
	"cm.g.doubleclick.net", 
	"ad.doubleclick.net",
	"pagead2.googlesyndication.com",
	"securepubads.g.doubleclick.net", 
	"s.yimg.com/dy/ads", 
	"ras.yahoo.com/adcount", 
	"s.yimg.com/cb/af/adfeedback", 
	"yahoo.com/admax", 
	"advertising.com/admax", 
	"googletagservices.com/dcm/dcmads.js", 
	"aka-cdn.adtechus.com/media/moat/adtechbrands092348fjlsmdhlwsl239fh3df/moatad.js", 
	"ad.wsod.com"
];

chrome.webRequest.onBeforeRequest.addListener( function(details) {
    if (blockedUrls.some(function(url) { return details.url.includes(url); })) {
	console.log(details.url);
      return { cancel: true };
    }
  },
{ urls: ["<all_urls>"] },["blocking"]);
