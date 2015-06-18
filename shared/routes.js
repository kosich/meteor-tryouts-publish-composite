Router.configure({
      layoutTemplate: 'layout',
});

Router.route('/', {
    name: 'home',
    template: 'itemList',
    waitOn : function () {
        return Meteor.subscribe('latestItems');
    },
    data : function(){
        return {
            items: Items.find()
        };
    }
});

Router.route('/item/:_id', {
    name: 'item',
    template: 'item',
    waitOn : function () {
        return Meteor.subscribe('item', this.params._id);
    },
    data : function(){
        return  Items.findOne(this.params._id);
    }
});
