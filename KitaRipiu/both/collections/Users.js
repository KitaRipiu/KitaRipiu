Users = new Mongo.Collection("Users");

Users.allow({
  insert: () => true,
  update: () => true,
  remove: () => true
});
