articles = new Mongo.Collection("articles");

articleschema = new SimpleSchema({

  userId : {
    type  : String,
    label : 'Author',
    autoValue : () => {
      return this.userId
    }
  },
  articleTitle : {
    type  : String,
    label : 'Article Title'
  },
  articleBody  : {
    type  : String,
    label : 'Article Body'
  },
  created : {
    type  : Date,
    label : 'Date Created',
    autoValue : () => {
      return new Date();
    }
  },
  updated : {
    type  : Date,
    label : 'Date Updated',
    autoValue : () => {
      return new Date();
    }
  }

});

articles.attachSchema( articleschema );

articles.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

articles.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});
