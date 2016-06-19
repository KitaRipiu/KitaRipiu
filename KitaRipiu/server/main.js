import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

  Meteor.publish("articles", function(){
    return articles.find();
  });

});
