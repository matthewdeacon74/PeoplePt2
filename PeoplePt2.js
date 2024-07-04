// Q1
db.people.insertOne({first_name: 'Zaphod', last_name: 'Beeblebrox', email: 'mrprez@hh2g.gal', gender: 'ultramale', age: 36, state: 'drunk', children: [] });

// Q2
db.people.insertOne({first_name: 'Tricia', last_name: 'McMillan', email: 'trillian@hh2g.gal', gender: 'female', age: 28, state: 'in flux', children: [{name: 'Marvin', age: 1682}, {name: 'Random', age: 15}] });

// Q3
db.people.updateOne({first_name: 'Clarence'}, {$set: {state: 'South Dakota'} });

// Q4
db.people.updateOne({first_name: 'Rebecca', last_name: 'Hayes'}, {$set: {email: null} });

// Q5
db.people.updateMany({state: 'Missouri'}, {$inc: {age: 1}});

// Q6
db.people.replaceOne({first_name: 'Jerry', last_name: 'Baker'}, { first_name: "Jerry", last_name: "Baker-Mendez", email: "jerry@classic.ly", gender:"Male", age: 28, state: "Vermont", "children": [{name: "Alan", age: 18}, {name: "Jenny", age: 3}] } );

// Q7
db.people.deleteOne({first_name: 'Wanda', last_name: 'Bowman'});

// Q8
db.people.deleteMany({email: null});

// Q9
db.people.createIndex({'email': 1});

// Q10
db.people.createIndex({'first_name': 1, 'last_name': 1});

// Q11
db.submissions.insertMany([
{title: "The River Bend", upvotes: 10, downvotes: 2, artist: db.people.findOne({first_name: 'Anna', last_name: 'Howard'})._id}, 
{title: "Nine Lives", upvotes: 7, downvotes: 0, artist: db.people.findOne({first_name: 'Scott', last_name: 'Henderson'})._id},
{title: "Star Bright", upvotes: 19, downvotes: 3, artist: db.people.findOne({first_name: 'Andrea', last_name: 'Burke'})._id},
{title: "Why Like This?", upvotes: 1, downvotes: 5, artist: db.people.findOne({first_name: 'Steven', last_name: 'Marshall'})._id},
{title: "Non Sequitur", upvotes: 11, downvotes: 1, artist: db.people.findOne({first_name: 'Gerald', last_name: 'Bailey'})._id}
]);

// Q12
db.submissions.updateOne({title: 'The River Bend'}, {$inc: {upvotes: 2}});

// Q13
db.submissions.updateMany({upvotes: {$gte: 10 }}, {$set: {round2: true}});

