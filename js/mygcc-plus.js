/**
 * mygcc-plus
 * Copyright (c) 2016 David Corbin. All rights reserved.
 */

(function() {

    // Local storage keys for mygcc username and password
    var local_storage_username_key = "mygccplus_un";
    var local_storage_password_key = "mygccplus_pw";


    // Login to mygcc
    var login = function() {
        // If username and password are in local storage
        if (localStorage.getItem(local_storage_username_key) != null &&
            localStorage.getItem(local_storage_password_key) != null) {

            // If username and password DOM inputs are in DOM
            if (document.getElementsByName("userName")[0] && document.getElementsByName("password")[0]) {
                // Set username and password inputs with username and password already in local storage
                document.getElementsByName("userName")[0].value = localStorage.getItem(local_storage_username_key);
                document.getElementsByName("password")[0].value = localStorage.getItem(local_storage_password_key);

                // Click the submit button
                document.getElementById("btnLogin").click();
            }
        }
        else {
            // Capture click on submit button to get username and password
            document.getElementsByName("btnLogin")[0].addEventListener("click", function() {
                try {
                    localStorage.setItem(local_storage_username_key, document.getElementsByName("userName")[0].value);
                    localStorage.setItem(local_storage_password_key, document.getElementsByName("password")[0].value);
                }
                catch (e) {
                    console.log(e);
                }
                return true;
            });
        }

        // If there is a logout button on the page
        if (document.getElementById("logout")) {
            // Capture click on logout button and remove credentials from local storage
            document.getElementById("logout").addEventListener("click", function() {
                try {
                    localStorage.removeItem(local_storage_username_key);
                    localStorage.removeItem(local_storage_password_key);
                }
                catch (e) {
                    console.log(e);
                }
                return true;
            });
        }

    };


    // Append custom css to page
    var customcss = function() {
        var url = chrome.extension.getURL("css/mygcc-plus.css");
        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = url;
        document.head.appendChild(link);
    };

    
    window.onload = function() {
        // Stop mygcc from scrolling halfway down the page when it loads. Why would you ever want that anyway????
        window.scrollTo(0, 0);

        // Open the "My Courses" sidebar section
        document.querySelector("#myCourses").classList.remove("closed");
        document.querySelector("#myCourses").classList.add("open");

        // Change the favicon to custom icon
        document.querySelector("link[type='image/x-icon']").href = chrome.extension.getURL("icons/mygccplus-icon-128.png");
        
    };
    
    
    login();
    customcss();

})();
