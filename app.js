const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;
const app = express();
var items = ["Buy Food", "Cook Food", "Eat Food" ];
var today = new Date();

app.set("view engine", "ejs");


app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.get("/", (req, res) => {
  
  var options = { weekday:'long',
                  day: 'numeric',
                  month:'long',
                  year:"numeric"};

// using the Date() functions created an object and used toLocaleDateString() to format the conventions and coustomize the rendering.              



    var day = today.toLocaleDateString("en-US", options);

    res.render("list", { 
    kindOfDay: day, newListItems:items
  }); // When the webpage is trying to render list at this point it doesn't have any value for new list item,every single time we want to render list we have to provide values for all the variables 

});

app.post("/", (req,res) => {
   var item = req.body.newItem; // This allows us to get hold of the data we entered in the newItem.
  items.push(item);
   res.redirect("/");
})

app.listen(port, () => console.log(`listening to port ${port} and ${today}`));
