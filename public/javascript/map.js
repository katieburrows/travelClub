//deleted alert that was here because it was annoying, this page is connected to homepage.html



//       function initMap() {
//         var uluru = {lat: -25.363, lng: 131.044};
//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 4,
//           center: uluru
//         });
//         var marker = new google.maps.Marker({
//           position: uluru,
//           map: map
//         });
//       }
    


// var authKey = "&key=AIzaSyBm41DL_X-SFXrmzKtqzmy3YR2ZnynXoVE";
// var address = "";
// var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address="
// var completeQueryURL = queryURL + address + authKey;


// $.ajax({
//       url: completeQueryURL,
//       method: "GET"
//     }).then(function(response) {
//       console.log(response);
//     });

// results[]: {
//  types[]: string,
//  formatted_address: string,
//  address_components[]: {
//    short_name: string,
//    long_name: string,
//    postcode_localities[]: string,
//    types[]: string
//  },
//  partial_match: boolean,
//  place_id: string,
//  postcode_localities[]: string,
//  geometry: {
//    location: LatLng,
//    location_type: GeocoderLocationType
//    viewport: LatLngBounds,
//    bounds: LatLngBounds
//  }
// }

    //         var geocoder = new google.maps.Geocoder();
    // var address = "Dublin";

    // geocoder.geocode( { 'address': address}, function(results, status) {

    //   if (status == google.maps.GeocoderStatus.OK) {
    //     var latitude = results[0].geometry.location.lat();
    //     var longitude = results[0].geometry.location.lng();


    //     initialize(latitude,longitude);

    //             } 

    //     }); 


    // function initialize(latitude,longitude) {
    //     var latlng = new google.maps.LatLng(latitude,longitude);

    //     var myOptions = {
    //       zoom: 14,
    //       center: latlng,
    //       mapTypeId: google.maps.MapTypeId.ROADMAP,
    //       mapTypeControl: false
    //     };
    //     var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);

    //     var marker = new google.maps.Marker({
    //       position: latlng, 
    //       map: map, 
    //         title:"location : Dublin"
    //     }); 
    //   }


function initMap() {
    console.log($("#resortAddress").text());

    var authKey = "&key=AIzaSyBm41DL_X-SFXrmzKtqzmy3YR2ZnynXoVE";
    var address = $("#resortAddress").text();
    var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address="
    var completeQueryURL = queryURL + address + authKey;


    $.ajax({
      url: completeQueryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response.results[0].geometry.location);

        var uluru = response.results[0].geometry.location;
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
    });
}



    //   var myLat = (response.data.lat);
    //   var myLon = (response.data.lon);
    //   var myAddress = (response.data.address_1, response.data.city, response.data.state)

    // $("#address").html(myAddress);

    //   function initMap() {
    //     var location = {lat: myLat, lng: myLon};
    //     var map = new google.maps.Map(document.getElementById('map'), {
    //       zoom: 12,
    //       center: location
    //     });
    //     var marker = new google.maps.Marker({
    //       position: location,
    //       map: map
    //     });
    //   }
 
    // // <script async defer
    // // src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAjdLWylDJt3INqwrSBnWkN46bmgGJZRz0&callback=initMap">
    // // </script>
