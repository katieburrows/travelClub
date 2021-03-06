//linked to resort.html--did alert test

var db = require("../models");
var axios = require("axios");

module.exports = function(app) {
  // GET route for getting all of the resorts
  // alert("ryannnnn said hi")
  // POST route for saving a new resort. You can create a resort using the data on req.body
  app.get("/", function(req, res) {
      db.Resort.findAll({
        order: [['resortName', 'ASC']]
      }).then(function(resorts) {
        res.render("mainpage", {resorts: resorts});
        // res.redirect("/api/resorts");
      })
  });
  
  app.get("/api/resorts", function(req, res) {

      db.Resort.findAll({
        order: [['country', 'ASC']]
      }).then(function(resorts) {
        console.log("All resorts:");
        console.log(resorts);
        res.json(resorts);
        // res.redirect("/api/resorts");
      })

  });

  app.post("/inputresort", function(req, res) {
    //set this route up to post new resorts via a form...in version2
    var data = req.body;
    var urlString = req.body.tourUrl.toString();
    var photos = req.body.photos.toString();

    function slugify(text) {
      return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
    }

    // console.log(photos);
    // console.log(typeof(photos));
    console.log(req.body);

    db.Resort.create({
      resortName: data.resortName,
      propertyOwner: data.propertyOwner,
      geographicalRegion: data.geographicalRegion,
      address: data.address, 
      country: data.country,
      phoneNumber: data.phoneNumber,
      website: data.website, 
      closestAirport: data.closestAirport,
      amenities: data.amenities,
      accommodations: data.accommodations,
      description: data.description,
      photos: photos,
      routeName: slugify(data.resortName),
      tourUrl: urlString

    }).then(function(){
      console.log('data added');
      res.redirect("/inputresort")
      
    });

   
  
  
  });

  app.post("/contact", function(req, res) {
    //set this route up to post new contacts
    let userEmail;
    if(req.body.email === req.body.email2) {
      userEmail = req.body.email
    } else {
      alert('emails dont match');
      return;
    }
    
db.Contact.create({
  name: req.body.name,
  email: userEmail,
  subject: req.body.subject,
  message: req.body.message

}).then(function(){
  console.log('contact added');
  res.redirect('/');
});
  });

  app.get("/resorts/:id", function(req, res) {
      console.log("Testing");
      db.Resort.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(resort) {
        var photoArray = resort.dataValues.photos.split(',');
        var photo = {
          photo1: photoArray[0],
          photo2: photoArray[1],
          photo3: photoArray[2],
          photo4: photoArray[3],
          photo5: photoArray[4],
          photo6: photoArray[5]
        }

        var tourLinksArray = resort.dataValues.tourUrl.split(',');
        var tour = {
          tourlink1: tourLinksArray[0],
          tourlink2: tourLinksArray[1],
          tourlink3: tourLinksArray[2],
          tourlink4: tourLinksArray[3],
          tourlink5: tourLinksArray[4]
        }

        //console.log("Selected resort:");
        console.log('==========' + resort.dataValues.resortName);
        // res.json(resort);
        res.render("resort", {Info: resort.dataValues, Photos: photo, Tours: tour});
        // res.redirect("/api/resorts");
      })

  });
  app.get("/resorts/name/:name", function(req, res) {
    console.log("Testing 2");
    db.Resort.findOne({
      where: {
        routeName: req.params.name
      }
      //
    }).then(function(resort) {
        var photoArray = resort.dataValues.photos.split(',');
        var photo = {
          photo1: photoArray[0],
          photo2: photoArray[1],
          photo3: photoArray[2],
          photo4: photoArray[3],
          photo5: photoArray[4],
          photo6: photoArray[5]
        }

        var tourLinksArray = resort.dataValues.tourUrl.split(',');
        var tour = {
          tourlink1: tourLinksArray[0],
          tourlink2: tourLinksArray[1],
          tourlink3: tourLinksArray[2],
          tourlink4: tourLinksArray[3],
          tourlink5: tourLinksArray[4]
        }

       //console.log("Selected resort:");
        console.log('==========' + resort.dataValues.resortName);
        // res.json(resort);
        res.render("resort", {Info: resort.dataValues, Photos: photo, Tours: tour});
        // res.redirect("/api/resorts");
      })


});

  app.get("/resort/weather", function(req, res) {
    var months = req.query.months.split(",");
    var lat = req.query.lat;
    var lng = req.query.lng;
    
    Promise.all(months.map(function(month) {
      var queryURL = "http://api.wunderground.com/api/49649fd7c8238fd8/planner_" + month + "/q/" + lat + "," + lng + ".json";
      return new Promise(function(resolve, reject) {
        axios.get(queryURL).then(function(item) {
          resolve({...item.data, month: month});
        });
      });
    })).then(function(data) {
      return data.map(function(item) {
        return {
            highTemp: item.trip.temp_high.avg.F,
            lowTemp: item.trip.temp_low.avg.F,
            month: item.month
        }
      });
    }).then(function(data) {
      res.json(data);
    });
    
  });
}
