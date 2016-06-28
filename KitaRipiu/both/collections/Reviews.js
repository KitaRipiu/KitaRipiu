reviews = new Mongo.Collection("reviews");

reviewschema = new SimpleSchema({

  userId : {
    type  : String,
    label : 'Author',
    autoValue : () => {
      return this.userId
    }
  },
  productName : {
    type  : String,
    label : 'Product Name'
  },
  specification : {
    type  : Object,
    label : 'Product Specification',
    blackbox: true
  },
  reviewBody : {
    type  : String,
    label : 'Product Review'
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

reviews.attachSchema(reviewschema);


reviews.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

reviews.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});
