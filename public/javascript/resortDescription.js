//linked to resort.html--did alert test
  alert("ryannnnn said hi")

var db = require("../models");

module.exports = function(app) {
  // GET route for getting all of the resorts
  alert("ryannnnn said hi")
  // POST route for saving a new resort. You can create a resort using the data on req.body
  app.get("/api/resorts", function(req, res) {
    console.log("Sarah is making me write: 'hi, Sarah'");
      db.Resort.findAll({}).then(function(newResort) {
        console.log("New resort:");
        console.log(newResort);
        // res.redirect("/api/resorts");
      })

  });
}