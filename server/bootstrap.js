if(Tags.find({}).count()){
    return;
}

var yellowTagId = Tags.insert({
    name : 'Yellow'
});

var redTagId = Tags.insert({
    name : 'Red'
});

var greenTagId = Tags.insert({
    name : 'Green'
});

Items.insert({
    name : 'umbrella',
    tagId: yellowTagId
});

Items.insert({
    name : 'cat',
    tagId: redTagId
});

Items.insert({
    name : 'ball',
    tagId: greenTagId
});
