// TODO: 5. You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.

function Friends() {
    // TODO: create some 
    this.friends = [
        {
            "name":"Ahmed",
            "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
            "scores":[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
        },
        {
            "name":"Barock",
            "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
            "scores":[1, 3, 2, 3, 5, 5, 4, 5, 3, 2]
        }
    ];
}

Friends.prototype.findAMatch = function() {
    console.log("Running proprietary algorthm to calculate the perfect match");

    //get the last 'friend'
}

module.exports = Friends;