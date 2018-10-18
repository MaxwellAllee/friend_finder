
var express = require("express");
var path = require("path");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var htmlRoutes= require("./app/routing/htmlRoutes")(app)
var PORT = process.env.PORT || 3000;
var apiRoutes= require("./app/routing/apiRoutes")(app,PORT)
var photoSend
var friendsList = require("./app/data/friend")
var holder


