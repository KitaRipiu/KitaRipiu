videos = new Mongo.Collection("videos");

VideoSchema = new SimpleSchema({
    videoId : {
      type  : String,
      label : 'VideoID'
    }
})

videos.attachSchema(VideoSchema);

videos.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

videos.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});
