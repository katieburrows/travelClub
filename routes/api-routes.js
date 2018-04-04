//linked to resort.html--did alert test
  // alert("ryannnnn said hi")

var db = require("../models");
var axios = require("axios");

module.exports = function(app) {
  // GET route for getting all of the resorts
  // alert("ryannnnn said hi")
  // POST route for saving a new resort. You can create a resort using the data on req.body
  app.get("/", function(req, res) {
    res.render("mainpage");
  });
  
  app.get("/api/resorts", function(req, res) {
      db.Resort.findAll({
        order: [['location', 'ASC']]
      }).then(function(resorts) {
        console.log("All resorts:");
        console.log(resorts);
        res.json(resorts);
        // res.redirect("/api/resorts");
      })

  });

  app.post("/resorts/add", function(req, res) {
    //set this route up to post new resorts via a form...in version2

  });

  app.get("/resorts/:id", function(req, res) {
      console.log("Testing");
      db.Resort.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(resort) {
        //console.log("Selected resort:");
        console.log(resort.dataValues.resortName);
        // res.json(resort);
        res.render("resort", resort.dataValues );
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
      //console.log("Selected resort:");
      console.log(resort.dataValues.resortName);
      // res.json(resort);
      res.render("resort", resort.dataValues );
      // res.redirect("/api/resorts");
      console.log(resort);
    });

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
