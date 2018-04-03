// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models
var path = require("path")
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the resorts
 app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/homepage.html"));  
  });

    // GET route for getting all of the resorts
    app.get("/contact", function(req, res) {
      res.render("contact");
    });

    app.get("/login", function(req, res) {
      res.render("userauthentication");
    });

    app.get("/inputresort", function(req, res) {
      res.render("inputresort");
    });
 // app.get("/api/resorts", function(req, res){
 //  db.Resort.findAll({}).then(function(resorts) {
 //      res.json(resorts);
 //    })
 // })
 //  // POST route for saving a new resort. You can create a resort using the data on req.body
 //  app.post("/api/resorts", function(req, res) {
 //    console.log("Sarah is making me write: 'hi, Sarah'");
 //      db.Resort.create({
 //        resortName: req.body.resortName,
 //        address: req.body.address
 //          //add in the rest of the key value pairs from resort.js object
 //      }).then(function(newResort) {
 //        console.log("New resort:");
 //        console.log(newResort);
 //        res.redirect("/api/resorts");
 //      })

 //  });
}
//   // DELETE route for deleting resorts. You can access the resort's id in req.params.id
//   app.delete("/api/resorts/:id", function(req, res) {

//   });

//   // PUT route for updating resorts. The updated resorts will be available in req.body
//   app.put("/api/resorts", function(req, res) {

//   });
// };
