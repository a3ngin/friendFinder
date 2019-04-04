var path = require('path');
var friends = require('../data/friends.js');

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        let addFriend = req.body;
        let difference = 900;

        for (i = 0; i < friends.length; i++) {
            let newTotal = 0;
            for (j = 0; j < friends[i].scores.length; j++) {
                newTotal += Math.abs(parseInt(addFriend.scores[j]) - parseInt(friends[i].scores[j]))
            }

            if (newTotal < difference) {
                match = friends[i];
                difference = newTotal;
            }
            friends.push(addFriend)
            res.json(match)
        }

    })

}
