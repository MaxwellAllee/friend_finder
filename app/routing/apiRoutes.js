

var path = require("path");
var friendsList = require("../data/friend")
module.exports = function (app, PORT) {
 app.get("/api/friends", function (req, res) {
     return res.json(friendsList);
 });
app.post("/api/friends", function (req, res) {
    var newFriends = req.body;
    console.log(newFriends)
    res.json(newFriends);

    var result = match(newFriends)
    photoSend = friendsList[result]
    friendsList.push(newFriends)

});
app.get("/api/push/", function (req, res) {
    
    return res.json(photoSend)

});

//   module.exports = htmlRouter()
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});


}
function match(pass) {
    console.log("yo")
    var matchScore 
    var bestMatch = 50
    var bestMatchNum 
    for (let i = 0; i < friendsList.length; i++) {      
        matchScore = 0
        console.log(parseInt(pass.scores[1])) 
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