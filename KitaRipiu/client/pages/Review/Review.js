Meteor.subscribe("reviews");

Template.Review.helpers({
  reviews: () => {
    return reviews.find();
  }
});
