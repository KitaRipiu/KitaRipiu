Meteor.subscribe("articles");

Template.News.helpers({
  article: function(){
    let articleId = FlowRouter.getParam('id');
    return articles.find({_id: articleId});
  }
});
