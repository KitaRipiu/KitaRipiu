Smartphones = new Mongo.Collection("Smartphones");

Smartphones.allow({
  insert: () => true,
  update: () => true,
  remove: () => true
});
