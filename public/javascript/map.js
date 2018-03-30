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
        console.log(response.results[0].geometry.location)
        
        var lat = (response.results[0].geometry.location.lat);
        var lng = (response.results[0].geometry.location.lng);
        

        var uluru = response.results[0].geometry.location;
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
    
//////////////////////////////////////////////////

//Weather API:

    function currentTempDarkSkyAPI() {
        var queryURL = "https://api.darksky.net/forecast/e2e2fb59e599342e0849c78fa14266f3/" + lat + "," + lng + "?exclude=currently,minutely,hourly,alerts"
        $.ajax({
            url: queryURL,
            method: "GET",
            dataType: 'jsonp',
            cache: false,
            success: function(res){}
        }).then(function(res){
            console.log(res)
         
          $(".googleMap").html("<h1>Today's High " + res.daily.data[0].apparentTemperatureHigh + " F</h1>");
        })
    }
            //function for monthly data
            currentTempDarkSkyAPI();
    })
};

//the daily weather
    //need to narrow down the time data point to once a month--thinking from 2015.
        //[YYYY]-[MM]-[DD]T[HH]:[MM]:[SS]
            //timzone after lat/long units.


