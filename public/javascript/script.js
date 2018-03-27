function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

$("#searchBtn").on("click", function(event){
	event.preventDefault();

	var queryURL = "/resorts/name/" + slugify($("#resort").val());

	$.ajax(queryURL, {
		method: "GET",
	}).then(function(resort){
		console.log(resort);
		document.getElementById("main-content").innerHTML = resort;
		document.body.scrollTop = document.documentElement.scrollTop = 0;

	})


})