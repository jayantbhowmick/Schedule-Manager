const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;
const app = express();

var today = new Date();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  
  var options = { weekday:'long',
                  day: 'numeric',
                  month:'long',
                  year:"numeric"};

// using the Date() functions created an object and used toLocaleDateString() to format the conventions and coustomize the rendering.              



    var day = today.toLocaleDateString("en-US", options);

    res.render("list", { 
    kindOfDay: day 
  });

});

app.listen(port, () => console.log(`listening to port ${port} and ${today}`));
