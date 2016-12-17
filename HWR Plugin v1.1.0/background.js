/*
 * HWReady.it Community Extension
 * Coded by: Luca Galardini
 * www.facebook.com/GalardiniLuca
 *
 *
 * Amazon Reflink Core by Amazing Affiliate Link
 * Copyright (c) 2012-2014 Vincent Perta
 * http://www.linkedin.com/pub/vincent-perta/23/720/4b0
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * http://www.gnu.org/licenses/gpl-3.0.txt 
 */
var _key = "tag";
var _keyGearbest = "gclid";
var _keyInstantGaming = "igr";

var _enableKey 						= "enableKey";
var _enableKeyDefault				= "enableKeyDefault";
var _trackIdKeyAmazon				= "trackIdKeyAmazon";
var _trackIdKeyAmazonDefault 		= "trackIdKeyAmazonDefault";
var _trackIdKeyGearbest 			= "trackIdKeyGearbest";
var _trackIdKeyGearbestDefault 		= "trackIdKeyGearbestDefault";
var _trackIdKeyInstantGaming 		= "trackIdKeyInstantGaming";
var _trackIdKeyInstantGamingDefault = "trackIdKeyInstantGamingDefault";


// store default tracking id value
localStorage[_enableKeyDefault]					= true;
localStorage[_trackIdKeyAmazonDefault]   		= "hardread0c-21";
localStorage[_trackIdKeyGearbestDefault] 		= "CjwKEAiAgavBBRCA7ZbggrLSkUcSJACWDexAPCBbxQ4GhQuzLS4P6H66VFszCG1swoot4oFDpbjVTRoCLdvw_wcB";
localStorage[_trackIdKeyInstantGamingDefault] 	= "HWReady";



// returns the url with key-value pair added to the parameter string.
function insertParam(url, key, value) {
    
	if (url.indexOf('?') != -1) {
		var pairset = url.split('&');

		var i = pairset.length;
		var pair;

		key = escape(key);
		value = escape(value);

		while (i--) {
			pair = pairset[i].split('=');

			if (pair[0] == key) {
				pair[1] = value;
				pairset[i] = pair.join('=');
				break;
			}
		}

		if (i < 0) {
			pairset[pairset.length] = [key, value].join('=');
		}

		return pairset.join('&');
	}
	else {
		return url + '?' + [key, value].join('=');
	}
}


// listen for new web page requests to the amazon.com site
chrome.webRequest.onBeforeRequest.addListener(
    
	function(details) {
		// only for the top-most window (ignore frames)
		if (window == top && localStorage[_enableKey] === 'true') {
			var trackId = localStorage[_trackIdKeyAmazon];

			if (!trackId) {
				trackId = localStorage[_trackIdKeyAmazonDefault];
			}
			// if the url does not already contain the tracking id
			if (details.url.search(trackId) == -1 && 
				details.url.search("ap/signin") == -1 && 
				details.url.search("ap/widget") == -1) {
				// redirect them to the url with the new tracking id parameter inserted
				return { redirectUrl: insertParam(details.url, _key, trackId) };
			}
		}
	},
    { urls: ["http://www.amazon.com/*", "https://www.amazon.com/*", "http://www.amazon.ca/*", "https://www.amazon.ca/*", "http://www.amazon.co.uk/*", "https://www.amazon.co.uk/*", "http://www.amazon.de/*", "https://www.amazon.de/*", "http://www.amazon.es/*", "https://www.amazon.es/*", "http://www.amazon.fr/*", "https://www.amazon.fr/*", "http://www.amazon.it/*", "https://www.amazon.it/*", "http://www.amazon.co.jp/*", "https://www.amazon.co.jp/*", "http://www.amazon.cn/*", "https://www.amazon.cn/*"] }, // only run for requests to the following urls
    ['blocking']    // blocking permission necessary in order to perform the redirect
);




// listen for new web page requests to the gearbest.com site
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        
			// only for the top-most window (ignore frames)
			if (window == top && localStorage[_enableKey]  === 'true') {
		
			
				var trackId = localStorage[_trackIdKeyGearbest];
			
				if (!trackId) {
					trackId = localStorage[_trackIdKeyGearbestDefault];
				}
				// if the url does not already contain the tracking id
				if (details.url.search(trackId) == -1 && 
					/*details.url.search("payment.gearbest") == -1 && 
					details.url.search("login.gearbest") == -1 &&
					details.url.search("support.gearbest") == -1 &&*/  //-------> FORSE NON SERVONO, perchè blocco solo www.gearbest.com
					details.url.search("/about/") == -1) { 
					// redirect them to the url with the new tracking id parameter inserted
					return { redirectUrl: insertParam(details.url, _keyGearbest, trackId) };
				}
			}
		
    },
    { urls: ["http://www.gearbest.com/*", "https://www.gearbest.com/*"] }, // only run for requests to the following urls
    ['blocking']    // blocking permission necessary in order to perform the redirect
);

// listen for new web page requests to the instant-gaming.com site
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        
			// only for the top-most window (ignore frames)
			if (window == top && localStorage[_enableKey]  === 'true') {


				var trackId = localStorage[_trackIdKeyInstantGaming];

				if (!trackId) {
					trackId = localStorage[_trackIdKeyInstantGamingDefault];
				}
				// if the url does not already contain the tracking id
				if (details.url.search(trackId) == -1 ) {
					// redirect them to the url with the new tracking id parameter inserted
					return { redirectUrl: insertParam(details.url, _keyInstantGaming, trackId) };
				}
			}
		
    },
    { urls: ["http://www.instant-gaming.com/*", "https://www.instant-gaming.com/*"] }, // only run for requests to the following urls
    ['blocking']    // blocking permission necessary in order to perform the redirect
);


// listen for new web page requests to the press-start.com site
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
 
			// only for the top-most window (ignore frames)
			if (window == top && localStorage[_enableKey]  === 'true') {


				var trackId = localStorage[_trackIdKeyInstantGaming];

				if (!trackId) {
					trackId = localStorage[_trackIdKeyInstantGamingDefault];
				}
				// if the url does not already contain the tracking id
				if (details.url.search(trackId) == -1 &&
					details.url.search("payment") == -1 ) {
					// redirect them to the url with the new tracking id parameter inserted
					return { redirectUrl: insertParam(details.url, _keyInstantGaming, trackId) };
				}
			}
			
    },
    { urls: ["https://www.press-start.com/*", "https://www.press-start.com/*"] }, // only run for requests to the following urls
    ['blocking']    // blocking permission necessary in order to perform the redirect
);
