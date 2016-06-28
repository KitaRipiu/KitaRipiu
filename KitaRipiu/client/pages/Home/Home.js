Meteor.subscribe("articles", );

Template.Home.helpers({
  articles: () => {
    return articles.find();
  }
});
