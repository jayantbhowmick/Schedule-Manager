const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
const port = 3000;

let items = ["Buy Food","Cook Food","Eat Food"];
let workItems = []  


app.set("view engine", "ejs");


app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(express.static("public"))

app.get("/", (req,res) => {

  let day = date.getDate();
  res.render("list", {listTitle: day, newListItems:items
  }) // When the webpage is tring to render list at this point it doesn't have any value for new list item, every single time we want to render list we have to provide values for all the variables.
}) 

app.get("/work", (req,res) => {
  res.render("list", {listTitle: "Work List", newListItems:workItems})
})

app.get("/about", (req,res) =>{
  res.render("about");
})


app.post("/",(req,res) => {

  let item = req.body.newItem;

  if(req.body.list === "Work List")
  {
    workItems.push(item);
    res.redirect("/work")
  }
   // this allows us to get hold of the data we entered in the newItem input
   else{
    items.push(item);
    res.redirect("/"); 
   }
  
 
})

app.post("/work",(req,res) => {
  let item = req.body.newItem
  workItems.push(item)
  res.redirect("/work")
})

app.listen(port, () => console.log( `listening on port ${port} `));