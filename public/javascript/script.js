function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

$("#searchBtn").on("click", function(){

	var queryURL = "/resorts/name/" + slugify($("#resort-search").val());

	$.ajax(queryURL, {
		method: "GET",
	}).then(function(resort){
		console.log(resort);
		document.getElementById("main-content").innerHTML = resort;
		document.body.scrollTop = document.documentElement.scrollTop = 0;



	})
})

// Url input field creater / deleter
var inputTicker = 2;
$("#addUrlInput").on("click", function(){
	$('#inputContainer').append(`<a href="#" id="${inputTicker}" class="deleteInput">X</a><input type="text" id="tourUrl${inputTicker}" name="tourUrl" class="form-control">`);
	inputTicker++;
});

$('a.deleteInput').on('click', function() {
	$(this).remove();
	$(`#tourUrl${this.id}`).remove();
});



// Photo input field creater / deleter
var photoTicker = 2;
$("#addPhotoInput").on("click", function(){
	$('#inputContainerPhotos').append(`<a href="#" id="${photoTicker}" class="deleteInput">X</a><input type="text" id="photos${photoTicker}" name="photos" class="form-control">`);
	photoTicker++;
});

$('a.deleteInput').on('click', function() {
	$(this).remove();
	$(`#tourUrl${this.id}`).remove();
});

$("#submit-btn").on("click", function(){
var form = document.getElementById("resort-input-form");
form.reset();
});

