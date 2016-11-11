(function(){
	// If icon is clicked, redirect browser to mygcc homepage
	chrome.browserAction.onClicked.addListener(
		function() {chrome.tabs.create({url: "https://my.gcc.edu/"});}
	);
}());
