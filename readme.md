All 1,453 of facebook's free stickers. (I think. Post an issue if you find anything wrong. I don't doubt there are a lot of mistakes in there somewhere).
The script I used to scrape the urls:

    var a = [];
	$("._5r8i").each(function(){
	    var t = $(this);
	    if(t.css("background-image").match(".*fbcdn-dragon-a\.akamaihd\.net.*")) a.push(t.css("background-image").replace("50x50", "200x200").replace("url", ""));
	})
	console.log(JSON.stringify(a))

And then I used regex in Sublime to remove the parenthesis, and also played with the semantics of sizing (found 960x960 to be the biggest I can request and still get a response) because I was too lazy to do that in code.

The original URLs can be found in `original.json` and the files can be found in `/images` with the animated versions **(coming soon)** and panelled versions.