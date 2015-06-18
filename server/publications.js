Meteor.publishComposite('latestItems', {
    find: function() {
        // Find top ten highest scoring posts
        return Items.find({});
    },
    children: [
        {
            find: function(post) {
                // Find post author. Even though we only want to return
                // one record here, we use "find" instead of "findOne"
                // since this function should return a cursor.
                return Tags.find(
                    { _id: post.tagId },
                    { limit: 1, fields: { name: 1 } });
            }
        }
    ]
});

Meteor.publishComposite('item', function(id){
    return {
        find: function() {
            // Find top ten highest scoring posts
            return Items.find({ _id: id });
        },
        children: [
            {
                find: function(post) {
                    // Find post author. Even though we only want to return
                    // one record here, we use "find" instead of "findOne"
                    // since this function should return a cursor.
                    return Tags.find(
                        { _id: post.tagId },
                        { limit: 1, fields: { name: 1 } });
                }
            }
        ]
    };
});
