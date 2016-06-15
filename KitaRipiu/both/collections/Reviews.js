Reviews = new Mongo.Collection("Reviews");

Reviews.allow({
  insert: () => true,
  update: () => true,
  remove: () => true
});
