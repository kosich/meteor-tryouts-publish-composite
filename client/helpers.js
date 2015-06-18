UI.registerHelper('tag', function () {
    return Tags.findOne(this.tagId);
});
