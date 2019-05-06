// TODO: 5. You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.

function Friends() {
    this.list = [
        {
            "name":"Ahmed",
            "photo":"https://randomuser.me/api/portraits/men/65.jpg",
            "scores":[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
        },
        {
            "name":"Barock",
            "photo":"https://randomuser.me/api/portraits/men/60.jpg",
            "scores":[1, 3, 2, 3, 5, 5, 4, 5, 3, 2]
        },
        {
            "name":"Carla",
            "photo":"https://randomuser.me/api/portraits/women/15.jpg",
            "scores":[3, 2, 3, 5, 5, 4, 5, 3, 2, 1]
        },
        {
            "name":"Dante",
            "photo":"https://randomuser.me/api/portraits/men/23.jpg",
            "scores":[5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
        },
        {
            "name":"Amie",
            "photo":"https://randomuser.me/api/portraits/women/77.jpg",
            "scores":[2, 3, 5, 5, 4, 5, 3, 2, 1, 1]
        }
    ];
}

Friends.prototype.findAMatch = function() {
    
    var smallest_sumOfDifferences = 51;  // find sumOfDifferences small than the current
    var most_compatible_friend = 0;     // index to a person in 'this.list'

    console.log("Running proprietary algorthm to calculate the perfect match");
    //get the last 'friend'
    var reference = this.list[this.list.length-1];

    //we want to find the 'i' that will generate the least sumOfDifferences
    for(let i=0; i< this.list.length-1; i++) {
        var sumOfDifferences = 0;
        console.log(reference);
        console.log(this.list[i]);
        for(let x=0; x< 10; x++){
            //get the difference of each score
            let difference = Math.abs( reference.scores[x] - this.list[i].scores[x]);
            //sum up the differences
            sumOfDifferences += difference;
            console.log(`x:${x} ref:${reference.scores[x]}  list: ${this.list[i].scores[x]}`);
            console.log(`diff: ${difference}`);
        }
        console.log(`sumOfDifferences: ${sumOfDifferences}`);
        // find a smaller value
        if(sumOfDifferences<smallest_sumOfDifferences){
            //save the sumOfDifferences
            smallest_sumOfDifferences = sumOfDifferences;
            //save the index i
            most_compatible_friend = i;
            console.log("found a smaller value ", smallest_sumOfDifferences);
            console.log("most_compatible_friend: ", most_compatible_friend);
        }
    }

    return this.list[most_compatible_friend];
}

Friends.prototype.add = function(friend) {
    this.list.push(friend);
}

Friends.prototype.getList = function() {
    return this.list;
}

module.exports = Friends;