import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

  Meteor.publish("articles", () => {
    return articles.find();
  });

  Meteor.publish("reviews", () => {
    return reviews.find();
  });

});
