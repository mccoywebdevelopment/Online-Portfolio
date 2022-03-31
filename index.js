const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home.ejs");
});

app.listen(PORT, function () {
  console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nListening on Port:" + PORT);
});
