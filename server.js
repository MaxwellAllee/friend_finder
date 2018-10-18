
var express = require("express");
var path = require("path");
//var htmlRoutes= require("./app/routing/htmlRoutes")
var app = express();
var PORT = process.env.PORT || 3000;
var photoSend
var friendsList = [
    {
        "name": "Nicole",
        "photo": "http://worldartsme.com/images/mario-brothers-princess-clipart-1.jpg",
        "scores": [
            "2",
            "2",
            "3",
            "3",
            "2",
            "3",
            "4",
            "4",
            "3",
            "3"
        ]
    },
    {
        "name": "Parker",
        "photo": "https://mbtskoudsalg.com/images/luigi-face-png-4.png",
        "scores": [
            "3",
            "2",
            "3",
            "3",
            "3",
            "3",
            "5",
            "5",
            "5",
            "3"
        ]
    }
]
var holder


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//var htmlroute= require(".")
app.get(holder)
console.log(holder)
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});
//  app.get("/api/friends", function (req, res) {
//      return res.json(friendsList);
//  });
app.post("/api/friends", function (req, res) {
    var newFriends = req.body;
 
    res.json(newFriends);

    var result = match(newFriends)
    photoSend = friendsList[result]

});
app.get("/api/push/", function (req, res) {
    console.log(photoSend)
    return res.json(photoSend)

});

//   module.exports = htmlRouter()
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
function match(pass) {
    console.log("yo")
    var matchScore 
    var bestMatch = 50
    var bestMatchNum 
    for (let i = 0; i < friendsList.length; i++) {      
        matchScore = 0
        for (let z = 0; z < friendsList[i].scores.length; z++) {           
            matchScore += Math.abs(parseInt(friendsList[i].scores[z]) - parseInt(pass.scores[z]))           
        }
        if (matchScore<bestMatch){
            bestMatch=matchScore
            bestMatchNum=i           
        }
    }

    return bestMatchNum
}