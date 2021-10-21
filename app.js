const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
let today = new Date();
let items = ["Buy Food","Cook Food","Eat Food"];


app.set("view engine", "ejs");


app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(express.static("public"))

app.get("/", (req,res) => {

  let options = {
    weekday: "long",
    day: "numeric",
    year: "numeric",
    month:"long"
  }
// using Date() created an object and used toLocaleDateString() to format the conventions and coustomize the rendering.

  let day = today.toLocaleDateString("en-US", options)

  res.render("list", {kindOfDay: day, newListItems:items
  }) // When the webpage is tring to render list at this point it doesn't have any value for new list item, every single time we want to render list we have to provide values for all the variables.
}) 



app.post("/",(req,res) => {
  let item = req.body.newItem; // this allows us to get hold of the data we entered in the newItem input
  items.push(item);
  res.redirect("/");
})

app.listen(port, () => console.log( `listening on port ${port} `));