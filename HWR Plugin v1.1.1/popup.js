/*
 * HWReady.it Community Extension v1.1.1
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

document.addEventListener('DOMContentLoaded', function () {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        (function () {
            var ln = links[i];
            var location = ln.href;
            ln.onclick = function () {
                chrome.tabs.create({active: true, url: location});
            };
        })();
    }
});