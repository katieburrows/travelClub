//linked to resort.html--did alert test
  // alert("ryannnnn said hi")

var db = require("../models");

module.exports = function(app) {
  // GET route for getting all of the resorts
  // alert("ryannnnn said hi")
  // POST route for saving a new resort. You can create a resort using the data on req.body
  app.get("/", function(req, res) {
    res.render("mainpage");
  });

  app.get("/contact", function(req, res) {
    res.render("contact");
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
}
