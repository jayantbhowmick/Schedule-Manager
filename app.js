const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;
const app = express();
var date = new Date();
var today = date.getDay();
var day = "";

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  switch (today) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default: console.log("some error!!");
      
  }
  res.render("list", { kindOfDay: day }); 
});

app.listen(port, () => console.log(`listening to port ${port} and ${today}`));
