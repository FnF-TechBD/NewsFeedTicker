$(document).ready(function () {
	//feed to parse
	var feed = "http://www.dailyjanakantha.com/rss.php";

	 $.ajax(feed, {
		method: "GET",
		headers: {
			'Access-Control-Allow-Origin': '*'
		},
		crossDomain: true,
		accepts: {
			xml: "application/rss+xml"
		},
		dataType: "xml",
		success: function (data) {
			//Credit: http://stackoverflow.com/questions/10943544/how-to-parse-an-rss-feed-using-javascript
			var highlights = [];
			$(data).find("item").each(function () { // or "item" or whatever suits your feed
				var el = $(this);


				highlights.push('<a href="' + el.find('link').text() + '"><img class="logo" src="./images/cnn.png" />' + el.find('title').text() + '</a>');


			});
			console.log(highlights);
			$('#showingNews').html(highlights);


		}
	}); 

});