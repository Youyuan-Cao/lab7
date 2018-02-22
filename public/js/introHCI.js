'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.likeBtn').click(projectClick);
}

function projectClick(e) {
	console.log("Project clicked");
	e.preventDefault();
	$('likeBtn').css("like","click");
	ga('create','UA-114574875-1','auto');
	ga("send","event",'like','click');
}