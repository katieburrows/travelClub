// 1) Get a var that's an array containing all of the resort names (strings).
// 2) Loop or map through that array and create one option inside the 'data-list' element with that resort's name as the value.
// 3) Render that shit on the page... and triumph!

// (Refer to the codepen above for an example of what your HTML would look like... probably just create the 'label', 'input', and 'data-list' in your HTML, then in your for loop through the resort names, create, populate, and append the new 'option' insider for each resort.)

var resorts = ["Hilton at Borgo alle Vigne", "Marriott's Marbella Beach Resort", "Marriott's Phuket Beach Club", "Grand Lodge on Peak 7", "Marriott's Frenchman's Cove", "Elara, a Hilton Grand Vacations Club"]

function dropdown(){
	for (var i = 0; i < resorts.length; i++)
	$("#resortSearch").append(resorts[i]);
}

dropdown();

//not connectd to main handlebars page