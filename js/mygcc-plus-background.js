/**
 * mygcc-plus
 * Copyright (c) 2017 David Corbin. All rights reserved.
 */

/*jslint browser: true*/
/*global console, chrome*/


(function () {

    "use strict";

    // If icon is clicked, redirect browser to mygcc homepage
    chrome.browserAction.onClicked.addListener(
        function () {
            chrome.tabs.create({url: "https://my.gcc.edu/"});
        }
    );
}());
