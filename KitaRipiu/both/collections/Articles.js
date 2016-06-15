Articles = new Mongo.Collection("Articles");

Articles.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Articles.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

ArticleSchema = new SimpleSchema({

  _id : {
    type  : String,
    label : 'Article ID'
  },
  userId : {
    type  : String,
    label : 'Author'
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
      if( this.isInsert ) {
        return new Date;
      }
    }
  },
  updated : {
    type  : Date,
    label : 'Date Updated',
    autoValue : () => {
      if( this.isInsert ) {
        return new Date;
      }
    }
  }

});
