/*
 * HWReady.it Community Extension
 * Coded by: Luca Galardini
 * www.facebook.com/GalardiniLuca
 *
 *Core by:
 *Amazing Affiliate Link
 *http://amaflink.blogspot.com
 *Copyright (c) 2012-2014 Vincent Perta
 *http://www.linkedin.com/pub/vincent-perta/23/720/4b0
 *
 *This program is free software; you can redistribute it and/or
 *modify it under the terms of the GNU General Public License
 *as published by the Free Software Foundation; either version 2
 *of the License, or (at your option) any later version.
 *
 *This program is distributed in the hope that it will be useful,
 *but WITHOUT ANY WARRANTY; without even the implied warranty of
 *MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *GNU General Public License for more details.
 *
 *http://www.gnu.org/licenses/gpl-3.0.txt 
 */
 
var _enableKey 						= "enableKey"
var _enableKeyDefault				= "enableKeyDefault"
var _trackIdKeyAmazon 				= "trackIdKeyAmazon";
var _trackIdKeyAmazonDefault 		= "trackIdKeyAmazonDefault";
var _trackIdKeyGearbest 			= "trackIdKeyGearbest";
var _trackIdKeyGearbestDefault 		= "trackIdKeyGearbestDefault";
var _trackIdKeyInstantGaming 		= "trackIdKeyInstantGaming";
var _trackIdKeyInstantGamingDefault = "trackIdKeyInstantGamingDefault";



function load() {	
	var enableKey 			 = localStorage[_enableKey];
	var trackIdAmazon        = localStorage[_trackIdKeyAmazon];    
	var trackIdGearbest      = localStorage[_trackIdKeyGearbest];    
	var trackIdInstantGaming = localStorage[_trackIdKeyInstantGaming];    
    	
	if(enableKey === 'true') 			 { document.getElementById(_enableKey).checked = true; }
	else if(enableKey === undefined) { document.getElementById(_enableKey).checked = localStorage[_enableKeyDefault];}
	else							 { document.getElementById(_enableKey).checked = false;}
	
    if (trackIdAmazon   		=== undefined) {trackIdAmazon   	 = localStorage[_trackIdKeyAmazonDefault]}
    if (trackIdGearbest 		=== undefined) {trackIdGearbest 	 = localStorage[_trackIdKeyGearbestDefault]} 	   
    if (trackIdInstantGaming    === undefined) {trackIdInstantGaming = localStorage[_trackIdKeyInstantGamingDefault]} 
	
	
	document.getElementById(_trackIdKeyAmazon      ).value = trackIdAmazon;
	document.getElementById(_trackIdKeyGearbest      ).value = trackIdGearbest;
	document.getElementById(_trackIdKeyInstantGaming      ).value = trackIdInstantGaming;
	
	
	document.getElementById(_trackIdKeyAmazon).focus;
}

function restore_default() {
	document.getElementById(_enableKey).checked = true;
	document.getElementById(_trackIdKeyAmazon).value 		= localStorage[_trackIdKeyAmazonDefault];
	document.getElementById(_trackIdKeyGearbest).value 		= localStorage[_trackIdKeyGearbestDefault];
	document.getElementById(_trackIdKeyInstantGaming).value = localStorage[_trackIdKeyInstantGamingDefault];
	
}

function save() {
	localStorage[_enableKey]   = document.getElementById(_enableKey).checked;
    localStorage[_trackIdKeyAmazon] = document.getElementById(_trackIdKeyAmazon).value;
    localStorage[_trackIdKeyGearbest] = document.getElementById(_trackIdKeyGearbest).value;
    localStorage[_trackIdKeyInstantGaming] = document.getElementById(_trackIdKeyInstantGaming).value;
	window.alert ('Modifiche salvate!');    
}

// pass Save button clicks to save_options with a small delay
function clickHandler(e) {
    setTimeout(save(), 100);
}

// if the user pressed enter, imitate the user clicking the Save button.
function keydownHandler(e) {
    var keyCode = e.keyCode;
        
    // enter key code = 13
    if (keyCode == 13) {
        clickHandler();
    }
}

// Add listeners after the DOM has loaded
document.addEventListener('DOMContentLoaded',
    function() {      
        // listen for clicks on the Save button
			//document.querySelector('button').addEventListener('click', clickHandler);
        // listen for keypresses
			//document.addEventListener('keydown', keydownHandler);
        // Run restore options to load saved values.
        load();
		document.getElementById('salva').addEventListener('click', save);
		document.getElementById('reset').addEventListener('click', restore_default);
    }
);
