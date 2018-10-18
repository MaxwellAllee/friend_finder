
function htmlRoutes() {
 // Sets up the Express app to handle data parsing
 var app = this.express();
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  //var htmlroute= require(".")

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
  });

  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
  });


}
module.exports = htmlRoutes()