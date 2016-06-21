import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

  Meteor.publish("articles", () => {
    return articles.find();
  });

});
