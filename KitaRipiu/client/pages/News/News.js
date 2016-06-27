Meteor.subscribe("articles");

Template.News.helpers({
  article: () => {
    let articleId = FlowRouter.getParam('id');

    if(articles.find({_id: articleId}).count() === 0){
      FlowRouter.go('/404');
    }
    else {
      return articles.find({_id: articleId});
    }


  }
});
