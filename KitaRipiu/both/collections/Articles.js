Articles = new Mongo.Collection("Articles");

Articles.allow({
  insert: () => true,
  update: () => true,
  remove: () => true
});
