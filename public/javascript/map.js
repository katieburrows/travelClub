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
            zoom: 4,
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
                success: function(res) {}
            }).then(function(res) {
                // console.log(res)

                $("#weather").html("<h1>Today's High " + res.daily.data[0].apparentTemperatureHigh + " F</h1>");
            })
        }

        var dec = "12011231";
        var jan = "01010131";
        var mar = "03010331";
        var may = "05010531";
        var jun = "06010630";
        var aug = "08010831";
        var sep = "09010930";
        var oct = "10011031";

        var months = [dec, jan, mar, may, jun, aug, sep, oct];
        var highAverage = [];
        var monthHighTemp = {};

        function weatherUnderground() {
            months.forEach(function(month, i, arr) {
                var queryURL = "http://api.wunderground.com/api/49649fd7c8238fd8/planner_" + month + "/q/" + lat + "," + lng + ".json";
                $.ajax({
                    url: queryURL,
                    method: "GET",
                    dataType: 'jsonp',
                    cache: false,
                    success: function(res) {}
                }).then(function(res) {
                    var monthData = {
                        highTemp: res.trip.temp_high.avg.F,
                        lowTemp: res.trip.temp_low.avg.F
                    }
                    monthHighTemp[res.trip.period_of_record.date_start.date.monthname] = monthData;

                    if (i === 7) {
                        averageTemp(monthHighTemp.December.highTemp, monthHighTemp.January.highTemp, "winter");
                        averageTemp(monthHighTemp.March.highTemp, monthHighTemp.May.highTemp, "spring");
                        averageTemp(monthHighTemp.June.highTemp, monthHighTemp.August.highTemp, "summer");
                        averageTemp(monthHighTemp.September.highTemp, monthHighTemp.October.highTemp, "fall");
                        console.log(highAverage);
                        // .push(highAverage);

                        // averageTemp(monthHighTemp.March.highTemp, monthHighTemp.May.highTemp, "average high temp for spring");
                        // averageTemp(monthHighTemp.June.highTemp, monthHighTemp.August.highTemp, "average high temp for summer"); 
                        // averageTemp(monthHighTemp.September.highTemp, monthHighTemp.October.highTemp, "average high temp for fall");
                    }

                })

            });

        }
        console.log(monthHighTemp);

        function averageTemp(num1, num2, season) {
             // $("#weather").append("<h1>Average High during Winter" + res.daily.data[0].apparentTemperatureHigh + " F</h1>");
            const avg = (parseInt(num1) + parseInt(num2)) / 2;
            highAverage.push({
                season: season,
                high: avg
            });
            

        }
        
        currentTempDarkSkyAPI();
        weatherUnderground();
    });
}


