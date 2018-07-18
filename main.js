$(document).ready(function () {
	//feed to parse
	var feed = "https://cors-anywhere.herokuapp.com/http://www.dailyjanakantha.com/rss.php";

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
			 
			var highlights = [];
			$(data).find("item").each(function () {  
				var el = $(this);


				highlights.push('<a href="' + el.find('link').text() + '"><img class="logo" src="./images/cnn.png" />' + el.find('title').text() + '</a>');


			});
			console.log(highlights);
			$('#showingNews').html(highlights);


		}
	}); 

});

function showSetting() {
	console.log('Aya');
}