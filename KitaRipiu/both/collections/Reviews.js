Reviews = new Mongo.Collection("Reviews");

Reviews.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Reviews.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

ReviewSchema = new SimpleSchema({

  _id : {
    type  : String,
    label : 'Review ID'
  },
  userId : {
    type  : String,
    label : 'Author'
  },
  productName : {
    type  : String,
    label : 'Product Name'
  },
  specification : {
    type  : Object,
    label : 'Product Specification'
  },
  reviewBody : {
    type  : String,
    label : 'Product Review'
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

Reviews.attachSchema(ReviewSchema);
